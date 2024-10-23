import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      rating: 5,
      comment: "Sepatu sangat nyaman dipakai dan kualitasnya sangat bagus. Pengiriman juga cepat!",
      date: "12 Mar 2024"
    },
    {
      id: 2,
      name: "Jane Smith",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      rating: 4,
      comment: "Pelayanan customer service sangat ramah dan membantu. Recommended seller!",
      date: "10 Mar 2024"
    },
    {
      id: 3,
      name: "Mike Johnson",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      rating: 5,
      comment: "Produk original dan sesuai dengan deskripsi. Akan belanja lagi disini!",
      date: "8 Mar 2024"
    }
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Testimoni Pelanggan</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold">{testimonial.name}</h3>
                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>
              <span className="text-sm text-gray-500 ml-auto">
                {testimonial.date}
              </span>
            </div>
            <p className="text-gray-600">{testimonial.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;