import React from 'react';

const Team = () => {
    const teamMembers = [
        {
            name: "Jane Muthomi",
            role: "CEO & Co-Founder",
            image: "/team/jane.jpg",
            bio: "Seasoned fintech entrepreneur with 10+ years in SME financial solutions.",
            linkedin: "https://www.linkedin.com/in/janemuthomi"
        },
        {
            name: "Samuel Ochieng",
            role: "CTO & Co-Founder",
            image: "/team/samuel.jpg",
            bio: "Tech innovator specializing in data analytics and credit intelligence.",
            linkedin: "https://www.linkedin.com/in/samuelochieng"
        },
        {
            name: "Amina Rashid",
            role: "Head of Product",
            image: "/team/amina.jpg",
            bio: "Product strategist with deep insights into SME growth challenges.",
            linkedin: "https://www.linkedin.com/in/aminarashid"
        },
        {
            name: "David Mutua",
            role: "Lead Data Scientist",
            image: "/team/david.jpg",
            bio: "Expert in machine learning and predictive credit risk modeling.",
            linkedin: "https://www.linkedin.com/in/davidmutua"
        }
    ];

    return (
        <section style={{
            position: 'relative',
            padding: '100px 0',
            background: 'linear-gradient(135deg, #f5f7fa 0%, #e9ecef 100%)',
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
                    radial-gradient(circle at 20% 80%, rgba(255, 87, 34, 0.03) 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, rgba(44, 62, 80, 0.03) 0%, transparent 50%)
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
                zIndex: 2
            }}>
                {/* Section Header */}
                <div style={{
                    textAlign: 'center',
                    marginBottom: '60px',
                    position: 'relative'
                }}>
                    <div style={{
                        position: 'absolute',
                        top: '-20px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '100px',
                        height: '4px',
                        backgroundColor: '#FF5722',
                        borderRadius: '2px'
                    }}></div>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                        color: '#1a1a2e',
                        marginBottom: '20px',
                        fontWeight: 800
                    }}>
                        Meet Our Team
                    </h2>
                    <p style={{
                        maxWidth: '700px',
                        margin: '0 auto',
                        color: '#4a4a68',
                        fontSize: 'clamp(1rem, 3vw, 1.1rem)',
                        lineHeight: '1.6'
                    }}>
                        Our diverse team of experts is dedicated to transforming trade intelligence for African SMEs.
                    </p>
                </div>

                {/* Team Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '30px'
                }}>
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            style={{
                                backgroundColor: 'white',
                                borderRadius: '20px',
                                padding: '30px',
                                textAlign: 'center',
                                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.05)',
                                transition: 'all 0.3s ease',
                                transform: 'translateY(0)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.05)';
                            }}
                        >
                            <div style={{
                                width: '150px',
                                height: '150px',
                                borderRadius: '50%',
                                marginBottom: '20px',
                                overflow: 'hidden',
                                border: '4px solid #FF5722',
                                boxShadow: '0 10px 25px rgba(255, 87, 34, 0.2)'
                            }}>
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>
                            <h3 style={{
                                fontSize: '1.3rem',
                                color: '#1a1a2e',
                                marginBottom: '10px',
                                fontWeight: 700
                            }}>
                                {member.name}
                            </h3>
                            <p style={{
                                color: '#FF5722',
                                marginBottom: '15px',
                                fontWeight: 600
                            }}>
                                {member.role}
                            </p>
                            <p style={{
                                color: '#4a4a68',
                                marginBottom: '15px',
                                lineHeight: '1.6',
                                textAlign: 'center'
                            }}>
                                {member.bio}
                            </p>
                            <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#0A66C2', // LinkedIn Blue
                                    textDecoration: 'none',
                                    padding: '10px 15px',
                                    border: '1px solid #0A66C2',
                                    borderRadius: '10px',
                                    transition: 'all 0.3s ease',
                                    gap: '10px'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = '#0A66C2';
                                    e.target.style.color = 'white';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = 'transparent';
                                    e.target.style.color = '#0A66C2';
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                                LinkedIn
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;