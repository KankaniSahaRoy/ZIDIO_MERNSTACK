import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-200 py-12">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                
                {/* Company Info */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">BetterCareer</h2>
                    <p>BetterCareer is your go-to platform for finding top-notch job opportunities. We connect talent with opportunity, helping you build a better career.</p>
                </div>
                
                {/* Quick Links */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
                    <ul className="space-y-2">
                        <li><Link to="/" className="hover:text-white">Home</Link></li>
                        <li><Link to="/browse" className="hover:text-white">Browse Jobs</Link></li>
                        <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                        <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                        <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
                    </ul>
                </div>
                
                {/* Contact Info */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
                    <p className="mb-2">Email: <a href="mailto:support@bettercareer.com" className="hover:text-white">support@bettercareer.com</a></p>
                    <p className="mb-2">Phone: <a href="tel:+1234567890" className="hover:text-white">+1 234 567 890</a></p>
                    <p>Address: 123 Career Lane, Job City, CA 94016</p>
                </div>
                
                {/* Newsletter Signup */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Stay Connected</h2>
                    <p className="mb-4">Sign up for our newsletter to get the latest job opportunities and career advice.</p>
                    <form className="flex items-center">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="w-full p-2 rounded-l-md focus:outline-none"
                        />
                        <button type="submit" className="p-2 bg-[#6A38C2] text-white rounded-r-md">Subscribe</button>
                    </form>
                    <div className="flex space-x-4 mt-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <Facebook className="h-6 w-6" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <Twitter className="h-6 w-6" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <Instagram className="h-6 w-6" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <Linkedin className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-8 text-center border-t border-gray-700 pt-4">
                <p>&copy; 2024 BetterCareer. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
