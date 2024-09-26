import React from 'react'

function Internship() {
  return (
    <div>
         {/* <!-- Topbar Start --> */}
      <div className="container-fluid topbar px-0 d-none d-lg-block">
            <div className="container px-0">
                <div className="row gx-0 align-items-center" style={{height: '45px'}}>
                    <div className="col-lg-8 text-center text-lg-start mb-lg-0">
                        <div className="d-flex flex-wrap">
                            <a href="" className="text-muted me-4"><i className="fas fa-phone-alt text-primary me-2"></i>+250788601280</a>
                            <a href="" className="text-muted me-0"><i className="fas fa-envelope text-primary me-2"></i>info@fabritech.com</a>
                        </div>
                    </div>
                    <div className="col-lg-4 text-center text-lg-end">
                        <div className="d-flex align-items-center justify-content-end">
                            <a href="https://www.facebook.com/profile.php?id=100089523591506&amp;mibextid=ZbWKwL" className="btn btn-primary btn-square rounded-circle nav-fill me-3"><i className="fab fa-facebook-f text-white"></i></a>
                            <a href="https://www.instagram.com/fabritech_ltd/" className="btn btn-primary btn-square rounded-circle nav-fill me-3"><i className="fab fa-instagram text-white"></i></a>
                            <a href="https://www.linkedin.com/in/fabritech_ltd" className="btn btn-primary btn-square rounded-circle nav-fill me-3"><i className="fab fa-linkedin-in text-white"></i></a>
                            <a href="whatsapp://send?text=Hello,I'd like to chat with you about Fabritech.rw!&amp;phone=+250788601280" className="btn btn-primary btn-square rounded-circle nav-fill me-0">
  <i className="fab fa-whatsapp text-white"></i>
</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Topbar End --> */}

        {/* <!-- Navbar & Hero Start --> */}
        <div className="container-fluid sticky-top px-0">
            <div className="position-absolute bg-dark" style={{ left: 0, top: 0, width: '100%', height: '100%' }}>
            </div>
            <div className="container px-0">
                <nav className="navbar navbar-expand-lg navbar-dark bg-white py-3 px-4">
                    <a href="index.html" className="navbar-brand p-0">
                        {/* <!-- <h1 classNameName="text-primary m-0"><i classNameName="fas fa-donate me-3"></i>Investa</h1> --> */}
                        <img src="img/logoF.jpg.png" alt="Logo" style={{height: '40px'}} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                            <a href="/" className="nav-item nav-link ">Home</a>
                            <a href="/about" className="nav-item nav-link">About</a>
                            <a href="/service" className="nav-item nav-link active">Services</a>
                            <a href="/gallery" className="nav-item nav-link">Gallery</a>
                            <a href="/contact" className="nav-item nav-link ">Contact</a>
                        </div>
                       
                    </div>
                </nav>
            </div>
        </div>
        {/* <!-- Navbar & Hero End --> */}

        {/* <!-- Header Start --> */}
        <div className="container-fluid bg-breadcrumb">
            <div className="bg-breadcrumb-single"></div>
            <div className="container text-center py-5" style={{maxWidth: '900px'}}>
                <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Internship</h4>
                <ol className="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                    <li className="breadcrumb-item"><a href="index.html">Service</a></li>
                    <li className="breadcrumb-item active text-primary">Internship And Short Courses</li>
                </ol>    
            </div>
        </div>
        {/* <!-- Header End --> */}

        {/* <!-- Internships & Short Courses Start --> */}
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
                        <div className="pb-5">
                            <h4 className="text-primary">Our Services</h4>
                            <h1 className="display-4">Internships & Short Courses</h1>
                        </div>
                        <div className="bg-light rounded p-4">
                            <p className="my-2">
                                At Fabritech, we offer hands-on **Internships** and **Short Courses** tailored for individuals looking to expand their skills in IT, networking, 
                                and other technical fields. Our programs are designed to provide practical experience and in-depth knowledge in a professional environment.
                            </p>
                            <ul>
                                <li>Web & Software Development</li>
                                <li>Networking</li>
                                <li>CCTV Camera</li>
                                <li>Satellite Antenna Installation</li>
                                <li>Biometric System</li>
                            </ul>
                            <p className="my-2">
                                These programs are ideal for students, recent graduates, or professionals looking to enhance their skill set. Participants will work 
                                on real-world projects and gain mentorship from experienced industry professionals, ensuring they are well-prepared for future careers in the tech industry.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
                        <div className="faq-img RotateMoveRight rounded">
                            <img src="img/internServ.jpg" className="img-fluid rounded w-100" style={{height: '500px'}} alt="Image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Internships & Short Courses End --> */}

         {/* <!-- Footer Start --> */}
         <div className="container-fluid footer py-1 wow fadeIn" data-wow-delay="0.2s">
            <div className="container py-5">
                <div className="row g-5">
                    {/* First Column - Logo and Description */}
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <div className="footer-item">
                                {/* Company logo */}
                                <img src="img/logoF.jpg.png" alt="Company Logo" style={{ width: "150px", height: "auto" }} className="mb-4" />
                                
                                {/* Company description */}
                                <p className="mb-3">
                                    At Fabritech, we are dedicated to providing top-notch IT solutions and services. From networking to surveillance, 
                                    we ensure high standards in every project.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Second Column - Explore Links */}
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <h4 className="text-white mb-4">Explore</h4>
                            <a href="/"><i className="fas fa-angle-right me-2"></i> Home</a>
                            <a href="/service"><i className="fas fa-angle-right me-2"></i> Services</a>
                            <a href="/about"><i className="fas fa-angle-right me-2"></i> About Us</a>
                            <a href="/contact"><i className="fas fa-angle-right me-2"></i> Contact Us</a>
                            <a href="/gallery"><i className="fas fa-angle-right me-2"></i> Gallery</a>
                        </div>
                    </div>

                    {/* Third Column - Contact Info */}
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <h4 className="text-white mb-4">Contact Info</h4>
                            <a href="#"><i className="fa fa-map-marker-alt me-2"></i>YYUSSA Plaza, Kisimenti, Remera</a>
                            <a href="mailto:fabrice.sugira@fabritech.rw"><i className="fas fa-envelope me-2"></i> info@fabritech.com</a>
                            <a href="tel:+250788601280"><i className="fas fa-phone me-2"></i> +250788601280</a>
                            {/* Social media icons */}
                            <div className="d-flex align-items-center">
                                <a className="btn btn-light btn-md-square me-2" href="https://www.facebook.com/profile.php?id=100089523591506&amp;mibextid=ZbWKwL"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-light btn-md-square me-2" href="https://www.instagram.com/fabritech_ltd"><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-light btn-md-square me-2" href="https://www.linkedin.com/in/fabritech_ltd"><i className="fab fa-linkedin-in"></i></a>
                                <a href="whatsapp://send?text=Hello,I'd like to chat with you about Fabritech.rw!&amp;phone=+250788601280" className="btn btn-light btn-md-square me-2">
  <i className="fab fa-whatsapp text-white"></i>
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
                            Fabritech, <i className="fas fa-copyright text-light me-2"></i>All rights reserved 2024.
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
  )
}

export default Internship