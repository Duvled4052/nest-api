import { ApiProperty } from "@nestjs/swagger";

export class AuthDto {
    @ApiProperty({
        description: 'O email do usuário',
        example: 'email@exemplo.com'
    })
    email: string;

    @ApiProperty({
        description: 'A senha do usuário',
        example: '1234@Test'
    })
    password: string
}