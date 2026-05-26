'use client';
import React, { useState } from 'react';

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const PopupForm: React.FC<PopupFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredLanguage: 'English',
    servicesInterested: [] as string[],
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const serviceOptions = [
    'Amazon / Flipkart Seller Account Management',
    'Meesho / Ajio Account Management',
    'Etsy Account Management',
    'Social Media Marketing',
    'Account reconciliation',
    'Website Development',
    'Meesho Account Management',
    'Bimini / Indiamart',
    'Ebay / Walmart Account Management',
    'SEO',
    'Google / Meta Ads',
    'Others',
  ];

  const languages = ['English', 'Hindi', 'Tamil', 'Kannada', 'Telugu'];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleLanguageChange = (lang: string) => {
    setFormData({ ...formData, preferredLanguage: lang });
  };

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      servicesInterested: prev.servicesInterested.includes(service)
        ? prev.servicesInterested.filter((s) => s !== service)
        : [...prev.servicesInterested, service],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/book-call', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('✓ Booking request sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          preferredLanguage: 'English',
          servicesInterested: [],
        });
        setTimeout(() => {
          onClose();
          setMessage('');
        }, 2000);
      } else {
        setMessage('✗ Failed to send request. Try again.');
      }
    } catch (error) {
      setMessage('✗ Error sending request.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-40 bg-black/50 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4" data-lenis-prevent>
        <div className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-y-auto" data-lenis-prevent>
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors z-10"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6l-12 12M6 6l12 12" />
            </svg>
          </button>

          {/* Content */}
          <div className="p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Get Your Free Consultation
              </h2>
              <p className="text-gray-500">
                Let our experts help you reach your goals
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  FULL NAME *
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  disabled={loading}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition disabled:bg-gray-100"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  EMAIL *
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={loading}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition disabled:bg-gray-100"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  PHONE NUMBER *
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter Number"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={loading}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition disabled:bg-gray-100"
                />
              </div>

              {/* Requirements */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  REQUIREMENTS
                </label>
                <textarea
                  id="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={loading}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition disabled:bg-gray-100 resize-none"
                />
              </div>

              {/* Preferred Language */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  PREFERRED LANGUAGE
                </label>
                <div className="flex flex-wrap gap-3">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => handleLanguageChange(lang)}
                      disabled={loading}
                      className={`px-4 py-2 rounded-lg font-medium transition ${
                        formData.preferredLanguage === lang
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      } disabled:opacity-50`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>

              {/* Services Interested In */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  SERVICE INTERESTED IN
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {serviceOptions.map((service) => (
                    <label
                      key={service}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={formData.servicesInterested.includes(service)}
                        onChange={() => handleServiceToggle(service)}
                        disabled={loading}
                        className="w-4 h-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500 disabled:opacity-50"
                      />
                      <span className="text-sm text-gray-700">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              {message && (
                <div
                  className={`text-center text-sm font-medium p-3 rounded-lg ${
                    message.startsWith('✓')
                      ? 'bg-green-50 text-green-700'
                      : 'bg-red-50 text-red-700'
                  }`}
                >
                  {message}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Get Free Consultation'}
              </button>

              {/* Footer Note */}
              <p className="text-center text-xs text-gray-500">
                Prefer email?{' '}
                <a
                  href="mailto:dev@sellerrocket.in"
                  className="text-blue-500 hover:underline"
                >
                  dev@sellerrocket.in
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopupForm;