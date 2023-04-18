import { Body, Controller, Post, Get } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserService } from './user.service';
import { UserEntity } from './interfaces/user.entity';

@Controller('user')
export class UserController {

    constructor( private readonly userService: UserService ){}

    @Post()
    async createuser(
        @Body() createUser: CreateUserDto
    ){
        return this.userService.createUser(createUser);
    }

    @Get()
    async getAllUsers(): Promise<UserEntity[]>{
        return this.userService.getAllUsers();
    }

}
