import { IKImage } from "imagekitio-react";
import React from "react";

const Image = ({ src, className, w, h, alt }) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
      path={src}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      className={className}
      width={w}
      height={h}
      alt={alt}
      transformation={[
        {
          width: w,
          height: h,
        },
      ]}
    />
  );
};

export default Image;
