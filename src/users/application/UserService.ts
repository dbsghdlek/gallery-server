import { UserRepository } from '../domain/UserRepository';
import { Inject } from '@nestjs/common';

export default class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: UserRepository,
  ) {}
}
