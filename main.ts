import { Person } from "./single_responsibility_principle_examples/singleResponsibilityPrinciple";
import {
  EmailSender,
  SMSSender,
  PushNotificationSender,
  NotificationService,
} from "./dependency_inversion_principle_examples/dependencyInversionPrinciple";
import {
  printQuizOpenPrinciple,
  questionsOpenPrinciple,
} from "./open_close_principle_examples/openClosePrinciple";
import {
  increaseReactangleWidth,
  rectangle1,
  rectangle2,
  square,
} from "./liskovSubstitutionPrinciple/negativeLiskovSubstitutionPrinciple";
import {
  printArea,
  rectangle,
  square as liskovSquare,
} from "./liskovSubstitutionPrinciple/liskovSubstitutionPrinciple";
import {
  duck,
  makeBirdFly,
  penguin,
} from "./liskovSubstitutionPrinciple/negativeLiskovSubstitutionSecond";

//Using Single Responsibility Principle
const person = new Person("Pablo", 12, "hired");
console.log(person.age);
console.log(person.introduce());

//Using Dependency Inversion Principle
const emailSender = new EmailSender();
const smsSender = new SMSSender();
const pushSender = new PushNotificationSender();

// Create NotificationService instances using different senders
const emailService = new NotificationService(emailSender);
const smsService = new NotificationService(smsSender);
const pushService = new NotificationService(pushSender);

// Use NotificationService to send notifications
emailService.sendNotification("Hello via email");
smsService.sendNotification("Hello via SMS");
pushService.sendNotification("Hello via push notification");

// Using OpenClose Principle
printQuizOpenPrinciple(questionsOpenPrinciple);

// Using Negative Case Liskov Substitution
// increaseReactangleWidth(rectangle1);
// increaseReactangleWidth(square);

// console.log(rectangle1.area());
// console.log(square.area());
// makeBirdFly(duck);
// makeBirdFly(penguin);

// Using Good Case Liskov Substitution
rectangle.setHeight(5);
liskovSquare.setSideLength(6);
printArea(rectangle);
printArea(liskovSquare);
