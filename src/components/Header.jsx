// Header.jsx
import React, { useState } from 'react';
import Logo from './Logo';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header style={{
            backgroundColor: 'white',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            position: 'fixed',
            width: '100%',
            zIndex: 1000,
            padding: '15px 0'
        }}>
            <div style={{
                width: '90%',
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                {/* Use horizontal layout for header */}
                <Logo layout="horizontal" />

                <nav style={{ display: 'flex', gap: '20px' }}>
                    <a href="#features" style={{
                        textDecoration: 'none',
                        color: '#333',
                        fontWeight: 500
                    }}>Features</a>
                    <a href="#benefits" style={{
                        textDecoration: 'none',
                        color: '#333',
                        fontWeight: 500
                    }}>Benefits</a>
                    <a href="#about" style={{
                        textDecoration: 'none',
                        color: '#333',
                        fontWeight: 500
                    }}>About</a>
                    <a href="#contact" style={{
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        padding: '10px 20px',
                        borderRadius: '5px',
                        textDecoration: 'none',
                        fontWeight: 600
                    }}>Get Started</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;