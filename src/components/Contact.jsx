import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, User, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import Section from './Section';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: 'a9fa5ab7-e061-4022-8baa-b4902875c5ea',
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject || 'New Portfolio Contact',
                    message: formData.message,
                    from_name: 'Portfolio Contact Form',
                    to_email: 'm.janarthanan2005@gmail.com'
                })
            });

            const result = await response.json();

            if (result.success) {
                setStatus({
                    type: 'success',
                    message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon!'
                });
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            setStatus({
                type: 'error',
                message: 'Oops! Something went wrong. Please try again or email me directly.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Section id="contact" title="Get In Touch">
            <div className="max-w-2xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <p className="text-muted text-lg">
                        Have a question or want to work together? Feel free to reach out!
                    </p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >
                    {/* Name Field */}
                    <div className="relative">
                        <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                            Name *
                        </label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted" size={20} />
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full pl-12 pr-4 py-3 bg-secondary border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 text-text placeholder-muted"
                                placeholder="Your Name"
                            />
                        </div>
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                        <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                            Email *
                        </label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted" size={20} />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full pl-12 pr-4 py-3 bg-secondary border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 text-text placeholder-muted"
                                placeholder="your.email@example.com"
                            />
                        </div>
                    </div>

                    {/* Subject Field */}
                    <div className="relative">
                        <label htmlFor="subject" className="block text-sm font-medium text-text mb-2">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-secondary border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 text-text placeholder-muted"
                            placeholder="What's this about?"
                        />
                    </div>

                    {/* Message Field */}
                    <div className="relative">
                        <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                            Message *
                        </label>
                        <div className="relative">
                            <MessageSquare className="absolute left-3 top-3 text-muted" size={20} />
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                className="w-full pl-12 pr-4 py-3 bg-secondary border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 text-text placeholder-muted resize-none"
                                placeholder="Your message here..."
                            />
                        </div>
                    </div>

                    {/* Status Messages */}
                    {status.message && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`flex items-center gap-2 p-4 rounded-lg ${status.type === 'success'
                                ? 'bg-green-50 text-green-800 border border-green-200'
                                : 'bg-red-50 text-red-800 border border-red-200'
                                }`}
                        >
                            {status.type === 'success' ? (
                                <CheckCircle size={20} />
                            ) : (
                                <AlertCircle size={20} />
                            )}
                            <p className="text-sm">{status.message}</p>
                        </motion.div>
                    )}

                    {/* Submit Button */}
                    <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full py-3 px-6 bg-accent text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${isSubmitting
                            ? 'opacity-70 cursor-not-allowed'
                            : 'hover:bg-opacity-90 hover:shadow-lg'
                            }`}
                    >
                        {isSubmitting ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                Sending...
                            </>
                        ) : (
                            <>
                                <Send size={20} />
                                Send Message
                            </>
                        )}
                    </motion.button>
                </motion.form>
            </div>
        </Section>
    );
};

export default Contact;
