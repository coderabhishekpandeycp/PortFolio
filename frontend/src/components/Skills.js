import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/skills');
      setSkills(response.data);
    } catch (error) {
      console.error('Error fetching skills:', error);
      setSkills([
        { _id: 1, name: 'React.js', category: 'frontend', proficiency: 95 },
        { _id: 2, name: 'Node.js', category: 'backend', proficiency: 90 },
        { _id: 3, name: 'MongoDB', category: 'database', proficiency: 85 },
        { _id: 4, name: 'JavaScript', category: 'language', proficiency: 98 },
      ]);
    }
  };

  const categories = ['frontend', 'backend', 'database', 'tools', 'language'];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 gradient-text text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Skills & Expertise
        </motion.h2>

        {categories.map((category) => {
          const categorySkills = skills.filter(s => s.category === category);
          if (categorySkills.length === 0) return null;

          return (
            <motion.div
              key={category}
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-6 capitalize text-blue-400">
                {category}
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                {categorySkills.map((skill) => (
                  <div key={skill._id}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">{skill.name}</span>
                      <span className="text-blue-400">{skill.proficiency}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
