// Logo.jsx
import React from 'react';

const Logo = ({ inverted = false, layout = "stacked" }) => {
    if (layout === "horizontal") {
        return (
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
            }}>
                <div style={{
                    width: '50px',
                    height: '50px'
                }}>
                    <img
                        src="/afrimark-logo.png"
                        alt="Afrimark Logo"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            filter: inverted ? 'brightness(0) invert(1)' : 'none'
                        }}
                    />
                </div>
                <div>
                    <div style={{
                        fontSize: '20px',
                        fontWeight: 'bold',
                        color: inverted ? 'white' : 'black'
                    }}>
                        AFRIMARK
                    </div>
                    <div style={{
                        fontSize: '10px',
                        letterSpacing: '1px',
                        color: inverted ? 'white' : 'black'
                    }}>
                        TRUST IS EARNED
                    </div>
                </div>
            </div>
        );
    }

    // Stacked layout (for footer): Logo image with text below
    return (
        <div style={{
            textAlign: 'center'
        }}>
            <div style={{
                maxWidth: '120px',
                margin: '0 auto'
            }}>
                <img
                    src="/afrimark-logo.png"
                    alt="Afrimark - Trust is Earned"
                    style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'contain',
                        filter: inverted ? 'brightness(0) invert(1)' : 'none'
                    }}
                />
            </div>
            <div style={{
                fontSize: '20px',
                fontWeight: 'bold',
                marginTop: '10px',
                color: inverted ? 'white' : 'black'
            }}>
                AFRIMARK
            </div>
            <div style={{
                fontSize: '10px',
                letterSpacing: '1px',
                color: inverted ? 'white' : 'black'
            }}>
                TRUST IS EARNED
            </div>
        </div>
    );
};

export default Logo;