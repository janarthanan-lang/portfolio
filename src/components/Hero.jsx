import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-primary to-secondary">
            <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 text-center md:text-left mt-8 md:mt-0"
                >
                    <h2 className="text-accent text-xl font-semibold mb-2">Hello, I'm</h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-text mb-4">
                        {resumeData.personalInfo.name}
                    </h1>
                    <h3 className="text-2xl md:text-3xl text-muted mb-6">
                        {resumeData.personalInfo.title}
                    </h3>
                    <p className="text-muted text-lg mb-8 max-w-lg mx-auto md:mx-0">
                        {resumeData.summary}
                    </p>

                    <div className="flex justify-center md:justify-start space-x-4">
                        {resumeData.personalInfo.social.map((item, index) => {
                            const isEmail = item.url.startsWith("mailto:");
                            return (
                                <a
                                    key={index}
                                    href={item.url}
                                    {...(!isEmail && { target: "_blank", rel: "noopener noreferrer" })}
                                    className="p-3 bg-secondary rounded-full text-accent hover:bg-accent hover:text-primary transition-all duration-300 shadow-lg hover:shadow-accent/50"
                                >
                                    <item.icon size={24} />
                                </a>
                            );
                        })}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 flex justify-center"
                >
                    <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-accent shadow-2xl shadow-accent/20">
                        <img
                            src={profileImg}
                            alt={resumeData.personalInfo.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
