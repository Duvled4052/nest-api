import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './entities/user.entity'
import { Model } from 'mongoose'
import { ApiOkResponse } from '@nestjs/swagger';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto) {
    const existingUser = await this.findByEmail(createUserDto.email);
    if(existingUser) {
      throw new ConflictException(null, 'Email já cadastrado no banco de usuários')};
    const user = new this.userModel(createUserDto);
    return user.save();
  }

  findAll() {
    return this.userModel.find();
  }

  findOne(id: string) {
    return this.userModel.findById(id);
  }

  findByEmail(email: string) {
    return this.userModel.findOne({email})
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate({
      _id: id,
    },{
      $set: updateUserDto,
    },{
      new: true,
    });
  }

  async remove(id: string) {
    const user = await this.userModel.findByIdAndDelete(id);
    return {message:'Usuário deletado com sucesso', user};
  }

  // async findOne(username: string): Promise<User | undefined> {
    // return this.users.find(user => user.username === username);
}
