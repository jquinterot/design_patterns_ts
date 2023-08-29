import {
    EmailSender,
    SMSSender,
    PushNotificationSender,
    NotificationService,
  } from './dependencyInversionPrinciple';

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