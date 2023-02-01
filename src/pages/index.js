import * as React from "react"
import Layout from "../components/Layout"
import {
  ArrowIcon,
  AticaIcon,
  Avatar1,
  Avatar2,
  Avatar3,
  Avatar4,
  Avatar5,
  Avatar6,
  BeautygoLogo,
  BubbletravelLogo,
  BuilderIcon,
  CodeIcon,
  Custom1Icon,
  Custom2Icon,
  Custom3Icon,
  Custom4Icon,
  DemoIcon,
  EarthIcon,
  Email2Icon,
  EmailIcon,
  GobrandLogo,
  NightTrain,
  NineIcon,
  PixhousesLogo,
  PlaceholderIcon,
  ProxyplanetLogo,
  SupportIcon,
  TvitIcon,
  WhatsappIcon,
} from "../utils/imgImport"

const trusted_logos = [
  {
    logo: PixhousesLogo,
  },
  {
    logo: ProxyplanetLogo,
  },
  {
    logo: GobrandLogo,
  },
  {
    logo: BeautygoLogo,
  },
  {
    logo: BubbletravelLogo,
  },
]

const IndexPage = () => {
  return (
    <Layout>
      <section className="pb-5 space-3 mt-5">
        <div className="container">
          <div className="row align-items-center justify-content-around">
            <div className="col-lg-6 pr-lg-5">
              <h1
                className="display-4 font-weight-bold line-height-1"
                data-aos="fade-up"
              >
                Comunica con i tuoi clienti.
                <br />
                <span className="text-primary">Email, SMS e Whatsapp.</span>
              </h1>
              <p
                className="h5 font-weight-normal mt-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Invia ai tuoi clienti messaggi su Whatsapp, email ed SMS tramite
                un unico flusso ominichannel.
                <br />
                Lascia scorrere i tuoi contatti.
              </p>
              <div className="mt-4" data-aos="fade-up" data-aos-delay="200">
                <form>
                  <div className="input-group mb-2">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Inserisci la tua email"
                      required
                    />
                    <div className="input-group-append align-items-center">
                      <a
                        className="btn btn-primary rounded-right d-inline-flex align-items-center "
                        href="https://app.sendflows.io/users/register"
                      >
                        Inizia Gratis
                        <i className="ri-arrow-right-line ri-lg ml-2"></i>
                      </a>
                    </div>
                  </div>
                </form>
                <p className="text-muted">
                  <small>Nessuna carta di credito richiesta.</small>
                </p>
              </div>
            </div>
            <div
              style={{ zIndex: 100 }}
              className="col-lg-6 icons-s"
              data-aos="fade-right"
            >
              <div className="mt-3 row justify-content-center text-center">
                <div
                  className="x1 "
                  style={{ zIndex: 100, width: "100px", position: "relative" }}
                >
                  <img
                    className="y y1"
                    style={{ zIndex: 100, width: "100px" }}
                    src={WhatsappIcon}
                    alt=""
                  />
                </div>
              </div>
              <div className="row">
                <div
                  className="col-6 x2 mb-4"
                  style={{ zIndex: 100, width: "100px", position: "relative" }}
                >
                  <img
                    className="y y2"
                    style={{ zIndex: 100, width: "100px" }}
                    src={EmailIcon}
                    alt=""
                  />
                </div>
                <div
                  className="col-6 x3 mt-5 d-md-flex align-items-center order-2 order-lg-2 justify-content-end mr-lg-0"
                  style={{
                    zIndex: 100,
                    width: "100px",
                    position: "relative",
                    float: "right",
                  }}
                >
                  <img
                    className="y y3"
                    style={{ zIndex: 100, width: "100px" }}
                    src={CodeIcon}
                    alt=""
                  />
                </div>
              </div>
              <div className="row mt-5">
                <div
                  className="col-6 x4 mt-1"
                  style={{ zIndex: 100, width: "100px", position: "relative" }}
                >
                  <img
                    className="y y4"
                    style={{ zIndex: 100, width: "100px" }}
                    src={BuilderIcon}
                    alt=""
                  />
                </div>
                <div
                  className="col-6 x5 d-md-flex align-items-center order-2 order-lg-2 justify-content-end mr-lg-0 d-flex align-items-center order-3 order-lg-3"
                  style={{ zIndex: 100, width: "100px", position: "relative" }}
                >
                  <img
                    className="y y5"
                    style={{ zIndex: 100, width: "100px" }}
                    src={Email2Icon}
                    alt=""
                  />
                </div>
              </div>
              <div className="row justify-content-center text-center">
                <div
                  className="x6"
                  style={{ zIndex: 100, width: "100px", position: "relative" }}
                >
                  <img
                    className="y y6"
                    style={{ zIndex: 100, width: "100px" }}
                    src={SupportIcon}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-5 bg-light">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col">
              <div className="mt-4">
                <h4>
                  Trusted by over <span className="counter">2400</span>+
                  businesses around the world.
                </h4>
                <div className="row m-n4 align-items-center justify-content-around">
                  {trusted_logos.map(item => (
                    <div className="col mt-5" key={item.logo}>
                      <img
                        className="img-bw"
                        src={item.logo}
                        alt="Brand"
                        height="30"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-1">
        <div className="container">
          <div className="w-100 w-lg-75 text-center mx-auto mb-3">
            <h3 className="m-5 font-weight-bold">
              Tutte le funzioni necessarie. Un unico strumento.
            </h3>
          </div>
          <div className="row d-flex justify-content-center flex-wrap">
            <div
              className="col-md-6 mb-4 col-lg-5"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="bg-light rounded-lg h-100 px-5 py-5 hover-bg-primary hover-translate-y">
                <i className="ri-organization-chart ri-3x text-primary"></i>
                <h5>Flow Automazioni Email, SMS e Whatsappp</h5>
                <p className="lead">
                  Gestisci ed invia newsletter settimanali o promo esclusive ai
                  tuoi clienti tramite un flusso grafico semplice ed intuitivo.
                </p>
              </div>
            </div>
            <div
              className="col-md-6 mb-4 col-lg-5"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="bg-light rounded-lg h-100 px-5 py-5 hover-bg-primary hover-translate-y">
                <i className="ri-mail-check-fill ri-3x text-primary"></i>
                <h5>Email ed SMS Transazionali</h5>
                <p className="lead">
                  Modifica in pochi click le email ed SMS transazionali senza
                  l'aiuto del tuo sviluppatore.
                </p>
              </div>
            </div>
            <div
              className="col-md-6 mb-4 col-lg-5"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="bg-light rounded-lg h-100 px-5 py-5 hover-bg-primary hover-translate-y">
                <i className="ri-layout-masonry-fill ri-3x text-primary"></i>
                <h5>Interfaccia Semplice ed Intuitiva</h5>
                <p className="lead">
                  La piattaforma è stata pensata ed ideata per essere utilizzata
                  anche dai menno esperti in maniera pur includendo tutte le
                  funzionalità necessarie.
                </p>
              </div>
            </div>
            <div
              className="col-md-6 mb-4 col-lg-5"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="bg-light rounded-lg h-100 px-5 py-5 hover-bg-primary hover-translate-y">
                <i className="ri-survey-fill ri-3x text-primary"></i>
                <h5>Builder Moduli Iscrizione</h5>
                <p className="lead">
                  Crea il tuo modulo di iscrizione per gli utenti ed
                  implementalo sul tuo sito con un semplice copia ed incolla.
                </p>
              </div>
            </div>
            <div
              className="col-md-6 mb-4 col-lg-5"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="bg-light rounded-lg h-100 px-5 py-5 hover-bg-primary hover-translate-y">
                <i className="ri-code-s-slash-fill ri-3x text-primary"></i>
                <h5>Sviluppo Funzioni Custom</h5>
                <p className="lead">
                  Se il tuo business ha bisogno di una funzione aggiuntiva in
                  pochi giorni possiamo sviluppare una soluzione ad hoc.
                </p>
              </div>
            </div>
            <div
              className="col-md-6 mb-4 col-lg-5"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="bg-light rounded-lg h-100 px-5 py-5 hover-bg-primary hover-translate-y">
                <i className="ri-whatsapp-fill ri-3x text-primary"></i>
                <h5>Supporto Whatsapp h24 7/7</h5>
                <p className="lead">
                  Avrai un consulente e tecnnico specializzato sempre a tua
                  disposizione per qualsiasi problema o consiglio.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <a href="./features" className="btn btn-outline-primary mt-4 mr-2">
            <span>Scopri tutte le funzioni</span>
            <i
              style={{ verticalAlign: "sub" }}
              className="ri-arrow-right-s-line ri-lg"
            ></i>
          </a>
        </div>
      </section>

      <section className="space-5 bg-light">
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
                    src="assets/img/automation-1/icon-divide.svg"
                    alt=""
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
              <i className="ri-organization-chart-fill ri-3x text-primary"></i>
              <h2 className="font-weight-bold">
                Email, SMS e Whatsapp marketing in{" "}
                <span className="text-primary">un unico flow.</span>
              </h2>
              <p className="lead mt-2 mb-4">
                Gestisci le tue campagne marketing inviando email, SMS o
                messaggi su Whatsapp ai tuoi clienti in modo completamente
                automatizzato e semplice.
              </p>
              <div id="accordion">
                <div className="card mb-2 mb-md-3">
                  <a
                    href="#accordion1"
                    data-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    className="p-3 p-md-4 collapsed"
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="mb-0">Email ed SMS Marketing</h6>
                      <i className="ri-arrow-down-s-line ri-lg"></i>
                    </div>
                  </a>
                  <div
                    className="collapse"
                    id="accordion1"
                    data-parent="#accordion"
                  >
                    <p className="mb-0 px-3 px-md-4 pb-3 pb-md-4">
                      Invia newsletter settimanali ed{" "}
                      <strong>automatizza l'invio delle tue email o SMS</strong>{" "}
                      tramite il nostro <strong>flow di automazioni</strong> in
                      base a caratteristiche e condizioni del contatto ed invia
                      promo istantanee con un invio broadcast.
                    </p>
                  </div>
                </div>
                <div className="card mb-2 mb-md-3">
                  <a
                    href="#accordion2"
                    data-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    className="p-3 p-md-4 collapsed"
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="mb-0">Email ed SMS Transazionali</h6>
                      <i className="ri-arrow-down-s-line ri-lg"></i>
                    </div>
                  </a>
                  <div
                    className="collapse"
                    id="accordion2"
                    data-parent="#accordion"
                  >
                    <p className="mb-0 px-3 px-md-4 pb-3 pb-md-4">
                      Modifica le email automatiche che vengono inviate dal tuo
                      sito web, APP o software in qualsiasi momento e{" "}
                      <strong>senza dover accedere al codice</strong>. Le email
                      ed SMS verrannno aggiornate in modo istantaneo tramite
                      <strong>sistema API</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-5">
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
                  <img src={AticaIcon} height="48" alt="Brand" />
                </div>
                <div className="col" data-aos="fade-left" data-aos-delay="300">
                  <img src={EarthIcon} height="48" alt="Brand" />
                </div>
                <div className="col" data-aos="fade-left" data-aos-delay="400">
                  <img src={TvitIcon} height="48" alt="Brand" />
                </div>
                <div className="col" data-aos="fade-left" data-aos-delay="500">
                  <img src={NineIcon} height="48" alt="Brand" />
                </div>
              </div>
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

      <section className="space-3 bg-light">
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
                        src="assets/img/custom-icons/form-email.svg"
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
                        src="assets/img/custom-icons/form-ig.svg"
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
                        src="assets/img/custom-icons/form-phone.svg"
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
                        src="assets/img/custom-icons/form-opt.svg"
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

      <section className="space-3 bg-primary-3">
        <div className="container">
          <div className="w-100 w-lg-75 text-center mx-auto mb-5 text-white">
            <i className="ri-drag-drop-fill ri-3x text-white"></i>
            <h2 className="font-weight-bold text-center">
              Funzioni aggiuntive per il tuo business gratis.
            </h2>
            <p className="lead">
              Hai bisogno di una funzione aggiuntiva che non è presente su
              sendflows?
              <br />
              Spiegaci di cosa hai bisogno ed in pochi giorni{" "}
              <strong>svilupperemo la funzione</strong> adatta alle tue esigenze
              in modo <strong>completamente gratuito.</strong>
            </p>
          </div>
          <div className="row text-center">
            <div className="col-sm-6 col-md-3 my-3 my-md-0 text-white">
              <div className="card card-body bg-white hover-translate-y hover-shadow">
                <h2 className="h1 font-weight-bold">1</h2>
                <p className="font-weight-medium">Richiedi la funzione</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 my-3 my-md-0 text-white">
              <div className="card card-body bg-white hover-translate-y hover-shadow">
                <h2 className="h1 font-weight-bold">2</h2>
                <p className="font-weight-medium">Stima tempistiche</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 my-3 my-md-0 text-white">
              <div className="card card-body bg-white hover-translate-y hover-shadow">
                <h2 className="h1 font-weight-bold">3</h2>
                <p className="font-weight-medium">Sviluppiamo la funzione</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 my-3 my-md-0 text-white">
              <div className="card card-body bg-white hover-translate-y hover-shadow">
                <h2 className="h1 font-weight-bold">4</h2>
                <p className="font-weight-medium">Utilizzala gratuitamente!</p>
              </div>
            </div>
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

      <section className="space-5 bg-light">
        <div className="container">
          <div className="w-100 w-lg-75 text-center mx-auto mb-5">
            <i className="ri-chat-quote-fill ri-3x text-primary"></i>
            <h2 className="font-weight-bold text-center">
              Cosa dicono i nostri utenti.
            </h2>
          </div>
          <div className="card-columns">
            <div className="card card-body">
              <p className="lead">
                “Aggiungere funzioni personalizzate in modo gratuito è surreale,
                è come avere un team di programmatori interno.”
              </p>
              <div className="d-flex mt-5 pt-2">
                <img
                  className="rounded-circle"
                  src={Avatar1}
                  alt="Round img"
                  height="60"
                />
                <div className="ml-3">
                  <h5 className="mb-0">Pellegrino Bozzella</h5>
                  <p className="text-muted">Gobrand srl | Esdebitami spa</p>
                </div>
              </div>
            </div>
            <div className="card card-body">
              <p className="lead">
                “Ho perso mesi a cercare tool che mi permettesserò di avere
                email transazionali e di marketing in un'unica soluzione e
                soprattutto conveniente per una startup come{" "}
                <a href="https://beautygo.it">beautygo.it</a>.”
              </p>
              <div className="d-flex mt-5 pt-2">
                <img
                  className="rounded-circle"
                  src={Avatar2}
                  alt="Round img"
                  height="60"
                />
                <div className="ml-3">
                  <h5 className="mb-0">Ivan Fruggiero</h5>
                  <p className="text-muted">Beautygo srl</p>
                </div>
              </div>
            </div>
            <div className="card card-body">
              <p className="lead">
                “Efficiently unleash cross-media information without cross-media
                value. Quickly maximize timely deliverables for real-time
                schemas.”
              </p>
              <div className="d-flex mt-5 pt-2">
                <img
                  className="rounded-circle"
                  src={Avatar3}
                  alt="Round img"
                  height="60"
                />
                <div className="ml-3">
                  <h5 className="mb-0">Numan Cheema</h5>
                  <p className="text-muted">Deciphercyber llc</p>
                </div>
              </div>
            </div>
            <div className="card card-body">
              <p className="lead">
                “Avevo bisogno di un semplice tool per aggiornare
                settimanalmente i miei clienti con un report tecnico, sendflows
                è veramente semplice da usare ed implementare.”
              </p>
              <div className="d-flex mt-5 pt-2">
                <img
                  className="rounded-circle"
                  src={Avatar4}
                  alt="Round img"
                  height="60"
                />
                <div className="ml-3">
                  <h5 className="mb-0">Michele Lizzit</h5>
                  <p className="text-muted">Cybersecurity Expert</p>
                </div>
              </div>
            </div>
            <div className="card card-body">
              <p className="lead">
                “Ho provato Sendflows per il mio blog personale ed ho iniziato
                ad utilizzarlo anche per i miei clienti.”
              </p>
              <div className="d-flex mt-5 pt-2">
                <img
                  className="rounded-circle"
                  src={Avatar5}
                  alt="Round img"
                  height="60"
                />
                <div className="ml-3">
                  <h5 className="mb-0">Andrea Vitto</h5>
                  <p className="text-muted">Full-Stack Marketer</p>
                </div>
              </div>
            </div>
            <div className="card card-body">
              <p className="lead">
                “I miei clienti avevano bisogno di un tool completo e semplice
                da usare ed affiliandomi a Sendflows ho ottenuto sia una
                soluzione per loro che un'altra entrata per me.”
              </p>
              <div className="d-flex mt-5 pt-2">
                <img
                  className="rounded-circle"
                  src={Avatar6}
                  alt="Round img"
                  height="60"
                />
                <div className="ml-3">
                  <h5 className="mb-0">Dario Moceri</h5>
                  <p className="text-muted">Blockchain Solution Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-3">
        <div className="container">
          <div className="w-100 w-lg-75 text-center mx-auto mb-5">
            <h6 className="text-primary font-weight-bold">
              PROGRAMMA AFFILIAZIONE
            </h6>
            <h2 className="font-weight-bold">
              Sei un programmatore o hai una web agency?
            </h2>
            <p className="lead">
              Offriamo un programma di partnership ed affiliazione a tutti i
              programmatori ed agenzie di sviluppo web che hanno bisogno di un
              parter affidabile e con un supporto completo h24.
            </p>
          </div>
          <div className="row text-center">
            <div
              className="col-md-6 col-lg-3 mb-4 mb-lg-0"
              data-aos="zoom-in-up"
            >
              <div className="bg-primary-2 px-4 py-4 text-white rounded hover-bg-primary-2 hover-translate-y h-100 rounded-lg">
                <i className="ri-hand-coin-fill ri-3x text-white"></i>
                <h5 className="mt-4 mb-2">Affiliazione</h5>
                <p>
                  Guadagna il 15% su tutti i tuoi clienti finali che
                  utilizzeranno Sendflows.
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3 mb-4 mb-lg-0"
              data-aos="zoom-in-up"
              data-aos-delay="100"
            >
              <div className="bg-light px-4 py-4 rounded hover-bg-primary-2 hover-translate-y h-100 rounded-lg">
                <i className="ri-pencil-ruler-2-fill ri-3x text-primary"></i>
                <h5 className="mt-4 mb-2">Software Completo</h5>
                <p>
                  Dai ai tuoi clienti un software di email marketing completo.
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3 mb-4 mb-lg-0"
              data-aos="zoom-in-up"
              data-aos-delay="200"
            >
              <div className="bg-light px-4 py-4 rounded hover-bg-primary-2 hover-translate-y h-100 rounded-lg">
                <i className="ri-code-box-fill ri-3x text-primary"></i>
                <h5 className="mt-4 mb-2">Personalizzazioni Custom</h5>
                <p>
                  Personalizziamo il nostro software in base alle vostre
                  esigenze.
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3 mb-4 mb-lg-0"
              data-aos="zoom-in-up"
              data-aos-delay="300"
            >
              <div className="bg-light px-4 py-4 rounded hover-bg-primary-2 hover-translate-y h-100 rounded-lg">
                <i className="ri-customer-service-fill ri-3x text-primary"></i>
                <h5 className="mt-4 mb-2">Supporto h24</h5>
                <p>
                  Per i nostri partner un servizio di supporto chat e telefonico
                  h24.
                </p>
              </div>
            </div>
          </div>
          <div className="w-100 w-lg-75 text-center mx-auto mt-3">
            <a
              href="./developers"
              className="d-inline-flex align-items-center btn btn-outline-primary mt-4"
            >
              Scopri il programma
              <i className="ri-arrow-right-line ri-lg ml-2"></i>
            </a>
          </div>
        </div>
      </section>

      <section className="space-3 bg-light">
        <div className="container">
          <div className="w-100 w-lg-75 text-center mx-auto mb-5">
            <i className="ri-question-answer-fill ri-3x text-primary"></i>
            <h2 className="font-weight-bold">Domande più frequenti.</h2>
            <p className="lead">
              Ecco la lista delle domende più frequenti e le corrispettive
              risposte per capire al meglio tutte le caratteristiche di
              sendflows.
            </p>
          </div>
          <div className="row justify-content-around">
            <div className="col-lg-5">
              <div id="faqOne">
                <div className="card border-top-0 border-left-0 border-right-0">
                  <a
                    href="#faqOne1"
                    data-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    className="p-3 p-md-4 collapsed"
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="mb-0">Che funzioni sono incluse?</h6>
                      <i className="ri-arrow-down-s-line ri-lg"></i>
                    </div>
                  </a>
                  <div className="collapse" id="faqOne1" data-parent="#faqOne">
                    <p className="mb-0 px-3 px-md-4 pb-3 pb-md-4">
                      Qualsiasi pacchetto venga scelto sono incluse tutte le
                      funzioni. Puoi vedere le funzioni di Sendflows dal nostro
                      menù.{" "}
                    </p>
                  </div>
                </div>
                <div className="card border-top-0 border-left-0 border-right-0">
                  <a
                    href="#faqOne2"
                    data-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    className="p-3 p-md-4 collapsed"
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="mb-0">Quanto costa?</h6>
                      <i className="ri-arrow-down-s-line ri-lg"></i>
                    </div>
                  </a>
                  <div className="collapse" id="faqOne2" data-parent="#faqOne">
                    <p className="mb-0 px-3 px-md-4 pb-3 pb-md-4">
                      Sendflows offre un piano di partenza gratuito per testare
                      le sue funzioni ed avere modo di provare la piattaforma, i
                      pacchetti PRO sono visualizzabili nella pagina dedicata{" "}
                      <a href="./pricing">cliccando qui</a>.
                    </p>
                  </div>
                </div>
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
                      <a href="./register.html">Provalo adesso</a>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mt-5 mt-lg-0">
              <div id="faqTwo">
                <div className="card border-top-0 border-left-0 border-right-0">
                  <a
                    href="#faqTwo1"
                    data-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    className="p-3 p-md-4 collapsed"
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="mb-0">È solo per le startup?</h6>
                      <i className="ri-arrow-down-s-line ri-lg"></i>
                    </div>
                  </a>
                  <div className="collapse" id="faqTwo1" data-parent="#faqTwo">
                    <p className="mb-0 px-3 px-md-4 pb-3 pb-md-4">
                      Sendflows è adatto a tutti i siti web, piattaforme ed APP
                      sia per aziende che privati che hanno bisogno di unn tool
                      economico e completo per l'invio di email ed SMS.
                    </p>
                  </div>
                </div>
                <div className="card border-top-0 border-left-0 border-right-0">
                  <a
                    href="#faqTwo2"
                    data-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    className="p-3 p-md-4 collapsed"
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="mb-0">Posso personalizzare le email?</h6>
                      <i className="ri-arrow-down-s-line ri-lg"></i>
                    </div>
                  </a>
                  <div className="collapse" id="faqTwo2" data-parent="#faqTwo">
                    <p className="mb-0 px-3 px-md-4 pb-3 pb-md-4">
                      Assolutamente sì, direi che è quasi d'obbligo 😉.
                      <br />
                      Puoi usare il builder mail di Sendflows per costruire le
                      tue email da 0 o partendo da uno dei nostri template
                      professionali.
                    </p>
                  </div>
                </div>
                <div className="card border-top-0 border-left-0 border-right-0">
                  <a
                    href="#faqTwo3"
                    data-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    className="p-3 p-md-4 collapsed"
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="mb-0">
                        Posso inviare le email dal mio indirizzo?
                      </h6>
                      <i className="ri-arrow-down-s-line ri-lg"></i>
                    </div>
                  </a>
                  <div className="collapse" id="faqTwo3" data-parent="#faqTwo">
                    <p className="mb-0 px-3 px-md-4 pb-3 pb-md-4">
                      Certo, potrai collegare il tuo indirizzo email
                      professionale una volta entrato nella piattaforma nella
                      sezione "Dominio".
                    </p>
                  </div>
                </div>
                <div className="card border-0">
                  <a
                    href="#faqTwo4"
                    data-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    className="p-3 p-md-4 collapsed"
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="mb-0">
                        Posso caricare una mia lista contatti?
                      </h6>
                      <i className="ri-arrow-down-s-line ri-lg"></i>
                    </div>
                  </a>
                  <div className="collapse" id="faqTwo4" data-parent="#faqTwo">
                    <p className="mb-0 px-3 px-md-4 pb-3 pb-md-4">
                      Sì, puoi caricare la tua lista contatti in formato .csv o
                      generare nuovi iscritti creando un modulo di iscrizione ed
                      inserendolo nel tuo sito web con un copia e incolla.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-1 mb-5">
        <div className="container bg-primary-3 text-white px-5 py-5 rounded-lg">
          <div className="text-center w-lg-75 mx-auto py-5">
            <h2 className="font-weight-bold">
              Pronto a lanciare il tuo business? Inzia ora.
            </h2>
            <p className="lead mt-4">
              Perfetto per Startups, SaaS, APP, siti web personali, blog e
              chiunque abbia bisogno di un tool: completo, economico e
              personalizzabile.
            </p>
            <a
              href="https://app.sendflows.io/users/register"
              className="d-inline-flex align-items-center btn btn-primary mt-4"
            >
              Inizia Ora
              <i className="ri-arrow-right-line ri-lg ml-2"></i>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
