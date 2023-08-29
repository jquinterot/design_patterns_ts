import { Person } from "./single_responsibility_principle_examples/singleResponsibilityPrinciple";
import {
    EmailSender,
    SMSSender,
    PushNotificationSender,
    NotificationService,
  } from './dependency_inversion_principle_examples/dependencyInversionPrinciple';

//Using Single Responsibility Principle
const person = new Person('Pablo', 12, 'hired');
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
emailService.sendNotification('Hello via email');
smsService.sendNotification('Hello via SMS');
pushService.sendNotification('Hello via push notification');