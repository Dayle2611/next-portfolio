import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-60">
      <div className="max-width-[1240px] m-auto md:grid grid-cols-3 gap-8"></div>
      <div className="col-span-2">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          About
        </p>
        <h2 className="py-4">Who I Am</h2>
        <p className="py-2 text-gray-600">
          I'm just a boy sat in front of a computer trying to tell it to do
          stuff
        </p>
        <p className="py-2 text-gray-600">
          For years I worked part time jobs wondering what I wanted to do with
          my life. I always enjoyed technology and finding out how things
          worked. This lead me to browsing local college courses to see if I
          could make a career out of something I am passionate about.
        </p>
        <p className="py-2 text-gray-600">
          After completing a diploma at college I decided to pursue university
          and in my spare time I enjoy learning more about programming and how
          to build things with code.
        </p>
        <p className="py-$ text-gray-600 underline cursor-pointer">
          Check out my other work
        </p>
      </div>
      <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
        <img
          className="rounded-xl"
          src="https://images.unsplash.com/photo-1555066931-bf19f8fd1085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
