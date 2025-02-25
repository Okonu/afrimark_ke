const Stats = () => {
    return (
        <section style={{
            padding: '70px 0',
            backgroundColor: '#333',
            color: 'white'
        }}>
            <div style={{
                width: '90%',
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '40px',
                textAlign: 'center'
            }}>
                <div>
                    <div style={{
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        color: '#4CAF50',
                        marginBottom: '10px'
                    }}>$330B</div>
                    <p style={{
                        fontSize: '1.1rem'
                    }}>Credit gap for SMEs in Africa</p>
                </div>

                <div>
                    <div style={{
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        color: '#4CAF50',
                        marginBottom: '10px'
                    }}>70%</div>
                    <p style={{
                        fontSize: '1.1rem'
                    }}>Of Kenyan SMEs face cash flow stress</p>
                </div>

                <div>
                    <div style={{
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        color: '#4CAF50',
                        marginBottom: '10px'
                    }}>7.4M</div>
                    <p style={{
                        fontSize: '1.1rem'
                    }}>Formal SMEs in Kenya we aim to serve</p>
                </div>
            </div>
        </section>
    );
};

export default Stats;