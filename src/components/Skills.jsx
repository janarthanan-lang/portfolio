import React from 'react';
import Section from './Section';
import { resumeData } from '../data/resume';

const Skills = () => {
    return (
        <Section id="skills" title="Technical & Soft Skills" className="bg-secondary/30">
            <div className="grid md:grid-cols-2 gap-12">
                {/* Technical Skills */}
                <div className="bg-secondary p-8 rounded-2xl shadow-lg border border-slate-200 hover:border-accent transition-colors duration-300">
                    <h3 className="text-2xl font-semibold mb-6 text-accent">Technical Skills</h3>
                    <div className="flex flex-wrap gap-3">
                        {resumeData.skills.technical.map((skill, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 bg-primary rounded-full text-text text-sm font-medium border border-slate-200 hover:border-accent hover:text-accent transition-all cursor-default"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Soft Skills */}
                <div className="bg-secondary p-8 rounded-2xl shadow-lg border border-slate-200 hover:border-accent transition-colors duration-300">
                    <h3 className="text-2xl font-semibold mb-6 text-accent">Soft Skills</h3>
                    <div className="flex flex-wrap gap-3">
                        {resumeData.skills.soft.map((skill, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 bg-primary rounded-full text-text text-sm font-medium border border-slate-200 hover:border-accent hover:text-accent transition-all cursor-default"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Skills;
