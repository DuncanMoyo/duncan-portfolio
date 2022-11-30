import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-red pt-10">
      <div className="w-5/6 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex md:justify-between justify-center text-center">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            JANE ESPER
          </p>
          <p className="text-yellow font-playfair text-md">
            2022 ESPER. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
