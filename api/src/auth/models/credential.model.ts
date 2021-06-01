import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Mongoose } from 'mongoose';
import * as mongoose from 'mongoose';

@ObjectType()
export class Credential {

    @Field({ nullable: false })
    username: string;

    @Field({ nullable: false })
    password: string;
}

@Schema()
export class User {
    @Prop({ type: mongoose.Schema.Types.ObjectId })
    _id: string;

    @Prop()
    username: string;

    @Prop()
    password: string;

    @Prop()
    name: string;
}
export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);