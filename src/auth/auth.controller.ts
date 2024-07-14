import { Body, Controller, HttpCode, HttpStatus, NotImplementedException, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { ApiOkResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @ApiOkResponse({description: 'Login feito com sucesso!'})
    @ApiUnauthorizedResponse({description: 'Email ou senha incorretos'})
    @HttpCode(HttpStatus.OK)
    @Post('login')
    async login(@Body() authDto: AuthDto ) {
        return await this.authService.singIn(authDto.email, authDto.password)
    }
}
