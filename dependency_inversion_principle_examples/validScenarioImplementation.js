"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dependencyInversionPrinciple_1 = require("./dependencyInversionPrinciple");
var emailSender = new dependencyInversionPrinciple_1.EmailSender();
var smsSender = new dependencyInversionPrinciple_1.SMSSender();
var pushSender = new dependencyInversionPrinciple_1.PushNotificationSender();
// Create NotificationService instances using different senders
var emailService = new dependencyInversionPrinciple_1.NotificationService(emailSender);
var smsService = new dependencyInversionPrinciple_1.NotificationService(smsSender);
var pushService = new dependencyInversionPrinciple_1.NotificationService(pushSender);
// Use NotificationService to send notifications
emailService.sendNotification('Hello via email');
smsService.sendNotification('Hello via SMS');
pushService.sendNotification('Hello via push notification');
