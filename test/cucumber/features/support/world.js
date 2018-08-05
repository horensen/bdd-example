const cwd = process.cwd();
const path = require('path');
const { setWorldConstructor } = require('cucumber');

const AwesomeMath = require(path.join(cwd, 'lib', 'awesome_math.js'));

class World {
  constructor () {
    this.AwesomeMath = new AwesomeMath();
  }
}

setWorldConstructor(World);
