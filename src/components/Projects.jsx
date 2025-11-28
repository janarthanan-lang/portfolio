import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import Section from './Section';
import { resumeData } from '../data/resume';

const Projects = () => {
    return (
        <Section id="projects" title="Projects">
            <div className="grid md:grid-cols-2 gap-8">
                {resumeData.projects.map((project, index) => (
                    <div
                        key={index}
                        className="group bg-secondary rounded-2xl overflow-hidden shadow-lg border border-slate-200 hover:border-accent transition-all duration-300 hover:-translate-y-2"
                    >
                        <div className="p-8">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-bold">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-text group-hover:text-accent transition-colors">
                                            {project.title}
                                        </a>
                                    </h3>
                                    <span className="text-sm text-accent font-medium">{project.date}</span>
                                </div>
                                <div className="flex space-x-3">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
                                        <Github size={20} />
                                    </a>
                                    {/* Optional Live Link if available */}
                                    {/* <a href="#" className="text-muted hover:text-accent transition-colors">
                    <ExternalLink size={20} />
                  </a> */}
                                </div>
                            </div>

                            <p className="text-muted mb-6 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className="text-xs font-semibold text-primary bg-accent/90 px-3 py-1 rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
