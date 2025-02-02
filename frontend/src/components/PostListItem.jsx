import React from "react";
import Image from "./Image";
import { Link } from "react-router-dom";

const PostListItem = () => {
  return (
    <div className="flex xl:flex-row gap-8">
      {/* image */}
      <div className="w-1/3 ">
        <Image src="postImg.jpeg" className="rounded-2xl object-cover" />
      </div>
      {/* details */}

      <div className="flex flex-col gap-2 w-2/3">
        <Link to="/test" className="text-4xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link className="text-blue-800">Bush Man</Link>
          <span>On</span>
          <Link>Web Design</Link>
          <span>2 days ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
          maiores nobis! Ipsam eum laboriosam iste qui vitae. Dolorem obcaecati
          qui vitae facilis eius quo sed aperiam magni temporibus neque. Non?
        </p>
        <Link to="/test" className="underline text-blue-800 text-sm">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
