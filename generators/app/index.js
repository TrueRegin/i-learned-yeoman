const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    writing() {
        this.fs.copyTpl(this.templatePath('assets'), this.destinationPath(''), {});
    }
}