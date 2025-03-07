import React from "react";
import Image from "./Image";
import { Link } from "react-router-dom";

const FeaturedPosts = () => {
  return (
    <div className=" mt-8 flex flex-col lg:flex-row gap-8">
      {/* first */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* image */}
        <Image src="featured1.jpeg" className="rounded-3xl object-cover" />

        {/* details */}
        <div className=" flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link className="text-blue-800 lg:text-lg">Web Design</Link>
          <span className="text-gray-500">2 days ago</span>
        </div>
        {/* title */}
        <Link
          to="/test"
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Link>
      </div>

      {/* others */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* second */}
        <div className="flex gap-4 lg:h-1/3 justify-between">
          <Image
            src="featured2.jpeg"
            className="rounded-3xl object-cover w-1/3"
          />
          {/* detials and title */}
          <div className="w-2/3">
            {/* details */}
            <div className=" flex items-center gap-4">
              <h1 className="font-semibold lg:text-lg">02.</h1>
              <Link className="text-blue-800 lg:text-lg">Web Design</Link>
              <span className="text-gray-500">2 days ago</span>
            </div>
            {/* title */}
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
        {/* third */}
        <div className="flex gap-4 lg:h-1/3 justify-between">
          <Image
            src="featured3.jpeg"
            className="rounded-3xl object-cover w-1/3"
          />
          {/* detials and title */}
          <div className="w-2/3">
            {/* details */}
            <div className=" flex items-center gap-4">
              <h1 className="font-semibold lg:text-lg">02.</h1>
              <Link className="text-blue-800 lg:text-lg">Web Design</Link>
              <span className="text-gray-500">2 days ago</span>
            </div>
            {/* title */}
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
        {/* fourth */}
        <div className="flex gap-4 lg:h-1/3 justify-between">
          <Image
            src="featured4.jpeg"
            className="rounded-3xl object-cover w-1/3"
          />
          {/* detials and title */}
          <div className="w-2/3">
            {/* details */}
            <div className=" flex items-center gap-4">
              <h1 className="font-semibold lg:text-lg">02.</h1>
              <Link className="text-blue-800 lg:text-lg">Web Design</Link>
              <span className="text-gray-500">2 days ago</span>
            </div>
            {/* title */}
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
