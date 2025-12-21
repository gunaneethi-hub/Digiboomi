import {
  TrendingUp,
  Users,
  DollarSign,
  Award,
} from "lucide-react";

export function Results() {
  const stats = [
    {
      icon: TrendingUp,
      value: "300%",
      label: "Average Traffic Increase",
    },
    {
      icon: Users,
      value: "50K+",
      label: "Leads Generated",
    },
    {
      icon: DollarSign,
      value: "$10M+",
      label: "Revenue Generated",
    },
    {
      icon: Award,
      value: "50+",
      label: "Industry Awards",
    },
  ];

  return (
    <section id="results" className="py-[100px] bg-[rgb(21,21,21)] px-[0px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-2 text-[32px] text-white font-normal font-bold">
            Results that speak
          </h2>
          <p className="text-[rgb(255,255,255)] max-w-2xl mx-auto">
            Our track record of success across hundreds of
            client campaigns
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#CC3300] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-white" size={32} />
                </div>
                <div className="text-white mb-2 text-[32px] font-norma">
                  {stat.value}
                </div>
                <div className="text-[rgb(255,255,255)]">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}