import { CustomerRepository } from "src/customers/domain/customer.respository";

export class ValidateUniqueCustomerUseCase {
    constructor(private readonly repository:CustomerRepository) {}

    async execute(identificationNumber: number) {
        const customer = await this.repository.exists({ identificationNumber });
        return customer;
    }
}