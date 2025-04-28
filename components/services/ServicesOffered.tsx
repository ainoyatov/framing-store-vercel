'use client'

import { services } from './ServicesData';

const ServicesOffered = () => {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Services We Offer</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.shortDescription}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesOffered;