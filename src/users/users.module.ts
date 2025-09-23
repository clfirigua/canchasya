import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './infraestructura/repositories/schema/user.schema';
import { UserController } from './infraestructura/controller/user.controller';
import { UserRepositoryMongo } from './infraestructura/repositories/user.repository';
import { CreateUserUseCase } from './aplication/use-case/create.user.case';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
    controllers: [UserController],
    providers: [
        {
            provide: 'UserRepository',
            useClass: UserRepositoryMongo,
        },
        {
            provide: CreateUserUseCase,
            useFactory: (repo) => new CreateUserUseCase(repo),
            inject: ['UserRepository'],
        },
    ],
    exports: ['UserRepository', MongooseModule],
})
export class UsersModule {}
