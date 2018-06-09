const fs = require('fs');
const parseString = require('xml2js').parseString;
const util = require('util')



fs.readFile('./hyperspin/Nintendo_64DD.dev.test.xml', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }

  parseString(data, function (err, result) {
    console.dir(result);
    console.dir(result.menu);
    //console.log(util.inspect(result, {showHidden: false, depth: null}))
  });
});