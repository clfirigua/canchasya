import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerSchema } from './infraestructura/repositories/schema/customer.schema';
import { CustomerController } from './infraestructura/controller/customer.controller';
import { CreateCustomerUseCase } from './aplication/use-cases/create-customer.use.case';
import { CustomerRepositoryMongo } from './infraestructura/repositories/customer.repository';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Customer', schema: CustomerSchema }])],
    controllers: [CustomerController],
    providers: [
        {
            provide: 'CustomerRepository',
            useClass: CustomerRepositoryMongo,
        },
        {
            provide: CreateCustomerUseCase,
            useFactory: (repo) => new CreateCustomerUseCase(repo),
            inject: ['CustomerRepository'],
        },
    ],
})
export class CustomersModule {}
