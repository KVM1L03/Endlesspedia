import React from 'react';

interface ButtonProps {
    text: string;
    color: string;
    textColor: string;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    icon?: React.ReactNode;
    href?: string;
}

const Button: React.FC<ButtonProps> = ({ text, color, textColor, onClick, disabled = false, className = '', icon, href }) => {
    const handleClick = () => {
        if (href) {
            window.location.href = href;
        } else if (onClick) {
            onClick();
        }
    };

    return (
        <button
            style={{ backgroundColor: color, color: textColor }}
            className={`font-bold font-robotoMono py-2 px-4 rounded-full shadow-md shadow-black transition duration-300 ease-in-out transform hover:scale-105 ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`}
            onClick={handleClick}
            disabled={disabled}
        >
            <span className="flex items-center">
                {text}
                {icon && <span className="ml-2">{icon}</span>}
            </span>
        </button>
    );
};

export default Button;