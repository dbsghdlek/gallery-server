import { UserRepository } from './UserRepository';
import { Inject } from '@nestjs/common';

export default class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: UserRepository,
  ) {}
}
