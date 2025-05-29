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

// Simple router hook
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

// HomePage component
const HomePage = () => {
    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: 'white',
            color: '#333'
        }}>
            <Header />
            <Hero />
            <Features />
            <Benefits />
            <Stats />
            <HowItWorks />
            <CTA />
            <Footer />
        </div>
    );
};

function App() {
    const { currentPath } = useRouter();

    // Route rendering logic
    const renderCurrentPage = () => {
        switch (currentPath) {
            case '/terms':
                return <TermsAndConditions />;
            case '/privacy':
                return <PrivacyPolicy />;
            default:
                return <HomePage />;
        }
    };

    return renderCurrentPage();
}

export default App;
