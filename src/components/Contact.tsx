import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, FormEvent } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Replace this with your Google Apps Script web app URL
  const APPS_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyDrFEeVORv38Ondcb_-cKpjbZS3ykSIlmIATrPrqv--a8R4F-smwJ0Iv6NX2iRE42p/exec";

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Apps Script requires no-cors mode
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          timestamp: new Date().toISOString(),
        }),
      });

      // With no-cors mode, we can't read the response, so we assume success
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");

      // Clear error message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-[100px] bg-[#F5F1E8] px-[0px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-gray-1000 mb-6 text-[64px] leading-none md:leading-tight text-left p-[0px] font-[Bricolage_Grotesque] font-bold">
              Ready to Grow Your Business?
            </h1>

            <p className="text-[rgb(108,108,108)] mb-8">
              Let's discuss how we can help you achieve your
              digital marketing goals. <br />
              Get in touch with us today for a free
              consultation.
            </p>

            <div className="space-y-5 mb-1">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[rgb(255,255,255)] rounded-lg flex items-center justify-center">
                  <Mail className="text-[#FF4000]" size={24} />
                </div>
                <div>
                  <div className="text-gray-900 font-bold">
                    Email Us
                  </div>
                  <div className="text-[rgb(108,108,108)] text-[15px]">
                    hello@digiboomi.com
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[rgb(255,255,255)] rounded-lg flex items-center justify-center">
                  <Phone className="text-[#FF4000]" size={24} />
                </div>
                <div>
                  <div className="text-gray-900 font-bold">
                    Call Us
                  </div>
                  <div className="text-[rgb(108,108,108)] text-[15px]">
                    +91 8248421284
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[rgb(255,255,255)] rounded-lg flex items-center justify-center">
                  <MapPin
                    className="text-[#FF4000]"
                    size={24}
                  />
                </div>
                <div>
                  <div className="text-gray-900 font-bold">
                    Visit Us
                  </div>
                  <div className="text-[rgb(108,108,108)] text-[15px]">
                    No 19, MG Nagar St, Urappakam,
                    <br />
                    Tamil Nadu 603211, India
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Get a Free Consultation
              </h3>
              <form
                className="space-y-4"
                onSubmit={handleSubmit}
              >
                {submitStatus === "success" && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    Thank you! Your message has been sent
                    successfully.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                    Oops! Something went wrong. Please try
                    again.
                  </div>
                )}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[rgb(0,0,0)] mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FF4000] focus:border-transparent outline-none transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FF4000] focus:border-transparent outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FF4000] focus:border-transparent outline-none transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FF4000] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#FF4000] text-[rgb(255,255,255)] font-bold py-3 rounded-lg hover:bg-[#CC3300] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}