import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';
import { User } from '@prisma/client';
export declare class AuthService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    signUp(dto: AuthDto): Promise<User>;
    signIn(dto: AuthDto): Promise<number>;
    getUsers(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        hash: string;
        firstName: string;
        lastName: string;
    }[]>;
}
