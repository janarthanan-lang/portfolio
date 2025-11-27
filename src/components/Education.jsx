import React from 'react';
import { Award, GraduationCap, Heart } from 'lucide-react';
import Section from './Section';
import { resumeData } from '../data/resume';

const Education = () => {
    return (
        <Section id="education" title="Education & Certifications" className="bg-secondary/30">
            <div className="grid md:grid-cols-2 gap-12">

                {/* Education */}
                <div>
                    <div className="flex items-center mb-8">
                        <GraduationCap className="text-accent mr-3" size={32} />
                        <h3 className="text-2xl font-bold text-text">Education</h3>
                    </div>
                    <div className="space-y-8">
                        {resumeData.education.map((edu, index) => (
                            <div key={index} className="relative pl-8 border-l-2 border-slate-200">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent"></div>
                                <h4 className="text-xl font-semibold text-text">{edu.degree}</h4>
                                <p className="text-accent mb-1">{edu.institution}</p>
                                <span className="text-sm text-muted bg-secondary px-2 py-1 rounded">{edu.year}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Certifications & Interests */}
                <div className="space-y-12">
                    {/* Certifications */}
                    <div>
                        <div className="flex items-center mb-6">
                            <Award className="text-accent mr-3" size={32} />
                            <h3 className="text-2xl font-bold text-text">Certifications</h3>
                        </div>
                        <ul className="space-y-4">
                            {resumeData.certifications.map((cert, index) => (
                                <li key={index} className="flex items-start bg-secondary p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                    <span className="w-2 h-2 mt-2 mr-3 bg-accent rounded-full flex-shrink-0"></span>
                                    <span className="text-muted">{cert}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Interests */}
                    <div>
                        <div className="flex items-center mb-6">
                            <Heart className="text-accent mr-3" size={32} />
                            <h3 className="text-2xl font-bold text-text">Areas of Interest</h3>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {resumeData.interests.map((interest, index) => (
                                <span key={index} className="px-4 py-2 bg-secondary rounded-full text-muted text-sm border border-slate-200">
                                    {interest}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </Section>
    );
};

export default Education;
