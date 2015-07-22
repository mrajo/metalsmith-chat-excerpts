# metalsmith-chat-excerpts

> A Metalsmith plugin to extract an excerpt from chat logs.

## Installation

    $ npm install metalsmith-excerpts

## Javascript Usage

```js
var excerpts = require('metalsmith-chat-excerpts');

metalsmith.use(excerpts({
  lines: 5
}));
```

## Options

### lines
Type: `Integer`
Default: `5`

Sets the number of lines from the beginning of the log to use for an excerpt.

## License

MIT
