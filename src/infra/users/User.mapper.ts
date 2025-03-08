import { UserEntity } from './database/user.entity';
import User from '../../domain/users/entities/User';

export default class UserMapper {
  static toEntity(user: User) {
    return new UserEntity(
      user.id,
      user.loginId,
      user.password,
      user.name,
      user.createdAt,
    );
  }
  static fromEntity(entity: UserEntity) {
    return new User(
      entity.getId,
      entity.getLoginId,
      entity.getPassword,
      entity.getName,
      entity.getCreatedAt,
    );
  }
}
