import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { ActivityModule } from './activity/activity.module';
import { AffirmationModule } from './affirmation/affirmation.module';
import { CommentModule } from './comment/comment.module';
import { DenialModule } from './denial/denial.module';
import { FriendModule } from './friend/friend.module';
import { TruthModule } from './truth/truth.module';
import { Truth } from './truth/entities/truth.entity';
import { Friend } from './friend/entities/friend.entity';
import { Denial } from './denial/entities/denial.entity';
import { Affirmation } from './affirmation/entities/affirmation.entity';
import { Activity } from './activity/entities/activity.entity';
import { Comment } from './comment/entities/comment.entity';
import { AuthModule } from './auth/auth.module';
import { UtilsModule } from './utils/utils.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '192.168.1.230',
      port: 3306,
      username: 'truther',
      password: 'truther',
      database: 'truther',
      entities: [User, Truth, Friend, Denial, Comment, Affirmation, Activity],
      synchronize: true,
    }),
    UserModule,
    ActivityModule,
    AffirmationModule,
    CommentModule,
    DenialModule,
    FriendModule,
    TruthModule,
    AuthModule,
    UtilsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
