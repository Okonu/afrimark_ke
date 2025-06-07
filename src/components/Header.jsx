import React, { useState } from 'react';
import Logo from './Logo';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavClick = (e, href) => {
        e.preventDefault();

        const currentPath = window.location.pathname;

        if (href.startsWith('#')) {
            if (currentPath === '/') {
                const element = document.querySelector(href);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                sessionStorage.setItem('scrollTarget', href);

                window.history.pushState({}, '', '/');

                window.dispatchEvent(new CustomEvent('routechange'));

                setTimeout(() => {
                    const element = document.querySelector(href);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                    sessionStorage.removeItem('scrollTarget');
                }, 100);
            }
        } else {
            window.history.pushState({}, '', href);
            window.dispatchEvent(new CustomEvent('routechange'));
            window.scrollTo(0, 0);
        }
    };

    const handleLogoClick = (e) => {
        e.preventDefault();

        const currentPath = window.location.pathname;

        if (currentPath !== '/') {
            window.history.pushState({}, '', '/');
            window.dispatchEvent(new CustomEvent('routechange'));
            window.scrollTo(0, 0);
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <header style={{
            position: 'fixed',
            width: '100%',
            zIndex: 1000,
            top: '20px',
            left: 0,
            right: 0
        }}>
            <div style={{
                width: 'calc(100% - 40px)',
                maxWidth: '1200px',
                margin: '0 auto',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '50px',
                padding: '10px 20px', // Much smaller padding
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(10px)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '60px' // Fixed smaller height
            }}>
                <div onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
                    <Logo layout="horizontal" size="large" /> {/* Back to large for bigger logo */}
                </div>

                <nav style={{
                    display: 'flex',
                    gap: '30px',
                    alignItems: 'center'
                }}>
                    <a
                        href="#features"
                        onClick={(e) => handleNavClick(e, '#features')}
                        style={{
                            textDecoration: 'none',
                            color: '#333',
                            fontWeight: 500,
                            transition: 'color 0.3s ease',
                            position: 'relative',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.color = '#FF5722';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.color = '#333';
                        }}
                    >
                        Features
                    </a>
                    <a
                        href="#benefits"
                        onClick={(e) => handleNavClick(e, '#benefits')}
                        style={{
                            textDecoration: 'none',
                            color: '#333',
                            fontWeight: 500,
                            transition: 'color 0.3s ease',
                            position: 'relative',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.color = '#FF5722';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.color = '#333';
                        }}
                    >
                        Benefits
                    </a>
                    <a
                        href="#about"
                        onClick={(e) => handleNavClick(e, '#about')}
                        style={{
                            textDecoration: 'none',
                            color: '#333',
                            fontWeight: 500,
                            transition: 'color 0.3s ease',
                            position: 'relative',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.color = '#FF5722';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.color = '#333';
                        }}
                    >
                        About
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;