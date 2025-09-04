import { CustomerRepository } from "src/customers/domain/customer.respository";
import { CustomerDTO } from "../dto/customer.dto";

export class CreateCustomerUseCase {
    constructor(private readonly repository:CustomerRepository) {}

    execute(data: CustomerDTO) {
        return this.repository.save(data as any);
    }
}