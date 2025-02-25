// Footer.jsx
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
            { name: "Team", href: "#" },
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
            backgroundColor: '#222',
            color: 'white',
            padding: '60px 0 30px'
        }}>
            <div style={{
                width: '90%',
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '40px'
            }}>
                <div>
                    {/* Using the inverted logo for dark backgrounds */}
                    <div style={{ maxWidth: '160px' }}>
                        <Logo inverted={true} />
                    </div>
                    <p style={{
                        color: '#aaa',
                        marginTop: '20px'
                    }}>Building Africa's trust infrastructure for SMEs.</p>
                </div>

                <FooterColumn title="Product" links={footerLinks.product} />
                <FooterColumn title="Company" links={footerLinks.company} />
                <FooterColumn title="Resources" links={footerLinks.resources} />
            </div>

            <div style={{
                borderTop: '1px solid #444',
                marginTop: '40px',
                paddingTop: '20px',
                textAlign: 'center',
                color: '#aaa',
                width: '90%',
                maxWidth: '1200px',
                margin: '40px auto 0'
            }}>
                <p>&copy; {new Date().getFullYear()} Afrimark. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;