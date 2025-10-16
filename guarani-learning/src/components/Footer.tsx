const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Rohayhu Guaraní. All Rights Reserved.</p>
          <p>Designed with ❤️ for the preservation of the Guaraní language.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
