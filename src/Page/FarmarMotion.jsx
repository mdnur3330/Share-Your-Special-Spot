import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';

const FarmarMotion = () => {
    return (
        <div>
             <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
           whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-2xl md:text-4xl font-extrabold text-gray-800"
        >
          Welcome to <span className="text-blue-600">ByteVault</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
           whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
          // transition={{ duration: 1.2, delay: 0.2 }}      
          className="mt-4 text-lg text-gray-600"
        >
          Discover iconic artifacts and explore
        </motion.p>

        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
          
          className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          <Link to='/all-artifact'>Browse Artifacts</Link>
        </motion.button>
        
      </div>
    </section>
        </div>
    );
};

export default FarmarMotion;