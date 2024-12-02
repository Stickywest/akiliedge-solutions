import React from 'react';

const Footer: React.FC = () => (
  <footer className="w-full bg-black bg-opacity-80 p-8 mt-16 text-center text-sm text-gray-400">
    <div className="max-w-6xl mx-auto flex flex-wrap justify-between">
      <div className="mb-4 w-full sm:w-1/3">
        <h4 className="text-yellow-400 text-lg">About Us</h4>
        <p>At Akiliedge Solutions, we believe in harnessing technology for a sustainable future.</p>
      </div>
      <div className="mb-4 w-full sm:w-1/3">
        <h4 className="text-yellow-400 text-lg">Contact Us</h4>
        <p>Phone: <a href="tel:+254703373810" className="hover:text-yellow-400">+254703373810</a></p>
        <p>Email: <a href="mailto:info@akiliedge.com" className="hover:text-yellow-400">info@akiliedge.com</a></p>
      </div>
      <div className="mb-4 w-full sm:w-1/3">
        <h4 className="text-yellow-400 text-lg">Follow Us</h4>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://twitter.com/akiliedge" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com/company/akiliedge" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://facebook.com/akiliedge" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </div>
    </div>
    <div className="border-t border-yellow-700 mt-6 pt-4">
      &copy; 2024 Akiliedge Solutions. All rights reserved.
    </div>
  </footer>
);

export default Footer;
