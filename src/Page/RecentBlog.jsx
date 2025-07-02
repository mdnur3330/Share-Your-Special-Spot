

import React from 'react';
import { motion } from 'framer-motion';
import logo1 from '../assets/photo/see-even-2407631_1280.jpg'
import logo2 from '../assets/photo/clouds-3876901_1280.jpg'
import logo3 from '../assets/photo/coxs-bazar-2885043_1280.jpg'

const stories = [
  {
    id: 1,
    name: "Nusrat Jahan",
    place: "Sajek Valley",
    story: "The misty mornings and green hills of Sajek still touch my soul. Truly a hidden paradise in Bangladesh.",
    image: logo2
  },
  {
    id: 2,
    name: "Rakib Hasan",
    place: "Saint Martin's Island",
    story: "The crystal blue water and peaceful beach vibes made it the most relaxing trip of my life.",
    image: logo3
  },
  {
    id: 3,
    name: "Mahin Islam",
    place: "Sundarbans",
    story: "Cruising through the river and hearing the sounds of the forest was truly thrilling and peaceful at the same time.",
    image: logo1
  },
];

const CommunityStories = () => {
  return (
    <div className="bg-[#fff8ee] py-20 px-4 md:px-10">
      <h2 className="text-4xl md:text-5xl text-center font-bold text-[#1b1f3b] mb-14">
        Real Traveler <span className="text-yellow-500">Experiences</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {stories.map((story, index) => (
          <motion.div
            key={story.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white rounded-3xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-yellow-100"
          >
            <img
              src={story.image}
              alt={story.place}
              className="w-full h-56 object-cover rounded-t-3xl"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#1b1f3b]">{story.name}</h3>
              <p className="text-yellow-600 font-medium mb-2">{story.place}</p>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                {story.story}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CommunityStories;
