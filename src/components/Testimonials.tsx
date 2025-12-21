import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      content: 'DigiMarket transformed our online presence. We saw a 250% increase in qualified leads within just 3 months!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director, GrowthCo',
      content: 'The team is incredibly professional and data-driven. Their strategies have consistently delivered exceptional ROI.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, StyleHub',
      content: 'Best decision we made was partnering with DigiMarket. Their social media expertise took our brand to the next level.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-[100px] bg-white px-[0px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4 text-[32px] font-bold">What Our Clients Say</h2>
          <p className="text-[rgb(108,108,108)] max-w-2xl mx-auto">
            Don't just take our word for it - hear from businesses we've helped grow
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[rgb(245,241,232)] p-8 rounded-lg relative"
            >
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-[rgb(108,108,108)] mb-6">{testimonial.content}</p>
              <div>
                <div className="text-[rgb(0,0,0)]">{testimonial.name}</div>
                <div className="text-[rgb(108,108,108)] text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}