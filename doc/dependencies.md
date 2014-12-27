# Threadable Realtime

As of December 26, 2014  9:26pm. 10 total

## Summary
* 7 MIT
* 1 Apache 2.0, MIT, New BSD
* 1 BSD
* 1 MIT, New BSD



## Items


<a name="cookie"></a>
### <a href="https://github.com/shtylman/node-cookie">cookie</a> v0.1.2
#### cookie parsing and serialization

<a href="http://opensource.org/licenses/mit-license">MIT</a> whitelisted

# cookie [![Build Status](https://secure.travis-ci.org/defunctzombie/node-cookie.png?branch=master)](http://travis-ci.org/defunctzombie/node-cookie) #

cookie is a basic cookie parser and serializer. It doesn't make assumptions about how you are going to deal with your cookies. It basically just provides a way to read and write the HTTP cookie headers.

See [RFC6265](http://tools.ietf.org/html/rfc6265) for details about the http header for cookies.

## how?

```
npm install cookie
```

```javascript
var cookie = require('cookie');

var hdr = cookie.serialize('foo', 'bar');
// hdr = 'foo=bar';

var cookies = cookie.parse('foo=bar; cat=meow; dog=ruff');
// cookies = { foo: 'bar', cat: 'meow', dog: 'ruff' };
```

## more

The serialize function takes a third parameter, an object, to set cookie options. See the RFC for valid values.

### path
> cookie path

### expires
> absolute expiration date for the cookie (Date object)

### maxAge
> relative max age of the cookie from when the client receives it (seconds)

### domain
> domain for the cookie

### secure
> true or false

### httpOnly
> true or false



<a name="express"></a>
### <a href="http://expressjs.com/">express</a> v4.9.7
#### Fast, unopinionated, minimalist web framework

<a href="http://opensource.org/licenses/mit-license">MIT</a> whitelisted

[![Express Logo](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)](http://expressjs.com/)

  Fast, unopinionated, minimalist web framework for [node](http://nodejs.org).

  [![NPM Version](https://img.shields.io/npm/v/express.svg?style=flat)](https://www.npmjs.org/package/express)
  [![Build Status](https://img.shields.io/travis/strongloop/express.svg?style=flat)](https://travis-ci.org/strongloop/express)
  [![Coverage Status](https://img.shields.io/coveralls/strongloop/express.svg?style=flat)](https://coveralls.io/r/strongloop/express)
  [![Gittip](https://img.shields.io/gittip/dougwilson.svg?style=flat)](https://www.gittip.com/dougwilson/)

```js
var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
```

  **PROTIP** Be sure to read [Migrating from 3.x to 4.x](https://github.com/strongloop/express/wiki/Migrating-from-3.x-to-4.x) as well as [New features in 4.x](https://github.com/strongloop/express/wiki/New-features-in-4.x).

### Installation

```bash
$ npm install express
```

## Quick Start

  The quickest way to get started with express is to utilize the executable [`express(1)`](https://github.com/expressjs/generator) to generate an application as shown below:

  Install the executable. The executable's major version will match Express's:

```bash
$ npm install -g express-generator@4
```

  Create the app:

```bash
$ express /tmp/foo && cd /tmp/foo
```

  Install dependencies:

```bash
$ npm install
```

  Start the server:

```bash
$ npm start
```

## Features

  * Robust routing
  * HTTP helpers (redirection, caching, etc)
  * View system supporting 14+ template engines
  * Content negotiation
  * Focus on high performance
  * Executable for generating applications quickly
  * High test coverage

## Philosophy

  The Express philosophy is to provide small, robust tooling for HTTP servers, making
  it a great solution for single page applications, web sites, hybrids, or public
  HTTP APIs.

  Express does not force you to use any specific ORM or template engine. With support for over
  14 template engines via [Consolidate.js](https://github.com/visionmedia/consolidate.js),
  you can quickly craft your perfect framework.

## More Information

  * [Website and Documentation](http://expressjs.com/) - [[website repo](https://github.com/strongloop/expressjs.com)]
  * [Github Organization](https://github.com/expressjs) for Official Middleware & Modules
  * [#express](https://webchat.freenode.net/?channels=express) on freenode IRC
  * Visit the [Wiki](https://github.com/strongloop/express/wiki)
  * [Google Group](https://groups.google.com/group/express-js) for discussion
  * [Русскоязычная документация](http://jsman.ru/express/)
  * [한국어 문서](http://expressjs.kr) - [[website repo](https://github.com/Hanul/expressjs.kr)]
  * Run express examples [online](https://runnable.com/express)

## Viewing Examples

  Clone the Express repo, then install the dev dependencies to install all the example / test suite dependencies:

```bash
$ git clone git://github.com/strongloop/express.git --depth 1
$ cd express
$ npm install
```

  Then run whichever example you want:

    $ node examples/content-negotiation

  You can also view live examples here:

  <a href="https://runnable.com/express" target="_blank"><img src="https://runnable.com/external/styles/assets/runnablebtn.png" style="width:67px;height:25px;"></a>

## Running Tests

  To run the test suite, first invoke the following command within the repo, installing the development dependencies:

```bash
$ npm install
```

  Then run the tests:

```bash
$ npm test
```

### Contributors

 * Author: [TJ Holowaychuk](https://github.com/visionmedia)
 * Lead Maintainer: [Douglas Christopher Wilson](https://github.com/dougwilson)
 * [All Contributors](https://github.com/strongloop/express/graphs/contributors)

### License

  [MIT](LICENSE)


<a name="forever"></a>
### <a href="https://github.com/nodejitsu/forever">forever</a> v0.10.11
#### A simple CLI tool for ensuring that a given node script runs continuously (i.e. forever)

<a href="http://opensource.org/licenses/mit-license">MIT</a>, <a href="http://opensource.org/licenses/BSD-3-Clause">New BSD</a>, <a href="http://www.apache.org/licenses/LICENSE-2.0.txt">Apache 2.0</a> whitelisted

# forever [![Build Status](https://secure.travis-ci.org/nodejitsu/forever.png)](http://travis-ci.org/nodejitsu/forever)

A simple CLI tool for ensuring that a given script runs continuously (i.e. forever).

## Installation

``` bash
  $ [sudo] npm install forever -g
```

**Note:** If you are using forever _programatically_ you should install [forever-monitor][0].

``` bash
  $ cd /path/to/your/project
  $ [sudo] npm install forever-monitor
```

## Usage
There are two distinct ways to use forever: through the command line interface, or by requiring the forever module in your own code. **Note:** If you are using forever _programatically_ you should install [forever-monitor][0].

### Using forever from the command line
You can use forever to run any kind of script continuously (whether it is written in node.js or not). The usage options are simple:

```
  $ forever --help
  usage: forever [action] [options] SCRIPT [script-options]

  Monitors the script specified in the current process or as a daemon

  actions:
    start               Start SCRIPT as a daemon
    stop                Stop the daemon SCRIPT
    stopall             Stop all running forever scripts
    restart             Restart the daemon SCRIPT
    restartall          Restart all running forever scripts
    list                List all running forever scripts
    config              Lists all forever user configuration
    set <key> <val>     Sets the specified forever config <key>
    clear <key>         Clears the specified forever config <key>
    logs                Lists log files for all forever processes
    logs <script|index> Tails the logs for <script|index>
    columns add <col>   Adds the specified column to the output in `forever list`
    columns rm <col>    Removed the specified column from the output in `forever list`
    columns set <cols>  Set all columns for the output in `forever list`
    cleanlogs           [CAREFUL] Deletes all historical forever log files

  options:
    -m  MAX          Only run the specified script MAX times
    -l  LOGFILE      Logs the forever output to LOGFILE
    -o  OUTFILE      Logs stdout from child script to OUTFILE
    -e  ERRFILE      Logs stderr from child script to ERRFILE
    -p  PATH         Base path for all forever related files (pid files, etc.)
    -c  COMMAND      COMMAND to execute (defaults to node)
    -a, --append     Append logs
    -f, --fifo       Stream logs to stdout
    -n, --number     Number of log lines to print
    --pidFile        The pid file
    --sourceDir      The source directory for which SCRIPT is relative to
    --minUptime      Minimum uptime (millis) for a script to not be considered "spinning"
    --spinSleepTime  Time to wait (millis) between launches of a spinning script.
    --colors         --no-colors will disable output coloring
    --plain          Disable command line colors
    -d, --debug      Forces forever to log debug output
    -v, --verbose    Turns on the verbose messages from Forever
    -s, --silent     Run the child script silencing stdout and stderr
    -w, --watch      Watch for file changes
    --watchDirectory Top-level directory to watch from
    --watchIgnore    To ignore pattern when watch is enabled (multiple option is allowed)
    --killSignal     Support exit signal customization (default is SIGKILL), 
                     used for restarting script gracefully eg. --killSignal=SIGTERM
    -h, --help       You're staring at it

  [Long Running Process]
    The forever process will continue to run outputting log messages to the console.
    ex. forever -o out.log -e err.log my-script.js

  [Daemon]
    The forever process will run as a daemon which will make the target process start
    in the background. This is extremely useful for remote starting simple node.js scripts
    without using nohup. It is recommended to run start with -o -l, & -e.
    ex. forever start -l forever.log -o out.log -e err.log my-daemon.js
        forever stop my-daemon.js
```

There are [several examples][1] designed to test the fault tolerance of forever. Here's a simple usage example:

``` bash
  $ forever -m 5 examples/error-on-timer.js
```

## Using forever module from node.js
In addition to using a Forever object, the forever module also exposes some useful methods. Each method returns an instance of an EventEmitter which emits when complete. See the [forever cli commands][2] for sample usage.

**Remark:** As of `forever@0.6.0` processes will not automatically be available in `forever.list()`. In order to get your processes into `forever.list()` or `forever list` you must instantiate the `forever` socket server:

``` js
  forever.startServer(child);
```

### forever.load (config)
_Synchronously_ sets the specified configuration (config) for the forever module. There are two important options:

* root:    Directory to put all default forever log files
* pidPath: Directory to put all forever *.pid files

### forever.start (file, options)
Starts a script with forever.

### forever.startDaemon (file, options)
Starts a script with forever as a daemon. WARNING: Will daemonize the current process.

### forever.stop (index)
Stops the forever daemon script at the specified index. These indices are the same as those returned by forever.list(). This method returns an EventEmitter that raises the 'stop' event when complete.

### forever.stopAll (format)
Stops all forever scripts currently running. This method returns an EventEmitter that raises the 'stopAll' event when complete.

### forever.list (format, callback)
Returns a list of metadata objects about each process that is being run using forever. This method is synchronous and will return the list of metadata as such. Only processes which have invoked `forever.startServer()` will be available from `forever.list()`

### forever.tail (target, options, callback)
Responds with the logs from the target script(s) from `tail`. There are two important options:

* `length` (numeric): is is used as the `-n` parameter to `tail`.
* `stream` (boolean): is is used as the `-f` parameter to `tail`.

### forever.cleanUp ()
Cleans up any extraneous forever *.pid files that are on the target system. This method returns an EventEmitter that raises the 'cleanUp' event when complete.

### forever.cleanLogsSync (processes)
Removes all log files from the root forever directory that do not belong to current running forever processes.

## Run Tests

``` bash
  $ npm test
```

#### License: MIT
#### Author: [Charlie Robbins](http://github.com/indexzero)
#### Contributors: [Fedor Indutny](http://github.com/indutny), [James Halliday](http://substack.net/), [Charlie McConnell](http://github.com/avianflu), [Maciej Malecki](http://github.com/mmalecki), [John Lancaster](http://jlank.com)

[0]: http://github.com/nodejitsu/forever-monitor
[1]: http://github.com/nodejitsu/forever-monitor/tree/master/examples
[2]: https://github.com/nodejitsu/forever/blob/master/lib/forever/cli.js


<a name="forever-monitor"></a>
### <a href="https://github.com/nodejitsu/forever-monitor">forever-monitor</a> v1.2.4
#### Core forever process monitor

<a href="http://opensource.org/licenses/mit-license">MIT</a>, <a href="http://opensource.org/licenses/BSD-3-Clause">New BSD</a> whitelisted

# forever-monitor [![Build Status](https://secure.travis-ci.org/nodejitsu/forever-monitor.png)](http://travis-ci.org/nodejitsu/forever-monitor)

The core monitoring functionality of forever without the CLI

## Usage
You can also use forever from inside your own node.js code.

``` js
  var forever = require('forever-monitor');

  var child = new (forever.Monitor)('your-filename.js', {
    max: 3,
    silent: true,
    options: []
  });

  child.on('exit', function () {
    console.log('your-filename.js has exited after 3 restarts');
  });
  
  child.start();
```

### Spawning a non-node process
You can spawn non-node processes too. Either set the `command` key in the
`options` hash or pass in an `Array` in place of the `file` argument like this:

``` js
  var forever = require('forever-monitor');
  var child = forever.start([ 'perl', '-le', 'print "moo"' ], {
    max : 1,
    silent : true
  });
```

### Options available when using Forever in node.js
There are several options that you should be aware of when using forever. Most of this configuration is optional.

``` js
  {
    //
    // Basic configuration options
    //
    'silent': false,            // Silences the output from stdout and stderr in the parent process
    'uid': 'your-UID'           // Custom uid for this forever process. (default: autogen)
    'pidFile': 'path/to/a.pid', // Path to put pid information for the process(es) started
    'max': 10,                  // Sets the maximum number of times a given script should run
    'killTree': true            // Kills the entire child process tree on `exit`
    
    //
    // These options control how quickly forever restarts a child process
    // as well as when to kill a "spinning" process
    //
    'minUptime': 2000,     // Minimum time a child process has to be up. Forever will 'exit' otherwise.
    'spinSleepTime': 1000, // Interval between restarts if a child is spinning (i.e. alive < minUptime).
    
    //
    // Command to spawn as well as options and other vars 
    // (env, cwd, etc) to pass along
    //
    'command': 'perl',         // Binary to run (default: 'node')
    'options': ['foo','bar'],  // Additional arguments to pass to the script,
    'sourceDir': 'script/path' // Directory that the source script is in
    
    //
    // Options for restarting on watched files.
    //
    'watch': true              // Value indicating if we should watch files.
    'watchIgnoreDotFiles': null // Whether to ignore file starting with a '.'
    'watchIgnorePatterns': null // Ignore patterns to use when watching files.
    'watchDirectory': null      // Top-level directory to watch from.
    
    //
    // All or nothing options passed along to `child_process.spawn`.
    //
    'spawnWith': {
      customFds: [-1, -1, -1], // that forever spawns.
      setsid: false
    },
    
    //
    // More specific options to pass along to `child_process.spawn` which 
    // will override anything passed to the `spawnWith` option
    //
    'env': { 'ADDITIONAL': 'CHILD ENV VARS' }
    'cwd': '/path/to/child/working/directory'
    
    //
    // Log files and associated logging options for this instance
    //
    'logFile': 'path/to/file', // Path to log output from forever process (when daemonized)
    'outFile': 'path/to/file', // Path to log output from child stdout
    'errFile': 'path/to/file'  // Path to log output from child stderr
  }
```

### Events available when using an instance of Forever in node.js
Each forever object is an instance of the node.js core EventEmitter. There are several core events that you can listen for:

* **error**   _[err]:_             Raised when an error occurs
* **start**   _[process, data]:_   Raised when the target script is first started.
* **stop**    _[process]:_         Raised when the target script is stopped by the user
* **restart** _[forever]:_         Raised each time the target script is restarted
* **exit**    _[forever]:_         Raised when the target script actually exits (permenantly).
* **stdout**  _[data]:_            Raised when data is received from the child process' stdout
* **stderr**  _[data]:_            Raised when data is received from the child process' stderr

### Typical console output

When running the forever CLI tool, it produces debug outputs about which files have changed / how processes exited / etc. To get a similar behaviour with `forever-monitor`, add the following event listeners:

```js
var child = new (forever.Monitor)('your-filename.js');

child.on('watch:restart', function(info) {
    console.error('Restaring script because ' + info.file + ' changed');
});

child.on('restart', function() {
    console.error('Forever restarting script for ' + child.times + ' time');
});

child.on('exit:code', function(code) {
    console.error('Forever detected script exited with code ' + code);
});
```

## Installation

``` bash
  $ npm install forever-monitor
```

## Run Tests

``` bash
  $ npm test
```

#### License: MIT
#### Author: [Charlie Robbins](http://github.com/indexzero)
#### Contributors: [Fedor Indutny](http://github.com/indutny), [James Halliday](http://substack.net/), [Charlie McConnell](http://github.com/avianflu), [Maciej Malecki](http://github.com/mmalecki)


<a name="nodemon"></a>
### <a href="http://nodemon.io">nodemon</a> v1.2.1
#### Simple monitor script for use during development of a node.js app.

<a href="http://opensource.org/licenses/mit-license">MIT</a> whitelisted

![nodemon logo](http://nodemon.io/nodemon.png)

# nodemon

[![Flattr this](http://api.flattr.com/button/flattr-badge-large.png)](http://flattr.com/thing/1211372/remynodemon-on-GitHub)

For use during development of a node.js based application.

nodemon will watch the files in the directory that nodemon was started, and if they change, it will automatically restart your node application.

nodemon does **not** require *any* changes to your code or method of development. nodemon simply wraps your node application and keeps an eye on any files that have changed. Remember that nodemon is a replacement wrapper for `node`, think of it as replacing the word "node" on the command line when you run your script.

[![NPM version](https://badge.fury.io/js/nodemon.svg)](http://badge.fury.io/js/nodemon)
[![Travis Status](https://travis-ci.org/remy/nodemon.svg)](https://travis-ci.org/remy/nodemon)

# Installation

Either through forking or by using [npm](http://npmjs.org) (the recommended way):

    npm install -g nodemon

And nodemon will be installed in to your bin path. Note that as of npm v1, you must explicitly tell npm to install globally as nodemon is a command line utility.

# Usage

nodemon wraps your application, so you can pass all the arguments you would normally pass to your app:

    nodemon [your node app]

For CLI options, use the `-h` (or `--help`) argument:

    nodemon -h

Using nodemon is simple, if my application accepted a host and port as the arguments, I would start it as so:

    nodemon ./server.js localhost 8080

Any output from this script is prefixed with `[nodemon]`, otherwise all output from your application, errors included, will be echoed out as expected.

nodemon also supports running and monitoring [coffee-script](http://jashkenas.github.com/coffee-script/) apps:

    nodemon server.coffee

If no script is given, nodemon will test for a `package.json` file and if found, will run the file associated with the *main* property ([ref](https://github.com/remy/nodemon/issues/14)).

You can also pass the debug flag to node through the command line as you would normally:

    nodemon --debug ./server.js 80

If you have a `package.json` file for your app, you can omit the main script entirely and nodemon will read the `package.json` for the `main` property and use that value as the app.

nodemon will also search for the `scripts.start` property in `package.json` (as of nodemon 1.1.x).

Also check out the [FAQ](https://github.com/remy/nodemon/blob/master/faq.md) or [issues](https://github.com/remy/nodemon/issues) for nodemon.

## Automatic re-running

nodemon was original written to restart hanging processes such as web servers, but now supports apps that cleanly exit. If your script exits cleanly, nodemon will continue to monitor the directory (or directories) and restart the script if there are any changes.

## Manual restarting

Whilst nodemon is running, if you need to manually restart your application, instead of stopping and restart nodemon, you can simply type `rs` with a carriage return, and nodemon will restart your process.

## Config files

nodemon supports local and global configuration files. These are named `nodemon.json` and can be located in the current working directory or in your home directory.

The specificity is as follows, so that a command line argument will always override the config file settings:

- command line arguments
- local config
- global config

A config file can take any of the command line arguments as JSON key values, for example:

    {
      "verbose": true,
      "ignore": ["*.test.js", "fixtures/*"],
      "execMap": {
        "rb": "ruby",
        "pde": "processing --sketch={{pwd}} --run"
      }
    }

The above `nodemon.json` file might be my global config so that I have support for ruby files and processing files, and I can simply run `nodemon demo.pde` and nodemon will automatically know how to run the script even though out of the box support for processing scripts.

A further example of options can be seen in [sample-nodemon.md](https://github.com/remy/nodemon/blob/master/doc/sample-nodemon.md)

*This section needs better documentation, but for now you can also see `nodemon --help config` ([also here](https://github.com/remy/nodemon/blob/master/doc/cli/config.txt))*.

## Using nodemon as a module

Please see [doc/requireable.md](doc/requireable.md)

## Running non-node scripts

nodemon can also be used to execute and monitor other programs. nodemon will read the file extension of the script being run and monitor that extension instead of .js if there's no .nodemonignore:

    nodemon --exec "python -v" ./app.py

Now nodemon will run `app.py` with python in verbose mode (note that if you're not passing args to the exec program, you don't need the quotes), and look for new or modified files with the `.py` extension.

### Default executables

Using the `nodemon.json` config file, you can define your own default executables using the `execMap` property. This is particularly useful if you're working with a language that isn't supported by default by nodemon.

To add support for nodemon to know about the .pl extension (for Perl), the nodemon.json file would add:

    {
      "execMap": {
         "pl": "perl"
      }
    }

Now running the following, nodemon will know to use `perl` as the executable:

    nodemon script.pl

It's generally recommended to use the global `nodemon.json` to add your own `execMap` options. However, if there's a common default that's missing, this can be merged in to the project so that nodemon supports it by default, by changing [default.js](https://github.com/remy/nodemon/blob/master/lib/config/defaults.js) and sending a pull request.

## Monitoring multiple directories

By default nodemon monitors the current working directory. If you want to take control of that option, use the `--watch` option to add specific paths:

    nodemon --watch app --watch libs app/server.js

Now nodemon will only restart if there are changes in the `./app` or `./libs` directory. By default nodemon will traverse sub-directories, so there's no need in explicitly including sub-directories.

## Specifying extension watch list

By default, nodemon looks for files with the `.js`, `.coffee`, and `.litcoffee` extensions. If you use the `--exec` option and monitor `app.py` nodemon will monitor files with the extension of `.py`. However, you can specify your own list with the `-e` (or `--ext`) switch like so:

    nodemon -e js,jade

Now nodemon will restart on any changes to files in the directory (or subdirectories) with the extensions .js, .jade.

## Ignoring files

By default, nodemon will only restart when a `.js` JavaScript file changes. In some cases you will want to ignore some specific files, directories or file patterns, to prevent nodemon from prematurely restarting your application.

This can be done via the command line:

    nodemon --ignore lib/ --ignore tests/

Or specific files can be ignored:

    nodemon --ignore lib/app.js

Patterns can also be ignored (but be sure to quote the arguments):

    nodemon --ignore 'lib/*.js'

Note that by default, nodemon will ignore the `.git`, `node_modules`, `bower_components` and `.sass-cache` directories.

## Delaying restarting

In some situations, you may want to wait until a number of files have changed. The timeout before checking for new file changes is 1 second. If you're uploading a number of files and it's taking some number of seconds, this could cause your app to restart multiple times unnecessarily.

To add an extra throttle, or delay restarting, use the `--delay` command:

    nodemon --delay 10 server.js

For more precision, milliseconds can be specified.  Either as a float:

    nodemon --delay 2.5 server.js

Or using the time specifier (ms):

    nodemon --delay 2500ms server.js

The delay figure is number of seconds (or milliseconds, if specified) to delay before restarting. So nodemon will only restart your app the given number of seconds after the *last* file change.

## Controlling shutdown of your script

nodemon sends a kill signal to your application when it sees a file update. If you need to clean up on shutdown inside your script you can capture the kill signal and handle it yourself.

The following example will listen once for the `SIGUSR2` signal (used by nodemon to restart), run the clean up process and then kill itself for nodemon to continue control:

    process.once('SIGUSR2', function () {
      gracefulShutdown(function () {
        process.kill(process.pid, 'SIGUSR2');
      });
    });

Note that the `process.kill` is *only* called once your shutdown jobs are complete. Hat tip to [Benjie Gillam](http://www.benjiegillam.com/2011/08/node-js-clean-restart-and-faster-development-with-nodemon/) for writing this technique up.

## Pipe output to somewhere else

```js
nodemon({
  script: ...,
  stdout: false // important: this tells nodemon not to output to console
}).on('readable', function() { // the `readable` event indicates that data is ready to pick up
  this.stdout.pipe(fs.createWriteStream('output.txt'));
  this.stderr.pipe(fs.createWriteStream('err.txt'));
});
```

## Using nodemon in your gulp workflow

Check out the [gulp-nodemon](https://github.com/JacksonGariety/gulp-nodemon) plugin to integrate nodemon with the rest of your project's gulp workflow.

## Using nodemon in your Grunt workflow

Check out the [grunt-nodemon](https://github.com/ChrisWren/grunt-nodemon) plugin to integrate nodemon with the rest of your project's grunt workflow.

# License

MIT [http://rem.mit-license.org](http://rem.mit-license.org)

# Contributors

* [remy](https://github.com/remy)
* [ChrisWren](https://github.com/ChrisWren)
* [dylanmcd](https://github.com/dylanmcd)
* [fearphage](https://github.com/fearphage)
* [pasindud](https://github.com/pasindud)
* [coen-hyde](https://github.com/coen-hyde)
* [shawncplus](https://github.com/shawncplus)
* [albertnetymk](https://github.com/albertnetymk)
* [theredcoder](https://github.com/theredcoder)
* [aivopaas](https://github.com/aivopaas)
* [haircuttedfreak](https://github.com/haircuttedfreak)
* [jdavis](https://github.com/jdavis)
* [binarykitchen](https://github.com/binarykitchen)
* [kuba-kubula](https://github.com/kuba-kubula)
* [vadimi](https://github.com/vadimi)
* [mentatxx](https://github.com/mentatxx)
* [bryankaplan](https://github.com/bryankaplan)
* [lordnox](https://github.com/lordnox)
* [jaredhanson](https://github.com/jaredhanson)
* [skaushik92](https://github.com/skaushik92)
* [twolfson](https://github.com/twolfson)
* [chrisklaiber](https://github.com/chrisklaiber)
* [wasche](https://github.com/wasche)
* [nuxlli](https://github.com/nuxlli)
* [mvasilkov](https://github.com/mvasilkov)
* [morganrallen](https://github.com/morganrallen)
* [DennisKehrig](https://github.com/DennisKehrig)
* [sahat](https://github.com/sahat)
* [didoarellano](https://github.com/didoarellano)
* [arielyang](https://github.com/arielyang)
* [ZombieHippie](https://github.com/ZombieHippie)
* [mikemaccana](https://github.com/mikemaccana)
* [paularmstrong](https://github.com/paularmstrong)
* [sainaen](https://github.com/sainaen)
* [matthew-andrews](https://github.com/matthew-andrews)
* [SlexAxton](https://github.com/SlexAxton)
* [davedoesdev](https://github.com/davedoesdev)
* [rps](https://github.com/rps)
* [pauloadaoag](https://github.com/pauloadaoag)
* [focusaurus](https://github.com/focusaurus)


<a name="pg"></a>
### <a href="http://github.com/brianc/node-postgres">pg</a> v2.11.0
#### PostgreSQL client - pure javascript & libpq with the same API

<a href="http://opensource.org/licenses/mit-license">MIT</a> whitelisted

#node-postgres

[![Build Status](https://secure.travis-ci.org/brianc/node-postgres.png?branch=master)](http://travis-ci.org/brianc/node-postgres)

PostgreSQL client for node.js.  Pure JavaScript and native libpq bindings.

## Installation

    npm install pg
       
## Examples

### Simple

Connect to a postgres instance, run a query, and disconnect.

```javascript
var pg = require('pg'); 
//or native libpq bindings
//var pg = require('pg').native

var conString = "postgres://postgres:1234@localhost/postgres";

var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT NOW() AS "theTime"', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].theTime);
    //output: Tue Jan 15 2013 19:12:47 GMT-600 (CST)
    client.end();
  });
});

```

### Client pooling

Typically you will access the PostgreSQL server through a pool of clients.  node-postgres ships with a built in pool to help get you up and running quickly.

```javascript
var pg = require('pg');
var conString = "postgres://postgres:1234@localhost/postgres";

pg.connect(conString, function(err, client, done) {
  if(err) {
  	return console.error('error fetching client from pool', err);
  }
  client.query('SELECT $1::int AS numbor', ['1'], function(err, result) {
    //call `done()` to release the client back to the pool
    done();
    
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].numbor);
    //output: 1
  });
});

```

## Documentation

Documentation is a work in progress primarily taking place on the github WIKI

### [Documentation](https://github.com/brianc/node-postgres/wiki)

## Native Bindings

node-postgres contains a pure JavaScript driver and also exposes JavaScript bindings to libpq.  You can use either interface.  I personally use the JavaScript bindings as the are quite fast, and I like having everything implemented in JavaScript.

To use native libpq bindings replace `require('pg')` with `require('pg').native`.  If you __do not__ need or want the native bindings at all, consider using [node-postgres-pure](https://github.com/brianc/node-postgres-pure) instead which does not include them.

The two share the same interface so __no other code changes should be required__.  If you find yourself having to change code other than the require statement when switching from `pg` to `pg.native` or `pg.js`, please report an issue.

## Features

* pure JavaScript client and native libpq bindings share _the same api_
* optional connection pooling
* extensible js<->postgresql data-type coercion
* supported PostgreSQL features
  * parameterized queries
  * named statements with query plan caching
  * async notifications with `LISTEN/NOTIFY`
  * bulk import & export with `COPY TO/COPY FROM`

## Contributing

__I love contributions.__

You are welcome contribute via pull requests.  If you need help getting the tests running locally feel free to email me or gchat me.

I will __happily__ accept your pull request if it:
- _has tests_
- looks reasonable
- does not break backwards compatibility
- satisfies jshint

Information about the testing processes is in the [wiki](https://github.com/brianc/node-postgres/wiki/Testing).

If you need help or have questions about constructing a pull request I'll be glad to help out as well.

## Support

If at all possible when you open an issue please provide
- version of node
- version of postgres
- smallest possible snippet of code to reproduce the problem

Usually I'll pop the code into the repo as a test.  Hopefully the test fails.  Then I make the test pass.  Then everyone's happy!


If you need help or run into _any_ issues getting node-postgres to work on your system please report a bug or contact me directly.  I am usually available via google-talk at my github account public email address.

I usually tweet about any important status updates or changes to node-postgres.  
Follow me [@briancarlson](https://twitter.com/briancarlson) to keep up to date.


## Extras

node-postgres is by design _low level_ with the bare minimum of abstraction.  These might help out:

- https://github.com/brianc/node-pg-query-stream
- https://github.com/brianc/node-pg-cursor
- https://github.com/brianc/node-pg-copy-streams
- https://github.com/grncdr/node-any-db
- https://github.com/brianc/node-sql


## Production Use
* [yammer.com](http://www.yammer.com)
* [bayt.com](http://bayt.com)
* [bitfloor.com](https://bitfloor.com)
* [Vendly](http://www.vend.ly)
* [SaferAging](http://www.saferaging.com)
* [CartoDB](http://www.cartodb.com)
* [Heap](https://heapanalytics.com)
* [zoomsquare](http://www.zoomsquare.com/)
* [WhenToManage](http://www.whentomanage.com)

_If you use node-postgres in production and would like your site listed here, fork & add it._


## License

Copyright (c) 2010 Brian Carlson (brian.m.carlson@gmail.com)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.


<a name="redis"></a>
### <a href="https://github.com/mranney/node_redis">redis</a> v0.7.3
#### Redis client library

<a href="http://opensource.org/licenses/mit-license">MIT</a> whitelisted

redis - a node.js redis client
===========================

This is a complete Redis client for node.js.  It supports all Redis commands, including many recently added commands like EVAL from
experimental Redis server branches.


Install with:

    npm install redis

Pieter Noordhuis has provided a binding to the official `hiredis` C library, which is non-blocking and fast.  To use `hiredis`, do:

    npm install hiredis redis

If `hiredis` is installed, `node_redis` will use it by default.  Otherwise, a pure JavaScript parser will be used.

If you use `hiredis`, be sure to rebuild it whenever you upgrade your version of node.  There are mysterious failures that can
happen between node and native code modules after a node upgrade.


## Usage

Simple example, included as `examples/simple.js`:

```js
    var redis = require("redis"),
        client = redis.createClient();

    // if you'd like to select database 3, instead of 0 (default), call
    // client.select(3, function() { /* ... */ });

    client.on("error", function (err) {
        console.log("Error " + err);
    });

    client.set("string key", "string val", redis.print);
    client.hset("hash key", "hashtest 1", "some value", redis.print);
    client.hset(["hash key", "hashtest 2", "some other value"], redis.print);
    client.hkeys("hash key", function (err, replies) {
        console.log(replies.length + " replies:");
        replies.forEach(function (reply, i) {
            console.log("    " + i + ": " + reply);
        });
        client.quit();
    });
```

This will display:

    mjr:~/work/node_redis (master)$ node example.js
    Reply: OK
    Reply: 0
    Reply: 0
    2 replies:
        0: hashtest 1
        1: hashtest 2
    mjr:~/work/node_redis (master)$


## Performance

Here are typical results of `multi_bench.js` which is similar to `redis-benchmark` from the Redis distribution.
It uses 50 concurrent connections with no pipelining.

JavaScript parser:

    PING: 20000 ops 42283.30 ops/sec 0/5/1.182
    SET: 20000 ops 32948.93 ops/sec 1/7/1.515
    GET: 20000 ops 28694.40 ops/sec 0/9/1.740
    INCR: 20000 ops 39370.08 ops/sec 0/8/1.269
    LPUSH: 20000 ops 36429.87 ops/sec 0/8/1.370
    LRANGE (10 elements): 20000 ops 9891.20 ops/sec 1/9/5.048
    LRANGE (100 elements): 20000 ops 1384.56 ops/sec 10/91/36.072

hiredis parser:

    PING: 20000 ops 46189.38 ops/sec 1/4/1.082
    SET: 20000 ops 41237.11 ops/sec 0/6/1.210
    GET: 20000 ops 39682.54 ops/sec 1/7/1.257
    INCR: 20000 ops 40080.16 ops/sec 0/8/1.242
    LPUSH: 20000 ops 41152.26 ops/sec 0/3/1.212
    LRANGE (10 elements): 20000 ops 36563.07 ops/sec 1/8/1.363
    LRANGE (100 elements): 20000 ops 21834.06 ops/sec 0/9/2.287

The performance of `node_redis` improves dramatically with pipelining, which happens automatically in most normal programs.


### Sending Commands

Each Redis command is exposed as a function on the `client` object.
All functions take either an `args` Array plus optional `callback` Function or
a variable number of individual arguments followed by an optional callback.
Here is an example of passing an array of arguments and a callback:

    client.mset(["test keys 1", "test val 1", "test keys 2", "test val 2"], function (err, res) {});

Here is that same call in the second style:

    client.mset("test keys 1", "test val 1", "test keys 2", "test val 2", function (err, res) {});

Note that in either form the `callback` is optional:

    client.set("some key", "some val");
    client.set(["some other key", "some val"]);

If the key is missing, reply will be null (probably):

    client.get("missingkey", function(err, reply) {
        // reply is null when the key is missing
        console.log(reply);
    });

For a list of Redis commands, see [Redis Command Reference](http://redis.io/commands)

The commands can be specified in uppercase or lowercase for convenience.  `client.get()` is the same as `client.GET()`.

Minimal parsing is done on the replies.  Commands that return a single line reply return JavaScript Strings,
integer replies return JavaScript Numbers, "bulk" replies return node Buffers, and "multi bulk" replies return a
JavaScript Array of node Buffers.  `HGETALL` returns an Object with Buffers keyed by the hash keys.

# API

## Connection Events

`client` will emit some events about the state of the connection to the Redis server.

### "ready"

`client` will emit `ready` a connection is established to the Redis server and the server reports
that it is ready to receive commands.  Commands issued before the `ready` event are queued,
then replayed just before this event is emitted.

### "connect"

`client` will emit `connect` at the same time as it emits `ready` unless `client.options.no_ready_check`
is set.  If this options is set, `connect` will be emitted when the stream is connected, and then
you are free to try to send commands.

### "error"

`client` will emit `error` when encountering an error connecting to the Redis server.

Note that "error" is a special event type in node.  If there are no listeners for an
"error" event, node will exit.  This is usually what you want, but it can lead to some
cryptic error messages like this:

    mjr:~/work/node_redis (master)$ node example.js

    node.js:50
        throw e;
        ^
    Error: ECONNREFUSED, Connection refused
        at IOWatcher.callback (net:870:22)
        at node.js:607:9

Not very useful in diagnosing the problem, but if your program isn't ready to handle this,
it is probably the right thing to just exit.

`client` will also emit `error` if an exception is thrown inside of `node_redis` for whatever reason.
It would be nice to distinguish these two cases.

### "end"

`client` will emit `end` when an established Redis server connection has closed.

### "drain"

`client` will emit `drain` when the TCP connection to the Redis server has been buffering, but is now
writable.  This event can be used to stream commands in to Redis and adapt to backpressure.  Right now,
you need to check `client.command_queue.length` to decide when to reduce your send rate.  Then you can
resume sending when you get `drain`.

### "idle"

`client` will emit `idle` when there are no outstanding commands that are awaiting a response.

## redis.createClient(port, host, options)

Create a new client connection.  `port` defaults to `6379` and `host` defaults
to `127.0.0.1`.  If you have `redis-server` running on the same computer as node, then the defaults for
port and host are probably fine.  `options` in an object with the following possible properties:

* `parser`: which Redis protocol reply parser to use.  Defaults to `hiredis` if that module is installed.
This may also be set to `javascript`.
* `return_buffers`: defaults to `false`.  If set to `true`, then all replies will be sent to callbacks as node Buffer
objects instead of JavaScript Strings.
* `detect_buffers`: default to `false`. If set to `true`, then replies will be sent to callbacks as node Buffer objects
if any of the input arguments to the original command were Buffer objects.
This option lets you switch between Buffers and Strings on a per-command basis, whereas `return_buffers` applies to
every command on a client.
* `socket_nodelay`: defaults to `true`. Whether to call setNoDelay() on the TCP stream, which disables the
Nagle algorithm on the underlying socket.  Setting this option to `false` can result in additional throughput at the
cost of more latency.  Most applications will want this set to `true`.
* `no_ready_check`: defaults to `false`. When a connection is established to the Redis server, the server might still
be loading the database from disk.  While loading, the server not respond to any commands.  To work around this,
`node_redis` has a "ready check" which sends the `INFO` command to the server.  The response from the `INFO` command
indicates whether the server is ready for more commands.  When ready, `node_redis` emits a `ready` event.
Setting `no_ready_check` to `true` will inhibit this check.
* `enable_offline_queue`: defaults to `true`. By default, if there is no active
connection to the redis server, commands are added to a queue and are executed
once the connection has been established. Setting `enable_offline_queue` to
`false` will disable this feature and the callback will be execute immediately
with an error, or an error will be thrown if no callback is specified.

```js
    var redis = require("redis"),
        client = redis.createClient(null, null, {detect_buffers: true});

    client.set("foo_rand000000000000", "OK");

    // This will return a JavaScript String
    client.get("foo_rand000000000000", function (err, reply) {
        console.log(reply.toString()); // Will print `OK`
    });

    // This will return a Buffer since original key is specified as a Buffer
    client.get(new Buffer("foo_rand000000000000"), function (err, reply) {
        console.log(reply.toString()); // Will print `<Buffer 4f 4b>`
    });
    client.end();
```

`createClient()` returns a `RedisClient` object that is named `client` in all of the examples here.

## client.auth(password, callback)

When connecting to Redis servers that require authentication, the `AUTH` command must be sent as the
first command after connecting.  This can be tricky to coordinate with reconnections, the ready check,
etc.  To make this easier, `client.auth()` stashes `password` and will send it after each connection,
including reconnections.  `callback` is invoked only once, after the response to the very first
`AUTH` command sent.
NOTE: Your call to `client.auth()` should not be inside the ready handler. If
you are doing this wrong, `client` will emit an error that looks
something like this `Error: Ready check failed: ERR operation not permitted`.

## client.end()

Forcibly close the connection to the Redis server.  Note that this does not wait until all replies have been parsed.
If you want to exit cleanly, call `client.quit()` to send the `QUIT` command after you have handled all replies.

This example closes the connection to the Redis server before the replies have been read.  You probably don't
want to do this:

```js
    var redis = require("redis"),
        client = redis.createClient();

    client.set("foo_rand000000000000", "some fantastic value");
    client.get("foo_rand000000000000", function (err, reply) {
        console.log(reply.toString());
    });
    client.end();
```

`client.end()` is useful for timeout cases where something is stuck or taking too long and you want
to start over.

## Friendlier hash commands

Most Redis commands take a single String or an Array of Strings as arguments, and replies are sent back as a single String or an Array of Strings.
When dealing with hash values, there are a couple of useful exceptions to this.

### client.hgetall(hash)

The reply from an HGETALL command will be converted into a JavaScript Object by `node_redis`.  That way you can interact
with the responses using JavaScript syntax.

Example:

    client.hmset("hosts", "mjr", "1", "another", "23", "home", "1234");
    client.hgetall("hosts", function (err, obj) {
        console.dir(obj);
    });

Output:

    { mjr: '1', another: '23', home: '1234' }

### client.hmset(hash, obj, [callback])

Multiple values in a hash can be set by supplying an object:

    client.HMSET(key2, {
        "0123456789": "abcdefghij", // NOTE: the key and value must both be strings
        "some manner of key": "a type of value"
    });

The properties and values of this Object will be set as keys and values in the Redis hash.

### client.hmset(hash, key1, val1, ... keyn, valn, [callback])

Multiple values may also be set by supplying a list:

    client.HMSET(key1, "0123456789", "abcdefghij", "some manner of key", "a type of value");


## Publish / Subscribe

Here is a simple example of the API for publish / subscribe.  This program opens two
client connections, subscribes to a channel on one of them, and publishes to that
channel on the other:

```js
    var redis = require("redis"),
        client1 = redis.createClient(), client2 = redis.createClient(),
        msg_count = 0;

    client1.on("subscribe", function (channel, count) {
        client2.publish("a nice channel", "I am sending a message.");
        client2.publish("a nice channel", "I am sending a second message.");
        client2.publish("a nice channel", "I am sending my last message.");
    });

    client1.on("message", function (channel, message) {
        console.log("client1 channel " + channel + ": " + message);
        msg_count += 1;
        if (msg_count === 3) {
            client1.unsubscribe();
            client1.end();
            client2.end();
        }
    });

    client1.incr("did a thing");
    client1.subscribe("a nice channel");
```

When a client issues a `SUBSCRIBE` or `PSUBSCRIBE`, that connection is put into "pub/sub" mode.
At that point, only commands that modify the subscription set are valid.  When the subscription
set is empty, the connection is put back into regular mode.

If you need to send regular commands to Redis while in pub/sub mode, just open another connection.

## Pub / Sub Events

If a client has subscriptions active, it may emit these events:

### "message" (channel, message)

Client will emit `message` for every message received that matches an active subscription.
Listeners are passed the channel name as `channel` and the message Buffer as `message`.

### "pmessage" (pattern, channel, message)

Client will emit `pmessage` for every message received that matches an active subscription pattern.
Listeners are passed the original pattern used with `PSUBSCRIBE` as `pattern`, the sending channel
name as `channel`, and the message Buffer as `message`.

### "subscribe" (channel, count)

Client will emit `subscribe` in response to a `SUBSCRIBE` command.  Listeners are passed the
channel name as `channel` and the new count of subscriptions for this client as `count`.

### "psubscribe" (pattern, count)

Client will emit `psubscribe` in response to a `PSUBSCRIBE` command.  Listeners are passed the
original pattern as `pattern`, and the new count of subscriptions for this client as `count`.

### "unsubscribe" (channel, count)

Client will emit `unsubscribe` in response to a `UNSUBSCRIBE` command.  Listeners are passed the
channel name as `channel` and the new count of subscriptions for this client as `count`.  When
`count` is 0, this client has left pub/sub mode and no more pub/sub events will be emitted.

### "punsubscribe" (pattern, count)

Client will emit `punsubscribe` in response to a `PUNSUBSCRIBE` command.  Listeners are passed the
channel name as `channel` and the new count of subscriptions for this client as `count`.  When
`count` is 0, this client has left pub/sub mode and no more pub/sub events will be emitted.

## client.multi([commands])

`MULTI` commands are queued up until an `EXEC` is issued, and then all commands are run atomically by
Redis.  The interface in `node_redis` is to return an individual `Multi` object by calling `client.multi()`.

```js
    var redis  = require("./index"),
        client = redis.createClient(), set_size = 20;

    client.sadd("bigset", "a member");
    client.sadd("bigset", "another member");

    while (set_size > 0) {
        client.sadd("bigset", "member " + set_size);
        set_size -= 1;
    }

    // multi chain with an individual callback
    client.multi()
        .scard("bigset")
        .smembers("bigset")
        .keys("*", function (err, replies) {
            // NOTE: code in this callback is NOT atomic
            // this only happens after the the .exec call finishes.
            client.mget(replies, redis.print);
        })
        .dbsize()
        .exec(function (err, replies) {
            console.log("MULTI got " + replies.length + " replies");
            replies.forEach(function (reply, index) {
                console.log("Reply " + index + ": " + reply.toString());
            });
        });
```

`client.multi()` is a constructor that returns a `Multi` object.  `Multi` objects share all of the
same command methods as `client` objects do.  Commands are queued up inside the `Multi` object
until `Multi.exec()` is invoked.

You can either chain together `MULTI` commands as in the above example, or you can queue individual
commands while still sending regular client command as in this example:

```js
    var redis  = require("redis"),
        client = redis.createClient(), multi;

    // start a separate multi command queue
    multi = client.multi();
    multi.incr("incr thing", redis.print);
    multi.incr("incr other thing", redis.print);

    // runs immediately
    client.mset("incr thing", 100, "incr other thing", 1, redis.print);

    // drains multi queue and runs atomically
    multi.exec(function (err, replies) {
        console.log(replies); // 101, 2
    });

    // you can re-run the same transaction if you like
    multi.exec(function (err, replies) {
        console.log(replies); // 102, 3
        client.quit();
    });
```

In addition to adding commands to the `MULTI` queue individually, you can also pass an array
of commands and arguments to the constructor:

```js
    var redis  = require("redis"),
        client = redis.createClient(), multi;

    client.multi([
        ["mget", "multifoo", "multibar", redis.print],
        ["incr", "multifoo"],
        ["incr", "multibar"]
    ]).exec(function (err, replies) {
        console.log(replies);
    });
```


## Monitor mode

Redis supports the `MONITOR` command, which lets you see all commands received by the Redis server
across all client connections, including from other client libraries and other computers.

After you send the `MONITOR` command, no other commands are valid on that connection.  `node_redis`
will emit a `monitor` event for every new monitor message that comes across.  The callback for the
`monitor` event takes a timestamp from the Redis server and an array of command arguments.

Here is a simple example:

```js
    var client  = require("redis").createClient(),
        util = require("util");

    client.monitor(function (err, res) {
        console.log("Entering monitoring mode.");
    });

    client.on("monitor", function (time, args) {
        console.log(time + ": " + util.inspect(args));
    });
```

# Extras

Some other things you might like to know about.

## client.server_info

After the ready probe completes, the results from the INFO command are saved in the `client.server_info`
object.

The `versions` key contains an array of the elements of the version string for easy comparison.

    > client.server_info.redis_version
    '2.3.0'
    > client.server_info.versions
    [ 2, 3, 0 ]

## redis.print()

A handy callback function for displaying return values when testing.  Example:

```js
    var redis = require("redis"),
        client = redis.createClient();

    client.on("connect", function () {
        client.set("foo_rand000000000000", "some fantastic value", redis.print);
        client.get("foo_rand000000000000", redis.print);
    });
```

This will print:

    Reply: OK
    Reply: some fantastic value

Note that this program will not exit cleanly because the client is still connected.

## redis.debug_mode

Boolean to enable debug mode and protocol tracing.

```js
    var redis = require("redis"),
        client = redis.createClient();

    redis.debug_mode = true;

    client.on("connect", function () {
        client.set("foo_rand000000000000", "some fantastic value");
    });
```

This will display:

    mjr:~/work/node_redis (master)$ node ~/example.js
    send command: *3
    $3
    SET
    $20
    foo_rand000000000000
    $20
    some fantastic value

    on_data: +OK

`send command` is data sent into Redis and `on_data` is data received from Redis.

## client.send_command(command_name, args, callback)

Used internally to send commands to Redis.  For convenience, nearly all commands that are published on the Redis
Wiki have been added to the `client` object.  However, if I missed any, or if new commands are introduced before
this library is updated, you can use `send_command()` to send arbitrary commands to Redis.

All commands are sent as multi-bulk commands.  `args` can either be an Array of arguments, or omitted.

## client.connected

Boolean tracking the state of the connection to the Redis server.

## client.command_queue.length

The number of commands that have been sent to the Redis server but not yet replied to.  You can use this to
enforce some kind of maximum queue depth for commands while connected.

Don't mess with `client.command_queue` though unless you really know what you are doing.

## client.offline_queue.length

The number of commands that have been queued up for a future connection.  You can use this to enforce
some kind of maximum queue depth for pre-connection commands.

## client.retry_delay

Current delay in milliseconds before a connection retry will be attempted.  This starts at `250`.

## client.retry_backoff

Multiplier for future retry timeouts.  This should be larger than 1 to add more time between retries.
Defaults to 1.7.  The default initial connection retry is 250, so the second retry will be 425, followed by 723.5, etc.

### Commands with Optional and Keyword arguments

This applies to anything that uses an optional `[WITHSCORES]` or `[LIMIT offset count]` in the [redis.io/commands](http://redis.io/commands) documentation.

Example:
```js
var args = [ 'myzset', 1, 'one', 2, 'two', 3, 'three', 99, 'ninety-nine' ];
client.zadd(args, function (err, response) {
    if (err) throw err;
    console.log('added '+response+' items.');

    // -Infinity and +Infinity also work
    var args1 = [ 'myzset', '+inf', '-inf' ];
    client.zrevrangebyscore(args1, function (err, response) {
        if (err) throw err;
        console.log('example1', response);
        // write your code here
    });

    var max = 3, min = 1, offset = 1, count = 2;
    var args2 = [ 'myzset', max, min, 'WITHSCORES', 'LIMIT', offset, count ];
    client.zrevrangebyscore(args2, function (err, response) {
        if (err) throw err;
        console.log('example2', response);
        // write your code here
    });
});
```

## TODO

Better tests for auth, disconnect/reconnect, and all combinations thereof.

Stream large set/get values into and out of Redis.  Otherwise the entire value must be in node's memory.

Performance can be better for very large values.

I think there are more performance improvements left in there for smaller values, especially for large lists of small values.

## How to Contribute
- open a pull request and then wait for feedback (if
  [DTrejo](http://github.com/dtrejo) does not get back to you within 2 days,
  comment again with indignation!)

## Contributors
Some people have have added features and fixed bugs in `node_redis` other than me.

Ordered by date of first contribution.
[Auto-generated](http://github.com/dtrejo/node-authors) on Wed Jul 25 2012 19:14:59 GMT-0700 (PDT).

- [Matt Ranney aka `mranney`](https://github.com/mranney)
- [Tim-Smart aka `tim-smart`](https://github.com/tim-smart)
- [Tj Holowaychuk aka `visionmedia`](https://github.com/visionmedia)
- [rick aka `technoweenie`](https://github.com/technoweenie)
- [Orion Henry aka `orionz`](https://github.com/orionz)
- [Aivo Paas aka `aivopaas`](https://github.com/aivopaas)
- [Hank Sims aka `hanksims`](https://github.com/hanksims)
- [Paul Carey aka `paulcarey`](https://github.com/paulcarey)
- [Pieter Noordhuis aka `pietern`](https://github.com/pietern)
- [nithesh aka `nithesh`](https://github.com/nithesh)
- [Andy Ray aka `andy2ray`](https://github.com/andy2ray)
- [unknown aka `unknowdna`](https://github.com/unknowdna)
- [Dave Hoover aka `redsquirrel`](https://github.com/redsquirrel)
- [Vladimir Dronnikov aka `dvv`](https://github.com/dvv)
- [Umair Siddique aka `umairsiddique`](https://github.com/umairsiddique)
- [Louis-Philippe Perron aka `lp`](https://github.com/lp)
- [Mark Dawson aka `markdaws`](https://github.com/markdaws)
- [Ian Babrou aka `bobrik`](https://github.com/bobrik)
- [Felix Geisendörfer aka `felixge`](https://github.com/felixge)
- [Jean-Hugues Pinson aka `undefined`](https://github.com/undefined)
- [Maksim Lin aka `maks`](https://github.com/maks)
- [Owen Smith aka `orls`](https://github.com/orls)
- [Zachary Scott aka `zzak`](https://github.com/zzak)
- [TEHEK Firefox aka `TEHEK`](https://github.com/TEHEK)
- [Isaac Z. Schlueter aka `isaacs`](https://github.com/isaacs)
- [David Trejo aka `DTrejo`](https://github.com/DTrejo)
- [Brian Noguchi aka `bnoguchi`](https://github.com/bnoguchi)
- [Philip Tellis aka `bluesmoon`](https://github.com/bluesmoon)
- [Marcus Westin aka `marcuswestin2`](https://github.com/marcuswestin2)
- [Jed Schmidt aka `jed`](https://github.com/jed)
- [Dave Peticolas aka `jdavisp3`](https://github.com/jdavisp3)
- [Trae Robrock aka `trobrock`](https://github.com/trobrock)
- [Shankar Karuppiah aka `shankar0306`](https://github.com/shankar0306)
- [Ignacio Burgueño aka `ignacio`](https://github.com/ignacio)

Thanks.

## LICENSE - "MIT License"

Copyright (c) 2010 Matthew Ranney, http://ranney.com/

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

![spacer](http://ranney.com/1px.gif)


<a name="sentry-node"></a>
### <a href="https://github.com/Clever/sentry-node">sentry-node</a> v0.2.0
#### simple Node wrapper around Sentry API

<a href="http://en.wikipedia.org/wiki/BSD_licenses#4-clause_license_.28original_.22BSD_License.22.29">BSD</a> whitelisted

## Sentry-node
**Node v0.10 compatible**

[![Build Status](https://travis-ci.org/Clever/sentry-node.png?branch=master)](https://travis-ci.org/Clever/sentry-node)

A simple Node wrapper around [Sentry](http://getsentry.com/) API.


## Installation
```
$ npm install sentry-node
```

## Testing
```
$ npm test
```


## Usage

### Creating the Client

```javascript
var Sentry = require('sentry-node');
```
You can intialize `sentry-node` by passing in a Sentry DSN:
```javascript
var sentry = new Sentry('<your Sentry DSN>');
```
Or you can set it as an `process.env` variable:
```javascript
var sentry = new Sentry();
```
You can also pass in the config parameters as an object:
```javascript
var sentry = new Sentry({
  key: '<your sentry public key>',
  secret: '<your sentry secret key>',
  project_id: '<your sentry project id>'
});
```

**Note:**

- If `SENTRY_DSN` is not set or argument to `Sentry` is invalid, client will be disabled.
- Argument to `Sentry` will update client settings even if `SENTRY_DSN` is set.


### Error
```javascript
sentry.error(err, message, logger, extra);
```

#### sample

```javascript
sentry.error(
  new Error("The error method expected an Error instance as first argument."),
  "Bad arguments to sentry-node:error method",
  '/sentry-node.coffee',
  {
    note: "to test sentry-node error method", 
    version: "0.1.0"
  }
);
```

![image](http://i.imgur.com/xEHX8P3.png)

#### arguments

* **err:** must be an instance of `Error`, `err.message` will be used for the smaller text that appears right under `culprit`
* **message:** `culprit`, big text that appears at the top
* **logger:** the name of the logger which created the record, should be the error logger/handler in your code
* **extra:** (optional) an object gives more context about the error in addition to `err.stack`


### Message
```javascript
sentry.message(message, logger, extra);
```

#### sample

```javascript
sentry.message(
  "message",
  "/trial.coffee",
  {
    note: "to test sentry-node api",
    type: "message"
  }
);
```

![image](http://i.imgur.com/kUMkhX2.png)

#### arguments

* **message:** text will be used for both the big text appears at the top and the smaller text appears right under it
* **logger:** the name of the logger which created the record
* **extra:** (optional) an object gives more context about the message


## Events

Sentry Client emits two events, `logged` and `error` that you can listen to.

```javascript
client.on('logged', function(){
  console.log('Yay, it worked!');
});
client.on('error', function(e){
  console.log('oh well, Sentry is broke.');
  console.log(e);
})
client.message('Boom', 'logger');
```

<a name="socket.io"></a>
### <a href="https://github.com/LearnBoost/socket.io">socket.io</a> v1.0.6
#### node.js realtime framework server

<a href="http://opensource.org/licenses/mit-license">MIT</a> whitelisted


# socket.io

[![Build Status](https://secure.travis-ci.org/Automattic/socket.io.png)](http://travis-ci.org/Automattic/socket.io)
[![NPM version](https://badge.fury.io/js/socket.io.png)](http://badge.fury.io/js/socket.io)

## How to use

The following example attaches socket.io to a plain Node.JS
HTTP server listening on port `3000`.

```js
var server = require('http').Server();
var io = require('socket.io')(server);
io.on('connection', function(socket){
  socket.on('event', function(data){});
  socket.on('disconnect', function(){});
});
server.listen(3000);
```

### Standalone

```js
var io = require('socket.io')();
io.on('connection', function(socket){});
io.listen(3000);
```

### In conjunction with Express

Starting with **3.0**, express applications have become request handler
functions that you pass to `http` or `http` `Server` instances. You need
to pass the `Server` to `socket.io`, and not the express application
function.

```js
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
io.on('connection', function(){ /* … */ });
server.listen(3000);
```

### In conjunction with Koa

Like Express.JS, Koa works by exposing an application as a request
handler function, but only by calling the `callback` method.

```js
var app = require('koa')();
var server = require('http').Server(app.callback());
var io = require('socket.io')(server);
io.on('connection', function(){ /* … */ });
server.listen(3000);
```

## API

### Server

  Exposed by `require('socket.io')`.

### Server()

  Creates a new `Server`. Works with and without `new`:

  ```js
  var io = require('socket.io')();
  // or
  var Server = require('socket.io');
  var io = new Server();
  ```

### Server(opts:Object)

  Optionally, the first or second argument (see below) of the `Server`
  constructor can be an options object.

  The following options are supported:

  - `serveClient` sets the value for Server#serveClient()
  - `path` sets the value for Server#path()

  The same options passed to socket.io are always passed to
  the `engine.io` `Server` that gets created. See engine.io
  [options](https://github.com/learnboost/engine.io#methods-1)
  as reference.

### Server(srv:http#Server, opts:Object)

  Creates a new `Server` and attaches it to the given `srv`. Optionally
  `opts` can be passed.

### Server(port:Number, opts:Object)

  Binds socket.io to a new `http.Server` that listens on `port`.

### Server#serveClient(v:Boolean):Server

  If `v` is `true` the attached server (see `Server#attach`) will serve
  the client files. Defaults to `true`.

  This method has no effect after `attach` is called.

  ```js
  // pass a server and the `serveClient` option
  var io = require('socket.io')(http, { serveClient: false });

  // or pass no server and then you can call the method
  var io = require('socket.io')();
  io.serveClient(false);
  io.attach(http);
  ```

  If no arguments are supplied this method returns the current value.

### Server#path(v:String):Server

  Sets the path `v` under which `engine.io` and the static files will be
  served. Defaults to `/socket.io`.

  If no arguments are supplied this method returns the current value.

### Server#adapter(v:Adapter):Server

  Sets the adapter `v`. Defaults to an instance of the `Adapter` that
  ships with socket.io which is memory based. See
  [socket.io-adapter](https://github.com/Automattic/socket.io-adapter).

  If no arguments are supplied this method returns the current value.

### Server#origins(v:String):Server

  Sets the allowed origins `v`. Defaults to any origins being allowed.

  If no arguments are supplied this method returns the current value.


### Server#sockets:Namespace

  The default (`/`) namespace.

### Server#attach(srv:http#Server, opts:Object):Server

  Attaches the `Server` to an engine.io instance on `srv` with the
  supplied `opts` (optionally).

### Server#attach(port:Number, opts:Object):Server

  Attaches the `Server` to an engine.io instance that is bound to `port`
  with the given `opts` (optionally).

### Server#listen

  Synonym of `Server#attach`.

### Server#bind(srv:engine#Server):Server

  Advanced use only. Binds the server to a specific engine.io `Server` 
  (or compatible API) instance.

### Server#onconnection(socket:engine#Socket):Server

  Advanced use only. Creates a new `socket.io` client from the incoming
  engine.io (or compatible API) `socket`.

### Server#of(nsp:String):Namespace

  Initializes and retrieves the given `Namespace` by its pathname 
  identifier `nsp`.

  If the namespace was already initialized it returns it right away.

### Server#emit

  Emits an event to all connected clients. The following two are 
  equivalent:

  ```js
  var io = require('socket.io')();
  io.sockets.emit('an event sent to all connected clients');
  io.emit('an event sent to all connected clients');
  ```

  For other available methods, see `Namespace` below.

### Server#use

  See `Namespace#use` below.

### Namespace

  Represents a pool of sockets connected under a given scope identified
  by a pathname (eg: `/chat`).

  By default the client always connects to `/`.

#### Events

  - `connection` / `connect`. Fired upon a connection.

    Parameters:
    - `Socket` the incoming socket.

### Namespace#name:String

  The namespace identifier property.

### Namespace#connected:Object<Socket>

  Hash of `Socket` objects that are connected to this namespace indexed
  by `id`.

### Namespace#use(fn:Function):Namespace

  Registers a middleware, which is a function that gets executed for
  every incoming `Socket` and receives as parameter the socket and a
  function to optionally defer execution to the next registered
  middleware.

  ```js
  var io = require('socket.io')();
  io.use(function(socket, next){
    if (socket.request.headers.cookie) return next();
    next(new Error('Authentication error'));
  });
  ```

  Errors passed to middleware callbacks are sent as special `error`
  packets to clients.

### Socket

  A `Socket` is the fundamental class for interacting with browser
  clients. A `Socket` belongs to a certain `Namespace` (by default `/`)
  and uses an underlying `Client` to communicate.

### Socket#rooms:Array

  A list of strings identifying the rooms this socket is in.

### Socket#client:Client

  A reference to the underlying `Client` object.

### Socket#conn:Socket

  A reference to the underyling `Client` transport connection (engine.io
  `Socket` object).

### Socket#request:Request

  A getter proxy that returns the reference to the `request` that
  originated the underlying engine.io `Client`. Useful for accessing
  request headers such as `Cookie` or `User-Agent`.

### Socket#id:String

  A unique identifier for the socket session, that comes from the
  underlying `Client`.

### Socket#emit(name:String[, …]):Socket

  Emits an event to the socket identified by the string `name`. Any
  other parameters can be included.

  All datastructures are supported, including `Buffer`. JavaScript
  functions can't be serialized/deserialized.

  ```js
  var io = require('socket.io')();
  io.on('connection', function(socket){
    socket.emit('an event', { some: 'data' });
  });
  ```

### Socket#join(name:String[, fn:Function]):Socket

  Adds the socket to the `room`, and fires optionally a callback `fn`
  with `err` signature (if any).

  The socket is automatically a member of a room identified with its
  session id (see `Socket#id`).

  The mechanics of joining  rooms are handled by the `Adapter`
  that has been configured (see `Server#adapter` above), defaulting to
  [socket.io-adapter](https://github.com/Automattic/socket.io-adapter).

### Socket#leave(name:String[, fn:Function]):Socket

  Removes the socket from `room`, and fires optionally a callback `fn`
  with `err` signature (if any).

  **Rooms are left automatically upon disconnection**.

  The mechanics of leaving rooms are handled by the `Adapter`
  that has been configured (see `Server#adapter` above), defaulting to
  [socket.io-adapter](https://github.com/Automattic/socket.io-adapter).

### Socket#to(room:String):Socket
### Socket#in(room:String):Socket

  Sets a modifier for a subsequent event emission that the event will
  only be _broadcasted_ to sockets that have joined the given `room`.

  To emit to multiple rooms, you can call `to` several times.

  ```js
  var io = require('socket.io')();
  io.on('connection', function(socket){
    socket.to('others').emit('an event', { some: 'data' });
  });
  ```

### Client

  The `Client` class represents an incoming transport (engine.io)
  connection. A `Client` can be associated with many multiplexed `Socket`
  that belong to different `Namespace`s.

### Client#conn

  A reference to the underlying `engine.io` `Socket` connection.

### Client#request

  A getter proxy that returns the reference to the `request` that
  originated the engine.io connection. Useful for accessing
  request headers such as `Cookie` or `User-Agent`.

## Debug / logging

Socket.IO is powered by [debug](http://github.com/visionmedia/debug).
In order to see all the debug output, run your app with the environment variable
`DEBUG` including the desired scope.

To see the output from all of Socket.IO's debugging scopes you can use:

```
DEBUG=socket.io* node myapp
```

## License

MIT


<a name="underscore"></a>
### <a href="http://underscorejs.org">underscore</a> v1.5.2
#### JavaScript's functional programming helper library.

<a href="http://opensource.org/licenses/mit-license">MIT</a> whitelisted

                       __
                      /\ \                                                         __
     __  __    ___    \_\ \     __   _ __   ____    ___    ___   _ __    __       /\_\    ____
    /\ \/\ \ /' _ `\  /'_  \  /'__`\/\  __\/ ,__\  / ___\ / __`\/\  __\/'__`\     \/\ \  /',__\
    \ \ \_\ \/\ \/\ \/\ \ \ \/\  __/\ \ \//\__, `\/\ \__//\ \ \ \ \ \//\  __/  __  \ \ \/\__, `\
     \ \____/\ \_\ \_\ \___,_\ \____\\ \_\\/\____/\ \____\ \____/\ \_\\ \____\/\_\ _\ \ \/\____/
      \/___/  \/_/\/_/\/__,_ /\/____/ \/_/ \/___/  \/____/\/___/  \/_/ \/____/\/_//\ \_\ \/___/
                                                                                  \ \____/
                                                                                   \/___/

Underscore.js is a utility-belt library for JavaScript that provides
support for the usual functional suspects (each, map, reduce, filter...)
without extending any core JavaScript objects.

For Docs, License, Tests, and pre-packed downloads, see:
http://underscorejs.org

Underscore is an open-sourced component of DocumentCloud:
https://github.com/documentcloud

Many thanks to our contributors:
https://github.com/jashkenas/underscore/contributors

