"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = exports.PushNotificationSender = exports.SMSSender = exports.EmailSender = void 0;
// Concrete Implementations of NotificationSender
var EmailSender = /** @class */ (function () {
    function EmailSender() {
    }
    EmailSender.prototype.send = function (message) {
        console.log('I am sending an email');
    };
    return EmailSender;
}());
exports.EmailSender = EmailSender;
var SMSSender = /** @class */ (function () {
    function SMSSender() {
    }
    SMSSender.prototype.send = function (message) {
        console.log('I am sending an sms');
    };
    return SMSSender;
}());
exports.SMSSender = SMSSender;
var PushNotificationSender = /** @class */ (function () {
    function PushNotificationSender() {
    }
    PushNotificationSender.prototype.send = function (message) {
        console.log('I am sending a push notification');
    };
    return PushNotificationSender;
}());
exports.PushNotificationSender = PushNotificationSender;
// High-level module (does not depend on details)
var NotificationService = /** @class */ (function () {
    function NotificationService(sender) {
        this.sender = sender;
    }
    NotificationService.prototype.sendNotification = function (message) {
        this.sender.send(message);
    };
    return NotificationService;
}());
exports.NotificationService = NotificationService;
