import {
  ImagePlus,
  LoaderCircle,
  Upload,
  X,
} from "lucide-react";

import {
  useState
} from "react";

import type {ChangeEvent} from "react";

import api from "../../lib/api";

interface ProjectImageUploaderProps {
  projectId: string;
  onUploaded?: (images: string[]) => void;
}

const ProjectImageUploader = ({
  projectId,
  onUploaded,
}: ProjectImageUploaderProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const handleFiles = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFiles = Array.from(
      event.target.files || []
    );

    const imageFiles = selectedFiles.filter((file) =>
      file.type.startsWith("image/")
    );

    if (imageFiles.length === 0) {
      setError("Please select valid image files.");
      return;
    }

    const limitedFiles = imageFiles.slice(0, 10);

    // Clean up old preview URLs
    previews.forEach((preview) => {
      URL.revokeObjectURL(preview);
    });

    setFiles(limitedFiles);

    setPreviews(
      limitedFiles.map((file) =>
        URL.createObjectURL(file)
      )
    );

    setError("");
  };

  const removeFile = (index: number) => {
    const previewToRemove = previews[index];

    if (previewToRemove) {
      URL.revokeObjectURL(previewToRemove);
    }

    setFiles((current) =>
      current.filter((_, i) => i !== index)
    );

    setPreviews((current) =>
      current.filter((_, i) => i !== index)
    );
  };

  const handleUpload = async () => {
    if (!files.length) {
      return;
    }

    try {
      setUploading(true);
      setError("");

      const formData = new FormData();

      files.forEach((file) => {
        formData.append("images", file);
      });

      const response = await api.post(
        `/projects/${projectId}/images`,
        formData
      );

      onUploaded?.(
        response.data.data.gallery
      );

      previews.forEach((preview) => {
        URL.revokeObjectURL(preview);
      });

      setFiles([]);
      setPreviews([]);
    } catch (error) {
      console.error("Upload failed:", error);

      setError(
        "Unable to upload images. Please try again."
      );
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="rounded-3xl border border-[var(--border)] bg-white/[0.02] p-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3">
          <ImagePlus
            size={20}
            className="text-violet-400"
          />

          <h3 className="font-bold">
            Project Screenshots
          </h3>
        </div>

        <p className="mt-2 text-sm text-[var(--muted)]">
          Upload screenshots of the project
          interface.
        </p>
      </div>

      {/* Upload */}
      <label className="mt-6 flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-[var(--border)] p-8 text-center transition hover:border-violet-500/40 hover:bg-violet-500/5">
        <Upload
          size={24}
          className="text-[var(--muted)]"
        />

        <span className="mt-3 text-sm font-semibold">
          Select screenshots
        </span>

        <span className="mt-1 text-xs text-[var(--muted)]">
          PNG, JPG, JPEG or WEBP
        </span>

        <input
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={handleFiles}
        />
      </label>

      {/* Previews */}
      {previews.length > 0 && (
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {previews.map((preview, index) => (
            <div
              key={preview}
              className="group relative overflow-hidden rounded-xl border border-[var(--border)]"
            >
              <div className="flex aspect-video w-full items-center justify-center overflow-hidden bg-black/20 p-2">
  <img
    src={preview}
    alt={`Preview ${index + 1}`}
    className="h-full w-full object-contain"
  />
</div>

              <button
                type="button"
                onClick={() => removeFile(index)}
                disabled={uploading}
                className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Remove image"
              >
                <X size={15} />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Error */}
      {error && (
        <p className="mt-4 text-sm text-red-400">
          {error}
        </p>
      )}

      {/* Upload Button */}
      {files.length > 0 && (
        <button
          type="button"
          disabled={uploading}
          onClick={handleUpload}
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[var(--foreground)] px-5 py-3 text-sm font-semibold text-[var(--background)] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {uploading ? (
            <>
              <LoaderCircle
                size={16}
                className="animate-spin"
              />

              Uploading...
            </>
          ) : (
            <>
              <Upload size={16} />

              Upload {files.length} Images
            </>
          )}
        </button>
      )}
    </div>
  );
};

export default ProjectImageUploader;