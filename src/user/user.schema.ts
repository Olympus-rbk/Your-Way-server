import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Document } from 'mongoose';
@Schema()
export class User {
  @Prop()
  username: string;
  @Prop({require: true})
  password: string;
  @Prop({require: true})
  email: string;
  @Prop()
  phone: number;
  @Prop()
  date_of_birth: string;
  @Prop()
  gender: string ;
}

export const UserSchema = SchemaFactory.createForClass(User);
