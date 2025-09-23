import { Body, Controller, Post } from "@nestjs/common";
import { CreateCustomerWithUserDTO } from "src/customers/aplication/dto/create-customer-with-user.dto";
import { RegisterCustomerAccountUseCase } from "src/customers/aplication/use-cases/register-customer-account.usecase";


@Controller('customers')
export class CustomerController {
  constructor(private readonly customer: RegisterCustomerAccountUseCase) {}

  @Post()
  async crear(@Body() body: CreateCustomerWithUserDTO) {
    return this.customer.execute(body);
  }
}
