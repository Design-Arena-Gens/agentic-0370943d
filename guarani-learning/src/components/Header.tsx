import Link from "next/link";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold">
              Rohayhu Guaraní
            </Link>
          </div>
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
