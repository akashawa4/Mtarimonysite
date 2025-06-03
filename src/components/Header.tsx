import React, { useState, useEffect } from 'react';
import { Heart, Search, Menu, X, User } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
    setMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
      }
    }
  };

  const scrollToTop = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled ? 'shadow-md py-2' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Heart className="text-neon-pink h-8 w-8" fill="#FF3CBB" strokeWidth={1.5} />
            <span className="ml-2 font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-neon-orange to-neon-pink">
              LoveDestiny
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={scrollToTop}
              className="text-charcoal hover:text-neon-orange transition-all duration-300 hover:transform hover:scale-105 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('quick-search')}
              className="text-charcoal hover:text-neon-orange transition-all duration-300 hover:transform hover:scale-105 font-medium"
            >
              Browse Profiles
            </button>
            <button
              onClick={() => scrollToSection('featured-profiles')}
              className="text-charcoal hover:text-neon-orange transition-all duration-300 hover:transform hover:scale-105 font-medium"
            >
              Featured Profiles
            </button>
            <button
              onClick={() => scrollToSection('success-stories')}
              className="text-charcoal hover:text-neon-orange transition-all duration-300 hover:transform hover:scale-105 font-medium"
            >
              Success Stories
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-charcoal hover:text-neon-orange transition-all duration-300 hover:transform hover:scale-105 font-medium"
            >
              Working
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-charcoal hover:text-neon-orange transition-all duration-300 hover:transform hover:scale-105 font-medium"
            >
              About
            </button>
            <button
              onClick={() => {
                const footer = document.querySelector('footer');
                if (footer) {
                  footer.scrollIntoView({ behavior: 'smooth' });
                }
                setMobileMenuOpen(false);
              }}
              className="text-charcoal hover:text-neon-orange transition-all duration-300 hover:transform hover:scale-105 font-medium"
            >
              Help
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <button
                  onClick={() => navigate('/profile')}
                  className="px-4 py-2 text-sm bg-gray-100 text-charcoal rounded-full hover:bg-gray-200 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg font-semibold flex items-center"
                >
                  <User className="h-4 w-4 mr-2" />
                  My Profile
                </button>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-sm bg-red-500 text-white rounded-full hover:bg-red-600 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg font-semibold"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => navigate('/login')}
                  className="px-4 py-2 text-sm bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg font-semibold"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate('/register')}
                  className="px-5 py-2 bg-[#ff8c42] text-white rounded-full hover:bg-[#ff7a2b] transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg font-semibold"
                >
                  Register Now
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-charcoal transition-all duration-300 hover:transform hover:scale-105"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg mt-2 absolute w-full">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={scrollToTop}
                className="text-charcoal hover:text-neon-orange transition-all duration-300 hover:transform hover:scale-105 font-medium text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('quick-search')}
                className="text-charcoal hover:text-neon-orange transition-all duration-300 hover:transform hover:scale-105 font-medium text-left"
              >
                Browse Profiles
              </button>
              <button
                onClick={() => scrollToSection('featured-profiles')}
                className="text-charcoal hover:text-neon-orange transition-all duration-300 hover:transform hover:scale-105 font-medium text-left"
              >
                Featured Profiles
              </button>
              <button
                onClick={() => scrollToSection('success-stories')}
                className="text-charcoal hover:text-neon-orange transition-all duration-300 hover:transform hover:scale-105 font-medium text-left"
              >
                Success Stories
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="text-charcoal hover:text-neon-orange transition-all duration-300 hover:transform hover:scale-105 font-medium text-left"
              >
                Working
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-charcoal hover:text-neon-orange transition-all duration-300 hover:transform hover:scale-105 font-medium text-left"
              >
                About
              </button>
              <button
                onClick={() => {
                  const footer = document.querySelector('footer');
                  if (footer) {
                    footer.scrollIntoView({ behavior: 'smooth' });
                  }
                  setMobileMenuOpen(false);
                }}
                className="text-charcoal hover:text-neon-orange transition-all duration-300 hover:transform hover:scale-105 font-medium text-left"
              >
                Help
              </button>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
                {isAuthenticated ? (
                  <>
                    <button
                      onClick={() => {
                        navigate('/profile');
                        setMobileMenuOpen(false);
                      }}
                      className="w-full py-2 bg-gray-100 text-charcoal rounded-full hover:bg-gray-200 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg font-semibold flex items-center justify-center"
                    >
                      <User className="h-4 w-4 mr-2" />
                      My Profile
                    </button>
                    <button
                      onClick={handleLogout}
                      className="w-full py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg font-semibold"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        navigate('/login');
                        setMobileMenuOpen(false);
                      }}
                      className="w-full py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg font-semibold"
                    >
                      Login
                    </button>
                    <button
                      onClick={() => {
                        navigate('/register');
                        setMobileMenuOpen(false);
                      }}
                      className="w-full py-2 bg-[#ff8c42] text-white rounded-full hover:bg-[#ff7a2b] transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg font-semibold"
                    >
                      Register Now
                    </button>
                  </>
                )}
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;