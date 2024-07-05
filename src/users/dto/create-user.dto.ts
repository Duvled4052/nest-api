import { IsEmail, IsIn, IsMobilePhone, IsNotEmpty, Length, Matches, MaxLength } from "class-validator";

export class CreateUserDto {
    //done(colocar message em variável)
    @IsNotEmpty()
    @Matches('^[a-zA-Z0-9‘^~ãõáéíóúàèìòùâêîôûäëïöüçÑñ]+$', undefined, {each: true, message: 'Name deve ter apenas os caracteres especiais ‘ ^ e ~'})
    @Length(2, 50)
    name: string;

    //done
    @IsNotEmpty()
    @Matches('^[a-zA-Z0-9‘^~ãõáéíóúàèìòùâêîôûäëïöüçÑñ]+$', undefined, {each: true, message: 'lastName deve ter apenas os caracteres especiais ‘ ^ e ~'})
    @Length(2, 100)
    lastName: string;

    // DONE
    @IsNotEmpty()
    @Matches('^[a-zA-Z0-9-._@]+$', undefined, {each: true, message: "email deve ter apenas os caracteres especiais -._"})
    @Length(3, 50)
    @IsEmail()
    email: string;

    // DONE
    @IsNotEmpty()
    @Length(2, 50)
    password: string;

    // DONE
    @IsNotEmpty()
    @IsIn(['Analista de testes (funcional)', 'Analista de testes (automatizado)', 'Desenvolvedor backend', 'Desenvolvedor frontend'], {each: true})
    funcao: string;

    // DONE
    @IsMobilePhone("pt-BR")
    @Length(11,11,{message: 'Celular deve ter 11 dígitos'})
    celular: string;

    // DONE
    @IsNotEmpty()
    @Length(11,11,{message: 'CPF deve ter 11 dígitos'})
    cpf: string;

    // DONE
    @IsNotEmpty()
    @Length(8,8,{message: 'CEP deve ter 8 dígitos'})
    cep: string;

    // AAAAAAAAAAAAAAAAA
    @IsNotEmpty()
    // @Matches('^[a-zA-Z0-9‘-]+$', undefined, {each: true, message: 'logradouro deve ter apenas os caracteres especiais ‘ e -'})
    @MaxLength(80)
    logradouro: string;

    //done(aceita letras??)
    @IsNotEmpty()
    @Matches('^[0-9/]+$', undefined, {each: true, message: 'numero deve ter apenas números e o caractere especial /'})
    @MaxLength(10)
    numero: number;

    //fazer regex
    @MaxLength(80)
    // @Matches('^[A-Za-z0-9áàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ-]+$', undefined, {each: true, message: 'complemento deve ter apenas os caracteres especiais ‘ e -'})
    complemento: string;

    //done
    @IsNotEmpty()
    @Matches('^[a-zA-Z0-9‘-]+$', undefined, {each: true, message: 'bairro deve ter apenas os caracteres especiais ‘ e -'})
    @Length(2, 50)
    bairro: string;

    // 
    @IsNotEmpty()
    // @Matches('^[a-zA-Z0-9‘-]+$', undefined, {each: true, message: 'cidade deve ter apenas os caracteres especiais ‘ e -'})
    @MaxLength(50)
    cidade: string;

    // done
    @IsNotEmpty()
    @Length(2, 2, {message: 'estado deve ter apenas duas letras. Ex: SP'})
    @Matches('^[A-Z]+$', undefined, {each: true, message: 'estado deve conter apenas letras maiúsculas. Ex: SP'})
    estado: string;
}