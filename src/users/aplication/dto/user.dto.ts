import { IsBoolean, IsDate, IsMongoId, IsOptional, IsString, IsUrl } from "class-validator";

export class UserDTO {

    @IsString()
    username: string;

    @IsString()
    email: string;

    @IsString()
    password: string;

    @IsBoolean()
    isActive: boolean;

    @IsMongoId()
    roles: string;

    @IsDate()
    @IsOptional()
    lastLogin: Date;

    @IsUrl()
    @IsOptional()
    profilePictureUrl: string;

    @IsMongoId()
    @IsOptional()
    idCustomer?: string;
}
