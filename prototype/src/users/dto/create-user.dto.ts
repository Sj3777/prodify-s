import {
  IsNotEmpty,
  MinLength,
  IsEmail,
  IsEnum,
  IsEmpty,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  readonly first_name: string;

  @IsNotEmpty()
  readonly last_name: string;

}
