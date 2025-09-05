import { BaseRepositoryMongo } from "src/shared/infrastructure/base.repository.mongo";
import { UserDocument, User } from '../infraestructura/repositories/schema/user.schema';

export interface UserRepository extends BaseRepositoryMongo<UserDocument> {
    
}

