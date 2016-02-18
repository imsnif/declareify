import through from 'through2'

export default function (file) {
  return through(function (buf, enc, next) {
    let string = buf.toString('utf8')
    let result = string.replace(/module.exports\s*=\s*([a-z|A-Z|0-9]+?)\s*=/, "var $1 \nmodule.exports = $1 =")
    this.push(result)
    next();
  });
};
