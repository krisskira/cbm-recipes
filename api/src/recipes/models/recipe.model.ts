import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@ObjectType()
export class RecipeModel {

    @Field({ nullable: false })
    name: string;

    @Field(type => [String], { nullable: false })
    ingredients: string[];

    @Field({ nullable: false })
    image: string;
}

@Schema()
export class Recipe {

    @Prop()
    name: string;

    @Prop({ type: [String] })
    ingredients: string[];

    @Prop()
    image: string;
}
export type RecipeDocument = Recipe & Document;
export const RecipeSchema = SchemaFactory.createForClass(Recipe);