import { BaseRepository } from "src/shared/interface/base.repository";
import { Customer } from "./customer.entity";
import { BaseRepositoryMongo } from "src/shared/infrastructure/base.repository.mongo";
import { CustomerDocument } from "../infraestructura/repositories/schema/customer.schema";
import { Model } from "mongoose";

export interface CustomerRepository extends BaseRepositoryMongo<CustomerDocument> {
    
}

