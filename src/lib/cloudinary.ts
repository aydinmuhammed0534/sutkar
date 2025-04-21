import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadImage = async (file: string): Promise<string> => {
  try {
    const result = await cloudinary.uploader.upload(file, {
      folder: 'sutkar-products',
    });
    return result.secure_url;
  } catch (error) {
    console.error('Cloudinary yükleme hatası:', error);
    throw new Error('Görsel yükleme başarısız oldu.');
  }
};

export const deleteImage = async (publicId: string): Promise<void> => {
  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.error('Cloudinary silme hatası:', error);
    throw new Error('Görsel silme başarısız oldu.');
  }
};

export default cloudinary; 