import React, { useState, useEffect } from "react";
import { Menu, Moon, Sun, ArrowUp, Phone, Mail, MapPin, X } from "lucide-react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Typewriter from "typewriter-effect";
import Chat from "./Chat";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Portfolio.css";
// FontAwesome Core
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Brand Icons
import {
  faHtml5,
  faWordpress,
  faMagento,
  faPhp,
  faAws,
  faGitAlt,
  faGithub,
  faReact,
  faNodeJs,
  faDocker,
  faWindows,
  faLinux,
  faFigma,
  faJs,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";

// Solid Icons
import {
  faServer,
  faDatabase,
  faCode,
  faShieldAlt,
  faLock,
  faPrint,
  faVideo,
  faMobileAlt,
  faCreditCard,
  faFingerprint,
  faPuzzlePiece,
  faExchangeAlt,
  faRocket,
  faLeaf,
  faWind,
  faNetworkWired,
} from "@fortawesome/free-solid-svg-icons";
const iconMap = {
  faHtml5,
  faWordpress,
  faMagento,
  faPhp,
  faAws,
  faGitAlt,
  faGithub,
  faReact,
  faNodeJs,
  faDocker,
  faWindows,
  faLinux,
  faFigma,
  faJs,
  faCss3Alt,
  faServer,
  faDatabase,
  faCode,
  faShieldAlt,
  faLock,
  faPrint,
  faVideo,
  faMobileAlt,
  faCreditCard,
  faFingerprint,
  faPuzzlePiece,
  faExchangeAlt,
  faRocket,
  faLeaf,
  faWind,
  faNetworkWired,
};

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [showButtons, setShowButtons] = useState(false);

  // Show button when scrolled down 300px
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Typing animation
  useEffect(() => {
    const lines = [
      {
        text: "Hello!",
        style: "font-size: 35px; font-weight: 900; color: white;",
      },
      {
        text: "I'm Mohit,",
        style: "font-size: 30px; font-weight: 900; color: white;",
      },
      {
        text: `I have 6 years of combined experience in IT support and software development, skilled in troubleshooting, system maintenance, and coding. I have worked with clients in Dubai's and India in aviation, retail, and manufacturing sectors, delivering efficient technical support and innovative IT solutions. My developer background helps me bridge support and development, automate tasks, and optimize workflows effectively.`,
        style: "font-size: 20px; color: white;",
      },
    ];

    let lineIndex = 0;
    let charIndex = 0;
    let currentText = "";

    const typeNextChar = () => {
      if (lineIndex >= lines.length) {
        setShowButtons(true);
        return;
      }

      const currentLine = lines[lineIndex];
      const text = currentLine.text;

      if (charIndex < text.length) {
        currentText += text.charAt(charIndex);
        setTypedText(currentText);
        charIndex++;
        setTimeout(typeNextChar, 20);
      } else {
        currentText += "\n";
        setTypedText(currentText);
        charIndex = 0;
        lineIndex++;
        setTimeout(typeNextChar, 300);
      }
    };

    typeNextChar();
  }, []);
  // Dark mode
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setDarkMode(savedTheme === "dark");
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  useEffect(() => {
    const theme = darkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [darkMode]);

  // Scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to close mobile menu
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const skills = [
    { icon: "faHtml5", name: "HTML5", color: "#e34c26" },
    { icon: "faWordpress", name: "WordPress", color: "#21759b" },
    { icon: "faMagento", name: "Magento", color: "#21759b" },
    { icon: "faPhp", name: "PHP", color: "#777bb4" },
    { icon: "faAws", name: "AWS", color: "#ff9900" },
    { icon: "faServer", name: "VMware", color: "#808080" },
    { icon: "faNetworkWired", name: "Networking", color: "#556B2F" },
    { icon: "faBootstrap", name: "Bootstrap", color: "#563d7c" },
    { icon: "faWind", name: "Tailwind CSS", color: "#06b6d4" },
    { icon: "faGitAlt", name: "Git", color: "#f05033" },
    { icon: "faGithub", name: "GitHub", color: "#181717" },
    { icon: "faCss3Alt", name: "CSS3", color: "#264de4" },
    { icon: "faJs", name: "JavaScript", color: "#f0db4f" },
    { icon: "faReact", name: "React", color: "#61dbfb" },
    { icon: "faNodeJs", name: "Node.js", color: "#3c873a" },
    { icon: "faDatabase", name: "MySQL", color: "#f29111" },
    { icon: "faDatabase", name: "Oracle", color: "#e21c0e" },
    { icon: "faPython", name: "Python", color: "#306998" },
    { icon: "faCode", name: "C++", color: "#d4a017" },
    { icon: "faDocker", name: "Docker", color: "#0db7ed" },
    { icon: "faWindows", name: "Windows Server", color: "#0078d6" },
    { icon: "faLinux", name: "Linux Server", color: "#fcc624" },
    { icon: "faShieldAlt", name: "Firewalls", color: "#ff4500" },
    { icon: "faLock", name: "VPN", color: "#4682b4" },
    { icon: "faPrint", name: "Printers", color: "#696969" },
    { icon: "faVideo", name: "CCTV", color: "#800080" },
    { icon: "faMobileAlt", name: "Handheld Devices", color: "#20b2aa" },
    { icon: "faCreditCard", name: "Card Machines", color: "#2e8b57" },
    { icon: "faFingerprint", name: "Biometric Devices", color: "#9932cc" },
    { icon: "faPuzzlePiece", name: "Problem Solving", color: "#ffa500" },
    { icon: "faFigma", name: "Figma", color: "#f24e1e" },
    { icon: "faExchangeAlt", name: "REST APIs", color: "#008080" },
    { icon: "faRocket", name: "Postman", color: "#ff6200" },
    { icon: "faLeaf", name: "MongoDB", color: "#4db33d" },
  ];

  return (
    <div
      style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
    >
      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <a href="#">
              <strong>PORTFOLIO</strong>
            </a>
          </div>
          <button
            className="dark-mode-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>
          <button
            className="hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <ul className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
            <li>
              <a href="#" onClick={closeMobileMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={closeMobileMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" onClick={closeMobileMenu}>
                Experience
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMobileMenu}>
                Contact
              </a>
            </li>
            <li>
              <a href="#skills" onClick={closeMobileMenu}>
                Skills
              </a>
            </li>
            <li>
              <a href="#certifications" onClick={closeMobileMenu}>
                Certifications
              </a>
            </li>
            <li>
              <Link to="/blog" onClick={closeMobileMenu}>
                Blogs
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Header */}
      <header className="header">
        <div className="video-background">
          <video autoPlay muted loop playsInline preload="auto">
            <source src="/5453622-uhd_3840_2160_24fps.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="box">
          <div className="details">
            <div className="your-text-container-class text-white">
              <Typewriter
                options={{
                  delay: 20,
                  deleteSpeed: 0,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      `<span style="font-size: 35px; font-weight: 900; color: white;">Hello!</span><br/>`
                    )
                    .pauseFor(300)
                    .typeString(
                      `<span style="font-size: 30px; font-weight: 900; color: white;">I'm Mohit,</span><br/>`
                    )
                    .pauseFor(300)
                    .typeString(
                      `<span style="font-size: 20px; color: white;">I have 6 years of combined experience in IT support and software development, skilled in troubleshooting, system maintenance, and coding. I have worked with clients in Dubai's and India in aviation, retail, and manufacturing sectors, delivering efficient technical support and innovative IT solutions. My developer background helps me bridge support and development, automate tasks, and optimize workflows effectively.</span>`
                    )
                    .pauseFor(200)
                    .start();
                }}
              />
            </div>
            {showButtons && (
              <div className="btns" style={{ marginTop: 38 }}>
                <a
                  href="https://drive.google.com/file/d/1p16KLeqTEMtPXl-gJi7gObl9kpcJXr5E/view?usp=drive_link"
                  target="_blank"
                  className="btn"
                >
                  Resume
                </a>
                <a href="#contact" className="btn">
                  Contact Me
                </a>
              </div>
            )}
          </div>
          <div className="about-image">
            <div className="image">
              <img src="./profile2.jpg" alt="Mohit" />
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="about">
        <div className="title">
          <h2>About me</h2>
        </div>
        <div className="details">
          <p>
            I am an experienced IT Support Specialist with a strong background
            in troubleshooting, technical support, and system maintenance,
            combined with hands-on experience as a software developer. Skilled
            in diagnosing and resolving hardware, software, and networking
            issues, I excel at providing timely and efficient support to
            end-users and ensuring seamless IT operations. My developer
            experience enables me to understand complex technical environments,
            automate tasks, and contribute to software development projects,
            bridging the gap between support and development teams. Proficient
            in multiple programming languages and development frameworks, I
            bring a problem-solving mindset and technical versatility to every
            project. I am passionate about leveraging my dual expertise to
            enhance system performance, optimize workflows, and deliver
            innovative IT solutions that meet business needs.
          </p>
          <p>
            Throughout my career, I have successfully supported diverse
            industries, including aviation, retail, and manufacturing,
            particularly within the Dubai market. My ability to adapt quickly to
            new technologies and environments has enabled me to streamline IT
            processes, reduce downtime, and improve user satisfaction. By
            combining technical support expertise with software development
            skills, I effectively automate routine tasks, develop custom tools,
            and contribute to continuous improvement initiatives. I am committed
            to delivering reliable, scalable solutions that drive operational
            efficiency and support business growth.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education">
        <h2>Education</h2>
        <div className="blocks">
          <div className="edu-block">
            <div className="edu">
              <img src="./logo1.jpg" alt="MSEC Logo" />
            </div>
            <div className="detail">
              <h3>
                <a
                  href="https://aktu.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dr. APJ Abdul Kalam Technical University
                </a>
              </h3>
              <h4>BTech. Computer Science Engineering</h4>
              <h6>
                <a
                  href="https://mgmnoida.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MGM's College of Engineering & Technology, Noida
                </a>
              </h6>
              <h6>2016-2020</h6>
            </div>
          </div>
          <div className="edu-block">
            <div className="edu">
              <img src="logo2.jpg" alt="School Logo" />
            </div>
            <div className="detail">
              <h3>
                <a
                  href="https://jhpschool.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jai Hind Public School
                </a>
              </h3>
              <h4>Higher Secondary Education</h4>
              <h4>
                <a
                  href="https://www.cbse.gov.in/cbsenew/cbse.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CBSE
                </a>
              </h4>
              <h6>2014-2016</h6>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <h2>Skills</h2>
        <div className="skill-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill">
              <FontAwesomeIcon
                icon={iconMap[skill.icon]}
                style={{ color: skill.color, fontSize: "48px" }}
              />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Certifications Section */}
      <section id="certifications" className="skills">
        <h2>Certifications</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <img src="./mcsa.png" style={{ width: 211 }} alt="MCSA" />
          <img
            src="./MCSA-Certification-300x210.png"
            alt="MCSA Certification"
          />
          <img src="./ccna.png" style={{ marginBottom: 57 }} alt="CCNA" />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <h3>My Experience</h3>
        <div className="exp-list">
          {/* Experience 1 */}
          <div className="exp-item">
            <div className="exp-image">
              <a
                href="https://www.sharjahairport.ae/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="./Sharjah_Airport_logo.svg.png" alt="Sharjah Airport" />
              </a>
            </div>
            <div className="exp-info">
              <h4>
                <a
                  href="hhttps://www.alpha.ae/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Application Support Engineer – Sharjah Airport, UAE
                </a>
              </h4>
              <ul>
                <li>
                  Monitor airport operational systems such as Flight Information
                  Display Systems (FIDS), Airport Operational Database (AODB),
                  Baggage Handling Systems (BHS) software, and Passenger
                  Processing Systems.
                </li>
                <li>
                  Respond to application issues raised by airport staff,
                  operations team, and stakeholders.
                </li>
                <li>
                  Troubleshoot application errors, analyze root causes, and
                  escalate to vendors when required.
                </li>
                <li>
                  Maintain incident logs and ensure timely resolution based on
                  SLAs.
                </li>
                <li>
                  Support configuration changes, software updates, and patches
                  for operational systems.
                </li>
                <li>
                  Maintain detailed SOPs, user guides, technical documentation,
                  and change management records.
                </li>
                <li>
                  Provide on-call or shift-based support to maintain high system
                  availability.
                </li>
                <li>
                  Ensure smooth functioning of all airport applications during
                  peak operations.
                </li>
              </ul>
            </div>
          </div>
          <div className="exp-item">
            <div className="exp-image">
              <a
                href="https://adilstore.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="./project1.webp" alt="AL ADIL TRADING" />
              </a>
            </div>
            <div className="exp-info">
              <h4>
                <a
                  href="https://adilstore.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  IT Support Engineer – AL ADIL TRADING, Dubai, UAE
                </a>
              </h4>
              <ul>
                <li>
                  Support and manage Retail ERP systems, including Microsoft
                  Dynamics GP, Business Central, Zoho ERP, GoFrugal, and custom
                  solutions.
                </li>
                <li>
                  Administer virtualized environments using VMware or Hyper-V.
                </li>
                <li>
                  Configure and manage network settings, including TCP/IP,
                  VLANs, firewalls, and VPNs.
                </li>
                <li>
                  Maintain and support Point of Sale (POS) systems for retail
                  operations.
                </li>
                <li>
                  Support cloud platforms such as AWS, Azure, and Google Cloud.
                </li>
                <li>
                  Ensure seamless operation of servers, networks, and hardware
                  across all locations.
                </li>
                <li>
                  Conduct stock evaluation and inventory counting for efficient
                  stock management.
                </li>
                <li>
                  Oversee comprehensive inventory management for all stock
                  categories.
                </li>
                <li>
                  Design and execute digital marketing campaigns using Netcore
                  for newsletters and promotional emails.
                </li>
                <li>
                  Manage e-commerce store backend, including uploading product
                  offers, images, and descriptions for seamless online retail
                  operations.
                </li>
              </ul>
            </div>
          </div>

          {/* Experience 2 */}
          <div className="exp-item">
            <div className="exp-image">
              <a
                href="https://www.ednsgroup.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="./project2.png" alt="DNS GROUP" />
              </a>
            </div>
            <div className="exp-info">
              <h4>
                <a
                  href="https://www.ednsgroup.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FULL STACK DEVELOPER - DNS GROUP, Delhi, India
                </a>
              </h4>
              <ul>
                <li>Implemented responsive UI/UX designs & Functionality.</li>
                <li>Deployed applications to cloud platforms.</li>
                <li>Developed RESTful APIs.</li>
                <li>
                  Troubleshot and debugged complex issues in both client and
                  server side.
                </li>
                <li>
                  Design and maintain relational databases using SQL for
                  efficient data storage, retrieval, optimization.
                </li>
                <li>
                  Collaborated with cross-functional teams of designers, QA
                  engineers, and product managers.
                </li>
              </ul>
            </div>
          </div>

          {/* Experience 3 */}
          <div className="exp-item">
            <div className="exp-image">
              <a
                href="https://transguardgroup.com/about-us/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="./cropped-logo-3-1.png" alt="TRANSGUARD GROUP" />
              </a>
            </div>
            <div className="exp-info">
              <h4>
                <a
                  href="https://transguardgroup.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  IT Support Admin – TRANSGUARD GROUP LLC, Dubai, UAE
                </a>
              </h4>
              <ul>
                <li>
                  Provided technical support and troubleshooting for hardware,
                  software, and network issues.
                </li>
                <li>
                  Maintained and updated IT infrastructure, ensuring optimal
                  system performance and security.
                </li>
                <li>
                  Performed routine system and network monitoring, backups, and
                  updates.
                </li>
                <li>
                  Collaborated with vendors and other departments to resolve
                  complex IT issues efficiently.
                </li>
                <li>
                  Managed user accounts, permissions, and access rights through
                  Active Directory.
                </li>
              </ul>
            </div>
          </div>

          {/* Experience 4 */}
          <div className="exp-item">
            <div className="exp-image">
              <a
                href="http://www.createch-software.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="createch.png" alt="CREATECH SOFTWARE" />
              </a>
            </div>
            <div className="exp-info">
              <h4>
                <a
                  href="http://www.createch-software.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Full Stack Developer – CREATECH SOFTWARE PVT. LTD, Delhi,
                  India
                </a>
              </h4>
              <ul>
                <li>
                  Employment Assistance for Ex-Servicemen Officers for DGR
                  (Ministry of Defence) Indian Army.
                </li>
                <li>
                  Maintaining their software on weekly basis & update which is
                  provided by DGR.
                </li>
                <li>
                  Pharmaceutical Software solution for Army Hospital to manage
                  and monitor inventory stocks efficiently.
                </li>
                <li>
                  This system ensures that all pharmacy stock levels are tracked
                  in real-time and provides automated alerts when stock
                  quantities fall below predefined thresholds, improving
                  inventory control and preventing stock outs.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h3>Get in Touch with Me</h3>
        <div className="contact-box">
          <div className="contact-form-section">
            <form action="https://api.web3forms.com/submit" method="POST">
              <input
                type="hidden"
                name="access_key"
                value="40b9cb8d-6cab-4d76-af1e-b201cb7dbeef"
              />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
              />
              <input
                type="email"
                id="email"
                placeholder="Email"
                name="email"
                required
              />
              <input
                type="tel"
                id="mobile"
                placeholder="Mobile Number"
                name="mobile"
                required
                pattern="[0-9]{10,15}"
              />
              <textarea
                id="message"
                placeholder="Message"
                name="message"
                rows="5"
                required
              ></textarea>
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.2395801569796!2d55.29369057538388!3d25.262524877668962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4315a016d01f%3A0x280c430ba1577226!2sMeena%20Bazar%20Burdubai!5e0!3m2!1sen!2sae!4v1754056686767!5m2!1sen!2sae"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="contact-info">
          <p>
            <Mail className="icon" size={18} />
            <a className="contact-link" href="mailto:nailwalmohit28@gmail.com">
              nailwalmohit28@gmail.com
            </a>
          </p>

          <p>
            <MapPin className="icon" size={18} />
            Dubai, United Arab Emirates
          </p>

          <p>
            <Phone className="icon" size={18} />
            <a className="contact-link" href="tel:+971524792549">
              +971-524792549
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="main-footer">
          <p style={{ textAlign: "center" }}>
            © 2025 Mohit Nailwal. All rights reserved.
          </p>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/nailwalmohit/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/positve_electron/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://x.com/Mohitnailwal1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://github.com/MohitNailwal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a href="tel:+916380657002">
              <i className="fa fa-phone"></i>
            </a>
            <a
              href="mailto:nailwalmohit28@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <a
        href="https://wa.me/971524792549"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        <i className="fab fa-whatsapp" style={{ fontSize: 30 }}></i>
      </a>
      <a href="tel:+971524792549" className="phone-btn">
        <Phone size={28} />
      </a>

      {/* Scroll to Top Button */}
      <button
        className={`scroll-top-btn ${showScrollTop ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUp size={22} />
      </button>
      {/* *******************ChatBot************************** */}
      <Chat />

      {/* Font Awesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
      />
    </div>
  );
};
export default Portfolio;
