import React from "react"
import Layout from "../components/Layout"
import {
  BlankImg1,
  BlankImg2,
  BuilderIcon,
  CodeIcon,
  Email2Icon,
  EmailIcon,
  SendIcon,
} from "../utils/imgImport"

const DevelopersPage = () => {
  return (
    <Layout>
      <section className="space-5 mt-5">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col">
              <div className="row justify-content-center">
                <img className="r1 rolling-icon" src={EmailIcon} alt="" />
                <img
                  className="r2 rolling-icon animation-r pt-5"
                  src={CodeIcon}
                  alt=""
                />
                <img
                  className="r3 rolling-icon delay-2 mt-5 pb-5"
                  src={SendIcon}
                  alt=""
                />
                <img
                  className="r4 rolling-icon animation-r pt-5 delay-3"
                  src={Email2Icon}
                  alt=""
                />
                <img
                  className="r5 rolling-icon delay-5 mt-3"
                  src={BuilderIcon}
                  alt=""
                />
                <img
                  className="r6 rolling-icon animation-r mt-5 pt-5 delay-5"
                  src={EmailIcon}
                  alt=""
                />
                <div className="col-lg-10" data-aos="fade-up">
                  <h1 className="display-4 font-weight-bold">
                    Il primo marketing software che{" "}
                    <span className="text-primary">ricompensa</span> i{" "}
                    <span className="text-primary">developers</span>.
                  </h1>
                  <p className="h5 font-weight-normal my-4">
                    Risparmia tempo, guadagna con noi e connetti email, sms e
                    whatsapp ai tuoi siti web nella maniera più semplice e
                    veloce.
                  </p>

                  <a
                    style={{ backgroundColor: "#3390ec", border: "none" }}
                    href="https://t.me/sendflows"
                    className="btn btn-lg btn-primary"
                  >
                    <i className="ri-telegram-fill ri-lg mr-2"></i>
                    <span>Scrivici su Telegram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-1 bg-light">
        <div className="container">
          <div className="w-100 w-lg-75 text-center mx-auto mb-5">
            <h6 className="text-primary font-weight-bold">LE DIFFERENZE</h6>
            <h2>Perchè scegliere Sendflows?</h2>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0" data-aos="slide-up">
              <div className="card card-body px-4 py-4 hover-translate-y hover-shadow-lg">
                <h2 className="font-weight-bold">Altri provider</h2>
                <p className="lead">
                  Come Mailchimp, Sendgrid, Sendinblu, Activecampaign...
                </p>
                <ul className="list-unstyled">
                  <li className="d-flex align-items-center mb-3">
                    <i className="ri-check-fill ri-xl mr-2"></i>
                    <span>Email APIs</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="ri-check-fill ri-xl mr-2"></i>
                    <span>Email Marketing</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="text-danger ri-close-fill ri-xl mr-2"></i>
                    <span>Guadagno tramite affiliazione</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="text-danger ri-close-fill ri-xl mr-2"></i>
                    <span>Supporto tecnico h24</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="text-danger ri-close-fill ri-xl mr-2"></i>
                    <span>Aggiunta funzioni custom free</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="text-danger ri-close-fill ri-xl mr-2"></i>
                    <span>Personalizzazione software</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="text-danger ri-close-fill ri-xl mr-2"></i>
                    <span>Documentazione da consegnare al cliente finale</span>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-6 mb-4 mb-lg-0"
              data-aos="slide-up"
              data-aos-delay="100"
            >
              <div className="card card-body px-4 py-4 hover-translate-y hover-shadow-lg">
                <h2 className="text-primary font-weight-bold">Sendflows</h2>
                <p className="lead">
                  Incentrato sulle necessità dei developers.
                </p>
                <ul className="list-unstyled">
                  <li className="d-flex align-items-center mb-3">
                    <i className="text-success ri-check-fill ri-xl mr-2"></i>
                    <span>Email APIs</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="text-success ri-check-fill ri-xl mr-2"></i>
                    <span>Email Marketing</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="text-success ri-check-fill ri-xl mr-2"></i>
                    <span>Guadagno tramite affiliazione</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="text-success ri-check-fill ri-xl mr-2"></i>
                    <span>Supporto tecnico h24</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="text-success ri-check-fill ri-xl mr-2"></i>
                    <span>Aggiunta funzioni custom free</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="text-success ri-check-fill ri-xl mr-2"></i>
                    <span>Personalizzazione software</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="text-success ri-check-fill ri-xl mr-2"></i>
                    <span>Documentazione da consegnare al cliente finale</span>
                  </li>
                </ul>
              </div>
            </div>
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

      <section className="space-5">
        <div className="container">
          <div className="row align-items-center justify-content-around">
            <div className="col-lg-6" data-aos="fade-right">
              <img
                className="img-fluid rounded-lg"
                src={BlankImg1}
                alt="brand"
              />
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0" data-aos="fade-left">
              <h2>Il primo programma di affiliazione per sviluppatori.</h2>
              <p className="lead mt-2 mb-4">
                Riceverai un compenso del 10% da tutti i pagamanti che il tuo
                cliente effettuerà.
              </p>
              <p className="lead mt-2 mb-4">
                Inoltre Sendflows ti fornirà tutta la documentazione necessaria
                da consegnare al tuo cliente per sfruttura tutte le nostre{" "}
                <a href="./features">funzioni</a>.
              </p>
              <div className="row">
                <div className="col">
                  <div className="d-flex align-items-center mb-3 mr-3">
                    <i className="ri-checkbox-circle-fill ri-xl text-primary mr-2"></i>
                    <span>Guadagno passivo</span>
                  </div>
                  <div className="d-flex align-items-center mb-3 mr-3">
                    <i className="ri-checkbox-circle-fill ri-xl text-primary mr-2"></i>
                    <span>10% di commissione</span>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex align-items-center mb-3 mr-3">
                    <i className="ri-checkbox-circle-fill ri-xl text-primary mr-2"></i>
                    <span>Supporto tech h24</span>
                  </div>
                  <div className="d-flex align-items-center mb-3 mr-3">
                    <i className="ri-checkbox-circle-fill ri-xl text-primary mr-2"></i>
                    <span>Documentazione per i tuoi clienti</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row align-items-center justify-content-around space-3 pb-0 mb-4 mb-lg-0">
            <div className="col-lg-5 mb-5 mb-lg-0" data-aos="fade-left">
              <h2>Launch your website now using Findeas.</h2>
              <p className="lead mt-2 mb-3">
                Quickly cultivate optimal processes and tactical architectures.
                Completely iterate covalent strategic theme areas via accurate
                e-markets.
              </p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-center mb-2">
                  <i className="ri-check-fill ri-xl text-primary mr-2"></i>
                  <span>HTML5 & CSS3</span>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <i className="ri-check-fill ri-xl text-primary mr-2"></i>
                  <span>W3C Valid HTML Code</span>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <i className="ri-check-fill ri-xl text-primary mr-2"></i>
                  <span>Working Ajax PHP Contact Form</span>
                </li>
              </ul>
              <a href="/" className="btn btn-primary mt-1">
                Try it out now
              </a>
            </div>
            <div className="col-lg-6" data-aos="fade-right">
              <img
                className="img-fluid rounded-lg"
                src={BlankImg1}
                alt="brand"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="space-3 pb-0">
        <div className="container">
          <div className="text-center w-lg-75 mx-auto mb-5">
            <h6 className="text-primary font-weight-bold">TESTIMONIALS</h6>
            <h2>
              We have more than thousand of worldwide happy customer. See what
              our customer say.
            </h2>
          </div>
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="jumbotron bg-light py-0 h-100">
                  <div className="row align-items-center justify-content-around h-100">
                    <div className="col-12 col-lg-6 text-center text-lg-left pt-5 pt-lg-0 pl-lg-5">
                      <h3 className="mb-2">
                        “Energistically scale future-proof core competencies
                        vis-a-vis impactful experiences.”
                      </h3>
                      <h6 className="text-muted mt-4">
                        Michael Joe - UI Designer
                      </h6>
                    </div>
                    <div className="col-12 col-lg-6 text-center h-100">
                      <img
                        className="h-75 h-md-100 img-fluid"
                        src={BlankImg2}
                        alt="Person"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="jumbotron bg-light py-0 h-100">
                  <div className="row align-items-center justify-content-around h-100">
                    <div className="col-12 col-lg-6 text-center text-lg-left pt-5 pt-lg-0 pl-lg-5">
                      <h3 className="mb-2">
                        “Quickly disseminate superior deliverables whereas
                        web-enabled applications.”
                      </h3>
                      <h6 className="text-muted mt-4">
                        Bill Curtis - Frontend Developer
                      </h6>
                    </div>
                    <div className="col-12 col-lg-6 text-center h-75 h-md-100">
                      <img
                        className="h-100 img-fluid"
                        src={BlankImg2}
                        alt="Person"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="jumbotron bg-light py-0 h-100">
                  <div className="row align-items-center justify-content-around h-100">
                    <div className="col-12 col-lg-6 text-center text-lg-left pt-5 pt-lg-0 pl-lg-5">
                      <h3 className="mb-2">
                        “Objectively integrate emerging core competencies before
                        process-centric communities. Dramatically evisculate
                        holistic innovation rather than client-centric data.”
                      </h3>
                      <h6 className="text-muted mt-4">
                        John Anderson - Product Manager
                      </h6>
                    </div>
                    <div className="col-12 col-lg-6 text-center h-100">
                      <img
                        className="h-75 h-md-100 img-fluid"
                        src={BlankImg2}
                        alt="Person"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>

      <section className="space-3">
        <div className="container">
          <div className="w-100 w-lg-75 text-center mx-auto mb-5">
            <h6 className="text-primary font-weight-bold">FAQ</h6>
            <h2>Most asked questions.</h2>
            <p className="lead">
              We have the most answers you're looking for, in more ways than
              one. Ask questions, browse around for answers, or submit your
              feature requests.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div id="faq">
                <div className="card border-top-0 border-left-0 border-right-0">
                  <a
                    href="#faq1"
                    data-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    className="p-3 p-md-4 collapsed"
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="mb-0">What is Findeas?</h6>
                      <i className="ri-arrow-down-s-line ri-lg"></i>
                    </div>
                  </a>
                  <div className="collapse" id="faq1" data-parent="#faq">
                    <p className="mb-0 px-3 px-md-4 pb-3 pb-md-4">
                      Consectetur, adipisicing elit. Officiis iure nemo
                      exercitationem quas praesentium sint nam quam, vitae
                      repudiandae numquam?
                    </p>
                  </div>
                </div>
                <div className="card border-top-0 border-left-0 border-right-0">
                  <a
                    href="#faq2"
                    data-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    className="p-3 p-md-4 collapsed"
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="mb-0">How does Findeas work?</h6>
                      <i className="ri-arrow-down-s-line ri-lg"></i>
                    </div>
                  </a>
                  <div className="collapse" id="faq2" data-parent="#faq">
                    <p className="mb-0 px-3 px-md-4 pb-3 pb-md-4">
                      Id ullam sunt esse cupiditate iure earum ipsa perferendis
                      blanditiis eveniet ut, ratione explicabo odit. Aperiam,
                      facilis.
                    </p>
                  </div>
                </div>
                <div className="card border-top-0 border-left-0 border-right-0">
                  <a
                    href="#faq3"
                    data-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    className="p-3 p-md-4 collapsed"
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="mb-0">How is our data being protected?</h6>
                      <i className="ri-arrow-down-s-line ri-lg"></i>
                    </div>
                  </a>
                  <div className="collapse" id="faq3" data-parent="#faq">
                    <p className="mb-0 px-3 px-md-4 pb-3 pb-md-4">
                      Quos ratione mollitia unde beatae ad praesentium
                      voluptatum recusandae repellendus quas, quae quidem
                      veritatis placeat aperiam!
                    </p>
                  </div>
                </div>
                <div className="card border-0">
                  <a
                    href="#faq4"
                    data-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    className="p-3 p-md-4 collapsed"
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="mb-0">How to get support?</h6>
                      <i className="ri-arrow-down-s-line ri-lg"></i>
                    </div>
                  </a>
                  <div className="collapse" id="faq4" data-parent="#faq">
                    <p className="mb-0 px-3 px-md-4 pb-3 pb-md-4">
                      Ratione quisquam veritatis dignissimos ipsum architecto
                      molestias, aliquam et incidunt. Aut porro soluta magni
                      temporibus minus quos provident, nulla pariatur quidem,
                      eveniet molestias praesentium.
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
            <h2>Ready to launch? Buy Findeas now.</h2>
            <p className="lead mt-4">
              Ideal for Sass, Software & Startup Landing Page. Save your
              development time with Findeas Landing Page Template.
            </p>
            <a
              href="/"
              className="d-inline-flex align-items-center btn btn-primary mt-4"
            >
              Buy Findeas Now
              <i className="ri-arrow-right-line ri-lg ml-2"></i>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default DevelopersPage
