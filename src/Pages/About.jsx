import React from "react";
import "./about.css";
import Marquee from "react-fast-marquee";

function About() {
  return (
    <div>
      {/* <!-- Topbar Start --> */}
      <div className="container-fluid topbar px-0 d-none d-lg-block">
        <div className="container px-0">
          <div
            className="row gx-0 align-items-center"
            style={{ height: "45px" }}
          >
            <div className="col-lg-8 text-center text-lg-start mb-lg-0">
              <div className="d-flex flex-wrap">
                <a href="#" className="text-muted me-4">
                  <i className="fas fa-map-marker-alt text-primary me-2"></i>
                  Find A Location
                </a>
                <a href="#" className="text-muted me-4">
                  <i className="fas fa-phone-alt text-primary me-2"></i>
                  +250788601280
                </a>
                <a href="#" className="text-muted me-0">
                  <i className="fas fa-envelope text-primary me-2"></i>
                  info@fabritech.com
                </a>
              </div>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
              <div className="d-flex align-items-center justify-content-end">
                <a
                  href="#"
                  className="btn btn-primary btn-square rounded-circle nav-fill me-3"
                >
                  <i className="fab fa-facebook-f text-white"></i>
                </a>
                <a
                  href="#"
                  className="btn btn-primary btn-square rounded-circle nav-fill me-3"
                >
                  <i className="fab fa-twitter text-white"></i>
                </a>
                <a
                  href="#"
                  className="btn btn-primary btn-square rounded-circle nav-fill me-3"
                >
                  <i className="fab fa-instagram text-white"></i>
                </a>
                <a
                  href="#"
                  className="btn btn-primary btn-square rounded-circle nav-fill me-0"
                >
                  <i className="fab fa-linkedin-in text-white"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Topbar End --> */}

      {/* <!-- Navbar & Hero Start --> */}
      <div className="container-fluid sticky-top px-0">
        <div
          className="position-absolute bg-dark"
          style={{ left: 0, top: 0, width: "100%", height: "100%" }}
        ></div>
        <div className="container px-0">
          <nav className="navbar navbar-expand-lg navbar-dark bg-white py-3 px-4">
            <a href="index.html" className="navbar-brand p-0">
              {/* <!-- <h1 classNameName="text-primary m-0"><i classNameName="fas fa-donate me-3"></i>Investa</h1> --> */}
              <img
                src="img/logoF.jpg.png"
                alt="Logo"
                style={{ height: "40px" }}
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto py-0">
                <a href="/" className="nav-item nav-link ">
                  Home
                </a>
                <a href="/about" className="nav-item nav-link active">
                  About
                </a>
                <a href="/service" className="nav-item nav-link">
                  Services
                </a>
                <a href="/gallery" className="nav-item nav-link">
                  Gallery
                </a>
                <a href="/contact" className="nav-item nav-link">
                  Contact
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* <!-- Navbar & Hero End --> */}

      {/* <!-- Header Start --> */}
      <div className="container-fluid bg-breadcrumb">
        <div className="bg-breadcrumb-single"></div>
        <div
          className="container text-center py-5"
          style={{ maxWidth: "900px" }}
        >
          <h4
            className="text-white display-4 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            About Us
          </h4>
          <ol
            className="breadcrumb justify-content-center mb-0 wow fadeInDown"
            data-wow-delay="0.3s"
          >
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active text-primary">About</li>
          </ol>
        </div>
      </div>
      {/* <!-- Header End --> */}

      {/* <!-- About Start --> */}
      <div className="container-fluid about bg-light py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div
              className="col-lg-6 col-xl-5 wow fadeInLeft"
              data-wow-delay="0.1s"
            >
              <div className="about-img">
                <img
                  src="img/abt1.jpg"
                  className="img-fluid w-100 rounded-top bg-white"
                  alt="Image"
                />
                <img
                  src="img/abt2.jpg"
                  className="img-fluid w-100 rounded-bottom"
                  alt="Image"
                />
              </div>
            </div>
            <div
              className="col-lg-6 col-xl-7 wow fadeInRight"
              data-wow-delay="0.3s"
            >
              <h4 className="text-primary">About Us</h4>
              <h1 className="display-5 mb-4">
                Innovative Technology & Security Solutions
              </h1>
              <p className="text ps-4 mb-4">
                Fabritech is a leading provider of advanced digital security and
                IT services. We specialize in network infrastructure, CCTV
                installation, and customized software solutions designed to
                secure and optimize your business. With a commitment to
                delivering the best technology, we ensure your systems are
                reliable and future-ready.
              </p>
              <div className="row g-4 justify-content-between mb-5">
                <div className="col-lg-6 col-xl-5">
                  <p className="text-dark">
                    <i className="fas fa-check-circle text-primary me-1"></i>{" "}
                    Network Infrastructure
                  </p>
                  <p class="text-dark mb-0">
                    <i className="fas fa-check-circle text-primary me-1"></i>{" "}
                    CCTV Installation
                  </p>
                </div>
                <div className="col-lg-6 col-xl-7">
                  <p className="text-dark">
                    <i className="fas fa-check-circle text-primary me-1"></i> IT
                    Consulting
                  </p>
                  <p className="text-dark mb-0">
                    <i className="fas fa-check-circle text-primary me-1"></i>{" "}
                    Software Development
                  </p>
                </div>
              </div>
              <div className="row g-4 justify-content-between mb-5"></div>

              <div className="row g-4 text-center align-items-center justify-content-center">
                <div className="col-sm-4">
                  <div className="bg-primary rounded p-4">
                    <div className="d-flex align-items-center justify-content-center">
                      <span
                        className="counter-value fs-1 fw-bold text-dark"
                        data-toggle="counter-up"
                      >
                        50
                      </span>
                      <h4
                        className="text-dark fs-1 mb-0"
                        style={{ fontWeight: "600", fontSize: "25px" }}
                      >
                        +
                      </h4>
                    </div>
                    <div className="w-100 d-flex align-items-center justify-content-center">
                      <p className="text-white mb-0">Clients</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="bg-dark rounded p-4">
                    <div className="d-flex align-items-center justify-content-center">
                      <span
                        className="counter-value fs-1 fw-bold text-white"
                        data-toggle="counter-up"
                      >
                        15
                      </span>
                      <h4
                        className="text-white fs-1 mb-0"
                        style={{ fontWeight: "600", fontSize: "25px" }}
                      >
                        +
                      </h4>
                    </div>
                    <div className="w-100 d-flex align-items-center justify-content-center">
                      <p className="mb-0">Years of Experience</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="bg-primary rounded p-4">
                    <div className="d-flex align-items-center justify-content-center">
                      <span
                        className="counter-value fs-1 fw-bold text-dark"
                        data-toggle="counter-up"
                      >
                        15
                      </span>
                      <h4
                        className="text-dark fs-1 mb-0"
                        style={{ fontWeight: "600", fontSize: "25px" }}
                      >
                        +
                      </h4>
                    </div>
                    <div className="w-100 d-flex align-items-center justify-content-center">
                      <p className="text-white mb-0">Team Members</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}

      {/* our Clients Start */}
      <section className="bg-light py-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 py-4">
            Our Clients
          </h2>

          <div className="flex flex-col space-y-8">
            {/* DICEL Security */}
            <div className="row align-items-start mb-4">
              <div className="col-md-3">
                <img
                  src="img/partners/dicel.png"
                  alt="Client 1 Logo"
                  className="img-fluid"
                  style={{ maxWidth: "100px" }}
                />
              </div>
              <div className="col-md-9">
                <h3 className="font-weight-bold">DICEL Security</h3>
                <h6>
                  <b>Address:</b> Kicukiro, Kigali, Rwanda
                </h6>
                <p style={{ textAlign: "justify" }}>
                  DICEL Security was entrusted with the task of developing a
                  professional website along with an Internal E-sign Portal. We
                  successfully delivered a user-friendly website that
                  effectively represents DICEL SECURITY's brand and services.
                  Additionally, we implemented an Internal E-sign Portal,
                  streamlining document signing and submission processes within
                  the organization. The website and E-sign Portal provide a
                  seamless experience for DICEL SECURITY's staff, enhancing
                  efficiency and reducing paper-based processes.
                </p>
              </div>
            </div>

            {/* CLEO */}
            <div className="row align-items-start mb-4">
              <div className="col-md-3">
                <img
                  src="img/partners/cleo.png"
                  alt="Client 1 Logo"
                  className="img-fluid"
                  style={{ maxWidth: "100px" }}
                />
              </div>
              <div className="col-md-9">
                <h3 className="font-weight-bold">CLEO Lake Kivu Hotel</h3>
                <h6>
                  <b>Address: </b>Lake Kivu, Rwanda
                </h6>
                <p style={{ textAlign: "justify" }}>
                  We provided CLEO LAKE KIVU HOTEL with a modern and efficient
                  website that incorporates a user-friendly booking system. This
                  website enables guests to easily browse through available
                  rooms, select their desired dates, and make reservations
                  seamlessly. The booking system streamlines the reservation
                  process, allowing CLEO LAKE KIVU HOTEL to manage bookings
                  efficiently and provide a convenient experience for their
                  valued guests.
                </p>
              </div>
            </div>

            {/* Tele10 */}
            <div className="row align-items-start mb-4">
              <div className="col-md-3">
                <img
                  src="img/partners/tele10.png"
                  alt="Client 1 Logo"
                  className="img-fluid"
                  style={{ maxWidth: "100px" }}
                />
              </div>
              <div className="col-md-9">
                <h3 className="font-weight-bold">TELE10 Group</h3>
                <h6>
                  <b>Address: </b>Gishushu, Remera, Kigali, Rwanda
                </h6>
                <p style={{ textAlign: "justify" }}>
                  We provided TELE10 with a website and a secure payment gateway
                  solution. The website we developed for TELE10 is
                  user-friendly, visually appealing, and easy to navigate. It
                  serves as an effective online platform for TELE10's services,
                  programs, and information. The integrated payment gateway
                  ensures a seamless and secure payment process for TELE10's
                  customers, enhancing their overall user experience.
                </p>
              </div>
            </div>

            {/* KC ATTORNEYS */}
            <div className="row align-items-start mb-4">
              <div className="col-md-3">
                <img
                  src="img/partners/kc.png"
                  alt="Client 1 Logo"
                  className="img-fluid"
                  style={{ maxWidth: "100px" }}
                />
              </div>
              <div className="col-md-9">
                <h3 className="font-weight-bold">KC ATTORNEYS</h3>
                <h6>
                  <b>Address: </b>Gishushu - Kigali, Rwanda
                </h6>
                <p style={{ textAlign: "justify" }}>
                  KC ATTORNEYS engaged our services as IT consultants to provide
                  valuable expertise and guidance in optimizing their IT
                  infrastructure. We worked closely with their team, assessing
                  their existing systems and identifying areas for improvement.
                  Our recommendations focused on enhancing network security,
                  streamlining data management processes, and implementing
                  efficient IT solutions. Throughout the project, we provided
                  clear and concise advice, enabling KC ATTORNEYS to make
                  informed decisions and achieve a more robust and streamlined
                  IT environment.
                </p>
              </div>
            </div>

            {/* NETLINK */}
            <div className="row align-items-start mb-4">
              <div className="col-md-3">
                <img
                  src="img/netlink.png"
                  alt="Client 1 Logo"
                  className="img-fluid"
                  style={{ maxWidth: "100px" }}
                />
              </div>
              <div className="col-md-9">
                <h3 className="font-weight-bold">NETLINK</h3>
                <h6>
                  <b>Address: </b>Kinamba - Kigali, Rwanda
                </h6>
                <p style={{ textAlign: "justify" }}>
                  As an IT consultant for NETLINK, we provided valuable guidance
                  and expertise to optimize their IT infrastructure. Our
                  services included assessing their existing systems,
                  identifying areas for improvement, and offering practical
                  recommendations to enhance their overall IT capabilities. We
                  worked closely with NETLINK's team to understand their
                  specific needs and goals, providing tailored solutions that
                  align with their business objectives. Our consultancy services
                  aimed to streamline operations, improve efficiency, and ensure
                  a secure and reliable IT environment for NETLINK's ongoing
                  success.
                </p>
              </div>
            </div>

            {/* KING FAISAL HOSPITAL RWANDA */}
            <div className="row align-items-start mb-4">
              <div className="col-md-3">
                <img
                  src="img/partners/king.png"
                  alt="Client 1 Logo"
                  className="img-fluid"
                  style={{ maxWidth: "100px" }}
                />
              </div>
              <div className="col-md-9">
                <h3 className="font-weight-bold">
                  KING FAISAL HOSPITAL RWANDA
                </h3>
                <h6>
                  <b>Address: </b>Kacyiru - Kigali, Rwanda
                </h6>
                <p style={{ textAlign: "justify" }}>
                  Our company successfully provided KING FAISAL Hospital Rwanda
                  with a comprehensive digital security system. This system
                  ensures the safety and protection of the hospital's premises,
                  staff, and patients. Through the implementation of advanced
                  surveillance cameras, access control measures, and intrusion
                  detection systems, we have created a secure environment that
                  enhances the overall security posture of the hospital. Our
                  solution aims to safeguard sensitive areas, prevent
                  unauthorized access, and detect any potential threats in a
                  simple and user-friendly manner. KING FAISAL Hospital can now
                  operate with confidence, knowing that its digital security
                  system is in place to protect its valuable assets and maintain
                  a safe environment for everyone.
                </p>
              </div>
            </div>

            {/* MTN Rwanda */}
            <div className="row align-items-start mb-4">
              <div className="col-md-3">
                <img
                  src="img/partners/mtn.jpg"
                  alt="Client 1 Logo"
                  className="img-fluid"
                  style={{ maxWidth: "100px" }}
                />
              </div>
              <div className="col-md-9">
                <h3 className="font-weight-bold">MTN Rwanda</h3>
                <h6>
                  <b>Address: </b>Nyarutarama - Kigali, Rwanda
                </h6>
                <p style={{ textAlign: "justify" }}>
                  Our company successfully provided comprehensive digital
                  security solutions for MTN Rwanda's Mobile Money Office.
                  Through robust and reliable measures, we safeguarded the
                  integrity, confidentiality, and availability of critical data
                  and transactions within the office. Our expertise ensures the
                  protection of MTN Rwanda's mobile money platform, creating a
                  secure environment for customers to carry out their financial
                  transactions with peace of mind.
                </p>
              </div>
            </div>

            {/* NSS */}
            <div className="row align-items-start mb-4">
              <div className="col-md-3">
                <img
                  src="img/partners/nss.png"
                  alt="Client 1 Logo"
                  className="img-fluid"
                  style={{ maxWidth: "150px" }}
                />
              </div>
              <div className="col-md-9">
                <h3 className="font-weight-bold">NSS</h3>
                <h6>
                  <b>Address: </b>Kimironko - Kigali, Rwanda
                </h6>
                <p style={{ textAlign: "justify" }}>
                  Our company had the honor of developing the NSS website and
                  implementing a seamless payment solution for the institution.
                  The website we created for NSS is a professional platform that
                  showcases their services, events, and achievements. It
                  provides a user-friendly experience, allowing visitors to
                  easily navigate and access the information they need. The
                  integrated payment solution ensures a smooth and secure
                  transaction process, enabling NSS to efficiently handle
                  various payments, such as membership fees, event
                  registrations, and donations.
                </p>
              </div>
              <h2 className="text-3xl font-bold text-center mb-8 py-4 text-primary">
                Our Partners
              </h2>
              <div>
                <Marquee speed={50} gradient={false}>
                  <img
                    src="img/partners/cleo.png"
                    className="img-fluid"
                    alt="Image"
                    style={{
                      width: "100px",
                      height: "80px",
                      marginRight: "20px",
                      borderRadius: "0",
                      marginBottom: "10px",
                    }}
                  />
                  <img
                    src="img/partners/dicel.png"
                    className="img-fluid"
                    alt="Image"
                    style={{
                      width: "100px",
                      height: "80px",
                      marginRight: "20px",
                      borderRadius: "0",
                      marginBottom: "10px",
                    }}
                  />
                  <img
                    src="img/partners/kc.png"
                    className="img-fluid"
                    alt="Image"
                    style={{
                      width: "100px",
                      height: "80px",
                      marginRight: "20px",
                      borderRadius: "0",
                      marginBottom: "10px",
                    }}
                  />
                  <img
                    src="img/partners/king.png"
                    className="img-fluid"
                    alt="Image"
                    style={{
                      width: "100px",
                      height: "80px",
                      marginRight: "20px",
                      borderRadius: "0",
                      marginBottom: "10px",
                    }}
                  />
                  <img
                    src="img/partners/mtn.jpg"
                    className="img-fluid"
                    alt="Image"
                    style={{
                      width: "100px",
                      height: "80px",
                      marginRight: "20px",
                      borderRadius: "0",
                      marginBottom: "10px",
                    }}
                  />
                  <img
                    src="img/partners/nss.png"
                    className="img-fluid"
                    alt="Image"
                    style={{
                      width: "100px",
                      height: "80px",
                      marginRight: "20px",
                      borderRadius: "0",
                      marginBottom: "10px",
                    }}
                  />
                  <img
                    src="img/partners/tele10.png"
                    className="img-fluid"
                    alt="Image"
                    style={{
                      width: "100px",
                      height: "80px",
                      marginRight: "20px",
                      borderRadius: "0",
                      marginBottom: "10px",
                    }}
                  />
                  <img
                    src="img/partners/vss.png"
                    className="img-fluid"
                    alt="Image"
                    style={{
                      width: "100px",
                      height: "80px",
                      marginRight: "20px",
                      borderRadius: "0",
                      marginBottom: "10px",
                    }}
                  />
                  <img
                    src="img/partners/cleo.png"
                    className="img-fluid"
                    alt="Image"
                    style={{
                      width: "100px",
                      height: "80px",
                      marginRight: "20px",
                      borderRadius: "0",
                      marginBottom: "10px",
                    }}
                  />
                  <img
                    src="img/partners/dicel.png"
                    className="img-fluid"
                    alt="Image"
                    style={{
                      width: "100px",
                      height: "80px",
                      marginRight: "20px",
                      borderRadius: "0",
                      marginBottom: "10px",
                    }}
                  />
                  <img
                    src="img/partners/kc.png"
                    className="img-fluid"
                    alt="Image"
                    style={{
                      width: "100px",
                      height: "80px",
                      marginRight: "20px",
                      borderRadius: "0",
                      marginBottom: "10px",
                    }}
                  />
                  <img
                    src="img/partners/king.png"
                    className="img-fluid"
                    alt="Image"
                    style={{
                      width: "100px",
                      height: "80px",
                      marginRight: "20px",
                      borderRadius: "0",
                      marginBottom: "10px",
                    }}
                  />
                  <img
                    src="img/partners/mtn.jpg"
                    className="img-fluid"
                    alt="Image"
                    style={{
                      width: "100px",
                      height: "80px",
                      marginRight: "20px",
                      borderRadius: "0",
                      marginBottom: "10px",
                    }}
                  />
                  <img
                    src="img/partners/nss.png"
                    className="img-fluid"
                    alt="Image"
                    style={{
                      width: "100px",
                      height: "80px",
                      marginRight: "20px",
                      borderRadius: "0",
                      marginBottom: "10px",
                    }}
                  />
                  <img
                    src="img/partners/tele10.png"
                    className="img-fluid"
                    alt="Image"
                    style={{
                      width: "100px",
                      height: "80px",
                      marginRight: "20px",
                      borderRadius: "0",
                      marginBottom: "10px",
                    }}
                  />
                  <img
                    src="img/partners/vss.png"
                    className="img-fluid"
                    alt="Image"
                    style={{
                      width: "100px",
                      height: "80px",
                      marginRight: "20px",
                      borderRadius: "0",
                      marginBottom: "10px",
                    }}
                  />
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* our Clients Ends */}

      {/* <!-- Footer Start --> */}
      <div
        className="container-fluid footer py-1 wow fadeIn"
        data-wow-delay="0.2s"
      >
        <div className="container py-5">
          <div className="row g-5">
            {/* First Column - Logo and Description */}
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <div className="footer-item">
                  {/* Company logo */}
                  <img
                    src="img/logoF.jpg.png"
                    alt="Company Logo"
                    style={{ width: "150px", height: "auto" }}
                    className="mb-4"
                  />

                  {/* Company description */}
                  <p className="mb-3">
                    At Fabritech, we are dedicated to providing top-notch IT
                    solutions and services. From networking to surveillance, we
                    ensure high standards in every project.
                  </p>
                </div>
              </div>
            </div>

            {/* Second Column - Explore Links */}
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Explore</h4>
                <a href="index.html">
                  <i className="fas fa-angle-right me-2"></i> Home
                </a>
                <a href="service.html">
                  <i className="fas fa-angle-right me-2"></i> Services
                </a>
                <a href="about.html">
                  <i className="fas fa-angle-right me-2"></i> About Us
                </a>
                <a href="contact.html">
                  <i className="fas fa-angle-right me-2"></i> Contact Us
                </a>
                <a href="gallery.html">
                  <i className="fas fa-angle-right me-2"></i> Gallery
                </a>
              </div>
            </div>

            {/* Third Column - Contact Info */}
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Contact Info</h4>
                <a href="#">
                  <i className="fa fa-map-marker-alt me-2"></i>YYUSSA Plaza,
                  Kisimenti, Remera
                </a>
                <a href="mailto:fabrice.sugira@fabritech.rw">
                  <i className="fas fa-envelope me-2"></i>{" "}
                  fabrice.sugira@fabritech.rw
                </a>
                <a href="tel:+250788601280">
                  <i className="fas fa-phone me-2"></i> +250788601280
                </a>
                <a href="#">
                  <i className="fas fa-print me-2"></i> +25078800000
                </a>
                {/* Social media icons */}
                <div className="d-flex align-items-center">
                  <a className="btn btn-light btn-md-square me-2" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-light btn-md-square me-2" href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-light btn-md-square me-2" href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a className="btn btn-light btn-md-square me-0" href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer End --> */}

      {/* <!-- Copyright Start --> */}
      <div className="container-fluid copyright py-4">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-md-6 text-center text-md-start mb-md-0">
              <span className="text-body">
                Fabritech, <i className="fas fa-copyright text-light me-2"></i>
                All rights reserved 2024.
              </span>
            </div>
          </div>
        </div>
      </div>
      <a href="#" className="btn btn-primary btn-lg-square back-to-top">
        <i className="fa fa-arrow-up"></i>
      </a>
      {/* <!-- Copyright End --> */}
    </div>
  );
}

export default About;
