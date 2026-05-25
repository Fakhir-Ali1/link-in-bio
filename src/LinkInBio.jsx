import React, { useState, useEffect } from 'react';
import { MessageCircle, Calendar, Share2, ChevronDown, Mail, Globe, Briefcase } from 'lucide-react';
import myProfilePic from './assets/profile.png';
import mypic from './assets/mypic.jpg';
const Instagram = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Linkedin = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Facebook = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const TypewriterText = ({ text, speed = 80, delay = 2000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    let i = 0;
    let isTyping = true;
    let timeoutId;
    
    const type = () => {
      if (isTyping) {
        if (i <= text.length) {
          setDisplayedText(text.substring(0, i));
          i++;
          timeoutId = setTimeout(type, speed);
        } else {
          isTyping = false;
          timeoutId = setTimeout(type, delay); // pause before erasing
        }
      } else {
        if (i > 0) {
          i--;
          setDisplayedText(text.substring(0, i));
          timeoutId = setTimeout(type, speed / 2); // erase faster
        } else {
          isTyping = true;
          timeoutId = setTimeout(type, delay / 2); // pause before typing again
        }
      }
    };
    
    timeoutId = setTimeout(type, speed);
    return () => clearTimeout(timeoutId);
  }, [text, speed, delay]);
  
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center' }}>
      {displayedText}
      <span style={{ animation: 'blink 1s step-end infinite', marginLeft: '2px', fontWeight: 'bold' }}>|</span>
      <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>
    </span>
  );
};

// Initial configuration
const initialConfig = {
  profile: {
    mypic: mypic,
    image: myProfilePic,
    name: 'WVM Agency',
    bio: 'World Voice Marketing Smart Growth Start Here ✨',
    backgroundImage: '/BackG.jpg'
  },
  links: [
    {
      id: 1,
      title: 'Book a Strategy Call',
      url: 'https://calendly.com/wvmagency/new-meeting',
      icon: 'calendar',
      enabled: true,
      isPrimary: true
    },
    {
      id: 2,
      title: 'Our Website',
      url: 'https://wvm.fakhirlabs.tech/',
      icon: 'website',
      enabled: true,
      isPrimary: true
    },
    {
      id: 3,
      title: 'Our Services',
      url: 'https://wvm.fakhirlabs.tech/#services',
      icon: 'services',
      enabled: true,
      isPrimary: false
    },
    {
      id: 4,
      title: 'Contact Us',
      url: 'mailto:wvm3agency@gmail.com',
      icon: 'mail',
      enabled: true,
      isPrimary: false
    }
  ],
  socials: {
    instagram: 'https://www.instagram.com/wvm_agency?igsh=MTR6ODhzbDFsMHA0dg==',
    linkedin: 'https://www.linkedin.com/in/fakhir-ali-066602266?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    facebook: 'https://www.facebook.com/share/18bvHmjMu1/',
    gmail: 'mailto:wvm3agency@gmail.com',
    whatsapp: 'https://wa.me/17756308367'
  },
  stickyButton: {
    enabled: true,
    text: 'WhatsApp Us',
    url: 'https://wa.me/1234567890',
    icon: 'whatsapp'
  }
};

const IconComponent = ({ icon, className = "w-5 h-5" }) => {
  const icons = {
    calendar: Calendar,
    instagram: Instagram,
    linkedin: Linkedin,
    facebook: Facebook,
    gmail: Mail,
    whatsapp: MessageCircle,
    website: Globe,
    services: Briefcase,
    mail: Mail,
    sparkles: ({ className }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    grid: ({ className }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
      </svg>
    )
  };

  const Icon = icons[icon] || icons.sparkles;
  return <Icon className={className} />;
};

const LinkInBio = () => {
  const config = initialConfig;
  const [showCopied, setShowCopied] = useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  return (
    <div className="page-root">
      {/* Background with overlay */}
      <div
        className="bg-layer"
        style={{
          backgroundImage: `url(${config.profile.backgroundImage})`
        }}
      />
      <div className="bg-gradient-overlay" />
      <div className="noise-overlay" />

      {/* Main content */}
      <div className="content-wrapper">
{/* Profile Section */}
      <div className="profile-section anim-fade-in" style={{ animationDelay: '0.1s' }}>
        <div className="avatar-wrapper">
          <div className="avatar-ring">
            <img
              src={config.profile.image}
              alt={config.profile.name}
              className="avatar-img"
            />
          </div>
        </div>

        <h1 className="profile-name">{config.profile.name}</h1>
        <p className="profile-bio">{config.profile.bio}</p>
        </div>

        {/* Links Section */}
        <div className="links-section">
          {config.links.filter(link => link.enabled).map((link, index) => (
            <div
              key={link.id}
              className="link-item-wrapper anim-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`link-card${link.isPrimary ? ' link-card-primary' : ' link-card-secondary'}`}
              >
                <div className="link-card-inner">
                  <div className="link-left">
                    <div className="link-icon-box">
                      <IconComponent icon={link.icon} />
                    </div>
                    <span className="link-title">{link.title}</span>
                  </div>
                  <ChevronDown className="link-chevron" />
                </div>
                <div className="shine-overlay" />
              </a>
            </div>
          ))}
        </div>

        {/* Social Icons */}
        <div className="socials-row anim-fade-in" style={{ animationDelay: '0.4s' }}>
          {config.socials.instagram && (
            <a href={config.socials.instagram} target="_blank" rel="noopener noreferrer" className="social-btn social-instagram" title="Instagram">
              <Instagram className="icon-md" />
            </a>
          )}
          {config.socials.linkedin && (
            <a href={config.socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn social-linkedin" title="LinkedIn">
              <Linkedin className="icon-md" />
            </a>
          )}
          {config.socials.facebook && (
            <a href={config.socials.facebook} target="_blank" rel="noopener noreferrer" className="social-btn social-facebook" title="Facebook">
              <Facebook className="icon-md" />
            </a>
          )}
          {config.socials.gmail && (
            <a href={config.socials.gmail} target="_blank" rel="noopener noreferrer" className="social-btn social-gmail" title="Gmail">
              <Mail className="icon-md" />
            </a>
          )}
          {config.socials.whatsapp && (
            <a href={config.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="social-btn social-whatsapp" title="WhatsApp">
              <MessageCircle className="icon-md" />
            </a>
          )}
        </div>

        {/* Share Button */}
        <div className="share-row anim-fade-in" style={{ animationDelay: '0.5s' }}>
          <button id="share-btn" onClick={copyLink} className="share-btn">
            <Share2 className="icon-sm share-icon" />
            <span>{showCopied ? 'Link Copied!' : 'Share Profile'}</span>
          </button>
        </div>

        {/* Footer */}
      
      </div>

      {/* Floating WhatsApp Avatar */}
      {config.stickyButton.enabled && (
        <a
          href={config.socials.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-avatar-cta anim-fade-in"
        >
          <div className="floating-avatar-bubble">
            <TypewriterText text="Hey! Fakhir Ali here 👋" />
          </div>
          <img src={config.profile.mypic} alt="Fakhir Ali" className="floating-avatar-pic" />
        </a>
      )}
    </div>
  );
};

export default LinkInBio;
