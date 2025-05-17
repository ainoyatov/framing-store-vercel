import { Metadata } from 'next';
import { services } from '@/components/services/ServicesData';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Same-day framing in Scottsdale, fast framing in Phoenix, discount framing, art pickup, delivery, framing repair, canvas stretching, custom frames, local frame shop, expert framing, art installation',
  robots: {
    follow: true,
    index: true
  },
}

const ServicesPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="m-8 max-md:mt-10 flex justify-center text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#026974] to-[#00a8e8] bg-clip-text text-transparent">
          Our Services
        </h1>
      </div>
      <div className="space-y-12 px-4">
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