// lib/fetchImage.ts

import { storage } from "./appwrite.config";

export const fetchImage = async (fileId: string) => {
  try {
    // Fetch the file preview URL (you can also use getFile or getFileDownload if you want to get the original file)
    const preview = await storage.getFilePreview("[YOUR_BUCKET_ID]", fileId);
    return preview.href; // Return the URL for displaying in your component
  } catch (error) {
    console.error("Failed to fetch image:", error);
  }
};

export default fetchImage;
