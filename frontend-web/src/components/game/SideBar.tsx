import React from 'react';
import Button from './Button.tsx';

interface ButtonProps {
    text: string;
    color: string;
    textColor: string;
    onClick?: () => void;
    disabled?: boolean;
}

interface SideBarProps {
    title?: string;
    buttons?: ButtonProps[];
    children?: React.ReactNode;
}

const SideBar: React.FC<SideBarProps> = ({ title, buttons = [], children }) => {
    return (
        <div className="w-full md:w-1/4 p-4 flex flex-col space-y-4">
            <div className="bg-white rounded-xl shadow-lg p-4 py-12">
                <h2 className="text-xl font-robotoMono font-bold mb-4">{title}</h2>
                {buttons.map((buttonProps, index) => (
                    <div key={index} className="mb-2">
                        <Button {...buttonProps} />
                    </div>
                ))}
                {children && (
                    <div className="mt-4">
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SideBar;