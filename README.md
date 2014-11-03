## snooze-request

A simple wrapper for the NPM module request.

### Install

Install with npm

```
npm install snooze-request --save
```

### Use

Inject the module into your snooze module
```
require('snooze-request');
snooze.module('MyModule', ['snooze-request']);
```

Ready to use.

```
snooze.module('MyModule').service('MyServ', function($request) {
  return {
    getGoogle: function() {
      $request('http://www.google.com', function (error, response, body) {
        if (!error && response.statusCode == 200) {
          console.log(body) // Print the google web page.
        }
      });
    }
  };
});
```

### Documentation

See official request documentation

https://github.com/request/request
