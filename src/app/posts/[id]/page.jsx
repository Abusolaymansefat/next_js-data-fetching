import React from "react";


export const getSinglePosts = async (post_id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`);
  const data = await res.json();
  return data;
};
export default async function SinglePost({params}) {
    const p = await params;
    const singlePost = await getSinglePosts(p.id)
  return <div className="space-y-5">
    <p className="text-2xl font-bold text-[#fb7200]"> Single Post {JSON.stringify(singlePost)}</p>

    <h1 className="text-2xl">{singlePost.title}</h1>
    <p>{singlePost.body}</p>
  </div>;
}
