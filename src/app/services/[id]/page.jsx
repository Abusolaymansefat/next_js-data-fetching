import React from "react";

export default function ServicesDetailPage({ params }) {
  const data = [
    {
      _id: "1",
      services_name: "Web Development",
      services_image: "/images (1).jpg",
      services_description:
        "We provide responsive and modern web development services using the latest technologies.",
    },
    {
      _id: "2",
      services_name: "Graphic Design",
      services_image: "/images (2).jpg",
      services_description:
        "Our graphic design team creates stunning visuals for your brand and business.",
    },
    {
      _id: "3",
      services_name: "Digital Marketing",
      services_image: "/24-hour-everyday-service.avif",
      services_description:
        "We help you grow your business online with effective digital marketing strategies.",
    },
  ];

  const id = params?.id;
  const singleData = data.find((d) => d._id === id);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Service Detail</h1>
      <img
        src={singleData.services_image}
        alt={singleData.services_name}
        className="w-full h-64 object-cover rounded mb-4"
      />
      <h2 className="text-2xl font-semibold mb-2">{singleData.services_name}</h2>
      <p className="text-gray-700">{singleData.services_description}</p>
    </div>
  );
}
