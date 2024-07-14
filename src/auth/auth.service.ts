import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService:JwtService) {}

    async singIn(email: string, pass: string): Promise<any> {
        const user = await this.usersService.findByEmail(email);
        if (user?.password !== pass) {
            throw new UnauthorizedException();
            // return {message: 'Email ou senha incorretos'}
        }
        const payload = {sub: user.id, name: user.name}
        return {
            message: 'Login feito com sucesso!',
            access_token: await this.jwtService.signAsync(payload)
        };
    }
}
