import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-white text-black py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Column 1: DSC iiitb */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1 w-[70%]">
          <h1 className="text-4xl font-semibold mb-2">DSC IIITB</h1>
          <p className="text-gray-600 mt-[1rem] font-bold">
            Powered By Google Developers
          </p>
          <p className="mt-[1rem] text-gray-600">
            Indian Institute of Information Technology, Bhopal, 462003 Madhya
            Pradesh
          </p>
          <p className="text-gray-600 mt-4">
            {" "}
            <span className="font-bold">Email: </span> dsciiitbhopal@gmail.com
          </p>
        </div>

        {/* Column 2: Various Links */}
        <div className="col-span-1">
          <h3 className="text-xl font-semibold mb-2">Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Tech
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Team
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Various Links */}
        <div className="col-span-1">
          <h3 className="text-xl font-semibold mb-2">Tech</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-500">
                Web Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                App Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Cloud
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Machine Learning
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Artificial Intelligence
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Data Science
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Web 3.0
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Social Media Links */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <h3 className="text-xl font-semibold mb-2">Our Social Networks</h3>
          <p className="text-gray-600 mt-4">
            Follow us to stay up-to-date and learn about upcoming events, new
            initiatives and program information.
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.facebook.com/DSC-IIIT-Bhopal-104312688646449"
              className="hover:scale-120 transform-origin-center text-[#1877F2] transition-transform duration-300"
            >
              <FontAwesomeIcon icon={faFacebook} size="2xl" />
            </a>
            <a
              href="https://www.instagram.com/gdsc_iiitbhopal/"
              className="hover:scale-120 transform-origin-center text-[#1DA1F2] transition-transform duration-300"
            >
              <FontAwesomeIcon icon={faTwitter} size="2xl" />
            </a>
            <a
              href="https://www.instagram.com/gdsc_iiitbhopal/"
              className="hover:scale-120 transform-origin-center transition-transform duration-300"
              style={{
                backgroundImage:
                  "linear-gradient(to top right, #feda75, #fa7e1e, #d62976, #C13584, #962fbf, #4f5bd5)",
              }}
            >
              <FontAwesomeIcon icon={faInstagram} size="2xl" />
            </a>
            <a
              href="https://www.linkedin.com/company/dsc-iiit-bhopal/"
              className="hover:scale-120 transform-origin-center text-[#0072b1] transition-transform duration-300"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
