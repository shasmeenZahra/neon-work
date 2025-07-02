import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onTutorFormOpen: () => void;
  onStudentFormOpen: () => void;
}

const Header = ({ onTutorFormOpen, onStudentFormOpen }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl md:text-2xl font-bold font-display text-navy-800">
              AYESHA ACADEMY
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors duration-200 ${
                  isActivePath(item.path)
                    ? "text-teal-600 border-b-2 border-teal-600 pb-1"
                    : "text-navy-700 hover:text-teal-600"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div className="hidden lg:flex items-center space-x-3 ml-6 pl-6 border-l border-gray-300">
              <Button
                onClick={onTutorFormOpen}
                className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-medium px-6"
              >
                Become a Tutor
              </Button>
              <Button
                onClick={onStudentFormOpen}
                variant="outline"
                className="border-coral-500 text-coral-600 hover:bg-coral-50 font-medium px-6"
              >
                Need a Tutor
              </Button>
            </div>
          </nav>

          {/* Mobile/Tablet Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-navy-700" />
            ) : (
              <Menu className="w-6 h-6 text-navy-700" />
            )}
          </button>
        </div>

        {/* Mobile/Tablet Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 px-4 border-t border-gray-200 bg-white shadow-lg">
            <nav className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-medium py-3 px-4 rounded-lg transition-colors text-center ${
                    isActivePath(item.path)
                      ? "text-teal-600 bg-teal-50 border-2 border-teal-200"
                      : "text-navy-700 hover:text-teal-600 hover:bg-gray-50 border-2 border-gray-200"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-4 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <Button
                    onClick={() => {
                      onTutorFormOpen();
                      setIsMenuOpen(false);
                    }}
                    className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-medium py-3"
                    size="lg"
                  >
                    Become a Tutor
                  </Button>
                  <Button
                    onClick={() => {
                      onStudentFormOpen();
                      setIsMenuOpen(false);
                    }}
                    variant="outline"
                    className="border-coral-500 text-coral-600 hover:bg-coral-50 font-medium py-3"
                    size="lg"
                  >
                    Need a Tutor
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
