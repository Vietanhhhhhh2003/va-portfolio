import React from "react";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center ">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-white ">
        I am Nguyen Xuan Viet Anh, a third-year Computer Science student in the
        Troy University joint program at Hanoi University of Science and
        Technology. I am the founder and leader of several academic and
        technical initiatives, including Troy Research and Learning Club (a
        student-led academic community), Troy Course Lab (a curated resource
        platform), and Troy Tracker (a course and GPA management tool).
      </p>
      <button className="bg-[#41639D] border border-orange py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white">
        My Projects
      </button>
    </div>
  );
};

export default AboutMeText;
