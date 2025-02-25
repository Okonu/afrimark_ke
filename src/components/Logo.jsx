// Logo.jsx
const Logo = ({ inverted = false }) => {
    return (
        <div style={{
            width: '100%',
            maxWidth: '100px',  // Restrict maximum width
            height: 'auto',
            display: 'flex',
            alignItems: 'center'
        }}>
            <img
                src="/afrimark-logo.png"
                alt="Afrimark - Trust is Earned"
                style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                    maxHeight: '60px',  // Restrict maximum height
                    filter: inverted ? 'brightness(0) invert(1)' : 'none' // Use the filter to invert colors for dark backgrounds
                }}
            />
        </div>
    );
};

export default Logo;