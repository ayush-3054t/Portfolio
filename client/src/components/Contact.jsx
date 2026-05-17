import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, MapPin, Loader2, CheckCircle2, XCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        const templateParams = {
            user_name: formData.user_name,
            user_email: formData.user_email,
            from_name: formData.user_name,
            from_email: formData.user_email,
            reply_to: formData.user_email,
            email: formData.user_email,
            name: formData.user_name,
            message: formData.message
        };

        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_id',
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_id',
                templateParams,
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key'
                }
            )
            .then(
                () => {
                    setStatus('success');
                    setFormData({ user_name: '', user_email: '', message: '' });
                    setTimeout(() => setStatus(''), 5000);
                },
                (error) => {
                    console.error('EmailJS Error:', error);
                    setStatus('error');
                    setTimeout(() => setStatus(''), 5000);
                }
            );
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <section id="contact" className="py-16 md:py-24 bg-[#030014] relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-72 h-72 md:w-[500px] md:h-[500px] bg-green-600/10 rounded-full blur-[110px] md:blur-[150px] pointer-events-none -translate-y-1/2" />
            <div className="absolute top-1/2 right-0 w-72 h-72 md:w-[500px] md:h-[500px] bg-emerald-600/10 rounded-full blur-[110px] md:blur-[150px] pointer-events-none -translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12 md:mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-lime-400 inline-block mb-4"
                    >
                        Let's Connect
                    </motion.h2>
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "6rem" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="h-1.5 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full" 
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-white/10"
                    >
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Get in Touch</h3>
                        <p className="text-slate-400 mb-8 sm:mb-10 leading-relaxed text-base sm:text-lg">
                            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-6 sm:space-y-8">
                            <div className="flex items-center gap-4 sm:gap-6 group">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-500/10 rounded-2xl flex flex-shrink-0 items-center justify-center text-green-400 group-hover:bg-green-500 group-hover:text-white transition-all duration-300 shadow-lg transform group-hover:scale-110 group-hover:rotate-6">
                                    <Mail size={24} />
                                </div>
                                <div className="min-w-0">
                                    <h4 className="text-sm text-slate-500 font-medium mb-1">Email</h4>
                                    <a href="mailto:ayushtiwari2034@gmail.com" className="text-base sm:text-lg font-medium text-slate-200 hover:text-green-400 transition-colors break-all">
                                        ayushtiwari2034@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 sm:gap-6 group">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-emerald-500/10 rounded-2xl flex flex-shrink-0 items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-lg transform group-hover:scale-110 group-hover:-rotate-6">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-sm text-slate-500 font-medium mb-1">Location</h4>
                                    <p className="text-base sm:text-lg font-medium text-slate-200">
                                        Ghaziabad, India
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-white/10 relative overflow-hidden"
                    >
                        <form onSubmit={sendEmail} className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                                <div>
                                    <label htmlFor="user_name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        id="user_name"
                                        value={formData.user_name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full bg-[#030014]/50 border border-white/10 rounded-xl px-4 py-3.5 text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all backdrop-blur-sm"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="user_email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        id="user_email"
                                        value={formData.user_email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full bg-[#030014]/50 border border-white/10 rounded-xl px-4 py-3.5 text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all backdrop-blur-sm"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows="5"
                                    className="w-full bg-[#030014]/50 border border-white/10 rounded-xl px-4 py-3.5 text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all resize-none backdrop-blur-sm"
                                    placeholder="How can I help you?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-1 disabled:transform-none"
                            >
                                {status === 'sending' ? (
                                    <>
                                        <Loader2 size={20} className="animate-spin" /> Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message <Send size={20} />
                                    </>
                                )}
                            </button>
                        </form>

                        {/* Status Messages */}
                        <AnimatePresence>
                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="absolute inset-0 z-20 glass flex flex-col items-center justify-center text-center p-8 backdrop-blur-xl"
                                >
                                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6 text-green-400 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                                        <CheckCircle2 size={40} />
                                    </div>
                                    <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                                    <p className="text-slate-400 text-lg">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                                </motion.div>
                            )}

                            {status === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="absolute inset-0 z-20 glass flex flex-col items-center justify-center text-center p-8 backdrop-blur-xl"
                                >
                                    <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mb-6 text-red-500 shadow-[0_0_30px_rgba(239,68,68,0.3)]">
                                        <XCircle size={40} />
                                    </div>
                                    <h4 className="text-2xl font-bold text-white mb-2">Oops!</h4>
                                    <p className="text-slate-400 text-lg">Something went wrong. Please try again later or email me directly.</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
