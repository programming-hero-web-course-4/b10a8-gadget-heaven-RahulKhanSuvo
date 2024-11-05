import ContactForm from "../components/ContactForm";
import FAQSection from "../components/FAQSection";
import SubHeading from "../components/SubHeading";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Contacts = () => {
  return (
    <div>
      <div className="flex justify-center py-20 bg-[#9538E2]">
        <div className="w-[1200px] mx-auto">
          <SubHeading
            title={"Contact Us"}
            subTitle={
              "We’d love to hear from you! Whether you have inquiries, feedback, or need guidance, our team is ready to assist. Let's connect and make your experience exceptional."
            }
          ></SubHeading>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between bg-gray-50 container mx-auto">
        <div className="p-6 bg-gray-50 w-full md:w-1/2 lg:w-1/3">
          <h2 className="text-3xl font-bold text-gray-800">Get in touch</h2>
          <p className="mt-2 text-gray-600">
            Share some details here. This is a flexible section where you can
            share anything you want. It could be details or some information.
          </p>

          <div className="mt-6">
            <h3 className="font-semibold text-gray-800 flex items-center gap-2">
              <FaMapMarkerAlt /> ADDRESS
            </h3>
            <p className="text-gray-600">
              2972 Westheimer Rd. Santa Ana, Illinois 85486
            </p>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-gray-800 flex items-center gap-2">
              <FaPhoneAlt /> PHONE
            </h3>
            <p className="text-gray-600">(+91) 987 654 321</p>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-gray-800 flex items-center gap-2">
              <FaEnvelope /> EMAIL
            </h3>
            <p className="text-gray-600">info@contact.com</p>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold text-gray-800">FOLLOW</h3>
            <div className="flex gap-4 mt-2 text-gray-800">
              <FaFacebookF className="cursor-pointer hover:text-blue-600" />
              <FaInstagram className="cursor-pointer hover:text-pink-500" />
              <FaTwitter className="cursor-pointer hover:text-blue-400" />
              <FaYoutube className="cursor-pointer hover:text-red-500" />
            </div>
          </div>
        </div>
        <div className="">
          <ContactForm></ContactForm>
        </div>
      </div>
      <FAQSection></FAQSection>
    </div>
  );
};

export default Contacts;
