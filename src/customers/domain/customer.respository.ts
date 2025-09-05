import { BaseRepositoryMongo } from "src/shared/infrastructure/base.repository.mongo";
import { CustomerDocument } from "../infraestructura/repositories/schema/customer.schema";

export interface CustomerRepository extends BaseRepositoryMongo<CustomerDocument> {
    
}

