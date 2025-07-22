import Link from "next/link";
import React from "react";
import style from "./post.module.css";

export const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

export const metadata = {
  title: "ALL POST | Learning Next js",
  description: "Loading JSON placeholder posts using server componet",
};
export default async function Posts() {
  const posts = await getPosts();
  return (
    <div className="grid grid-cols-4 gap-5">
      {posts.map((singlePost) => {
        return (
          <div key={singlePost.id} className="border-2 border-slate-200 p-6">
            <p className={`text-2xl font-bold ${style["post-title"]}`}>
              {singlePost.title}
            </p>
            <p className="font-semibold">{singlePost.body}</p>
            <Link href={`/posts/${singlePost.id}`}>
              <button className="text-2xl text-cyan-100 bg-blue-400 p-2">
                Details
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
