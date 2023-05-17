import { useState } from "react";
import Image from "next/image";
import useLocalStorageState from "use-local-storage-state";
import { StyledEditDeleteButton } from "./StyledButtons";
import { TiDelete } from "react-icons/ti";
import { FormContainer } from "./StyledFormElements";
import { StyledSection, StyledRowSection } from "./StyledSections";

export default function ImageUpload({ currentColony }) {
  const [image, setImage] = useState(null);
  const [imageValue, setImageValue] = useState("");

  const [isUploading, setIsUploading] = useState(false);
  const [uploadedImages, setUploadedImages] = useLocalStorageState(
    "uploadedImages",
    { defaultValue: [] }
  );

  function handleFileChange(event) {
    const file = event.target.files[0];

    setImage(file);

    setImageValue(event.target.value);
  }

  async function handleFileUpload(event) {
    event.preventDefault();

    setIsUploading(true);

    const formData = new FormData();

    formData.append("file", image);
    formData.append("upload_preset", process.env.NEXT_PUBLIC_UPLOAD_PRESET);
    formData.append("currentColony", currentColony.id);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDNAME}/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const json = await response.json();
      const imageWithColony = { ...json, currentColony: currentColony.id };
      setUploadedImages((uploadedImages) => [
        imageWithColony,
        ...uploadedImages,
      ]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsUploading(false);
      setImage(null);
      setImageValue("");
    }
  }

  function handleDeleteImage(imageId) {
    setUploadedImages((uploadedImages) =>
      uploadedImages.filter((image) => image.public_id !== imageId)
    );
  }

  return (
    <StyledSection>
      <h3>Image Upload</h3>
      <FormContainer onSubmit={handleFileUpload} marginBottom="1rem">
        <p>
          <label htmlFor="avatar">Please choose an image</label>
        </p>
        <input
          type="file"
          id="avatar"
          onChange={handleFileChange}
          value={imageValue}
        />
        {image && (
          <Image
            src={URL.createObjectURL(image)}
            width={150}
            height={150}
            alt="Preview of the image to upload"
            style={{ objectFit: "cover" }}
          />
        )}
        <button type="submit" disabled={!image}>
          {isUploading ? "Uploading …" : "Upload"}
        </button>
      </FormContainer>

      {uploadedImages &&
        uploadedImages
          .filter((image) => image.currentColony === currentColony.id)
          .map((image) => (
            <StyledRowSection key={image.public_id} marginBottom="1rem">
              <Image
                src={image.secure_url}
                width={200}
                height={200}
                alt={image.public_id}
                style={{ objectFit: "cover" }}
              />
              <StyledEditDeleteButton
                onClick={() => handleDeleteImage(image.public_id)}
                icon={TiDelete}
                ariaLabel={"delete"}
                padding="0.2rem 0.5rem 0 0.3rem"
              />
            </StyledRowSection>
          ))}
    </StyledSection>
  );
}
