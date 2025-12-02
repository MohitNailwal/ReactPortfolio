import React, { useEffect } from "react";
import "./blogcss.css";

import {
  Plane,
  Newspaper,
  Headphones,
  Network,
  Cloud,
  Monitor,
  ExternalLink,
  Info,
  Github,
  Shield,
  Phone,
  Mail,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

export default function Blog() {
  useEffect(() => {
    // Mobile menu
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    hamburger?.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    // Scroll animation
    const cards = document.querySelectorAll(".project-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card, i) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(50px)";
      card.style.transition = `all 0.6s ease ${i * 0.1}s`;
      observer.observe(card);
    });
  }, []);

  return (
    <div className="blog-page">
      {/* VIDEO BACKGROUND */}
      <div className="video-background">
        <video autoPlay muted loop playsInline>
          <source
            src="/10130349-hd_1920_1080_30fps (2).mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="video-overlay"></div>

      {/* NAVBAR */}
      <div className="blognavbar">
        <div className="container">
          <div className="logo">
            <a href="#">
              <strong>BLOGS</strong>
            </a>
          </div>

          <div id="hamburger">☰</div>

          <ul id="nav-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#experience">Experience</a>
            </li>
            <li>
              <a href="/#contact">Contact</a>
            </li>
            <li>
              <a href="/#skills">Skills</a>
            </li>
            <li>
              <a href="/#certifications">Certifications</a>
            </li>
            <li>
              <a href="/blog">Blogs</a>
            </li>
          </ul>
        </div>
      </div>

      {/* HEADER */}
      <header>
        <p>
          Professional IT Support & Infrastructure Solutions for Dubai's Leading
          Organizations
        </p>
      </header>

      {/* CONTENT */}
      <div className="main-content">
        <div className="cards-grid">
          {/* 1️⃣ Dubai Airport */}
          <Card
            icon={<Plane />}
            title="Dubai Airport IT Support"
            img="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=500&h=300&fit=crop"
            description="Comprehensive IT infrastructure management for Dubai International Airport including network monitoring, system maintenance, and 24/7 technical support."
            tags={["Network Admin", "System Monitoring", "24/7 Support", "Aviation Systems"]}
            btn1={{ url: "https://www.dubaiairports.ae/", text: "Dubai Airports" }}
            btn2={{ url: "#", text: "Project Details" }}
          />

          {/* 2️⃣ Gulf News */}
          <Card
            icon={<Newspaper />}
            title="Gulf News IT Solutions"
            img="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=300&fit=crop"
            description="Digital infrastructure support for Gulf News media operations including server management, database optimization, and CDN maintenance."
            tags={["Server Management", "Database Admin", "CDN Support", "Media Systems"]}
            btn1={{ url: "https://gulfnews.com/", text: "Gulf News" }}
            btn2={{ url: "#", text: "Technical Stack" }}
          />

          {/* 3️⃣ Help Desk */}
          <Card
            icon={<Headphones />}
            title="IT Help Desk Platform"
            img="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&h=300&fit=crop"
            description="Advanced ticketing system with automated routing, SLA monitoring, knowledge base integration, and analytics."
            tags={["ServiceNow", "ITIL Framework", "SLA Management", "Analytics"]}
            btn1={{ url: "#", text: "Live Demo" }}
            btn2={{ url: "#", text: "Repository" }}
          />

          {/* 4️⃣ NOC */}
          <Card
            icon={<Network />}
            title="Network Operations Center"
            img="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop"
            description="Real-time network monitoring with automated alerts, analytics, and predictive maintenance."
            tags={["PRTG", "Nagios", "SNMP", "Automation"]}
            btn1={{ url: "#", text: "Dashboard" }}
            btn2={{ url: "#", text: "Analytics" }}
          />

          {/* 5️⃣ Cloud */}
          <Card
            icon={<Cloud />}
            title="Cloud Migration Support"
            img="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop"
            description="End-to-end cloud migration including assessment, planning, execution, and optimization."
            tags={["AWS", "Azure", "Migration Tools", "Security"]}
            btn1={{ url: "#", text: "Case Study" }}
            btn2={{ url: "#", text: "White Paper" }}
          />

          {/* 6️⃣ Remote */}
          <Card
            icon={<Monitor />}
            title="Remote IT Support"
            img="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop"
            description="Secure remote access support with VPN, TeamViewer, advanced encryption, and multi-location support."
            tags={["TeamViewer", "VPN", "Security", "Multi-platform"]}
            btn1={{ url: "#", text: "Solution Demo" }}
            btn2={{ url: "#", text: "Security Info" }}
          />
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="main-footer">
          <p>© 2025 Mohit Nailwal. All rights reserved.</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/nailwalmohit/">
              <Linkedin />
            </a>
            <a href="https://www.instagram.com/positve_electron/">
              <Instagram />
            </a>
            <a href="https://x.com/Mohitnailwal1">
              <Twitter />
            </a>
            <a href="https://github.com/MohitNailwal">
              <Github />
            </a>
            <a href="tel:+971524792549">
              <Phone />
            </a>
            <a href="mailto:nailwalmohit28@gmail.com">
              <Mail />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* 🔥 CARD COMPONENT */
function Card({ icon, title, img, description, tags, btn1, btn2 }) {
  return (
    <div className="project-card">
      <div className="card-header">
        {icon} {title}
      </div>

      <div className="card-preview">
        <img src={img} alt={title} />
      </div>

      <div className="card-content">
        <p className="card-description">{description}</p>

        <div className="card-tags">
          {tags.map((t, i) => (
            <span key={i} className="tag">
              {t}
            </span>
          ))}
        </div>

        <div className="card-footer">
          <a href={btn1.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <ExternalLink size={16} /> {btn1.text}
          </a>

          <a href={btn2.url} className="btn btn-secondary">
            <Info size={16} /> {btn2.text}
          </a>
        </div>
      </div>
    </div>
  );
}