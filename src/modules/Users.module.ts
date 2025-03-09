import { Module } from '@nestjs/common';
import { UserEntity } from '../infra/users/database/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import UserRepositoryImpl from '../infra/users/database/UserRepositoryImpl';
import UserService from '../application/users/UserService';
import UsersController from '../interface/users/UserController';

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
