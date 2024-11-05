import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here (e.g., send data to a server)
  };

  return (
    <form onSubmit={handleSubmit} className=" p-8 rounded w-full mx-auto">
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Name <span className="text-red-500">*</span>
        </label>
        <div className="flex space-x-4">
          <input
            type="text"
            name="firstName"
            placeholder="First"
            value={formData.firstName}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2 w-full"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last"
            value={formData.lastName}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-300 rounded p-2 w-full"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Comment or Message
        </label>
        <textarea
          name="message"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
          className="border border-gray-300 rounded p-2 w-full"
          rows="4"
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-white text-gray-700 font-semibold border border-gray-300 rounded px-4 py-2 hover:bg-gray-100"
      >
        SUBMIT
      </button>
    </form>
  );
};

export default ContactForm;
