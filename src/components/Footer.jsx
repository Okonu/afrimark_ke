import React from 'react';
import Logo from './Logo';
import FooterColumn from './FooterColumn';

const Footer = () => {
    const footerLinks = {
        product: [
            { name: "Features", href: "#features" },
            { name: "Pricing", href: "#" },
            { name: "API", href: "#" }
        ],
        company: [
            { name: "About Us", href: "#about" },
            { name: "Team", href: "/team" },
            { name: "Careers", href: "#" }
        ],
        resources: [
            { name: "Blog", href: "#" },
            { name: "Support", href: "#" },
            { name: "Privacy Policy", href: "#" }
        ]
    };

    return (
        <footer style={{
            position: 'relative',
            backgroundColor: '#121622',
            color: 'white',
            padding: '100px 0 50px',
            overflow: 'hidden'
        }}>
            {/* Background Pattern */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `
                    radial-gradient(circle at 30% 80%, rgba(76, 175, 80, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 70% 20%, rgba(41, 128, 185, 0.1) 0%, transparent 50%)
                `,
                opacity: 0.5,
                zIndex: 1,
                pointerEvents: 'none'
            }}></div>

            <div style={{
                width: '100%',
                maxWidth: '1400px',
                margin: '0 auto',
                padding: '0 5%',
                position: 'relative',
                zIndex: 2,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '40px'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                }}>
                    <div style={{
                        width: '180px',
                        height: 'auto',
                        marginBottom: '20px'
                    }}>
                        <img
                            src="/afrimark-logo.png"
                            alt="Afrimark - Trust is Earned"
                            style={{
                                width: '100%',
                                height: 'auto',
                                objectFit: 'contain',
                                filter: 'brightness(0) invert(1)' // Make it white for dark background
                            }}
                        />
                    </div>
                    <p style={{
                        color: 'rgba(255,255,255,0.7)',
                        lineHeight: '1.6',
                        marginBottom: '20px'
                    }}>
                        Building Africa's trust infrastructure for SMEs.
                    </p>
                    <div style={{
                        display: 'flex',
                        gap: '15px'
                    }}>
                        {/* Social Media Icons */}
                        {[
                            { name: 'Twitter', href: '#', icon: 'T' },
                            { name: 'LinkedIn', href: '#', icon: 'L' },
                            { name: 'Facebook', href: '#', icon: 'F' }
                        ].map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                style={{
                                    color: 'rgba(255,255,255,0.5)',
                                    transition: 'all 0.3s ease',
                                    textDecoration: 'none'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.color = '#4CAF50';
                                    e.target.style.transform = 'translateY(-5px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.color = 'rgba(255,255,255,0.5)';
                                    e.target.style.transform = 'translateY(0)';
                                }}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <FooterColumn title="Product" links={footerLinks.product} />
                <FooterColumn title="Company" links={footerLinks.company} />
                <FooterColumn title="Resources" links={footerLinks.resources} />
            </div>

            <div style={{
                borderTop: '1px solid rgba(255,255,255,0.1)',
                marginTop: '60px',
                paddingTop: '30px',
                textAlign: 'center',
                color: 'rgba(255,255,255,0.5)',
                width: '90%',
                maxWidth: '1400px',
                margin: '0 auto'
            }}>
                <p>&copy; {new Date().getFullYear()} Afrimark. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;