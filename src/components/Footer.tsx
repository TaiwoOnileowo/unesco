import logo from "/logo.svg?url";

const Footer = () => {
    // const footerLinks=[
        
    // ]
  return (
    <footer className="h-[40vh] bg-gradient-to-r from-[#161616] flex flex-col items-center justify-center   to-[#656565]">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center justify-center h-full">
        <img src={logo} alt="UNESCO Logo" className="w-52" />
        <p className="text-white text-center mt-5">
          © 2021 UNESCO. All rights reserved.
        </p>
      <hr className="w-[400px] border-t mt-5 border-gray-200/50"/>
      </div>
    </footer>
  );
};

export default Footer;
