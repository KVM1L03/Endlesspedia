import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#d3d3d3] text-black font-robotoMono py-4 mt-8 flex justify-center items-center">
            <p className="text-center">
                © 2023 Endlesspedia. All rights reserved. |{' '}
                <Link to="/privacy-policy" className="underline">
                    Privacy Policy
                </Link>
            </p>
        </footer>
    );
};

export default Footer;