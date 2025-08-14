import React from "react";

const AboutMeImages = () => {
  return (
    <div className="h-[500px] w-[300px] relative ">
      <div className="h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden">
        <img
          src="../../public/images/AboutMeImages.jpg"
          alt="about me images"
          className="h-full w-auto object-cover"
        />
      </div>
    </div>
  );
};

export default AboutMeImages;
