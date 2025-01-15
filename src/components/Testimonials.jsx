import React from 'react';

const Testimonial = ({ name, company, quote, image }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <div className="flex items-center mb-4">
      <img src={image || "/placeholder.svg"} alt={name} className="w-12 h-12 rounded-full mr-4" />
      <div>
        <h4 className="font-semibold">{name}</h4>
        <p className="text-gray-600 text-sm">{company}</p>
      </div>
    </div>
    <p className="text-gray-700 italic">"{quote}"</p>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      company: 'Tech Innovators',
      quote: 'Phox Hosting has been a game-changer for our business. Their reliable servers and excellent support have helped us grow exponentially.',
      image: '/john-doe.jpg',
    },
    {
      name: 'Jane Smith', 
      company: 'E-commerce Solutions',
      quote: "We've tried many hosting providers, but Phox stands out with its exceptional service.",
      image: '/jane-smith.jpg',
    },
    {
      name: 'Mike Johnson',
      company: 'Digital Agency',
      quote: 'The security features and daily backups give us peace of mind. Phox Hosting is the perfect solution for our clients\' websites.',
      image: '/mike-johnson.jpg',
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
