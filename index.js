const { assign } = Object;

global.Application = class {
  static main(args = []) {
    return new Application(require("./package.json"));
  }

  constructor(props) {
    assign(this, props);
  }
};

module.exports = Application.main(process.argv.splice(2));
