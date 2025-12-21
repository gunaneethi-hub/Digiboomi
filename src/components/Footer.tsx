import image_5a3ddbb0014bb172d1b824fbff370b77b898e155 from 'figma:asset/5a3ddbb0014bb172d1b824fbff370b77b898e155.png';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[rgb(21,21,21)] text-white py-12 pt-[48px] pr-[0px] pb-[8px] pl-[0px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <img
                src={image_5a3ddbb0014bb172d1b824fbff370b77b898e155}
                alt="DigiBoomi"
                className="h-6"
              />
            </div>
            <p className="text-[rgb(187,187,187)] text-sm">
              Transforming businesses through innovative digital
              marketing strategies.
            </p>
          </div>

          <div className="m-[0px]">
            <h3 className="text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-[rgb(187,187,187)]">
              <li>
                <a
                  href="#"
                  className="footer-link text-[rgb(187,187,187)] hover:text-[#FF4000] transition-colors"
                >
                  SEO Optimization
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer-link text-[rgb(187,187,187)] hover:text-[#FF4000] transition-colors"
                >
                  Social Media
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer-link text-[rgb(187,187,187)] hover:text-[#FF4000] transition-colors"
                >
                  Email Marketing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer-link text-[rgb(187,187,187)] hover:text-[#FF4000] transition-colors"
                >
                  PPC Advertising
                </a>
              </li>
            </ul>
          </div>

          <div className="m-[0px] mx-[20px] my-[0px]">
            <h3 className="text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-[rgb(187,187,187)]">
                <a
                  href="#"
                  className="footer-link text-[rgb(187,187,187)] hover:text-[#FF4000] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer-link text-[rgb(187,187,187)] hover:text-[#FF4000] transition-colors"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer-link text-[rgb(187,187,187)] hover:text-[#FF4000] transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="footer-link text-[rgb(187,187,187)] hover:text-[#FF4000] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">Stay Connected</h3>
            <p className="text-[rgb(187,187,187)] text-sm mb-4">
              Follow us on social media for tips and updates
            </p>
            <div className="flex space-x-5">
              <a
                href="https://www.instagram.com/digiboomi"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link text-[rgb(187,187,187)] hover:text-[#FF4000] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/digiboomi"
                className="footer-link text-[rgb(187,187,187)] hover:text-[#FF4000] transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:hello@digiboomi.com"
                className="footer-link text-[rgb(187,187,187)] hover:text-[#FF4000] transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#242424] px-6 pt-4 pb-2 text-center text-sm text-[rgb(187,187,187)]">
          <p className="text-[14px]">
            &copy; {currentYear} DigiBoomi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}