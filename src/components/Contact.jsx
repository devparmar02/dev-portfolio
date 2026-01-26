import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const headingRef = useScrollAnimation({ threshold: 0.2 });
  const contentRef = useScrollAnimation({ threshold: 0.15 });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const SERVICE_ID = "service_re5wcfr";
    const TEMPLATE_ID = "template_8ufuebi";
    const PUBLIC_KEY = "XiJLYfRs533Mz_iqj";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        (result) => {
          setStatusMessage("Message sent successfully!");
          setIsSubmitting(false);
          e.target.reset();
          setTimeout(() => setStatusMessage(""), 5000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setStatusMessage("Failed to send message. Please try again.");
          setIsSubmitting(false);
        }
      );
  };
  
  return (
    <section className="bg-gradient-to-b from-slate-950 to-slate-900 py-20 px-6 relative overflow-hidden" id="contact">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative">
        
        {/* Header */}
        <div ref={headingRef} className="mb-20 animate-fadeInUp">
          <div className="inline-block px-4 py-1 rounded-full border border-amber-500/50 bg-amber-500/10 mb-6 animate-fadeInUp">
            <p className="text-amber-400 text-xs font-semibold tracking-widest uppercase">Get In Touch</p>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 font-serif animate-fadeInUp" style={{ animationDelay: '0.1s' }}>Contact</h2>
          <p className="text-xl text-amber-500 font-light tracking-wide animate-fadeInUp" style={{ animationDelay: '0.2s' }}>Let's work together</p>
        </div>

        {/* Content */}
        <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          
          {/* Left: Description - Glass Card */}
          <div className="p-8 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed font-light">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you'd like to collaborate or just say hello!
            </p>

            <div className="space-y-6">
              <a href="mailto:devparmar2207@gmail.com" className="flex items-start gap-4 group hover:pl-2 transition-all duration-300 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                <FaEnvelope className="text-2xl text-amber-500 mt-1 group-hover:text-amber-400 group-hover:scale-110 transition-all duration-200" />
                <div>
                  <p className="font-semibold text-white group-hover:text-amber-400 transition-colors">Email</p>
                  <p className="text-gray-400 hover:text-amber-500 transition-colors">devparmar2207@gmail.com</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/dev-parmar/" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group hover:pl-2 transition-all duration-300 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                <FaLinkedin className="text-2xl text-amber-500 mt-1 group-hover:text-amber-400 group-hover:scale-110 transition-all duration-200" />
                <div>
                  <p className="font-semibold text-white group-hover:text-amber-400 transition-colors">LinkedIn</p>
                  <p className="text-gray-400 hover:text-amber-500 transition-colors">linkedin.com/in/dev-parmar</p>
                </div>
              </a>

              <a href="https://github.com/devparmar02" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group hover:pl-2 transition-all duration-300 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
                <FaGithub className="text-2xl text-amber-500 mt-1 group-hover:text-amber-400 group-hover:scale-110 transition-all duration-200" />
                <div>
                  <p className="font-semibold text-white group-hover:text-amber-400 transition-colors">GitHub</p>
                  <p className="text-gray-400 hover:text-amber-500 transition-colors">github.com/devparmar02</p>
                </div>
              </a>

              <div className="flex items-start gap-4 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                <FaMapMarkerAlt className="text-2xl text-amber-500 mt-1" />
                <div>
                  <p className="font-semibold text-white">Location</p>
                  <p className="text-gray-400">India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <form ref={form} onSubmit={sendEmail} className="p-8 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 space-y-6 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <div className="group animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <label className="block text-sm font-medium text-white mb-2 uppercase tracking-wider group-hover:text-amber-400 transition-colors">Your Name</label>
              <input 
                type="text"
                name="user_name"
                placeholder="Name" 
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:border-white/40 hover:bg-white/8"
              />
            </div>

            <div className="group animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
              <label className="block text-sm font-medium text-white mb-2 uppercase tracking-wider group-hover:text-amber-400 transition-colors">Your Email</label>
              <input 
                type="email"
                name="user_email"
                placeholder="Email" 
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:border-white/40 hover:bg-white/8"
              />
            </div>

            <div className="group animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
              <label className="block text-sm font-medium text-white mb-2 uppercase tracking-wider group-hover:text-amber-400 transition-colors">Message</label>
              <textarea 
                rows="5"
                name="message"
                placeholder="Your message..."
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 focus:bg-white/10 transition-all duration-300 resize-none backdrop-blur-sm hover:border-white/40 hover:bg-white/8"
              />
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 font-semibold rounded-lg uppercase tracking-wider shadow-lg transform animate-fadeInUp transition-all duration-300 ${
                isSubmitting
                  ? 'bg-gray-600 cursor-not-allowed text-gray-300 shadow-gray-600/50'
                  : 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 hover:from-amber-400 hover:to-amber-500 hover:shadow-amber-400/70 hover:scale-105 shadow-amber-500/50'
              }`}
              style={{ animationDelay: '0.7s' }}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {statusMessage && (
              <p className={`text-center text-sm mt-4 ${statusMessage.includes("success") ? "text-green-400" : "text-red-400"}`}>
                {statusMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
