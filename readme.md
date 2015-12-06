# selective-whitespace [![Build Status](https://travis-ci.org/radiovisual[![Build Status](https://travis-ci.org/radiovisual/selective-whitespace.svg?branch=master)](https://travis-ci.org/radiovisual/selective-whitespace)/selective-whitespace.svg?branch=master)](https://travis-ci.org/radiovisual/selective-whitespace)

> Condense all whitespace in a string, with options to preserve specific whitespace characters.

## Install

```
$ npm install --save selective-whitespace
```

## Usage

```js
var selectiveWhitespace = require('selective-whitespace');

// Condense all whitespace (including \t\n\r)
selectiveWhitespace('  FOO      BAR    BAZ ');
//=> 'FOO BAR BAZ'

// Condense all whitespace (keep newlines)
selectiveWhitespace('FOO\n   BAR\n   BAZ\n ', { keep: '\n' });
//=> 'FOO\n BAR\n BAZ\n'

// Condense all whitespace (keep tabs)
selectiveWhitespace('\tFOO     \tBAR      \tBAZ', { keep: '\t' });
//=> '\tFOO \tBAR \tBAZ'

// Condense all whitespace (keep tabs and newlines)
selectiveWhitespace('\n\tFOO     \n\tBAR      \n\tBAZ', { keep: '\t|\n' });
//=> '\n\tFOO \n\tBAR \n\tBAZ'

// Strip all whitespace characters
selectiveWhitespace('\t\nFOO     \t\nBAR      \t\nBAZ', { stripAll:true });
//=> 'FOOBARBAZ'
```


## License

MIT © [Michael Wuergler](http://numetriclabs.com)
