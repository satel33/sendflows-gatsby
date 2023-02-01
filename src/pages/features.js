import React from "react"
import Layout from "../components/Layout"
import {
  ArrowIcon,
  Custom1Icon,
  Custom2Icon,
  Custom3Icon,
  Custom4Icon,
  DemoIcon,
  DivideIcon,
  EmailMarketingBuild,
  EmailMarketingDog,
  formEmailIcon,
  formIgIcon,
  FormOptIcon,
  FormPhoneIcon,
  JsIcon,
  NightTrain,
  PhpIcon,
  PlaceholderIcon,
  PythonIcon,
  RubyIcon,
  SMSAnimation,
  SmsDashboardSendflows,
  WhatsappSendflows1,
  WhatsappSendflows2,
} from "../utils/imgImport"

const FeaturesPage = () => {
  return (
    <Layout>
      <section className="space-5 pb-0">
        <div className="container text-center">
          <h1 className="font-weight-bold display-4">Tutte le funzioni</h1>
          <p className="lead w-lg-75 mx-auto">
            Qui troverai tutte le funzioni attuali di Sendflows e quelle a cui
            stiamo lavorando.
          </p>
        </div>
      </section>

      <section className="space-5">
        <div className="container">
          <div
            id="email"
            className="row align-items-center justify-content-around"
          >
            <div className="col-lg-7" data-aos="fade-in">
              <div className="row">
                <div
                  className="col-md-6 mb-4 mb-md-0"
                  data-aos="fade-down"
                  data-aos-delay="200"
                >
                  <img
                    className="img-fluid rounded-lg"
                    src={EmailMarketingBuild}
                    alt="img desc"
                  />
                </div>
                <div className="col-md-6 d-flex align-items-center">
                  <div className="row d-flex">
                    <div
                      className="col-12 mb-4"
                      data-aos="fade-down"
                      data-aos-delay="300"
                    >
                      <img
                        className="img-fluid rounded-lg"
                        src={EmailMarketingDog}
                        alt="img desc"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0 pl-lg-4" data-aos="fade-left">
              <i className="ri-send-plane-fill ri-3x text-primary"></i>
              <h2 className="font-weight-bold">
                Invia <span className="text-primary">Email Marketing</span>.
                Comodamente.
              </h2>
              <p className="lead mt-2 mb-4">
                Invia email promozionali ad i tuoi clienti in modo sicuro,
                affidabile e semplice.
                <br />
                <br />
                La nostra prorità è garantirti la{" "}
                <strong>migliore deliverability possibile.</strong>
              </p>
              <div className="row">
                <div className="col-md-6 mb-4 mb-md-0">
                  <div className="bg-light px-4 py-4 rounded-lg h-100 hover-translate-y hover-bg-primary-2">
                    <h3>
                      <span className="counter">76</span>M+
                    </h3>
                    <h5>Email Inviate Con Successo</h5>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="bg-light px-4 py-4 rounded-lg h-100 hover-translate-y hover-bg-primary-2">
                    <h3>
                      <span className="counter">11</span>M+
                    </h3>
                    <h5>Link Cliccati</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="sms"
            className="row align-items-center justify-content-around space-5 pb-0 mb-4 mb-lg-0"
          >
            <div className="col-lg-5 mb-5 mb-lg-0" data-aos="fade-right">
              <i className="ri-message-3-fill ri-3x text-primary"></i>
              <h2 className="font-weight-bold mb-3">
                <span className="">SMS</span> Marketing.
              </h2>
              <p className="lead mt-2 mb-4">
                Invia promo su Whatsapp ai tuoi clienti. Il messenger marketing
                è il futuro della comunicazione fra azienda e cliente; per
                questo è importante integrarlo con i canali tradizionali di
                email ed sms.
              </p>
              <div className="row">
                <div className="col">
                  <div className="d-flex align-items-center mb-3 mr-3">
                    <i className="ri-checkbox-circle-fill ri-xl text-primary mr-2"></i>
                    <span>Invia messaggi testuali</span>
                  </div>
                  <div className="d-flex align-items-center mb-3 mr-3">
                    <i className="ri-checkbox-circle-fill ri-xl text-primary mr-2"></i>
                    <span>Invia immagini e video</span>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex align-items-center mb-3 mr-3">
                    <i className="ri-checkbox-circle-fill ri-xl text-primary mr-2"></i>
                    <span>Utilizza le emoji 🥸</span>
                  </div>
                  <div className="d-flex align-items-center mb-3 mr-3">
                    <i className="ri-checkbox-circle-fill ri-xl text-primary mr-2"></i>
                    <span>Allega file PDF, csv etc..</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <img
                className="img-fluid rounded-lg"
                src={SmsDashboardSendflows}
                alt="img desc"
                data-zoomable
              />
            </div>
          </div>

          <div
            id="whatsapp"
            className="row align-items-center justify-content-around space-5 pb-0 mb-4 mb-lg-0"
          >
            <div className="col-lg-6" data-aos="fade-left">
              <div className="row">
                <div
                  className="col-md-6 mb-4 mb-md-0"
                  data-aos="fade-down"
                  data-aos-delay="200"
                >
                  <img
                    className="img-fluid rounded-lg"
                    src={WhatsappSendflows1}
                    alt="img desc"
                  />
                </div>
                <div
                  className="col-md-6 mb-4 mb-md-0"
                  data-aos="fade-down"
                  data-aos-delay="400"
                >
                  <img
                    className="img-fluid rounded-lg"
                    src={WhatsappSendflows2}
                    alt="img desc"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-5 mb-5 mb-lg-0" data-aos="fade-right">
              <i className="ri-whatsapp-fill ri-3x text-success"></i>
              <h2 className="font-weight-bold mb-3">
                <span className="text-success">Whatsapp</span> Marketing.
              </h2>
              <p className="lead mt-2 mb-4">
                Invia promo su Whatsapp ai tuoi clienti. Il messenger marketing
                è il futuro della comunicazione fra azienda e cliente; per
                questo è importante integrarlo con i canali tradizionali di
                email ed sms.
              </p>
              <div className="row">
                <div className="col">
                  <div className="d-flex align-items-center mb-3 mr-3">
                    <i className="ri-checkbox-circle-fill ri-xl text-primary mr-2"></i>
                    <span>Invia messaggi testuali</span>
                  </div>
                  <div className="d-flex align-items-center mb-3 mr-3">
                    <i className="ri-checkbox-circle-fill ri-xl text-primary mr-2"></i>
                    <span>Invia immagini e video</span>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex align-items-center mb-3 mr-3">
                    <i className="ri-checkbox-circle-fill ri-xl text-primary mr-2"></i>
                    <span>Utilizza le emoji 🥸</span>
                  </div>
                  <div className="d-flex align-items-center mb-3 mr-3">
                    <i className="ri-checkbox-circle-fill ri-xl text-primary mr-2"></i>
                    <span>Allega file PDF, csv etc..</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="flow" className="space-5 bg-light">
        <div className="container">
          <div className="row align-items-center justify-content-around">
            <div
              className="col-lg-6 mb-4 mb-md-0"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              <div className="wrapper1">
                <div
                  data-aos="zoom-in"
                  data-aos-delay="500"
                  className="automation-step step1"
                  style={{ zIndex: "100" }}
                >
                  <i className="ri-user-fill ri-lg mr-2"></i>Il contatto si è
                  iscritto alla lista
                </div>
                <div
                  data-aos="zoom-in"
                  data-aos-delay="1000"
                  className="automation-step step2"
                  style={{ zIndex: "100" }}
                >
                  <img
                    style={{
                      marginBottom: "4px",
                      width: "30px",
                      height: "16px",
                    }}
                    src={DivideIcon}
                    alt="icon divide"
                  />
                  Dividi contatto: se ha il TAG: “Italiano”
                </div>
                <div
                  data-aos="zoom-in"
                  data-aos-delay="1500"
                  className="text-center automation-step step3"
                >
                  NO
                </div>
                <div
                  data-aos="zoom-in"
                  data-aos-delay="2000"
                  className="automation-step step4"
                  style={{ zIndex: "100" }}
                >
                  <i className="ri-mail-fill ri-lg mr-2"></i>
                  <span>Invia Email “Benvenuto in Inglese”</span>
                </div>
                <div
                  data-aos="zoom-in"
                  data-aos-delay="2500"
                  className="automation-step step5"
                  style={{ zIndex: "100" }}
                >
                  <i className="ri-whatsapp-fill ri-lg mr-2"></i>Invia Whatsapp
                  “Offerta benvenuto”
                </div>
                <div
                  data-aos="zoom-in"
                  data-aos-delay="3000"
                  className="automation-step step6"
                  style={{ zIndex: "100" }}
                >
                  <i className="ri-add-fill ri-lg ri-2x"></i>
                </div>

                <div className="obj"></div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 540">
                  <path
                    d="M 189 15 V 162 c 0 13 1 16 16 16 H 398 C 413 178 416 184 416 196 V 412 V 196 C 416 184 413 178 398 178 H 205 C 190 178 189 175 189 162 C 189 175 188 178 174 178 H 4"
                    fill="none"
                    stroke="#5e5e7d"
                    strokeWidth="1"
                    strokeMiterlimit="10"
                  />
                </svg>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0 pl-lg-4" data-aos="fade-left">
              <i className="ri-organization-chart ri-3x text-primary"></i>
              <h2 className="font-weight-bold">
                Email, SMS e Whatsapp marketing in{" "}
                <span className="text-primary">un unico flow.</span>
              </h2>
              <p className="lead mt-2 mb-4">
                Gestisci le tue campagne marketing inviando email, SMS o
                messaggi su Whatsapp ai tuoi clienti in modo completamente
                automatizzato e semplice.
              </p>
              <div className="row">
                <div className="col">
                  <div className="d-flex align-items-center mb-3 mr-3">
                    <i className="ri-checkbox-circle-fill ri-xl text-primary mr-2"></i>
                    <span>Un solo flusso. Molteplici canali.</span>
                  </div>
                  <div className="d-flex align-items-center mb-3 mr-3">
                    <i className="ri-checkbox-circle-fill ri-xl text-primary mr-2"></i>
                    <span>Drag and drop.</span>
                  </div>

                  <div className="d-flex align-items-center mb-3 mr-3">
                    <i className="ri-checkbox-circle-fill ri-xl text-primary mr-2"></i>
                    <span>Interfaccia intuitiva.</span>
                  </div>
                  <div className="d-flex align-items-center mb-3 mr-3">
                    <i className="ri-checkbox-circle-fill ri-xl text-primary mr-2"></i>
                    <span>
                      Comunicazioni personalizzate in base a caratteristiche
                      dell'utente.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="transactional-email" className="space-5">
        <div className="container">
          <div className="row align-items-center justify-content-around pb-0 mb-4 mb-lg-0">
            <div className="col-lg-5 mb-5 mb-lg-0" data-aos="fade-right">
              <i className="ri-rocket-fill ri-3x text-primary"></i>
              <h2 className="font-weight-bold">
                <span className="text-primary">Modifica</span> le email{" "}
                <span className="text-primary">transazionali</span> senza <br />
                toccare il codice.
              </h2>
              <p className="lead mt-2 mb-3">
                Grazie alle nostre{" "}
                <strong>email transazionali dinamiche </strong>potrai modificare
                la grafica ed il contenuto delle email automatiche della tua
                piattaforma <strong>senza l'aiuto di uno sviluppatore.</strong>
              </p>
              <div className="row mt-5">
                <div className="col" data-aos="fade-left" data-aos-delay="200">
                  <img src={PythonIcon} height="48" alt="Brand" />
                </div>
                <div className="col" data-aos="fade-left" data-aos-delay="300">
                  <img src={PhpIcon} height="48" alt="Brand" />
                </div>
                <div className="col" data-aos="fade-left" data-aos-delay="400">
                  <img src={RubyIcon} height="48" alt="Brand" />
                </div>
                <div className="col" data-aos="fade-left" data-aos-delay="500">
                  <img src={JsIcon} height="48" alt="Brand" />
                </div>
              </div>
              <p className="text-small text-muted mt-3">
                Documentazione ed API esposte per tutti i linguaggi
              </p>
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <div className="row">
                <div className="p-0 col-lg-8 col-8 pr-2" data-aos="fade-left">
                  <div
                    style={{ position: "relative" }}
                    className="e-email rounded-lg"
                  >
                    <div className="e-logo">
                      <img src={DemoIcon} alt="" />
                    </div>
                    <div className="e-title">
                      <span>👋🏼 Hi {`{FIRST_NAME}`}!</span>
                    </div>
                    <img
                      style={{ position: "absolute" }}
                      className="changing-img e-img"
                      src={NightTrain}
                      alt=""
                    />
                    <img className="e-img" src={PlaceholderIcon} alt="" />
                    <div className="e-paragraph"></div>
                    <div className="e-paragraph"></div>
                    <div style={{ width: "60%" }} className="e-paragraph"></div>
                    <div className="e-cta">
                      <span>&nbsp;</span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-4" data-aos="fade-left">
                  <div className="mb-4 e-block">
                    <div className="row px-3 py-3">
                      <div className="col-8">
                        <img
                          className="icon-sm pb-1"
                          src={Custom1Icon}
                          alt=""
                        />
                        <br />
                        <span className="text-primary-3">
                          <strong>Logo</strong>
                        </span>
                      </div>
                      <div className="col-4">
                        <img className="icon-micro" src={ArrowIcon} alt="" />
                      </div>
                    </div>
                  </div>

                  <div className="mb-4 e-block moving">
                    <div className="row px-3 py-3">
                      <div className="col-8">
                        <img
                          className="icon-sm pb-1"
                          src={Custom2Icon}
                          alt=""
                        />
                        <br />
                        <span className="text-primary-3">
                          <strong>Image</strong>
                        </span>
                      </div>
                      <div className="col-4">
                        <img className="icon-micro" src={ArrowIcon} alt="" />
                      </div>
                    </div>
                  </div>

                  <div className="mb-4 e-block">
                    <div className="row px-3 py-3">
                      <div className="col-8">
                        <img
                          className="icon-sm pb-1"
                          src={Custom3Icon}
                          alt=""
                        />
                        <br />
                        <span className="text-primary-3">
                          <strong>Paragraph</strong>
                        </span>
                      </div>
                      <div className="col-4">
                        <img className="icon-micro" src={ArrowIcon} alt="" />
                      </div>
                    </div>
                  </div>

                  <div className="mb-4 e-block">
                    <div className="row px-3 py-3">
                      <div className="col-8">
                        <img
                          className="icon-sm pb-1"
                          src={Custom4Icon}
                          alt=""
                        />
                        <br />
                        <span className="text-primary-3">
                          <strong>Socials</strong>
                        </span>
                      </div>
                      <div className="col-4">
                        <img className="icon-micro" src={ArrowIcon} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="transactional-sms" className="space-5">
        <div className="container">
          <div className="row align-items-center justify-content-around">
            <div className="col-lg-6" data-aos="fade-right">
              <img
                className="img-fluid rounded-lg"
                src={SMSAnimation}
                alt="sms animation"
              />
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0" data-aos="fade-left">
              <i className="ri-chat-check-fill ri-3x text-primary"></i>
              <h2 className="font-weight-bold mb-3">
                Modifica{" "}
                <span className="text-primary">SMS transazionali.</span>
                <br />
                Dinamicamente.
              </h2>
              <p className="lead mt-2 mb-4">
                Componi i messaggi transazionali che il tuo business deve
                inviare e modificali in qualsiasi momento con pochi click.
              </p>
              <div className="row">
                <div className="col">
                  <div className="d-flex align-items-center mb-3 mr-3">
                    <i className="ri-checkbox-circle-fill ri-xl text-primary mr-2"></i>
                    <span>Messaggi OTP.</span>
                  </div>
                  <div className="d-flex align-items-center mb-3 mr-3">
                    <i className="ri-checkbox-circle-fill ri-xl text-primary mr-2"></i>
                    <span>SMS Transazionali.</span>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex align-items-center mb-3 mr-3">
                    <i className="ri-checkbox-circle-fill ri-xl text-primary mr-2"></i>
                    <span>Modifica dinamica e real time.</span>
                  </div>
                  <div className="d-flex align-items-center mb-3 mr-3">
                    <i className="ri-checkbox-circle-fill ri-xl text-primary mr-2"></i>
                    <span>Collegamento API One-Time.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="form" className="space-3 bg-light">
        <div className="container">
          <div className="row align-items-center justify-content-around">
            <div className="col-lg-7" data-aos="fade-left">
              <div className="row">
                <div
                  className="d-none d-sm-block col-lg-5 col-12 pr-4 z-index-5"
                  data-aos="fade-left"
                >
                  <div className="mb-4 fa-block">
                    <div className="px-3 py-3">
                      <img
                        className="icon-xs pb-1 ml-2 mr-2"
                        src={formEmailIcon}
                        alt=""
                      />
                      <span className="text-primary-3">
                        <strong>Email</strong>
                      </span>
                      <div className="float-right">
                        <img className="icon-micro" src={ArrowIcon} alt="" />
                      </div>
                    </div>
                  </div>

                  <div className="mb-4 fa-block movingblock2">
                    <div className="px-3 py-3">
                      <img
                        className="icon-xs pb-1 ml-2 mr-2"
                        src={formIgIcon}
                        alt=""
                      />
                      <span className="text-primary-3">
                        <strong>Testo breve</strong>
                      </span>
                      <div className="float-right">
                        <img className="icon-micro" src={ArrowIcon} alt="" />
                      </div>
                    </div>
                  </div>

                  <div className="mb-4 fa-block ">
                    <div className="px-3 py-3">
                      <img
                        className="icon-xs pb-1 ml-2 mr-2"
                        src={FormPhoneIcon}
                        alt=""
                      />
                      <span className="text-primary-3 mr-5">
                        <strong>Cellulare</strong>
                      </span>
                      <img className="icon-micro" src={ArrowIcon} alt="" />
                    </div>
                  </div>

                  <div className="mb-4 fa-block ">
                    <div className="px-3 py-3">
                      <img
                        className="icon-xs pb-1 ml-2 mr-2"
                        src={FormOptIcon}
                        alt=""
                      />
                      <span className="text-primary-3 mr-5">
                        <strong>Opzioni</strong>
                      </span>
                      <img className="icon-micro" src={ArrowIcon} alt="" />
                    </div>
                  </div>
                </div>
                <div className="p-4 col-lg-7 col-12 mt-5" data-aos="fade-left">
                  <div style={{ position: "relative" }} className="rounded-lg">
                    <div className="fa-title text-primary-3 mb-3">
                      <span>
                        <strong>ISCRIVITI ALLA NOSTRA NEWSLETTER</strong>
                      </span>
                    </div>
                    <form>
                      <label htmlFor="email">Nome completo</label>
                      <div className="box form-group">
                        <h6 className="typing">
                          Andrea Vitto<span className="barretta">|</span>
                        </h6>
                      </div>

                      <div className="add-line">
                        <span>Inserisci qui</span>
                      </div>

                      <div>
                        <div className="appear-box mb-3 form-group">
                          <label htmlFor="email">Username Instagram</label>
                          <input
                            type="text"
                            placeholder="@username"
                            className="form-control"
                            id="email"
                          />
                        </div>
                      </div>

                      <div className="form-group addPadd">
                        <label htmlFor="email">Email</label>
                        <input
                          type="text"
                          placeholder="info@email.com"
                          className="form-control"
                          id="email"
                        />
                        <div className="fa-cta">
                          <span>&nbsp;</span>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0" data-aos="fade-left">
              <h2 className="font-weight-bold">
                Costruisci il tuo <span className="text-primary">form</span>{" "}
                d'iscrizione{" "}
                <span className="text-primary">personalizzato</span>.
              </h2>
              <p className="lead mt-2 mb-4">
                Grazie al form builder di Sendflows potrai{" "}
                <strong>costruire il tuo modulo d'iscrizione</strong> contatti
                con una semplice interfaccia drag&drop
              </p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-center mb-2">
                  <i className="ri-check-fill ri-xl text-primary mr-2"></i>
                  <span>Aumenta il numero di utenti iscritti</span>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <i className="ri-check-fill ri-xl text-primary mr-2"></i>
                  <span>Style e Branding FORM personalizzabile</span>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <i className="ri-check-fill ri-xl text-primary mr-2"></i>
                  <span>Implementalo sul tuo sito con copia e incolla</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="space-1 mb-5">
        <div className="container bg-primary-3 text-white px-5 py-5 rounded-lg">
          <div className="text-center w-lg-75 mx-auto py-5">
            <h2 className="font-weight-bold">
              Non trovi la funzione che stai cercando?
            </h2>
            <p className="lead mt-4">
              Nessun problema. Contattaci subito nel modo che preferisci e
              valuteremo come adattare Sendflows alle tue esigenze.
            </p>
            <a href="#a" className="btn btn-primary mt-4 mr-2">
              <i
                style={{ verticalAlign: "sub" }}
                className="ri-mail-fill ri-lg"
              ></i>
              <span>Scrivi un email</span>
            </a>
            <a
              style={{ backgroundColor: "#3390ec" }}
              href="#b"
              className="btn bg-blue mt-4 mr-2 text-white"
            >
              <i className="ri-telegram-fill ri-lg"></i>
              <span>Scrivici su Telegram</span>
            </a>
            <a href="#c" className="btn btn-success mt-4 mr-2">
              <i
                style={{ verticalAlign: "sub" }}
                className="ri-whatsapp-fill ri-lg"
              ></i>
              <span>Scrivici su Whatsapp</span>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default FeaturesPage
