module.exports = {

  loadSocketIo: function loadSocketIo(redis) {

    var port = process.env.PORT;
    var app  = require('express')();
    var http = require('http').Server(app);
    var io   = require('socket.io')(http);

    http.listen(Number(port), function(){
      console.log('Express server listening on *:' + port);
    });

    app.get('/status', function(req, res){
      console.log('Returned status check');
      res.send('Realtime relay. Status: up.');
    });

    io.on('connection', function(socket) {

      socket.on('realtime_user_id_connected', function(message) {
        console.log('client connected, user: ' + message.userId);
      });

      socket.on('ping', function(message) {
        socket.emit('pong');
      });

      socket.on('close', function(){
        if (socket.request === undefined) {
          console.log('socket closed, without session');
        } else {
          console.log('socket closed for user: ' + socket.request.session.user_id);
        }
      });

      redis.sub.on('message', function(channel, message) {
        // can't deliver a message to a socket with no handshake(session) established
        if (socket.request === undefined) {
          return;
        }

        var parsedMessage = JSON.parse(message);

        var currentUserId = socket.request.session.user_id;
        var organizationIds = socket.request.session.organization_ids;

        // is this message for an organization we're not part of?
        if(organizationIds.indexOf(parsedMessage.organization_id) == -1) {
          return;
        }

        var userIdsToLog = parsedMessage.user_ids;

        // if user ids were specified, make sure this user is included.
        if (parsedMessage.user_ids !== undefined && parsedMessage.user_ids !== null) {
          if (parsedMessage.user_ids.indexOf(currentUserId) == -1) {
            return;
          }

          delete parsedMessage.user_ids; //don't include these
        }

        console.log('Sending ' + parsedMessage.action + '-' + parsedMessage.target + ' for organization: ' + parsedMessage.organization_id + ', users: ' + userIdsToLog);
        socket.emit('application_update', parsedMessage);
      });

    });

    return io;
  },

  authorize: function authorize(io, redis) {
    io.use(function(socket, next) {

      // one shitshow
      // i bet express has a thing for extracting query params.
      var url = require('url');
      requestUrl = url.parse(socket.request.url);
      requestQuery = requestUrl.query;
      requestParams = requestQuery.split('&');
      params = {};
      for (i=0; i<=requestParams.length; i++){
        param = requestParams[i];
        if (param){
          var p=param.split('=');
          if (p.length != 2) { continue; }
          params[p[0]] = p[1];
        }
      }

      var token = params.token;
      var userId = params.userId;

      // retrieve session from redis using the supplied session token
      redis.getSet.hget([("realtime_session-" + userId), token],
        function(err, session) {
          if (err || !session) {
            console.log('Failed to auth user: ' + userId);
            next(new Error('Unauthorized Realtime user (session)'));
          } else {
            console.log('authorized user: ' + userId);
            socket.request.session = JSON.parse(session);
            next();
          }
        }
      );

    });
  },

  loadRedis: function loadRedis() {
    var redis = require('redis');
    var url = require('url');
    var redisURL = url.parse("redis://127.0.0.1:6379/0");
    var redisSub, redisPub, redisGetSet = null;

    if (! process.env.REDISCLOUD_URL) {
      // use local client if there's no redis cloud url set up.
      redisSub = redis.createClient(redisURL.port, redisURL.hostname);
      redisPub = redis.createClient();
      redisGetSet = redis.createClient();
    } else {
      // use environment redis connection info.
      redisURL = url.parse(process.env.REDISCLOUD_URL);
      redisSub = redis.createClient(redisURL.port, redisURL.hostname, {
        no_ready_check: true
      });
      redisPub = redis.createClient(redisURL.port, redisURL.hostname, {
        no_ready_check: true
      });
      redisGetSet = redis.createClient(redisURL.port, redisURL.hostname, {
        no_ready_check: true
      });
      redisSub.auth(redisURL.auth.split(":")[1]);
      redisPub.auth(redisURL.auth.split(":")[1]);
      redisGetSet.auth(redisURL.auth.split(":")[1]);
    }

    redisSub.subscribe('application_update');

    return {
      pub: redisPub,
      sub: redisSub,
      getSet: redisGetSet,
    };
  },
};
