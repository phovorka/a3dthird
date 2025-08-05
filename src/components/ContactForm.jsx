// components/ContactForm.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
  const { t } = useTranslation(); // Hook pro překlady

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
await fetch('/.netlify/functions/sendEmail', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name,
    email,
    phone,
    message,
  }),
});
    try {
      const response = await fetch('/.netlify/functions/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert(t('contactForm.successMessage'));
      } else {
        alert(t('contactForm.errorMessage'));
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(t('contactForm.errorMessage'));
    }
  };

  return (
    <section className="py-4 bg-light pb-5 pt-5" id="contact">
      <div className="container my-1">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-5 col-md-8">
            <h2 className="fw-bold">{t('contactForm.title')}</h2> {/* Přeložený nadpis */}
         <form onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="floatingInput-1"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('contactForm.namePlaceholder')} // Přeložený placeholder
                  required
                />
                <label htmlFor="floatingInput-1">{t('contactForm.name')}</label> {/* Přeložený label */}
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="floatingInput-2"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('contactForm.emailPlaceholder')} // Přeložený placeholder
                  required
                />
                <label htmlFor="floatingInput-2">{t('contactForm.email')}</label> {/* Přeložený label */}
              </div>
              <div className="form-floating mb-3">
                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  id="floatingInput-3"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t('contactForm.phonePlaceholder')} // Přeložený placeholder
                  required
                />
                <label htmlFor="floatingInput-3">{t('contactForm.phone')}</label> {/* Přeložený label */}
              </div>
              <div className="form-floating">
                <textarea
                  className="form-control"
                  id="floatingTextarea-4"
                  name="message"
                  placeholder={t('contactForm.messagePlaceholder')} // Přeložený placeholder
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{ height: '150px' }}
                ></textarea>
                <label htmlFor="floatingTextarea-4">{t('contactForm.message')}</label> {/* Přeložený label */}
              </div>
              <div>
                <button className="btn btn-primary w-100 py-2 mt-4 fs-5">
                  {t('contactForm.submit')} {/* Přeložené tlačítko */}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};


export default ContactForm;
