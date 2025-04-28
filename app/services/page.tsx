
import { services } from '@/components/services/ServicesData';

const ServicesPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-10 text-center text-yellow-500 dark:text-yellow-400">
        Our Services
      </h1>
      <div className="space-y-12">
        {services.map((service, index) => (
          <div key={index}>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              {service.title}
            </h2>
            <p className="leading-relaxed text-gray-700 dark:text-gray-400">
              {service.longDescription}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;