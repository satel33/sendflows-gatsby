import React from "react"
import Layout from "../components/Layout"

const PricingPage = () => {
  return (
    <Layout>
      <section className="space-5 pb-0">
        <div className="container text-center">
          <h1 className="font-weight-bold display-4">Pricing</h1>
          <p className="lead w-lg-75 mx-auto">
            Seleziona il piano più adatto alle tue esigenze. Qualsiasi sia il
            tuo businness, Sendflows è semplice, trasparente e si adatta alla
            dimensione della tua azienda.
          </p>
        </div>
      </section>

      <section className="space-1">
        <div className="container">
          <div className="row mb-4">
            <div className="col-lg-3 mb-4 mb-lg-0" data-aos="slide-up">
              <div className="card card-body px-4 py-4 hover-translate-y hover-shadow-lg">
                <i className="ri-gift-fill ri-3x text-primary"></i>
                <h2 className="font-weight-bold">Free</h2>
                <p className="lead">
                  Per provare il servizio e per chi ha appena avviato il proprio
                  business.
                </p>
                <div className="d-flex align-items-center my-3">
                  <h4 className="h2">€0</h4>
                  <p className="mt-2 ml-2">Gratis per sempre</p>
                </div>
                <ul className="list-unstyled">
                  <li className="d-flex align-items-center mb-3">
                    <i className="ri-check-fill ri-xl mr-2"></i>
                    <span>6'000/mese Email Marketing</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="ri-check-fill ri-xl mr-2"></i>
                    <span>100/giorno Email Transazionali</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="ri-check-fill ri-xl mr-2"></i>
                    <span>500 Contatti</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="ri-check-fill ri-xl mr-2"></i>
                    <span>Flow Automazioni</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="ri-check-fill ri-xl mr-2"></i>
                    <span>Email Builder Brandizzato</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="ri-check-fill ri-xl mr-2"></i>
                    <span>Form Iscrizione Illimitati</span>
                  </li>

                  <li className="d-flex align-items-center mb-3">
                    <i className="ri-check-fill ri-xl mr-2"></i>
                    <span>SMS Transazionali</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="text-danger ri-close-fill ri-xl mr-2"></i>
                    <span>Supporto Whatsapp h24</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="text-danger ri-close-fill ri-xl mr-2"></i>
                    <span>Automazioni Whatsapp</span>
                  </li>
                </ul>
                <a
                  href="https://app.sendflows.io/users/register"
                  className="btn btn-primary"
                >
                  Inizia Gratis
                </a>
              </div>
            </div>
            <div
              className="col-lg-3 mb-4 mb-lg-0"
              data-aos="slide-up"
              data-aos-delay="200"
            >
              <div className="card card-body px-4 py-4 hover-translate-y hover-shadow-lg">
                <i className="ri-open-arm-fill ri-3x text-primary"></i>
                <h2 className="font-weight-bold">Freelancer</h2>
                <p className="lead">
                  Per professionisti che hanno bisogno di promuovere i loro
                  servizi e gestire i clienti.
                </p>
                <div className="d-flex align-items-center my-3">
                  <h4 className="h2">€9,90</h4>
                  <p className="mt-2 ml-2">/mese</p>
                </div>
                <ul className="list-unstyled">
                  <li className="d-flex align-items-center mb-3">
                    <i className="ri-check-fill ri-xl mr-2"></i>
                    <span>20'000 Email Marketing</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="ri-check-fill ri-xl mr-2"></i>
                    <span>150/giorno Email Transazionali</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="ri-check-fill ri-xl mr-2"></i>
                    <span>2'000 Contatti</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="ri-check-fill ri-xl mr-2"></i>
                    <span>Flow Automazioni</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="ri-check-fill ri-xl mr-2"></i>
                    <span>Email Builder Brandizzato</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="ri-check-fill ri-xl mr-2"></i>
                    <span>Form Iscrizione Illimitati</span>
                  </li>

                  <li className="d-flex align-items-center mb-3">
                    <i className="ri-check-fill ri-xl mr-2"></i>
                    <span>SMS Transazionali</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="ri-check-fill ri-xl mr-2"></i>
                    <span>Supporto Whatsapp h24</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="text-danger ri-close-fill ri-xl mr-2"></i>
                    <span>Automazioni Whatsapp</span>
                  </li>
                </ul>
                <a
                  href="https://app.sendflows.io/users/register"
                  className="btn btn-primary"
                >
                  Inizia Gratis
                </a>
              </div>
            </div>

            <div
              className="col-lg-3 mb-4 mb-lg-0"
              data-aos="slide-up"
              data-aos-delay="200"
            >
              <div
                className="card card-body px-4 py-4 hover-translate-y hover-shadow-lg"
                style={{ outline: "medium solid #5B61F9 !important" }}
              >
                <i className="ri-rocket-fill ri-3x text-primary"></i>
                <h2 className="font-weight-bold">Startups</h2>
                <p className="lead">
                  Per le startup che hanno bisogno di un tool completo e
                  flessibile.
                </p>
                <div className="d-flex align-items-center my-3">
                  <h4 className="h2">€37,40</h4>
                  <p className="mt-2 ml-2">/mese</p>
                </div>
                <ul className="list-unstyled">
                  <li className="d-flex align-items-center mb-3">
                    <i className="ri-check-fill ri-xl mr-2"></i>
                    <span>50'000 Email Marketing</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="ri-check-fill ri-xl mr-2"></i>
                    <span>200/giorno Email Transazionali</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="ri-check-fill ri-xl mr-2"></i>
                    <span>3'000 Contatti</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="ri-check-fill ri-xl mr-2"></i>
                    <span>Flow Automazioni</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="ri-check-fill ri-xl mr-2"></i>
                    <span>Email Builder Brandizzato</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="ri-check-fill ri-xl mr-2"></i>
                    <span>Form Iscrizione Illimitati</span>
                  </li>

                  <li className="d-flex align-items-center mb-3">
                    <i className="ri-check-fill ri-xl mr-2"></i>
                    <span>SMS Transazionali</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="ri-check-fill ri-xl mr-2"></i>
                    <span>Supporto Whatsapp h24</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="ri-check-fill ri-xl mr-2"></i>
                    <span>Automazioni Whatsapp</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="ri-check-fill ri-xl mr-2"></i>
                    <span>1'000 Whatsapp Inclusi</span>
                  </li>
                </ul>
                <a
                  href="https://app.sendflows.io/users/register"
                  className="btn btn-primary"
                >
                  Inizia Gratis
                </a>
              </div>
            </div>
            <div
              className="col-lg-3 mb-4 mb-lg-0"
              data-aos="slide-up"
              data-aos-delay="300"
            >
              <div className="card card-body px-4 py-4 hover-translate-y hover-shadow-lg">
                <i className="ri-building-2-fill ri-3x text-primary"></i>
                <h2 className="font-weight-bold">Business</h2>
                <span
                  className="badge badge-primary mb-3"
                  style={{ position: "absolute", top: "-15px" }}
                >
                  Più popolare
                </span>
                <p className="lead">
                  Per scalare il proprio business ed sfruttare tutto il
                  potenziale del marketing automation.
                </p>
                <div className="d-flex align-items-center my-3">
                  <h4 className="h2">€54,60</h4>
                  <p className="mt-2 ml-2">/mese</p>
                </div>
                <ul className="list-unstyled">
                  <li className="d-flex align-items-center mb-3">
                    <i className="ri-check-fill ri-xl mr-2"></i>
                    <span>100'000 Email Marketing</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="ri-check-fill ri-xl mr-2"></i>
                    <span>300/giorno Email Transazionali</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="ri-check-fill ri-xl mr-2"></i>
                    <span>5'000 Contatti</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="ri-check-fill ri-xl mr-2"></i>
                    <span>Flow Automazioni</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="ri-check-fill ri-xl mr-2"></i>
                    <span>Email Builder Brandizzato</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="ri-check-fill ri-xl mr-2"></i>
                    <span>Form Iscrizione Illimitati</span>
                  </li>

                  <li className="d-flex align-items-center mb-3">
                    <i className="ri-check-fill ri-xl mr-2"></i>
                    <span>50 SMS Transazionali Inclusi</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="ri-check-fill ri-xl mr-2"></i>
                    <span>Supporto Whatsapp h24</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="ri-check-fill ri-xl mr-2"></i>
                    <span>Automazioni Whatsapp</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="ri-check-fill ri-xl mr-2"></i>
                    <span>5'000 Whatsapp Inclusi</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="ri-check-fill ri-xl mr-2"></i>
                    <span>Sviluppo Funzioni Personalizzate</span>
                    <span className="badge badge-primary mb-3">NEW</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="ri-check-fill ri-xl mr-2"></i>
                    <span>Chat Live Con Consulente Esperto</span>
                  </li>
                </ul>
                <a
                  href="https://app.sendflows.io/users/register"
                  className="btn btn-primary"
                >
                  Inizia Gratis
                </a>
                <a href="#custom-plan" className="btn btn-link-primary">
                  Serve di più? Scrivici subito.
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="custom-plan" className="space-1 bg-primary-3">
        <div className="container">
          <div className="w-100 w-lg-75 text-center mx-auto mb-5 text-white">
            <i className="ri-drag-drop-fill ri-3x text-white"></i>
            <h2 className="font-weight-bold text-center">
              Piano Personalizzato
            </h2>
            <p className="lead">
              Non riesci a trovare un pacchetto adatto a te? Nessun problema,
              contattaci subito qui.
            </p>
          </div>
          <div className="text-center mt-5">
            <a
              href="mailto:info@sendflows.io"
              className="btn btn-primary mt-4 mr-2"
            >
              <i
                style={{ verticalAlign: "sub" }}
                className="ri-mail-fill ri-lg"
              ></i>
              <span>Scrivici un email</span>
            </a>
            <a
              style={{ backgroundColor: "#3390ec" }}
              href="https://t.me/sendflows"
              className="btn bg-blue mt-4 mr-2 text-white"
            >
              <i className="ri-telegram-fill ri-lg"></i>
              <span>Scrivici su Telegram</span>
            </a>
            <a
              href="https://wa.me/393463685420?text=Hey%20"
              className="btn btn-success mt-4 mr-2"
            >
              <i
                style={{ verticalAlign: "sub" }}
                className="ri-whatsapp-fill ri-lg"
              ></i>
              <span>Scrivici su Whatsapp</span>
            </a>
          </div>
        </div>
      </section>

      <section className="space-3">
        <div className="container">
          <div className="w-100 w-lg-75 text-center mx-auto mb-5">
            <h6 className="text-primary font-weight-bold">
              LE NOSTRE FUNZIONI
            </h6>
            <h2>Risparmia tempo e crea un'esperienza omnichannel.</h2>
          </div>
          <div className="row d-flex flex-wrap justify-content-around text-center">
            <div className="col-6 col-md-4 col-lg-3 my-5" data-aos="zoom-in">
              <i className="ri-organization-chart ri-3x text-primary"></i>
              <h5 className="px-4">Flow Automazioni</h5>
            </div>
            <div
              className="col-6 col-md-4 col-lg-3 my-5"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <i className="ri-whatsapp-fill ri-3x text-primary"></i>
              <h5 className="px-4">Whatsapp Marketing</h5>
            </div>
            <div
              className="col-6 col-md-4 col-lg-3 my-5"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <i className="ri-discuss-fill ri-3x text-primary"></i>
              <h5 className="px-4">SMS Transazionali</h5>
            </div>
            <div
              className="col-6 col-md-4 col-lg-3 my-5"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <i className="ri-mail-send-fill ri-3x text-primary"></i>
              <h5 className="px-4">Email Marketing</h5>
            </div>
            <div
              className="col-6 col-md-4 col-lg-3 my-5"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <i className="ri-layout-3-fill ri-3x text-primary"></i>
              <h5 className="px-4">Email Builder</h5>
            </div>
            <div
              className="col-6 col-md-4 col-lg-3 my-5"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <i className="ri-survey-fill ri-3x text-primary"></i>
              <h5 className="px-4">Form Builder</h5>
            </div>
            <div
              className="col-6 col-md-4 col-lg-3 my-5"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <i className="ri-mail-unread-fill ri-3x text-primary"></i>
              <h5 className="px-4">Email Transazionali</h5>
            </div>
          </div>
        </div>
      </section>

      <section className="space-2">
        <div className="container">
          <div className="w-100 w-lg-75 text-center mx-auto mb-5">
            <h6 className="text-primary font-weight-bold">FAQ</h6>
            <h2>Le domande più frequenti.</h2>
            <p className="lead">
              Ecco la lista delle domende più frequenti e le corrispettive
              risposte per capire al meglio tutte le caratteristiche di
              Sendflows.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div id="faqOne" className="border">
                <div className="card border-top-0 border-left-0 border-right-0">
                  <a
                    href="#faqOne3"
                    data-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    className="p-3 p-md-4 collapsed"
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="mb-0">
                        Cosa significa 'sviluppo funzioni personalizzate'?
                      </h6>
                      <i className="ri-arrow-down-s-line ri-lg"></i>
                    </div>
                  </a>
                  <div className="collapse" id="faqOne3" data-parent="#faqOne">
                    <p className="mb-0 px-3 px-md-4 pb-3 pb-md-4">
                      Lo sviluppo di funzioni personalizzate è un servizio che
                      offriamo a tutti i nostri clienti attraverso il quale
                      possono richiedere l'implementazione di una funzione
                      aggiuntiva non presente necessaria al loro business.
                    </p>
                  </div>
                </div>
                <div className="card border-0">
                  <a
                    href="#faqOne4"
                    data-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    className="p-3 p-md-4 collapsed"
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="mb-0">Posso provarlo gratuitamente?</h6>
                      <i className="ri-arrow-down-s-line ri-lg"></i>
                    </div>
                  </a>
                  <div className="collapse" id="faqOne4" data-parent="#faqOne">
                    <p className="mb-0 px-3 px-md-4 pb-3 pb-md-4">
                      Certo, Sendflows offre un piano di base gratuito per far
                      testare agli utenti il suo funzionamento.
                      <br />
                      👉🏼 <a href="./register.html">Provalo adesso</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default PricingPage
