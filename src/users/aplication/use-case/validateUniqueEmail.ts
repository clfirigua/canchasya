import { UserRepository } from "src/users/domain/user.repository";

export class ValidateUniqueEmail {
    constructor(private readonly repositori: UserRepository) {}

    async execute(email:string):Promise<Boolean>{
        const user = await this.repositori.exists({email})
        return user
    }
}