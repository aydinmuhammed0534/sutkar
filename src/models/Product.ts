import mongoose, { Schema } from 'mongoose';

export interface IProduct {
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  stock: number;
  minOrder: number;
  features: string[];
  specifications: Record<string, string>;
  createdAt: Date;
  updatedAt: Date;
}

const productSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: [true, 'Ürün adı gereklidir'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Ürün açıklaması gereklidir'],
    },
    price: {
      type: Number,
      required: [true, 'Ürün fiyatı gereklidir'],
    },
    images: {
      type: [String],
      required: [true, 'En az bir ürün görseli gereklidir'],
    },
    category: {
      type: String,
      required: [true, 'Ürün kategorisi gereklidir'],
    },
    stock: {
      type: Number,
      required: [true, 'Stok bilgisi gereklidir'],
      min: 0,
    },
    minOrder: {
      type: Number,
      required: [true, 'Minimum sipariş miktarı gereklidir'],
      min: 1,
    },
    features: {
      type: [String],
      default: [],
    },
    specifications: {
      type: Map,
      of: String,
      default: {},
    },
  },
  { timestamps: true }
);

// Mongoose modellerini yalnızca bir kez oluşturmak için kontrol
const Product = mongoose.models.Product || mongoose.model<IProduct>('Product', productSchema);

export default Product; 