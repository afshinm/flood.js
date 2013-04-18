flood.js
=====

TCP/UDP/HTTP Flood in NodeJs

## Installation

    $ npm install floodjs

## How to use

It's simple to use.

    Usage: flood.js [options]
    
    Options:
    
      -h, --help               output usage information
      -V, --version            output the version number
      -h, --host <host>        Host Name/IP
      -p, --port [port]        If not defined, program will use random ports.
      -t, --timeout [timeout]  Timeout in millisecond. If not defined, it will be unlimited.

### Example:

Start UDP flood for `127.0.0.1` with 1000 milliseconds timeout, using random ports:

    node flood.js -h 127.0.0.1 -t 1000

Start UDP flood for `127.0.0.1` port `80`, without timeout:

    node flood.js -h 127.0.0.1 -p 80

## Roadmap
- Add TCP Flood
- Add HTTP Flood
- Complete unit tests

## License 

> Copyright (C) 2012 Afshin Mehrabani (afshin.meh@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated 
documentation files (the "Software"), to deal in the Software without restriction, including without limitation 
the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, 
and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions 
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED 
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL 
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF 
CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS 
IN THE SOFTWARE.
