# jsmp-infra-string-utils

JavaScript utility library delivering functions for strings transformation.

```
$ npm test
$ npm run compile
$ npm run clean
```

## Installation

In a browser:
```html
<script src="node_modules/jsmp-infra-string-utils/lib/index.js"></script>
```

Using npm:
```
$ npm i
$ npm i -S jsmp-infra-string-utils
```

In Node.js:
```javascript
var utils = require('jsmp-infra-string-utils');
var modify = require('jsmp-infra-string-utils/lib/modify').modify;
```

## Usage
Accepts array of strings and modifier. Returns updated array.
``` javascript
(arrayModify(['abc', 'Bar', 'foo'], 'upper'); // ['ABC', 'BAR', 'FOO'];
```
