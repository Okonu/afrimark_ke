import React from 'react';
import Header from './Header';
import Footer from './Footer';
import privacyPolicyData from '../data/privacyPolicyData.json';

const PrivacyPolicy = () => {
    const { title, subtitle, lastUpdated, sections } = privacyPolicyData;

    // Render different types of content sections
    const renderContent = (section) => {
        const sectionStyles = {
            marginBottom: '30px'
        };

        const headingStyles = {
            color: '#1a1a2e',
            marginBottom: '15px',
            fontSize: '1.5rem',
            fontWeight: 700
        };

        const paragraphStyles = {
            color: '#4a4a68',
            marginBottom: '15px'
        };

        const listStyles = {
            paddingLeft: '20px',
            marginBottom: '15px'
        };

        const listItemStyles = {
            color: '#4a4a68',
            marginBottom: '8px'
        };

        return (
            <div key={section.id} style={sectionStyles}>
                <h2 style={headingStyles}>{section.title}</h2>

                {/* Regular content paragraphs */}
                {section.content && section.content.map((paragraph, index) => (
                    <p key={index} style={paragraphStyles}>{paragraph}</p>
                ))}

                {/* Numbered lists */}
                {section.list && (
                    <div style={{ paddingLeft: '20px' }}>
                        {section.list.map((item, index) => (
                            <div key={index} style={{ marginBottom: '15px' }}>
                                <p style={paragraphStyles}>
                                    <strong>{item.number}.</strong> {item.text}
                                </p>
                                {item.subList && (
                                    <ul style={{ paddingLeft: '20px', marginTop: '5px' }}>
                                        {item.subList.map((subItem, subIndex) => (
                                            <li key={subIndex} style={{ ...listItemStyles, marginBottom: '5px' }}>
                                                {typeof subItem === 'string' ? subItem : `${subItem.type}: ${subItem.text}`}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                {item.highlight && (
                                    <div style={{
                                        backgroundColor: '#e8f5e8',
                                        border: '1px solid #4CAF50',
                                        padding: '10px',
                                        borderRadius: '5px',
                                        marginTop: '10px'
                                    }}>
                                        <strong style={{ color: '#2e7d32' }}>Key Point: 10 year retention period</strong>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {/* Simple lists (for sharing section) */}
                {section.list && !section.list[0]?.number && (
                    <ul style={listStyles}>
                        {section.list.map((item, index) => (
                            <li key={index} style={listItemStyles}>{item}</li>
                        ))}
                    </ul>
                )}

                {/* Definitions */}
                {section.definitions && (
                    <div style={{ paddingLeft: '20px' }}>
                        {section.definitions.map((def, index) => (
                            <p key={index} style={paragraphStyles}>
                                <strong>{def.number}.</strong> "{def.term}" {def.definition}
                            </p>
                        ))}
                    </div>
                )}

                {/* Data categories with colored boxes */}
                {section.dataCategories && (
                    <div style={{ marginTop: '20px' }}>
                        {section.dataCategories.map((category, index) => (
                            <div key={index} style={{
                                backgroundColor: '#f8f9fa',
                                padding: '20px',
                                borderRadius: '10px',
                                border: '1px solid #e9ecef',
                                marginBottom: '20px'
                            }}>
                                <h4 style={{
                                    color: '#1a1a2e',
                                    marginBottom: '10px',
                                    fontSize: '1.1rem'
                                }}>
                                    {category.category}
                                </h4>
                                {category.description && (
                                    <p style={{
                                        color: '#4a4a68',
                                        fontSize: '0.95rem',
                                        marginBottom: '10px',
                                        fontStyle: 'italic'
                                    }}>
                                        {category.description}
                                    </p>
                                )}
                                <p style={{
                                    color: '#4a4a68',
                                    fontSize: '0.95rem',
                                    marginBottom: '0'
                                }}>
                                    <strong>Purpose:</strong> {category.purpose}
                                </p>
                            </div>
                        ))}
                        {section.note && (
                            <p style={{ ...paragraphStyles, fontStyle: 'italic' }}>
                                {section.note}
                            </p>
                        )}
                    </div>
                )}

                {/* Obligations section */}
                {section.obligations && (
                    <div style={{ paddingLeft: '20px' }}>
                        {section.obligations.map((obligation, index) => (
                            <div key={index} style={{ marginBottom: '15px' }}>
                                <p style={paragraphStyles}>
                                    <strong>{obligation.number}.</strong> {obligation.text}
                                </p>
                                {obligation.subList && (
                                    <ul style={{ paddingLeft: '20px', marginTop: '5px' }}>
                                        {obligation.subList.map((subItem, subIndex) => (
                                            <li key={subIndex} style={{ ...listItemStyles, marginBottom: '8px' }}>
                                                <strong>{subItem.type}:</strong> {subItem.text}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {/* Rights section */}
                {section.rights && (
                    <div style={{ paddingLeft: '20px' }}>
                        {section.rights.map((right, index) => (
                            <p key={index} style={paragraphStyles}>
                                <strong>{right.number}.</strong> {right.title}. {right.description}
                            </p>
                        ))}
                        {section.note && (
                            <p style={{ ...paragraphStyles, fontStyle: 'italic' }}>
                                {section.note}
                            </p>
                        )}
                    </div>
                )}

                {/* Important note (warning box) */}
                {section.importantNote && (
                    <div style={{
                        backgroundColor: section.importantNote.type === 'warning' ? '#fff3cd' : '#f8f9fa',
                        border: `1px solid ${section.importantNote.type === 'warning' ? '#ffeaa7' : '#e9ecef'}`,
                        padding: '15px',
                        borderRadius: '8px',
                        marginTop: '15px'
                    }}>
                        <p style={{
                            color: section.importantNote.type === 'warning' ? '#856404' : '#4a4a68',
                            fontSize: '0.95rem',
                            fontWeight: 600,
                            marginBottom: '0'
                        }}>
                            <strong>Important Note:</strong> {section.importantNote.text}
                        </p>
                    </div>
                )}

                {/* Contact information */}
                {section.contacts && (
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '25px',
                        borderRadius: '12px',
                        border: '1px solid #e9ecef'
                    }}>
                        {section.contacts.map((contact, index) => (
                            <div key={index} style={{
                                marginBottom: index < section.contacts.length - 1 ? '20px' : '0'
                            }}>
                                <h4 style={{
                                    color: '#1a1a2e',
                                    marginBottom: '10px',
                                    fontSize: '1.1rem'
                                }}>
                                    {contact.name || contact.title}
                                </h4>
                                {contact.email && (
                                    <p style={{ color: '#4a4a68', marginBottom: '5px' }}>
                                        <strong>Email:</strong> {contact.email}
                                    </p>
                                )}
                                {contact.phone && (
                                    <p style={{ color: '#4a4a68', marginBottom: '5px' }}>
                                        <strong>Phone:</strong> {contact.phone}
                                    </p>
                                )}
                                {contact.address && (
                                    <p style={{ color: '#4a4a68', marginBottom: '5px' }}>
                                        <strong>Address:</strong> {contact.address}
                                    </p>
                                )}
                                {contact.website && (
                                    <p style={{ color: '#4a4a68', marginBottom: '5px' }}>
                                        <strong>Website:</strong> {contact.website}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: 'white',
            color: '#333'
        }}>
            <Header />
            
            {/* Hero Section */}
            <section style={{
                paddingTop: '120px',
                paddingBottom: '60px',
                background: 'linear-gradient(135deg, #f5f7fa 0%, #e9ecef 100%)',
                textAlign: 'center'
            }}>
                <div style={{
                    width: '100%',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '0 5%'
                }}>
                    <h1 style={{
                        fontSize: 'clamp(2rem, 5vw, 3rem)',
                        color: '#1a1a2e',
                        marginBottom: '20px',
                        fontWeight: 800
                    }}>
                        {title}
                    </h1>
                    <p style={{
                        fontSize: '1.1rem',
                        color: '#4a4a68',
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        {subtitle}
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section style={{
                padding: '60px 0 100px',
                backgroundColor: 'white'
            }}>
                <div style={{
                    width: '100%',
                    maxWidth: '800px',
                    margin: '0 auto',
                    padding: '0 5%'
                }}>
                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '20px',
                        padding: '40px',
                        boxShadow: '0 15px 30px rgba(0, 0, 0, 0.05)',
                        border: '1px solid rgba(0, 0, 0, 0.05)',
                        lineHeight: '1.8'
                    }}>
                        {/* Table of Contents */}
                        <div style={{
                            backgroundColor: '#f8f9fa',
                            padding: '20px',
                            borderRadius: '10px',
                            marginBottom: '40px',
                            border: '1px solid #e9ecef'
                        }}>
                            <h3 style={{
                                color: '#1a1a2e',
                                marginBottom: '15px',
                                fontSize: '1.2rem',
                                fontWeight: 700
                            }}>
                                Table of Contents
                            </h3>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                                gap: '10px'
                            }}>
                                {sections.map((section, index) => (
                                    <a
                                        key={section.id}
                                        href={`#${section.id}`}
                                        style={{
                                            color: '#4CAF50',
                                            textDecoration: 'none',
                                            fontSize: '0.9rem',
                                            padding: '5px 0',
                                            borderBottom: '1px solid transparent',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.borderBottomColor = '#4CAF50';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.borderBottomColor = 'transparent';
                                        }}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            const element = document.getElementById(section.id);
                                            if (element) {
                                                element.scrollIntoView({ behavior: 'smooth' });
                                            }
                                        }}
                                    >
                                        {section.title}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Render all sections */}
                        {sections.map((section) => (
                            <div key={section.id} id={section.id}>
                                {renderContent(section)}
                            </div>
                        ))}

                        {/* Footer */}
                        <div style={{
                            borderTop: '2px solid #e9ecef',
                            paddingTop: '20px',
                            textAlign: 'center'
                        }}>
                            <p style={{
                                color: '#6c757d',
                                fontSize: '0.9rem',
                                marginBottom: '10px'
                            }}>
                                Last Updated: {lastUpdated}
                            </p>
                            <p style={{
                                color: '#6c757d',
                                fontSize: '0.8rem',
                                fontStyle: 'italic'
                            }}>
                                This Privacy Notice may be updated from time to time. Please check this page regularly for any changes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
