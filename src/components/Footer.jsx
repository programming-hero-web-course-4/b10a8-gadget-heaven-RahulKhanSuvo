const Footer = () => {
  return (
    <div className="bg-white mt-24">
      <div className="container py-20 mx-auto">
        <div className="border-b pb-5">
          <div className=" container text-center mx-auto">
            <h1 className="font-bold text-xl md:text-2xl lg:text-3xl pb-3">
              Gadget Heaven
            </h1>
            <p className="text-gray-500">
              Leading the way in cutting-edge technology and innovation.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center gapt-6 md:gap-48 pt-6">
          <div className="text-center">
            <h3 className="font-bold">Services</h3>
            <div className="text-gray-500">
              <p>Product Support </p>
              <p>Order Tracking </p>
              <p>Shipping & Delivery </p>
              <p> Returns </p>
            </div>
          </div>
          <div className="text-center">
            <h3 className="font-bold">Company </h3>
            <div className="text-gray-500">
              <p>About Us </p>
              <p>Careers </p>
              <p> Contact</p>
            </div>
          </div>
          <div className="text-center">
            <h3 className="font-bold">Legal</h3>
            <div className="text-gray-500">
              <p>Terms of Service </p>
              <p>Privacy Policy </p>
              <p> Cookie Policy </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
