import { Module } from '@nestjs/common';
import { NotificationsRepository } from 'src/app/repositories/notifications-repository';
import { PrismaService } from './prisma.service';
import { PrismaNotificationsRepository } from './prisma/repositories/prisma-notifications-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationsRepository,
    },
  ],
  exports: [NotificationsRepository],
})
export class DatabaseModule {}
