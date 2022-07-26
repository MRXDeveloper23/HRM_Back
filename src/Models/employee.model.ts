import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Organization extends Document {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  organization: {
    type: mongoose.Schema.Types.ObjectId;
    ref: 'organization';
  };

  @Prop()
  branch: {
    type: mongoose.Schema.Types.ObjectId;
    ref: 'branch';
  };
}

export const UserSchema = SchemaFactory.createForClass(Organization);
