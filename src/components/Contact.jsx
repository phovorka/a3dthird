// components/Contact.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation(); // Hook pro překlady

  return (
    <section className="py-4 bg-light pb-5 pt-5" id="contact">
      <div className="container my-1">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-5 col-md-8">
            <h2 className="fw-bold">{t('contact.title')}</h2> {/* Přeložený nadpis */}

            <div className="card text-center shadow-lg" style={{ width: '18rem', margin: '20px auto' }}>

            <div className="card-body">
                <h5 className="card-title">Petr Hovorka</h5>
                <p className="card-text">{t('contact.phonePlaceholder')}</p>
                <p className="card-text text-muted">{t('contact.emailPlaceholder')} </p>

            </div>
        </div>


          </div>
        </div>
      </div>
    </section>
  );
};


export default Contact;
