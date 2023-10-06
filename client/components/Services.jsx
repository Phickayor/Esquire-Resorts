import React from "react";
function Services() {
  var services = [
    {
      image: "/icons/food.png",
      name: "Exquisite Culinary Delights.",
      desc: "Indulge in our mouthwatering, high-quality cuisine"
    },
    {
      image: "/icons/serene.png",
      name: "Serene Enviroment",
      desc: "Relax and rejuvenate in our tranquil and peaceful surroundings."
    },
    {
      image: "/icons/memorable.png",
      name: "Memorable Experiences",
      desc: "We create unforgettable moments that exceed expectations."
    },
    {
      image: "/icons/satisfaction.png",
      name: " Unmatched Customer Satisfaction",
      desc: "We strive to ensure your utmost satisfaction."
    },
    {
      image: "/icons/security.png",
      name: "A Trusted Destination",
      desc: " Choose us for a trusted and reliable hospitality experience."
    }
  ];

  return (
    <div>
      <h1 className="heading">
        Why <span className="text-purple-500">Choose</span> Us
        <span className="text-purple-500">?</span>
      </h1>
      <p className="desc">
        Choose us for unparalleled luxury, exquisite cuisine, serene ambiance,
        and exceptional service.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
        {services.map((service) => (
          <div className="hover:scale-105 space-y-4 shadow-2xl shadow-slate-700 rounded-xl p-6">
            <img src={service.image} />
            <h1 className="text-lg font-semibold">{service.name}</h1>
            <p className="">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
