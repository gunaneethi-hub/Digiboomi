import {
  Search,
  Share2,
  Mail,
  BarChart3,
  PenTool,
  Megaphone,
} from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Search,
      title: "SEO Optimization",
      description:
        "Boost your search rankings and drive organic traffic with our proven SEO strategies.",
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description:
        "Engage your audience and build brand awareness across all major social platforms.",
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description:
        "Create targeted campaigns that convert subscribers into loyal customers.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description:
        "Make data-driven decisions with comprehensive analytics and insights.",
    },
    {
      icon: PenTool,
      title: "Content Creation",
      description:
        "Compelling content that resonates with your audience and drives engagement.",
    },
    {
      icon: Megaphone,
      title: "PPC Advertising",
      description:
        "Maximize ROI with targeted pay-per-click campaigns on Google and social media.",
    },
  ];

  return (
    <section
      id="services"
      className="py-[40px] bg-[rgb(245,241,232)] px-[0px] pt-[30px] pr-[0px] pb-[60px] pl-[0px]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-2 text-[32px] font-bold">
            Our Services
          </h2>
          <p className="text-[rgb(108,108,108)] max-w-2xl mx-auto">
            Comprehensive digital marketing solutions tailored
            to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-lg transition-all bg-[rgb(255,255,255)]"
              >
                <div className="w-14 h-14 bg-[rgb(255,255,255)] rounded-lg flex items-center justify-center mb-[24px] group-hover:bg-[#FF4000] transition-colors mt-[0px] mr-[0px] ml-[-10px]">
                  <Icon
                    className="text-[#FF4000] group-hover:text-black transition-colors"
                    size={28}
                  />
                </div>
                <h3 className="text-[rgb(0,0,0)] mb-3 text-[20px] font-semibold">
                  {service.title}
                </h3>
                <p className="text-[rgb(108,108,108)]">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}