import { Schema, model } from 'mongoose';
import { TAbout } from './about.interface';

// creating a schema

const AboutSchema = new Schema<TAbout>(
  {
    name: { type: String, required: true },
    about: { type: String, required: true },
    img: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    facebook: { type: String, required: true },
    instagram: { type: String, required: true },
    linkedin: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

// creating a model

export const About = model<TAbout>('About', AboutSchema);
