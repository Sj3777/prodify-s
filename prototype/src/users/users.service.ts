import { Inject, Injectable } from '@nestjs/common';
import { createDoc } from 'src/util/db-queries';
import { sendError } from 'src/util/response.handler';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER') private userRepo: typeof User,
  ) {}
  async create(createUserDto: CreateUserDto) {
    try {
      const response = await createDoc(this.userRepo, createUserDto);
      if (!response) {
        throw sendError(true, "USER_NOT_CREATED");
      }
      return response;
    } catch (err) {
      return sendError(true, err);
    }
  }

  findAll() {
    return `This action returns all users`;
  }
}
