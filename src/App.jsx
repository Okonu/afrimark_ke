import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Stats from './components/Stats';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';
import Footer from './components/Footer';
import TermsAndConditions from './components/TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy';

const HomePage = () => {
    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: 'white',
            color: '#333'
        }}>
            <Header />
            <Hero />
            <CTA />
            <Features />
            <Benefits />
            <Stats />
            <HowItWorks />
            <Footer />
        </div>
    );
};

function App() {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        setCurrentPath(window.location.pathname);

        const handleNavigation = () => {
            const newPath = window.location.pathname;
            console.log('Navigation detected:', newPath);
            setCurrentPath(newPath);
        };

        window.addEventListener('popstate', handleNavigation);
        window.addEventListener('pushstate', handleNavigation);
        window.addEventListener('replacestate', handleNavigation);

        window.addEventListener('routechange', handleNavigation);

        return () => {
            window.removeEventListener('popstate', handleNavigation);
            window.removeEventListener('pushstate', handleNavigation);
            window.removeEventListener('replacestate', handleNavigation);
            window.removeEventListener('routechange', handleNavigation);
        };
    }, []);

    useEffect(() => {
        const actualPath = window.location.pathname;
        if (actualPath !== currentPath) {
            console.log('Path mismatch detected, updating:', actualPath);
            setCurrentPath(actualPath);
        }
    });

    const renderCurrentPage = () => {
        console.log('Rendering page for path:', currentPath);
        
        switch (currentPath) {
            case '/terms':
                console.log('✅ Rendering Terms and Conditions');
                return <TermsAndConditions />;
            case '/privacy':
                console.log('✅ Rendering Privacy Policy');
                return <PrivacyPolicy />;
            case '/':
                console.log('✅ Rendering Home Page');
                return <HomePage />;
            default:
                console.log('⚠️ Unknown path, showing home page');
                return <HomePage />;
        }
    };

    return (
        <div>
            {renderCurrentPage()}
        </div>
    );
}

export default App;