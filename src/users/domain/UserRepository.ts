import User from './entities/User';

export interface UserRepository {
  findByName(name: string): Promise<User>;
}
