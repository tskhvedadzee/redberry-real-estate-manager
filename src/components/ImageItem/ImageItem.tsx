import React from "react";

import "./ImageItem.scss";

interface ImageItemProps {
  image: string;
  badge: string;
}

const ImageItem: React.FC<ImageItemProps> = ({ image, badge }) => {
  return (
    <div className="image-item">
      <img className="image-item__image" src={image} alt="image" />
      <span className="image-item__badge">{badge}</span>
    </div>
  );
};

export default ImageItem;
