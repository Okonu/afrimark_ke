import React, { useState } from 'react';
import Logo from './Logo';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                padding: '15px 30px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(10px)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Logo layout="horizontal" />

                <nav style={{
                    display: 'flex',
                    gap: '30px',
                    alignItems: 'center'
                }}>
                    <a href="#features" style={{
                        textDecoration: 'none',
                        color: '#333',
                        fontWeight: 500,
                        transition: 'color 0.3s ease',
                        position: 'relative'
                    }}
                       onMouseEnter={(e) => {
                           e.target.style.color = '#4CAF50';
                       }}
                       onMouseLeave={(e) => {
                           e.target.style.color = '#333';
                       }}>
                        Features
                    </a>
                    <a href="#benefits" style={{
                        textDecoration: 'none',
                        color: '#333',
                        fontWeight: 500,
                        transition: 'color 0.3s ease',
                        position: 'relative'
                    }}
                       onMouseEnter={(e) => {
                           e.target.style.color = '#4CAF50';
                       }}
                       onMouseLeave={(e) => {
                           e.target.style.color = '#333';
                       }}>
                        Benefits
                    </a>
                    {/*<a href="/team" style={{*/}
                    {/*    textDecoration: 'none',*/}
                    {/*    color: '#333',*/}
                    {/*    fontWeight: 500,*/}
                    {/*    transition: 'color 0.3s ease',*/}
                    {/*    position: 'relative'*/}
                    {/*}}*/}
                    {/*   onMouseEnter={(e) => {*/}
                    {/*       e.target.style.color = '#4CAF50';*/}
                    {/*   }}*/}
                    {/*   onMouseLeave={(e) => {*/}
                    {/*       e.target.style.color = '#333';*/}
                    {/*   }}>*/}
                    {/*    Team*/}
                    {/*</a>*/}
                    <a href="#about" style={{
                        textDecoration: 'none',
                        color: '#333',
                        fontWeight: 500,
                        transition: 'color 0.3s ease',
                        position: 'relative'
                    }}
                       onMouseEnter={(e) => {
                           e.target.style.color = '#4CAF50';
                       }}
                       onMouseLeave={(e) => {
                           e.target.style.color = '#333';
                       }}>
                        About
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;