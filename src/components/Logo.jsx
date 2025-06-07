// Logo.jsx
import React from 'react';

const Logo = ({ inverted = false, layout = "stacked", size = "normal" }) => {
    // Size configurations
    const sizeConfig = {
        small: {
            width: '40px',
            height: '40px'
        },
        normal: {
            width: '50px',
            height: '50px'
        },
        large: {
            width: '100px',
            height: '100px'
        }
    };

    const currentSize = sizeConfig[size] || sizeConfig.normal;

    if (layout === "horizontal") {
        return (
            <div style={{
                display: 'flex',
                alignItems: 'center'
            }}>
                <div style={{
                    width: currentSize.width,
                    height: currentSize.height
                }}>
                    <img
                        src="/afrimark-new-logo.png"
                        alt="Afrimark Logo"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            filter: inverted ? 'brightness(0) invert(1)' : 'none'
                        }}
                    />
                </div>
            </div>
        );
    }

    return (
        <div style={{
            textAlign: 'center'
        }}>
            <div style={{
                width: currentSize.width,
                height: currentSize.height,
                margin: '0 auto'
            }}>
                <img
                    src="/afrimark-new-logo.png"
                    alt="Afrimark - Trust is Earned"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        filter: inverted ? 'brightness(0) invert(1)' : 'none'
                    }}
                />
            </div>
        </div>
    );
};

export default Logo;