import Link from "next/link";
import React from "react";

export default function ServicesPage() {
  const data = [
    {
      _id: "1",
      services_name: "Web Development",
      services_image: "/24-hour-everyday-service.avif",
      services_description:
        "We provide responsive and modern web development services using the latest technologies.",
    },
    {
      _id: "2",
      services_name: "Graphic Design",
      services_image: "/images (1).jpg",
      services_description:
        "Our graphic design team creates stunning visuals for your brand and business.",
    },
    {
      _id: "3",
      services_name: "Digital Marketing",
      services_image: "/images (2).jpg",
      services_description:
        "We help you grow your business online with effective digital marketing strategies.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <p className="font-bold text-3xl mb-8 text-center">Services Page</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((d) => (
          <div
            key={d._id}
            className="border rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300"
          >
            <Link href={`/services/${d._id}`}>
              <img
                src={d.services_image}
                alt={d.services_name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            </Link>
            <h2 className="text-xl font-semibold mb-2">{d.services_name}</h2>
            <p className="text-gray-600">{d.services_description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
