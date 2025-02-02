import React from "react";
import Image from "../components/Image";
import { Link } from "react-router-dom";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* detail */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            aliquid enim cumque. Odit, inventore id?
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">Bush Man</Link>
            <span>On</span>
            <Link>Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-weight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            cum perferendis ipsum fuga sit soluta rerum earum deserunt,
            obcaecati minima.
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src="postImg.jpeg" w="600" className="rounded-2xl" />
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="lg:text-lg flex flex-col gap-6 text-justify w-2/3">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem illo
            quae in soluta, quo blanditiis esse vel consequatur odit error
            omnis, culpa cumque optio, et illum asperiores nesciunt vero sed!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem illo
            quae in soluta, quo blanditiis esse vel consequatur odit error
            omnis, culpa cumque optio, et illum asperiores nesciunt vero sed!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem illo
            quae in soluta, quo blanditiis esse vel consequatur odit error
            omnis, culpa cumque optio, et illum asperiores nesciunt vero sed!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem illo
            quae in soluta, quo blanditiis esse vel consequatur odit error
            omnis, culpa cumque optio, et illum asperiores nesciunt vero sed!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem illo
            quae in soluta, quo blanditiis esse vel consequatur odit error
            omnis, culpa cumque optio, et illum asperiores nesciunt vero sed!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem illo
            quae in soluta, quo blanditiis esse vel consequatur odit error
            omnis, culpa cumque optio, et illum asperiores nesciunt vero sed!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem illo
            quae in soluta, quo blanditiis esse vel consequatur odit error
            omnis, culpa cumque optio, et illum asperiores nesciunt vero sed!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem illo
            quae in soluta, quo blanditiis esse vel consequatur odit error
            omnis, culpa cumque optio, et illum asperiores nesciunt vero sed!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem illo
            quae in soluta, quo blanditiis esse vel consequatur odit error
            omnis, culpa cumque optio, et illum asperiores nesciunt vero sed!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem illo
            quae in soluta, quo blanditiis esse vel consequatur odit error
            omnis, culpa cumque optio, et illum asperiores nesciunt vero sed!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem illo
            quae in soluta, quo blanditiis esse vel consequatur odit error
            omnis, culpa cumque optio, et illum asperiores nesciunt vero sed!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem illo
            quae in soluta, quo blanditiis esse vel consequatur odit error
            omnis, culpa cumque optio, et illum asperiores nesciunt vero sed!
          </p>
        </div>
        <div className="px-4 h-max sticky top-8 flex flex-col gap-3">
          <h1 className="text-sm font-medium">Author</h1>
          <div className=" flex flex-col gap-2">
            <div className="flex items-center gap-6">
              <Image
                src="userImg.jpeg"
                className="w-12 h-12 rounded-full object-cover"
                w="48"
                h="48"
              />
              <Link>Bush Man</Link>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg" />
              </Link>
              <Link>
                <Image src="instagram.svg" />
              </Link>
            </div>
            <PostMenuActions />
            {/* categories */}
            <div className="mb-3">
              <h1 className="text-sm font-medium">Categories</h1>
              <div className="flex flex-col gap-2 text-sm">
                <Link className="underline">All</Link>
                <Link className="underline" to="/">
                  Web Design
                </Link>
                <Link className="underline" to="/">
                  Development
                </Link>
                <Link className="underline" to="/">
                  Databases
                </Link>
                <Link className="underline" to="/">
                  Search Engines
                </Link>
                <Link className="underline" to="/">
                  Marketing
                </Link>
              </div>
            </div>

            {/* search */}
            <div className="mb-4">
              <h1 className="text-sm font-medium mb-2">Search</h1>
              <Search />
            </div>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default SinglePostPage;
