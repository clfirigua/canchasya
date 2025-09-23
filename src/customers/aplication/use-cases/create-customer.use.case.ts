import { CustomerRepository } from "src/customers/domain/customer.respository";
import { CustomerDTO } from "../dto/customer.dto";
import { ValidateUniqueCustomerUseCase } from "./validateUniqueCustomerUseCase";
import { ConflictException } from "@nestjs/common";
import { messagesCustomers } from "src/config/responses/responses.customers";

export class CreateCustomerUseCase {
    private readonly validateUniqueCustomer: ValidateUniqueCustomerUseCase;
    constructor(private readonly repository: CustomerRepository) {
        this.validateUniqueCustomer = new ValidateUniqueCustomerUseCase(this.repository);
    }

    async execute(data: CustomerDTO) {
        const isUnique = await this.validateUniqueCustomer.execute(data.identificationNumber);
        if (!isUnique) {
            throw new ConflictException(messagesCustomers.validateUniqueCustomer(data.identificationNumber));
        }
        return this.repository.save(data as any);
    }
}