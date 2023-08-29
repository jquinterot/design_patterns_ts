"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var singleResponsibilityPrinciple_1 = require("./singleResponsibilityPrinciple");
var person = new singleResponsibilityPrinciple_1.Person('Pablo', 12, 'hired');
console.log(person.age);
console.log(person.introduce());
