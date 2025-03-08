import { Schema, model } from 'mongoose';
import { TBlog } from './blog.interface';

// creating a schema

const BlogSchema = new Schema<TBlog>(
  {
    title: { type: String, required: true },

    description: { type: String, required: true },
    author: { type: String },
    img: { type: String },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

// creating a model

BlogSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
BlogSchema.pre('findOne', function (next) {
  this.findOne({ isDeleted: { $ne: true } });
  next();
});
BlogSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

export const Blog = model<TBlog>('Blog', BlogSchema);
