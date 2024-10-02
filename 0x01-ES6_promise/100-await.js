/* eslint-disable import/extensions */
import { uploadPhoto, createUser } from './utils.js';
/* eslint-enable import/extensions */

export default async function asyncUploadUser() {
  try {
    // Execute both asynchronous functions using await
    const photo = await uploadPhoto();
    const user = await createUser();

    // Return the object with the resolved values
    return {
      photo,
      user,
    };
  } catch (error) {
    // If any error occurs, return an object with null values
    return {
      photo: null,
      user: null,
    };
  }
}
