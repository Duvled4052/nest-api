import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsIn, IsMobilePhone, IsNotEmpty, IsStrongPassword, Length, Matches, MaxLength } from "class-validator";

export class CreateUserDto {
    //done(colocar message em variável)
    @ApiProperty({
        description: 'O nome do usuário',
        example: 'Felipe'
    })
    @IsNotEmpty()
    @Matches('^[a-zA-Z0-9‘^~ãõáéíóúàèìòùâêîôûäëïöüçÑñ]+$', undefined, {each: true, message: 'Name deve ter apenas os caracteres especiais ‘ ^ e ~'})
    @Length(2, 50)
    name: string;

    //done
    @ApiProperty({
        description: 'O sobrenome do usuário',
        example: 'Silva'
    })
    @IsNotEmpty()
    @Matches('^[a-zA-Z0-9‘^~ãõáéíóúàèìòùâêîôûäëïöüçÑñ]+$', undefined, {each: true, message: 'lastName deve ter apenas os caracteres especiais ‘ ^ e ~'})
    @Length(2, 100)
    lastName: string;

    // DONE
    @ApiProperty({
        description: 'O email do usuário',
        example: 'email@exemplo.com'
    })
    @IsNotEmpty()
    @Matches('^[a-zA-Z0-9-._@]+$', undefined, {each: true, message: "email deve ter apenas os caracteres especiais -._"})
    @Length(3, 50)
    @IsEmail()
    email: string;

    // DONE
    @ApiProperty({
        description: 'A senha do usuário',
        example: '1234@Test'
    })
    @IsNotEmpty()
    @Length(2, 50)
    @IsStrongPassword()
    password: string;

    // message
    @ApiProperty({
        description: 'A função do usuário',
        example: 'Analista de testes (funcional)'
    })
    @IsNotEmpty()
    @IsIn(['Analista de testes (funcional)', 'Analista de testes (automatizado)', 'Desenvolvedor backend', 'Desenvolvedor frontend'], {each: true})
    funcao: string;

    // DONE
    @ApiProperty({
        description: 'O número de celular do usuário',
        example: '11920000000'
    })
    @IsMobilePhone("pt-BR")
    @Length(11,11,{message: 'Celular deve ter 11 dígitos'})
    celular: string;

    // DONE
    @ApiProperty({
        description: 'O CPF do usuário',
        example: '00000000000'
    })
    @IsNotEmpty()
    @Length(11,11,{message: 'CPF deve ter 11 dígitos'})
    cpf: string;

    // DONE
    @ApiProperty({
        description: 'O CEP do usuário',
        example: '00000000'
    })
    @IsNotEmpty()
    @Length(8,8,{message: 'CEP deve ter 8 dígitos'})
    cep: string;

    // AAAAAAAAAAAAAAAAA
    @ApiProperty({
        description: 'O logradouro do usuário',
        example: 'Rua das Flores'
    })
    @IsNotEmpty()
    // @Matches('^[a-zA-Z0-9‘-]+$', undefined, {each: true, message: 'logradouro deve ter apenas os caracteres especiais ‘ e -'})
    @MaxLength(80)
    logradouro: string;

    //done(aceita letras??)
    @ApiProperty({
        description: 'O número do logradouro',
        example: '24'
    })
    @IsNotEmpty()
    @Matches('^[0-9/]+$', undefined, {each: true, message: 'numero deve ter apenas números e o caractere especial /'})
    @MaxLength(10)
    numero: number;

    //fazer regex
    @ApiProperty({
        description: 'O complemento do endereço',
        example: 'Portão azul'
    })
    @MaxLength(80)
    // @Matches('^[A-Za-z0-9áàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ-]+$', undefined, {each: true, message: 'complemento deve ter apenas os caracteres especiais ‘ e -'})
    complemento: string;

    //done
    @ApiProperty({
        description: 'O bairro onde o usuário mora',
        example:'Alphaville'
    })
    @IsNotEmpty()
    @Matches('^[a-zA-Z0-9‘-]+$', undefined, {each: true, message: 'bairro deve ter apenas os caracteres especiais ‘ e -'})
    @Length(2, 50)
    bairro: string;

    //
    @ApiProperty({
        description: 'A cidade onde o usuário mora',
        example:'São Paulo'
    })
    @IsNotEmpty()
    // @Matches('^[a-zA-Z0-9‘-]+$', undefined, {each: true, message: 'cidade deve ter apenas os caracteres especiais ‘ e -'})
    @MaxLength(50)
    cidade: string;

    // done
    @ApiProperty({
        description: 'O estado onde o usuário mora',
        example: 'SP'
    })
    @IsNotEmpty()
    @Length(2, 2, {message: 'estado deve ter apenas duas letras. Ex: SP'})
    @Matches('^[A-Z]+$', undefined, {each: true, message: 'estado deve conter apenas letras maiúsculas. Ex: SP'})
    estado: string;

    @ApiProperty({
        description: 'O tipo de usuário',
        example: 'ADMIN'
    })
    @IsNotEmpty()
    @IsIn(['ADMIN', 'STUDENT'], {each: true})
    tipo: string;

}