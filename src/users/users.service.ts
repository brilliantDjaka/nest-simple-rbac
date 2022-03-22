import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

export type User = {
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users = [
    {
      username: 'brianrofiq',
      password: 'brianrofiq',
    },
    {
      username: 'admin',
      password: 'admin',
    },
  ];

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async findByUsername(username: string): Promise<User | null> {
    return Promise.resolve(
      this.users.find((user) => user.username === username),
    );
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
