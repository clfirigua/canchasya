import { CustomerRepository } from "src/customers/domain/customer.respository";

export class ValidateUniqueCustomerUseCase {
    constructor(private readonly repository:CustomerRepository) {}

    async execute(identificationNumber: number) {
        const customer = await this.repository.findOne({ identificationNumber });
        return !customer;
    }
}