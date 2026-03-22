import image_b2368b58fc5d95d8010bf296254cf21e74410c70 from 'figma:asset/b2368b58fc5d95d8010bf296254cf21e74410c70.png';
import { Target, Users, Award, Zap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const features = [
    {
      icon: Target,
      title: "Strategic Approach",
      description:
        "Data-driven strategies tailored to your business goals.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Seasoned professionals with years of industry experience.",
    },
    {
      icon: Award,
      title: "Proven Results",
      description:
        "Track record of delivering measurable ROI for clients.",
    },
    {
      icon: Zap,
      title: "Fast Execution",
      description:
        "Quick turnaround without compromising on quality.",
    },
  ];

  return (
    <section
      id="about"
      className="py-[100px] bg-[#F5F1E8] px-[0px]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <ImageWithFallback
              src={image_b2368b58fc5d95d8010bf296254cf21e74410c70}
              alt="Modern office workspace"
              className="rounded-[10px] shadow-xl w-full h-[500px] object-cover px-[-50px] py-[0px]"
            />
          </div>
          <div>
            <h2 className="mb-6 text-[32px] font-bold">
              Why Choose Us
            </h2>
            <p className="text-[rgb(108,108,108)] mb-8">
              DigiBoomi is a results-driven digital marketing
              agency based in Chennai, helping businesses
              improve online visibility, generate quality leads,
              and grow through strategic digital solutions.
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[rgb(255,255,255)] rounded-lg flex items-center justify-center">
                        <Icon
                          className="text-[#FF4000]"
                          size={24}
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-[rgb(108,108,108)]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}