import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const Footer = () => {
  const socialLinks = [
    { icon: FiGithub, url: 'https://github.com/coderabhishekpandeycp', label: 'GitHub' },
    { icon: FiLinkedin, url: '#', label: 'LinkedIn' },
    { icon: FiTwitter, url: '#', label: 'Twitter' },
    { icon: FiMail, url: 'mailto:your@email.com', label: 'Email' }
  ];

  return (
    <motion.footer
      className="border-t border-gray-700 py-12 px-6 bg-gradient-to-t from-blue-950/10 to-transparent"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center gap-8 mb-8">
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glassmorphism rounded-lg hover:text-blue-400 transition-all duration-300 hover:scale-110"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              title={link.label}
            >
              <link.icon size={20} />
            </motion.a>
          ))}
        </div>

        <div className="text-center text-gray-400">
          <p className="mb-2">© 2024 Abhishek Pandey. All rights reserved.</p>
          <p className="text-sm">Built with React, Node.js, and ❤️</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
