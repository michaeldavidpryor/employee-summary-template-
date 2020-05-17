const Employee = require ('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub = () => this.github; getRole = () => Engineer.name;
}
module.exports = Engineer;

