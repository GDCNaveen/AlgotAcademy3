import { Phone, Mail, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer-black mt-8">
      {/* Person Details Section */}
      <div className="container mx-auto px-4 py-6">
        <div className="space-y-6">
          {/* First Person - Naveen */}
          <div className="flex items-start gap-4">
            <div className="college-logo flex-shrink-0">
              <img src="/Naveen.png" alt="College Logo" className="w-20 h-15 rounded-full" />
            </div>
            <div className="text-white">
              <h3 className="font-semibold text-lg">A.Naveen</h3>
              <p className="text-gray-300">Educator</p>
              <div className="flex items-center gap-2 mt-1">
                <Phone className="w-4 h-4" />
                <span className="text-sm">9494719306</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <Mail className="w-4 h-4" />
                <span className="text-sm">algotnaveen@gmail.com</span>
              </div>
              {/*<div className="flex items-center gap-2 mt-1">
                <Globe className="w-4 h-4" />
                <span className="text-sm">www.algotnaveen.com</span>
              </div>*/}
            </div>
          </div>

          {/* Second Person - Oraganti Srinivas */}
          <div className="flex items-start gap-4">
            <div className="college-logo flex-shrink-0">
              <img src="/college-logo.png" alt="College Logo" className="w-10 h-10 rounded-full" />
            </div>
            <div className="text-white">
              <h3 className="font-semibold text-lg">O. Srinivas</h3>
              <p className="text-gray-300">Educator</p>
              <div className="flex items-center gap-2 mt-1">
                <Phone className="w-4 h-4" />
                <span className="text-sm">9912588442</span>
              </div>
              {/*<div className="flex items-center gap-2 mt-1">
                <Mail className="w-4 h-4" />
                <span className="text-sm">gdcmorthad@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <Globe className="w-4 h-4" />
                <span className="text-sm">www.gdcmorthad.edu</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-gray-400 text-sm text-justify">
            © 2025 Algot Academy, Morthad. All rights reserved. 
            This website is developed and maintained by the Algot Academy administration 
            for educational purposes and information dissemination.
          </p>
        </div>
      </div>

      {/* Quotation Section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <blockquote className="text-center text-gray-300 italic text-sm text-justify">
            "Education is the most powerful weapon which you can use to change the world. 
            At Algot Academy, we are committed to providing quality 
            education and nurturing future leaders who will contribute to society's progress."
          </blockquote>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
