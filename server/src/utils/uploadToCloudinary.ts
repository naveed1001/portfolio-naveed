import cloudinary from "../config/cloudinary";

export const uploadToCloudinary =
  (
    buffer: Buffer,
    folder: string
  ): Promise<{
    secure_url: string;
    public_id: string;
  }> => {
    return new Promise(
      (resolve, reject) => {
        const stream =
          cloudinary.uploader.upload_stream(
            {
              folder,

              resource_type:
                "image",

              transformation: [
                {
                  width: 1800,
                  height: 1200,
                  crop: "limit",
                  quality: "auto",
                  fetch_format: "auto",
                },
              ],
            },

            (error, result) => {
              if (
                error ||
                !result
              ) {
                reject(
                  error ||
                    new Error(
                      "Cloudinary upload failed"
                    )
                );

                return;
              }

              resolve({
                secure_url:
                  result.secure_url,

                public_id:
                  result.public_id,
              });
            }
          );

        stream.end(buffer);
      }
    );
  };