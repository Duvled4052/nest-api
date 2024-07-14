import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  lastName: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  funcao: string;

    @Prop()
    celular: string;

    @Prop()
    cpf: string;

    @Prop()
    cep: string;

    @Prop()
    logradouro: string;

    @Prop()
    numero: number;

    @Prop()
    complemento: string;

    @Prop()
    bairro: string;

    @Prop()
    cidade: string;

    @Prop()
    estado: string;

    @Prop()
    tipo: string;
}

export const UserSchema = SchemaFactory.createForClass(User);