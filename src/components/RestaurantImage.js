import React, { useState } from "react";

const RestaurantImage = ({ src, alt = "Restaurant image", fallback = "https://via.placeholder.com/400" }) => {
  const [imageError, setImageError] = useState(false);
  const displaySrc = imageError ? fallback : src;

  return (
    <img
      src={displaySrc}
      alt={alt}
      onError={() => setImageError(true)}
      style={{ width: "100%", height: "auto", borderRadius: "8px" }}
    />
  );
};

export default RestaurantImage;
