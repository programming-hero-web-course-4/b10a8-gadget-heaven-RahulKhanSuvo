const Footer = () => {
  return (
    <div className="bg-white mt-24">
      <div className="container mx-auto">
        <div className="border-b">
          <div className=" container pt-28 text-center mx-auto">
            <h1 className="font-bold  text-xl md:text-2xl lg:text-3xl">
              Gadget Heaven
            </h1>
            <p>Leading the way in cutting-edge technology and innovation.</p>
          </div>
        </div>
        <div className="flex justify-center gap-36">
          <div className="text-center">
            <h3 className="font-bold">Services</h3>
            <div>
              <p>Product Support </p>
              <p>Order Tracking </p>
              <p>Shipping & Delivery </p>
              <p> Returns </p>
            </div>
          </div>
          <div className="text-center">
            <h3 className="font-bold">Company </h3>
            <div>
              <p>About Us </p>
              <p>Careers </p>
              <p> Contact</p>
            </div>
          </div>
          <div className="text-center">
            <h3 className="font-bold">Legal</h3>
            <div>
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
