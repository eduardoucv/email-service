import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { IEmailService } from './email.interface';
import { EmailNotificationDTO } from './email.model';

@Injectable()
export class EmailService implements IEmailService {
  async sendEmail(
    notification: EmailNotificationDTO,
  ): Promise<EmailNotificationDTO> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(notification), 2000,);
    });
  }
}