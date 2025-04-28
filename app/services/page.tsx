
import { services } from '@/components/services/ServicesData';

const ServicesPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-10 text-center">Our Services</h1>
      <div className="space-y-12">
        {services.map((service, index) => (
          <div key={index}>
            <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
            <p className="text-gray-700 leading-relaxed">{service.longDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;