import React, { useEffect } from 'react';

const AdSenseScript: React.FC = () => {
    useEffect(() => {
        if (process.env.NODE_ENV === 'production') {
            const script = document.createElement('script');
            script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.REACT_APP_ADSENSE_PUBLISHER_ID}`;
            script.async = true;
            script.crossOrigin = 'anonymous';
            document.head.appendChild(script);
        }
    }, []);

    return null;
};

export default AdSenseScript;