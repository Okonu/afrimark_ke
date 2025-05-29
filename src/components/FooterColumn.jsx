import React, { useState, useEffect } from 'react';

// Simple router hook (duplicate from App.jsx for use in FooterColumn)
const useRouter = () => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const handlePopstate = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener('popstate', handlePopstate);
        return () => window.removeEventListener('popstate', handlePopstate);
    }, []);

    const navigate = (path) => {
        window.history.pushState({}, '', path);
        setCurrentPath(path);
        window.scrollTo(0, 0); // Scroll to top on navigation
    };

    return { currentPath, navigate };
};

const FooterColumn = ({ title, links }) => {
    const { navigate } = useRouter();
    
    const handleClick = (e, href) => {
        e.preventDefault();
        
        if (href.startsWith('#')) {
            // Handle anchor links
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else if (href.startsWith('/')) {
            // Handle internal routing
            navigate(href);
        } else {
            // Handle external links
            window.open(href, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <div>
            <h4 style={{
                fontSize: '1.1rem',
                fontWeight: 700,
                marginBottom: '20px',
                color: 'white',
                position: 'relative',
                paddingBottom: '10px'
            }}>
                {title}
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '40px',
                    height: '3px',
                    backgroundColor: '#4CAF50',
                    borderRadius: '2px'
                }}></div>
            </h4>
            <ul style={{
                listStyle: 'none',
                padding: 0
            }}>
                {links.map((link, index) => (
                    <li key={index} style={{
                        marginBottom: '12px'
                    }}>
                        <a 
                            href={link.href} 
                            onClick={(e) => handleClick(e, link.href)}
                            style={{
                                textDecoration: 'none',
                                color: '#b0bec5',
                                transition: 'all 0.3s ease',
                                position: 'relative',
                                paddingLeft: '15px',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.color = '#4CAF50';
                                e.target.style.paddingLeft = '20px';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = '#b0bec5';
                                e.target.style.paddingLeft = '15px';
                            }}
                        >
                            <span style={{
                                position: 'absolute',
                                left: 0,
                                top: '50%',
                                transform: 'translateY(-50%)',
                                width: '6px',
                                height: '6px',
                                backgroundColor: 'transparent',
                                borderRadius: '50%',
                                transition: 'all 0.3s ease'
                            }}></span>
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterColumn;
