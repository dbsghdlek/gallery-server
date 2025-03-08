import User from '../../domain/users/entities/User';

export interface UserRepository {
  findByName(name: string): Promise<User>;
}
