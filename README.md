# Declareify

### Browserify transform to declare undeclare module.exports variables

This is a very simple transform that turns this:

```javascript
module.exports = myCoolModuleName = function () {
  ...
}
```

Into this:

```javascript
var myCoolModuleName
module.exports = myCoolModuleName = function () {
  ...
}
```

## Installation
```
npm install declareify
```

## Usage

```
browserify ... -t declareify
```

Or:

```
// package.json
...
browserify: {
  transform: [ 'declareify' ]
}
...
```

## Contributions / Issues
Please feel free to open an issue or a PR if something's broken, or if you'd like some specific features added.

## License
MIT
