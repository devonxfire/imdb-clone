import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaThumbsUp } from "react-icons/fa";

export default function MovieCard({ result }) {
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2  duration-200 sm:hover:scale-105 transition-transform  ">
      <Link href={`/movie/${result.id}`}></Link>
      <Image
        src={`https://image.tmdb.org/t/p/original/${
          result.backdrop_path || result.poster_path
        }`}
        width={500}
        height={300}
        className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300"
      />
      <div className="p-2">
        {" "}
        <p className="line-clamp-2 text-md">{result.overview}</p>
        <h2 className="text-lg font-bold truncate mt-2">
          {result.title || result.name}
        </h2>
        <p className="flex items-center mt-2 text-sm">
          {result.release_date || result.first_air_date}
          <FaThumbsUp className="h-5 mr-1 ml-3" />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
}
