const Employee = require ('../lib/Employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber = () => this.officeNumber; getRole = () => Manager.name;
}
module.exports = Manager;
