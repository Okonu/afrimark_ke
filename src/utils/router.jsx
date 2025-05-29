import React, { useState, useEffect } from 'react';

export const useRouter = () => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        setCurrentPath(window.location.pathname);

        const handlePopstate = () => {
            setCurrentPath(window.location.pathname);
        };

        const handleHashChange = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener('popstate', handlePopstate);
        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('popstate', handlePopstate);
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    const navigate = (path) => {
        if (path !== currentPath) {
            window.history.pushState({}, '', path);
            setCurrentPath(path);
            window.scrollTo(0, 0);
        }
    };

    return { currentPath, navigate };
};

// Link component
export const Link = ({ href, children, style, ...props }) => {
    const { navigate } = useRouter();
    
    const handleClick = (e) => {
        e.preventDefault();
        if (href.startsWith('#')) {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate(href);
        }
    };

    return (
        <a 
            href={href} 
            onClick={handleClick}
            style={{ cursor: 'pointer', ...style }}
            {...props}
        >
            {children}
        </a>
    );
};

// Router component
const Router = ({ children }) => {
    const { currentPath } = useRouter();
    
    return (
        <div>
            {React.Children.map(children, child => {
                if (React.isValidElement(child) && child.props.path === currentPath) {
                    return child.props.component;
                }
                return null;
            })}
        </div>
    );
};

// Route component
export const Route = ({ path, component }) => null;

export default Router;