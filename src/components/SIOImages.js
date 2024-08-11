import { useState, useEffect } from "react";
import Image from "next/image";
import PropTypes from "prop-types";

export default function SeeItOnImages({ productId }) {
  const [sioImages, setSIOImages] = useState([]);

  useEffect(() => {
    // Fetch SeeItOn images related to this specific product
    fetch(`/api/fetchSIOUrls?productId=${productId}`)
      .then((res) => res.json())
      .then((data) => {
        const { sio_urls } = data;
        setSIOImages(sio_urls);
      })
      .catch((error) => {
        console.error("Failed to fetch SIO images:", error);
      });
  }, [productId]);

  return (
    <div className="sioImages">
      {sioImages.length > 0 ? (
        sioImages.map((image, index) => (
          <Image
            key={index}
            src={image.sio_url}
            alt={`See It On - ${productId}`}
            width={100}
            height={100}
            style={{
              width: "100%",
              height: "auto",
              marginTop: "10px",
              objectFit: "cover",
            }}
          />
        ))
      ) : (
        <p>No related images available.</p>
      )}
    </div>
  );
}

SeeItOnImages.propTypes = {
  productId: PropTypes.number.isRequired,
};
