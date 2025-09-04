import { IsString, IsBoolean, IsDate, IsMongoId, IsOptional, IsUrl, ValidateNested, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class CoordinatesDto {
    @IsNumber()
    lat: number;

    @IsNumber()
    lng: number;
}



export class CustomerDTO {

    @IsMongoId()
    @IsOptional()
    _id?: string;

    @IsString()
    name: string;

    @IsString()
    phone: string;

    @IsString()
    address: string;

    @ValidateNested()
    @Type(() => CoordinatesDto)
    coordinates: CoordinatesDto;

    @IsMongoId()
    userId: string;

    @IsUrl()
    @IsOptional()
    logoUrl?: string;

    @IsBoolean()
    isActive: boolean;


    @IsDate()
    @IsOptional() 
    createdAt?: Date;

    @IsDate()
    @IsOptional()
    updatedAt?: Date;
}

