# selective-whitespace [![Build Status](https://travis-ci.org/radiovisual/selective-whitespace.svg)](https://travis-ci.org/radiovisual/selective-whitespace)

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
selectiveWhitespace('FOO\n   BAR\n   BAZ\n ', {keep: '\n'});
//=> 'FOO\n BAR\n BAZ\n'

// Condense all whitespace (keep tabs)
selectiveWhitespace('\tFOO     \tBAR      \tBAZ', {keep: '\t'});
//=> '\tFOO \tBAR \tBAZ'

// Condense all whitespace (keep tabs and newlines)
selectiveWhitespace('\n\tFOO     \n\tBAR      \n\tBAZ', {keep: '\t,\n'});
//=> '\n\tFOO \n\tBAR \n\tBAZ'

// Strip all whitespace characters
selectiveWhitespace('\t\nFOO     \t\nBAR      \t\nBAZ', {stripAll:true});
//=> 'FOOBARBAZ'
```

## API

### selectiveWhitespace(str, [options]);

#### str

The string you want to condense  
Type: `string`  
Required  

#### options

The options you want to use.  
Type: `object`  
  
##### keep

Values to preserve. Comma or pipe-delimited list.  
Type: `string`  
options: `\n\t\r`  
  
##### stripAll 

`stripAll` mode will remove all whitespace chars from the string  
Type: `Boolean`  
Default: `false`  
  
  
## License

MIT © [Michael Wuergler](http://numetriclabs.com)
