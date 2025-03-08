import { Schema, model } from 'mongoose';
import { TProject } from './project.interface';

// creating a schema

const ProjectSchema = new Schema<TProject>(
  {
    title: { type: String, required: true },

    description: { type: String, required: true },
    link: { type: String },
    github: { type: String },
    img: [{ type: String }],
    technologies: [{ type: String }],
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

// creating a model

ProjectSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
ProjectSchema.pre('findOne', function (next) {
  this.findOne({ isDeleted: { $ne: true } });
  next();
});
ProjectSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

export const Project = model<TProject>('Project', ProjectSchema);
