import { IsMongoId, IsOptional } from "class-validator";
import { UserDTO } from "./user.dto";

export class UpdateUserDto extends UserDTO {
    @IsMongoId()
    id: string;
}

export type UpdateUserInput = Partial<Omit<UpdateUserDto, 'id'>> & {
  id: string;
};