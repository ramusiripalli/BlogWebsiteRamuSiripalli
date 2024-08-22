import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-gray-800">BloggingApp</Link>
          <div className="space-x-4">
            <Link to="/signin" className="text-gray-800 hover:text-gray-600">Sign In</Link>
            <Link to="/signup" className="text-gray-800 hover:text-gray-600">Sign Up</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Share Your Thoughts with the World</h1>
          <p className="text-lg text-gray-600 mb-8">Join our community of writers and start your blogging journey today.</p>
          <Link to="/signup">
            <button className="px-8 py-3 bg-blue-600 text-white text-lg rounded hover:bg-blue-700 focus:outline-none">
              Get Started
            </button>
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-12">Features</h2>
          <div className="flex flex-wrap justify-center space-x-6">
            <FeatureCard
              title="Easy to Use"
              description="Our platform is designed to be user-friendly and intuitive for all users."
            />
            <FeatureCard
              title="Customizable"
              description="Personalize your blog with our wide range of themes and settings."
            />
            <FeatureCard
              title="SEO Friendly"
              description="Built with SEO in mind, helping your blog reach a wider audience."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto px-6 text-center text-white">
          <p>&copy; 2024 BloggingApp. All rights reserved.</p>
          
        </div>
      </footer>
    </div>
  );
};

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => (
  <div className="w-full md:w-1/3 p-4">
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);


