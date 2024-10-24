// components/ContactForm.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
  const { t } = useTranslation(); // Hook pro překlady

  return (
    <section className="py-4 bg-light pb-5 pt-5" id="contact">
      <div className="container my-1">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-5 col-md-8">
            <h2 className="fw-bold">{t('contactForm.title')}</h2> {/* Přeložený nadpis */}
          <form name="contact" netlify>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput-1"
                  placeholder={t('contactForm.namePlaceholder')} // Přeložený placeholder
                  required
                />
                <label htmlFor="floatingInput-1">{t('contactForm.name')}</label> {/* Přeložený label */}
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput-2"
                  placeholder={t('contactForm.emailPlaceholder')} // Přeložený placeholder
                  required
                />
                <label htmlFor="floatingInput-2">{t('contactForm.email')}</label> {/* Přeložený label */}
              </div>
              <div className="form-floating mb-3">
                <input
                  type="tel"
                  className="form-control"
                  id="floatingInput-3"
                  placeholder={t('contactForm.phonePlaceholder')} // Přeložený placeholder
                  required
                />
                <label htmlFor="floatingInput-3">{t('contactForm.phone')}</label> {/* Přeložený label */}
              </div>
              <div className="form-floating">
                <textarea
                  className="form-control"
                  id="floatingTextarea-4"
                  placeholder={t('contactForm.messagePlaceholder')} // Přeložený placeholder
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
