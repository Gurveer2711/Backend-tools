# Backend-tools

A collection of backend utilities and tools for web development. This project includes authentication/user management as well as image uploading functionality (both to local storage and to Cloudinary).

## Setup

1. Create a `.env` file (see the example in `Multer-image uploading in cloud/.env`) and set the required environment variables including:
   - `PORT`: the port the server will run on.
   - `CLOUDINARY_CLOUD_NAME`
   - `CLOUDINARY_API_KEY`
   - `CLOUDINARY_API_SECRET`

2. Install the dependencies:
   ```sh
   npm install cloudinary fs multer dotenv
   ```

3. Start the server:
   ```sh
   npm start
   ```

## How It Works

- **Authentication & User Routes**  
  These routes allow user registration, login, profile retrieval, and profile updates. After registering or logging in, a JWT token is returned which should be included in the `Authorization` header for protected routes.

- **Image Uploading**  
  The project supports image uploading using Multer. Two upload endpoints are provided:
  - Local upload: saves the image in the local `uploads/` folder.
  - Cloudinary upload: uploads the image to Cloudinary, then deletes the local file.

### Image Upload Routes

- **POST /api/upload/local**  
  Upload an image to the local `uploads/` folder  
  **Expected field:** `image` (multipart/form-data)  
  **Returns:** Success message and the local file path

- **POST /api/upload/cloudinary**  
  Upload an image to Cloudinary  
  **Expected field:** `image` (multipart/form-data)  
  **Process:**  
    1. The image is first saved locally via Multer.
    2. The file is then uploaded to Cloudinary.
    3. The local copy is deleted after a successful upload.
  **Returns:** Success message and the secure URL of the uploaded image

## Error Handling

All routes return standard HTTP status codes:
- **200:** Success
- **400:** Bad Request (e.g., missing required fields or no file uploaded)
- **401:** Unauthorized (for protected routes without a valid JWT)
- **404:** Not Found
- **500:** Server Error (for unexpected errors)
