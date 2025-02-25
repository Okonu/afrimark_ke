const StepCard = ({ number, title, description }) => {
    return (
        <div style={{
            textAlign: 'center',
            padding: '20px'
        }}>
            <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: '#e8f5e9',
                color: '#4CAF50',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                fontWeight: 'bold',
                margin: '0 auto 20px'
            }}>
                {number}
            </div>
            <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '15px'
            }}>{title}</h3>
            <p style={{
                color: '#666'
            }}>{description}</p>
        </div>
    );
};

export default StepCard;
