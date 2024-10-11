// components/ContactForm.js
import React from 'react';

const ContactForm = () => {
  return (
    <section className="py-4 bg-light pb-5 pt-5" id="contact">
      <div className="container my-1">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-5 col-md-8">
            <h2 className="fw-bold">nechte nám na sebe kontakt</h2>
            <form>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput-1" placeholder="Full name" required />
                <label htmlFor="floatingInput-1">Jméno</label>
              </div>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput-2" placeholder="Email address" required />
                <label htmlFor="floatingInput-2">Email</label>
              </div>
              <div className="form-floating mb-3">
                <input type="tel" className="form-control" id="floatingInput-3" placeholder="Phone number" required />
                <label htmlFor="floatingInput-3">Telefon</label>
              </div>
              <div className="form-floating">
                <textarea className="form-control" id="floatingTextarea-4" placeholder="Message" required style={{ height: '150px' }}></textarea>
                <label htmlFor="floatingTextarea2">Zpráva</label>
              </div>
              <div>
                <button className="btn btn-primary w-100 py-2 mt-4 fs-5">
                  Poslat
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
