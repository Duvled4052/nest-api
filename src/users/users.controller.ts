import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, ValidationPipe, UsePipes, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiConflictResponse, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { User } from './entities/user.entity';

@UseGuards(AuthGuard)
@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiCreatedResponse({
    description: 'Registro criado com sucesso.'
    // type: User,
  })
  @ApiConflictResponse({description: 'Já existe uma conta com o email informado.'})
  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @ApiOkResponse({description: 'Mostra todos os registros'})
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @ApiOkResponse({description: 'Usuário específico'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @ApiOkResponse({description: 'Altera uma informação do usuário'})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @ApiOkResponse({description: 'Usuário deletado com sucesso'})
  @ApiInternalServerErrorResponse({description: 'Usuário não existe'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
