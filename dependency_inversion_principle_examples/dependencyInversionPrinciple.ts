// Abstraction (Interface) for Notification
interface NotificationSender {
    send(message: string): void;
  }
  
  // Concrete Implementations of NotificationSender
  class EmailSender implements NotificationSender {
    send(message: string): void {
      console.log('I am sending an email');
    }
  }
  
  class SMSSender implements NotificationSender {
    send(message: string): void {
        console.log('I am sending an sms');
    }
  }
  
  class PushNotificationSender implements NotificationSender {
    send(message: string): void {
        console.log('I am sending a push notification');
    }
  }
  
  // High-level module (does not depend on details)
    class NotificationService {
    constructor(private sender: NotificationSender) {}
  
    sendNotification(message: string): void {
      this.sender.send(message);
    }
  }
  
  export { EmailSender, SMSSender, PushNotificationSender, NotificationService };