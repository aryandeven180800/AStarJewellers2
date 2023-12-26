import React from 'react';

const myRingsImages = [
  'url_to_image_1.jpg',
  'url_to_image_2.jpg',
  'url_to_image_3.jpg',
  // Add more image URLs as needed
];

const RingsGallery: React.FC = () => {
  return (
    <div className="rings-gallery">
      <h2>My Rings Gallery</h2>
      <div className="photos-container">
        {myRingsImages.map((imageUrl, index) => (
          <div key={index} className="photo-item">
            <img src={imageUrl} alt={`Ring ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RingsGallery;
