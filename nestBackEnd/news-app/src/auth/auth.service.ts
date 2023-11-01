import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';
import { User } from '@prisma/client';
import * as argon from 'argon2';
@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) { }

  async signUp(dto: AuthDto): Promise<User> {
    const hash = await argon.hash(dto.password);

    try {
      const user = await this.prismaService.user.create({
        data: {
          email: dto.email,
          hash,
          firstName: dto.firstName,
          lastName: dto.lastName,
        },
      });

      delete user.hash;

      return user;
    } catch (error) {
      console.log({ msg: 'user with that username already exist' });
      throw new Error('user with that username already exist');
    }
  }
  async signIn(dto: AuthDto) {
    const user = await this.prismaService.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    //    console.log(user);
    if (!user) throw new ForbiddenException('user not found');
    const validatePass = await argon.verify(user.hash, dto.password);

    if (!validatePass) throw new ForbiddenException('invalid password');

    return user;
  }

  async validateUser(email: string, password: string) {
    console.log('inside validate');
    const user = await this.prismaService.user.findUnique({
      where: {
        email: email,
      },
    });

    const validatePass = await argon.verify(user.hash, password);
    if (validatePass) {
      return user;
    }
    return null;
  }

  async getUsers() {
    return await this.prismaService.user.findMany();
  }
}
