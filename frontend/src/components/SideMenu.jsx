import React from "react";
import Search from "./Search.jsx";
import { Link } from "react-router-dom";
const SideMenu = () => {
  return (
    <div className="px-4 h-max sticky top-8">
      <h1 className="mb-4 text-sm font-medium">Search</h1>
      <Search />
      <h1 className="mt-8 mb-4 text-sm font-medium">Filter</h1>
      <div className="flex flex-col gap-2 text-sm">
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="newest"
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer checked:bg-blue-800 bg-white"
          />
          Newest
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="popular"
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer checked:bg-blue-800 bg-white"
          />
          Most Popular
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="trending"
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer checked:bg-blue-800 bg-white"
          />
          Trending
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="oldest"
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer checked:bg-blue-800 bg-white"
          />
          Oldest
        </label>
      </div>
      <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
      {/* categories */}
      <div className="mb-3">
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
    </div>
  );
};

export default SideMenu;
