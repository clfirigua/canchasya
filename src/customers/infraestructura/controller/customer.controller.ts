import { Body, Controller, Post } from "@nestjs/common";
import { CustomerDTO } from "src/customers/aplication/dto/customer.dto";
import { CreateCustomerUseCase } from "src/customers/aplication/use-cases/create-customer.use.case";


@Controller('customers')
export class CustomerController {
  constructor(private readonly customer: CreateCustomerUseCase) {}

  @Post()
  async crear(@Body() body: CustomerDTO) {
    return this.customer.execute(body);
  }
}
