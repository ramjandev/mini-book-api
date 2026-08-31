import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users: CreateUserDto[] = [];

  create(CreateUserDto: CreateUserDto) {
    const user = {
      ...CreateUserDto,
      id: Date.now().toLocaleString(),
    };
    this.users.push(user);
    return user;
  }
}
