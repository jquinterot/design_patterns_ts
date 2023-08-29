"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SinglePerson = exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age, jobStatus) {
        this.name = name;
        this.age = age;
        this.jobStatus = jobStatus;
    }
    Person.prototype.introduce = function () {
        return "Hi, I'm ".concat(this.name, ".");
    };
    // Methods related to personal attributes and characteristics
    Person.prototype.getJobStatus = function () {
        return "your status is  ".concat(this.jobStatus);
    };
    return Person;
}());
exports.Person = Person;
var SinglePerson = /** @class */ (function () {
    function SinglePerson(name) {
        this.name = name;
    }
    SinglePerson.prototype.introduce = function () {
        return "Hi, I'm still single: ".concat(this.name, ".");
    };
    // Methods related to single status
    SinglePerson.prototype.findMatch = function () {
        return "You have found a match";
    };
    SinglePerson.prototype.sendDateInvitation = function () {
        return "You have sent a date invitation";
    };
    return SinglePerson;
}());
exports.SinglePerson = SinglePerson;
