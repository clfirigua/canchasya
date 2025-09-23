// src/customers/customers.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerSchema } from './infraestructura/repositories/schema/customer.schema';
import { CustomerController } from './infraestructura/controller/customer.controller';
import { CustomerRepositoryMongo } from './infraestructura/repositories/customer.repository';

// Use cases
import { CreateCustomerUseCase } from './aplication/use-cases/create-customer.use.case';
import { RegisterCustomerAccountUseCase } from './aplication/use-cases/register-customer-account.usecase';
import { CreateUserUseCase } from 'src/users/aplication/use-case/create.user.case';

// Validaciones (si tus casos las inyectan)
import { ValidateUniqueCustomerUseCase } from './aplication/use-cases/validateUniqueCustomerUseCase';
import { ValidateUniqueEmail } from 'src/users/aplication/use-case/validateUniqueEmail';
import { UsersModule } from 'src/users/users.module';

// Users module para tener 'UserRepository'

@Module({
  imports: [
    UsersModule, // <- IMPORTANTE para inyectar 'UserRepository'
    MongooseModule.forFeature([{ name: 'Customer', schema: CustomerSchema }]),
  ],
  controllers: [CustomerController],
  providers: [
    // Repos
    { provide: 'CustomerRepository', useClass: CustomerRepositoryMongo },

    // CreateCustomerUseCase (inyecta el repo y, si aplica, la validación)
    {
      provide: CreateCustomerUseCase,
      useFactory: (repo) => new CreateCustomerUseCase(repo),
      inject: ['CustomerRepository', ValidateUniqueCustomerUseCase],
    },
    // ValidateUniqueCustomerUseCase
    {
      provide: ValidateUniqueCustomerUseCase,
      useFactory: (repo) => new ValidateUniqueCustomerUseCase(repo),
      inject: ['CustomerRepository'],
    },

    // CreateUserUseCase (necesita 'UserRepository')
    {
      provide: CreateUserUseCase,
      useFactory: (userRepo) => new CreateUserUseCase(userRepo),
      inject: ['UserRepository'],
    },
    // ValidateUniqueEmail (si CreateUserUseCase lo construye internamente puedes omitirlo aquí)

    // Orquestador que usa CreateUserUseCase + CreateCustomerUseCase (+ opcional userRepo para compensación)
    {
      provide: RegisterCustomerAccountUseCase,
      useFactory: (createUser, createCustomer, userRepo) =>
        new RegisterCustomerAccountUseCase(createUser, createCustomer, userRepo),
      inject: [CreateUserUseCase, CreateCustomerUseCase, 'UserRepository'],
    },
  ],
  exports: [RegisterCustomerAccountUseCase],
})
export class CustomersModule {}
