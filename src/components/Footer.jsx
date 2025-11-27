import React from 'react';
import { resumeData } from '../data/resume';

const Footer = () => {
    return (
        <footer className="bg-secondary py-8 border-t border-slate-200">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-2xl font-bold text-text mb-6">Let's Connect</h2>
                <div className="flex justify-center space-x-6 mb-8">
                    {resumeData.personalInfo.social.map((item, index) => (
                        <a
                            key={index}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted hover:text-accent transition-colors duration-300"
                        >
                            <item.icon size={24} />
                        </a>
                    ))}
                </div>
                <p className="text-muted text-sm">
                    © {new Date().getFullYear()} {resumeData.personalInfo.name}. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
