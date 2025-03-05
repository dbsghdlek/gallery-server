import { Module } from '@nestjs/common';
import { UserEntity } from './infra/database/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import UserRepositoryImpl from './infra/database/UserRepositoryImpl';
import UserService from './application/UserService';
import UsersController from './interface/UserController';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [
    {
      provide: 'USER_REPOSITORY',
      useClass: UserRepositoryImpl,
    },
    UserService,
  ],
  controllers: [UsersController],
})
export default class UsersModule {}
