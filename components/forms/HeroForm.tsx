import React, { useState } from 'react'

const HeroForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id.replace('hero-', '')]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('✓ Email sent successfully!');
        setFormData({ name: '', phone: '', email: '' });
      } else {
        setMessage('✗ Failed to send email. Try again.');
      }
    } catch (error) {
      setMessage('✗ Error sending email.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    
    <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-1.5"><label htmlFor="hero-name" className="block text-xs font-semibold text-white/90 tracking-wide">Full name</label>
            <div className="relative"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/70"
                aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              <input
                type="text" 
                className="flex w-full border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-11 bg-white border-white/40 text-foreground placeholder:text-muted-foreground/70 focus:border-accent focus:bg-white h-12 rounded-xl transition-all duration-300 focus:ring-2 focus:ring-accent/30"
                id="hero-name" 
                placeholder="e.g. Rahul Sharma" 
                required 
                maxLength={100} 
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                disabled={loading}
              /></div>
          </div>
          <div className="space-y-1.5"><label htmlFor="hero-phone" className="block text-xs font-semibold text-white/90 tracking-wide">Phone / WhatsApp number</label>
            <div
              className="relative"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/70"
                aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <input
                type="tel" 
                className="flex w-full border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-11 bg-white border-white/40 text-foreground placeholder:text-muted-foreground/70 focus:border-accent focus:bg-white h-12 rounded-xl transition-all duration-300 focus:ring-2 focus:ring-accent/30"
                id="hero-phone" 
                placeholder="e.g. +91 98113 80023" 
                required 
                maxLength={20} 
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                disabled={loading}
              /></div>
      </div>
      <div className="space-y-1.5"><label htmlFor="hero-email" className="block text-xs font-semibold text-white/90 tracking-wide">Work email</label>
        <div className="relative"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/70"
            aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
          <input
            type="email" 
            className="flex w-full border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-11 bg-white border-white/40 text-foreground placeholder:text-muted-foreground/70 focus:border-accent focus:bg-white h-12 rounded-xl transition-all duration-300 focus:ring-2 focus:ring-accent/30"
            id="hero-email" 
            placeholder="e.g. rahul@yourbrand.com" 
            required 
            maxLength={255} 
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            disabled={loading}
          /></div></div>
      <button 
        className="btn-bg inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 px-4 w-full bg-accent hover:bg-accent-light text-accent-foreground shadow-custom-md hover:shadow-custom-lg transition-all duration-300 text-[15px] py-6 font-semibold group active:scale-[0.97] rounded-xl"
        type="submit"
        disabled={loading}
      >
        {loading ? 'Sending...' : 'Get Free Audit'}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
      </button>
      {message && (
        <div className={`text-center text-sm font-medium ${message.startsWith('✓') ? 'text-green-500' : 'text-red-500'}`}>
          {message}
        </div>
      )}
    </form>
  )
}

export default HeroForm