const StepCard = ({ number, title, description }) => {
    return (
        <div style={{
            textAlign: 'center',
            padding: '30px',
            backgroundColor: 'white',
            borderRadius: '20px',
            boxShadow: '0 15px 30px rgba(0, 0, 0, 0.05)',
            transition: 'all 0.3s ease',
            transform: 'translateY(0)'
        }}
             onMouseEnter={(e) => {
                 e.currentTarget.style.transform = 'translateY(-10px)';
                 e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.1)';
             }}
             onMouseLeave={(e) => {
                 e.currentTarget.style.transform = 'translateY(0)';
                 e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.05)';
             }}>
            <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #FF5722 0%, #E64A19 100%)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
                fontWeight: 'bold',
                margin: '0 auto 25px',
                boxShadow: '0 10px 20px rgba(255, 87, 34, 0.3)'
            }}>
                {number}
            </div>
            <h3 style={{
                fontSize: '1.3rem',
                marginBottom: '15px',
                color: '#1a1a2e',
                fontWeight: 700
            }}>{title}</h3>
            <p style={{
                color: '#4a4a68',
                lineHeight: '1.6'
            }}>{description}</p>
        </div>
    );
};

export default StepCard;