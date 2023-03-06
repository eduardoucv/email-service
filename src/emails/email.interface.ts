import { EmailNotificationDTO } from './email.model';

export interface IEmailService {
  sendEmail(notification: EmailNotificationDTO): Promise<EmailNotificationDTO>;
}