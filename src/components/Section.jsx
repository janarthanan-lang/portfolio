import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, title, children, className = "" }) => {
    return (
        <section id={id} className={`py-20 ${className}`}>
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {title && (
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text">
                            <span className="border-b-4 border-accent pb-2">{title}</span>
                        </h2>
                    )}
                    {children}
                </motion.div>
            </div>
        </section>
    );
};

export default Section;
