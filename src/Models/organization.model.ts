import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Organization extends Document {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ unique: true })
  branches: [
    {
      type: mongoose.Schema.Types.ObjectId;
      ref: 'branch';
    },
  ];

  @Prop({ required: true })
  employees: [
    {
      type: mongoose.Schema.Types.ObjectId;
      ref: 'employee';
    },
  ];
}

export const UserSchema = SchemaFactory.createForClass(Organization);
