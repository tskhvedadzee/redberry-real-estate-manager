import React from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { CiCirclePlus } from "react-icons/ci";

import "./UploadImage.scss";

export function UploadImage() {
  const [images, setImages] = React.useState([]);

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
  };

  return (
    <div className="image-upload">
      <ImageUploading
        value={images}
        onChange={onChange}
        maxNumber={1}
        maxFileSize={1000000}
      >
        {({ imageList, onImageUpload, isDragging, dragProps }) => (
          <div className="image-upload__wrapper">
            <span className="image-upload__title">ატვირთეთ ფოტო</span>
            <div
              className="image-upload__field"
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              <div className="image-upload__container">
                {imageList.length === 0 ? (
                  <CiCirclePlus className="image-upload__upload-icon" />
                ) : (
                  <>
                    {imageList.map((image, index) => (
                      <div key={index} className="image-upload__image-item">
                        <img
                          src={image.dataURL}
                          alt=""
                          className="image-upload__uploaded-image"
                        />
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
