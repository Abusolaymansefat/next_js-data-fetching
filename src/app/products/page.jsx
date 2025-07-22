import React from "react";

export default async function ProductsPage() {
  const res = await fetch("http://localhost:3000/api/items", {
    cache: "force-cache",
  })
  const data = await res.json();
  return (
    <ul className="text-white text-center mt-10">
      {data?.map((singleProduct) => {
        return<li key={singleProduct._id}>{singleProduct?.productName}</li>;
      })}
    </ul>
  );
}
