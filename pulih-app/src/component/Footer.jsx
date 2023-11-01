import logo from "../assets/Logo-Pulih.png";
import {
  FaYoutube,
  FaFacebook,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa6";

import Container from "./container";
import Button from "./Button";
import Input from "./input";

const Footer = () => {
  return (
    <footer>
      <div>
        <Container>
          <div className="flex mt-6 mb-16">
            <div className="grid gap-y-5 mx-auto">
              <img width={140} src={logo} />
              <ul className="flex gap-x-5 mt-2">
                <abbr title="facebook">
                  <li>
                    <a
                      className="text-green-950"
                      href="https://www.facebook.com/moh.afizan.9"
                    >
                      <FaFacebook className="w-6 h-6" />
                    </a>
                  </li>
                </abbr>
                <abbr title="instagram">
                  <li>
                    <a
                      className="text-green-950"
                      href="https://instagram.com/moh_afizan?igshid=NGVhN2U2NjQ0Yg"
                    >
                      <FaInstagram className="w-6 h-6" />
                    </a>
                  </li>
                </abbr>
                <abbr title="github">
                  <li>
                    <a
                      className="text-green-950"
                      href="https://github.com/Sisteminformasiu/"
                    >
                      <FaGithub className="w-6 h-6" />
                    </a>
                  </li>
                </abbr>
                <abbr title="YouTube">
                  <li>
                    <a
                      className="text-green-950"
                      href="https://www.youtube.com/@Mohafizan"
                    >
                      <FaYoutube className="w-6 h-6" />
                    </a>
                  </li>
                </abbr>
                <abbr title="linkedin">
                  <li>
                    <a
                      className="text-green-950"
                      href="https://www.linkedin.com/in/a-fizan-636215279"
                    >
                      <FaLinkedinIn className="w-6 h-6" />
                    </a>
                  </li>
                </abbr>
              </ul>
              <div
                style={{
                  height: "50px",
                  paddingBottom: "1px",
                  paddingTop: "1px",
                }}
                className="bg-green-950"
              >
                <Input type="email" name="email" placeholder="Your Email.." />
              </div>
              <Button type="submit" button="Submit" />
            </div>
            <div className="mx-auto">
              <h2 className="font-bold text-lg">Our Service</h2>
              <div className="mt-6 grid gap-y-5">
                <p className="text-gray-500 cursor-pointer text-sm font-semibold">
                  Meditation
                </p>
                <p className="text-gray-500 cursor-pointer text-sm font-semibold">
                  Counseling
                </p>
                <p className="text-gray-500 cursor-pointer text-sm font-semibold">
                  Pulih For Company
                </p>
              </div>
            </div>
            <div className="mx-auto">
              <h2 className="font-bold text-lg">Get to Know Us</h2>
              <div className="mt-6 grid gap-y-5">
                <p className="text-gray-500 cursor-pointer text-sm font-semibold">
                  Read Our Blogs
                </p>
                <p className="text-gray-500 cursor-pointer text-sm font-semibold">
                  Abous US
                </p>
                <p className="text-gray-500 cursor-pointer text-sm font-semibold">
                  Contact US
                </p>
              </div>
            </div>
            <div className="mx-auto">
              <h2 className="font-bold text-lg">Others</h2>
              <div className="mt-6 grid gap-y-5">
                <p className="text-gray-500 cursor-pointer text-sm font-semibold">
                  Meditation Pricing
                </p>
                <p className="text-gray-500 cursor-pointer text-sm font-semibold">
                  Counseling Pricing
                </p>
                <p className="text-gray-500 cursor-pointer text-sm font-semibold">
                  Privacy Policy
                </p>
                <p className="text-gray-500 cursor-pointer text-sm font-semibold">
                  FAQ
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div
        style={{ background: "rgba(153, 207, 96, 0.7)" }}
        className="w-screen h-16 flex justify-center items-center gap-x-5 text-white"
      >
        <p className="font-semibold text-white">Copyright &copy;2023 Pulih.</p>
        <p className="w-1 h-10 bg-white rounded-full"></p>
        <p className="font-semibold text-white">
          Better Mind Better
          <span className="font-bold text-white"> You</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
