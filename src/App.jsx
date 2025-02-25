// App.jsx
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Stats from './components/Stats';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
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
}

export default App;