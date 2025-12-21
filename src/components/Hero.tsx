import { ArrowRight, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroProps {
  onGetStartedClick: () => void;
}

export function Hero({ onGetStartedClick }: HeroProps) {
  return (
    <section
      id="home"
      className="pt-[96px] pb-[54px] bg-[#F5F1E8] relative overflow-hidden pr-[0px] pl-[0px]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-center items-center">
<div className="text-center mx-auto max-w-6xl">            <div className="inline-flex items-center space-x-2 bg-[rgb(255,255,255)] text-[#FF4000] px-[10px] py-[5px] rounded-[-158px] mb-2 rounded-[4px] font-bold font-normal">
              <span className="text-sm text-[12px] text-[rgb(0,0,0)] font-normal">
                Grow your business online
              </span>
            </div>
            <div className="w-full">
              <h1 className="mb-6 text-[64px] sm:text-[72px] md:text-[88px] lg:text-[120px] leading-snug text-center font-[Bricolage_Grotesque] font-bold tracking-[-0.02em]">
                Grow Smarter. Grow Faster.<br />
                With DigiBoomi<span className="text-[#FF4000]">.</span>
              </h1>
            </div>
            <p className="text-[rgb(51,51,51)] mb-8 text-lg text-[20px] text-center">
              We help brands boost visibility, generate leads,
              and scale with powerful digital marketing,<br />modern
              websites, and high-conversion designs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onGetStartedClick}
                className="fixed bottom-4 left-4 right-4 z-50 sm:static sm:inset-auto sm:z-auto bg-[rgb(255,64,0)] text-[rgb(255,255,255)] px-[32px] py-[20px] rounded-[8px] hover:bg-[#CC3300] transition-all duration-300 flex items-center justify-center space-x-2 text-left shadow-lg sm:shadow-2xl sm:hover:shadow-[0_20px_50px_rgba(0,0,0,0.100)] hover:scale-103"
              >
                <span className="font-bold font-normal">Start growing today</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}