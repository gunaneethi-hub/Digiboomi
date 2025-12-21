import { useState, FormEvent } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

interface ContactModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  source?: string;
}

export function ContactModal({ isOpen, onOpenChange, source = "Contact Modal" }: ContactModalProps) {
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
          source: source,
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-900">
            Get a Free Consultation
          </DialogTitle>
          <DialogDescription>
            Fill out the form below to schedule your free consultation with our experts.
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
          {submitStatus === "success" && (
            <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
              Thank you! Your message has been sent successfully.
            </div>
          )}
          {submitStatus === "error" && (
            <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
              Oops! Something went wrong. Please try again.
            </div>
          )}
          <div>
            <label
              htmlFor="modal-name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="modal-name"
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
              htmlFor="modal-email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="modal-email"
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
              htmlFor="modal-phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone
            </label>
            <input
              type="tel"
              id="modal-phone"
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
              htmlFor="modal-message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="modal-message"
              name="message"
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
      </DialogContent>
    </Dialog>
  );
}
