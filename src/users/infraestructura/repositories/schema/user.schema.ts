import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from 'mongoose';


@Schema({ timestamps: true, versionKey: false })
export class User {
    @Prop({ type: String, required: true, unique: true })
    username: string;

    @Prop({ type: String, required: true, unique: true })
    email: string;

    @Prop({ type: String, required: true })
    password: string;

    @Prop({ type: Boolean, default: true })
    isActive: boolean;

    @Prop({ type: Types.ObjectId, ref: 'Role', required: true })
    roles: Types.ObjectId;

    @Prop({ type: Date })
    lastLogin: Date;

    @Prop({ type: String })
    profilePictureUrl: string;

    @Prop({ type: Types.ObjectId, ref: 'customers' })
    idCustomer?: Types.ObjectId;
}

export type UserDocument = User & Document; 
export const UserSchema = SchemaFactory.createForClass(User);