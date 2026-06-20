import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { ContactFormData } from '@/types';

// Replace these with your own EmailJS credentials.
const SERVICE_ID = 'YOUR_EMAILJS_SERVICE_ID';
const TEMPLATE_ID = 'YOUR_EMAILJS_TEMPLATE_ID';
const PUBLIC_KEY = 'YOUR_EMAILJS_PUBLIC_KEY';

type Status = 'idle' | 'sending' | 'success' | 'error';

const initialData: ContactFormData = { name: '', email: '', message: '' };

const ContactForm = () => {
  const [data, setData] = useState<ContactFormData>(initialData);
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [status, setStatus] = useState<Status>('idle');

  const validate = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    if (!data.name.trim()) newErrors.name = 'Name is required.';
    if (!data.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = 'Enter a valid email address.';
    }
    if (!data.message.trim()) newErrors.message = 'Message is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { from_name: data.name, from_email: data.email, message: data.message },
        PUBLIC_KEY
      );
      setStatus('success');
      setData(initialData);
      setTimeout(() => setStatus('idle'), 4000);
    } catch (err) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm text-secondary">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={data.name}
          onChange={(e) => handleChange('name', e.target.value)}
          className="w-full rounded-lg border border-borderLight bg-card px-4 py-2.5 text-sm text-whiteText outline-none transition-colors focus:border-accent"
          placeholder="Your name"
        />
        {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm text-secondary">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={data.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className="w-full rounded-lg border border-borderLight bg-card px-4 py-2.5 text-sm text-whiteText outline-none transition-colors focus:border-accent"
          placeholder="you@example.com"
        />
        {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm text-secondary">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={data.message}
          onChange={(e) => handleChange('message', e.target.value)}
          className="w-full resize-none rounded-lg border border-borderLight bg-card px-4 py-2.5 text-sm text-whiteText outline-none transition-colors focus:border-accent"
          placeholder="Tell me about your project or opportunity..."
        />
        {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
      </div>

      <motion.button
        type="submit"
        disabled={status === 'sending'}
        whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(244,196,48,0.4)' }}
        whileTap={{ scale: 0.98 }}
        className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-bg transition-opacity disabled:opacity-60"
      >
        <Send size={16} />
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </motion.button>

      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="flex items-center gap-2 rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-400"
          >
            <CheckCircle2 size={16} /> Message sent successfully! I'll get back to you soon.
          </motion.div>
        )}
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400"
          >
            <AlertCircle size={16} /> Something went wrong. Please try again.
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
};

export default ContactForm;
