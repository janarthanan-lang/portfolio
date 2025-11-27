import React from 'react';
import Section from './Section';
import { resumeData } from '../data/resume';

const About = () => {
    return (
        <Section id="about" title="About Me">
            <div className="bg-secondary/50 p-8 rounded-2xl border-l-4 border-accent shadow-lg">
                <p className="text-lg text-muted leading-relaxed">
                    {resumeData.summary}
                </p>
            </div>
        </Section>
    );
};

export default About;
