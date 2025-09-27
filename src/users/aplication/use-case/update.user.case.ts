import { UserRepository } from "src/users/domain/user.repository";
import { UserDTO } from "../dto/user.dto";
import { UserDocument } from "src/users/infraestructura/repositories/schema/user.schema";
import { UpdateUserDto, UpdateUserInput } from "../dto/update.user.dto";

export interface  UpdateUserCaseinterface {
    execute(user:any, id:string): Promise<UserDocument | null>
}
export class UpdateUserCase implements UpdateUserCaseinterface {
    constructor(private readonly userRepository:UserRepository ){}

    execute(user:UpdateUserInput){
       
        return this.userRepository.update(user.id, user)
    }

}