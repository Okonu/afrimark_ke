const Stats = () => {
    return (
        <section style={{
            position: 'relative',
            padding: '100px 0',
            background: 'linear-gradient(135deg, #121622 0%, #1E2537 100%)',
            color: 'white',
            overflow: 'hidden'
        }}>
            {/* Background Pattern */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `
                    radial-gradient(circle at 30% 80%, rgba(76, 175, 80, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 70% 20%, rgba(41, 128, 185, 0.1) 0%, transparent 50%)
                `,
                opacity: 0.5,
                zIndex: 1,
                pointerEvents: 'none'
            }}></div>

            <div style={{
                width: '100%',
                maxWidth: '1400px',
                margin: '0 auto',
                padding: '0 5%',
                position: 'relative',
                zIndex: 2,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '40px',
                textAlign: 'center'
            }}>
                {[
                    {value: '$330B', label: 'Credit gap for SMEs in Africa'},
                    {value: '70%', label: 'Of Kenyan SMEs face cash flow stress'},
                    {value: '7.4M', label: 'Formal SMEs in Kenya we aim to serve'}
                ].map((stat, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundColor: 'rgba(255,255,255,0.05)',
                            padding: '30px',
                            borderRadius: '20px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            backdropFilter: 'blur(10px)',
                            transition: 'all 0.3s ease',
                            transform: 'translateY(0)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-10px)';
                            e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <div style={{
                            fontSize: '3rem',
                            fontWeight: 'bold',
                            color: '#4CAF50',
                            marginBottom: '15px',
                            background: 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>
                            {stat.value}
                        </div>
                        <p style={{
                            fontSize: '1.1rem',
                            color: 'rgba(255,255,255,0.8)',
                            lineHeight: '1.6'
                        }}>
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Stats;