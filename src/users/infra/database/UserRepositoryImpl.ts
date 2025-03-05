import { UserRepository } from '../../domain/UserRepository';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import UserMapper from '../User.mapper';

@Injectable()
export default class UserRepositoryImpl implements UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  async findByName(name: string) {
    const user = await this.userRepository.findOne({ where: { name } });

    if (!user) {
      throw new NotFoundException('User not found');
    } else {
      return UserMapper.fromEntity(user);
    }
  }
}
