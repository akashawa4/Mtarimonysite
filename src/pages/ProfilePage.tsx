import React from 'react';
import { User, Mail, Phone, MapPin, Calendar, Book, Heart, Settings, LogOut } from 'lucide-react';
import Layout from '../components/Layout';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const ProfilePage: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!isAuthenticated) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8 mt-20">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-charcoal mb-4">Please Login</h2>
            <p className="text-gray-600 mb-6">You need to be logged in to view your profile</p>
            <button
              onClick={handleLoginClick}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
            >
              Login Now
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 mt-20">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
            <div className="h-32 bg-gradient-to-r from-neon-orange to-neon-pink"></div>
            <div className="px-8 pb-8">
              <div className="relative flex items-end -mt-16 mb-4">
                <div className="relative w-32 h-32 rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-6 pb-4">
                  <h1 className="text-3xl font-bold text-charcoal">Rahul Mehta</h1>
                  <p className="text-gray-600">Software Engineer at Google</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center text-gray-600">
                  <Mail className="w-4 h-4 mr-2 text-neon-pink" />
                  rahul.m@example.com
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-4 h-4 mr-2 text-neon-pink" />
                  +1 (555) 123-4567
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2 text-neon-pink" />
                  New York, USA
                </div>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="md:col-span-1 space-y-6">
              {/* Quick Stats */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-lg font-semibold text-charcoal mb-4">Profile Stats</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Profile Views</span>
                    <span className="font-semibold text-neon-orange">1,234</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Interests Received</span>
                    <span className="font-semibold text-neon-pink">56</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Matches</span>
                    <span className="font-semibold text-aqua-blue">12</span>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <nav className="divide-y divide-gray-100">
                  <a href="#" className="flex items-center px-6 py-4 text-charcoal hover:bg-gray-50">
                    <User className="w-5 h-5 mr-3 text-neon-orange" />
                    Edit Profile
                  </a>
                  <a href="#" className="flex items-center px-6 py-4 text-charcoal hover:bg-gray-50">
                    <Heart className="w-5 h-5 mr-3 text-neon-pink" />
                    My Matches
                  </a>
                  <a href="#" className="flex items-center px-6 py-4 text-charcoal hover:bg-gray-50">
                    <Settings className="w-5 h-5 mr-3 text-aqua-blue" />
                    Settings
                  </a>
                  <button 
                    onClick={handleLogout}
                    className="w-full flex items-center px-6 py-4 text-red-600 hover:bg-gray-50"
                  >
                    <LogOut className="w-5 h-5 mr-3" />
                    Logout
                  </button>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2 space-y-6">
              {/* About Me */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-lg font-semibold text-charcoal mb-4">About Me</h2>
                <p className="text-gray-600">
                  I'm a software engineer passionate about building products that make a difference. 
                  In my free time, I enjoy hiking, photography, and trying new cuisines. Looking for 
                  someone who shares similar interests and values.
                </p>
              </div>

              {/* Basic Details */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-lg font-semibold text-charcoal mb-4">Basic Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-3 text-neon-pink" />
                    <div>
                      <p className="text-sm text-gray-500">Age</p>
                      <p className="text-charcoal">30 Years</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Book className="w-5 h-5 mr-3 text-neon-pink" />
                    <div>
                      <p className="text-sm text-gray-500">Education</p>
                      <p className="text-charcoal">Masters in Computer Science</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Preferences */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-lg font-semibold text-charcoal mb-4">Partner Preferences</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Age Range</p>
                    <p className="text-charcoal">25-32 years</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-charcoal">United States, Canada</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Education</p>
                    <p className="text-charcoal">Bachelor's degree or higher</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;