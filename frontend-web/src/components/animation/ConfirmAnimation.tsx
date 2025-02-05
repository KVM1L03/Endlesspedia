import React, { useEffect, useState } from 'react';
import { MdDoneOutline } from "react-icons/md";

interface ConfirmAnimationProps {
    show: boolean;
    onAnimationEnd: () => void;
}

const ConfirmAnimation: React.FC<ConfirmAnimationProps> = ({ show, onAnimationEnd }) => {
    const [visible, setVisible] = useState(show);

    useEffect(() => {
        if (show) {
            setVisible(true);
            const timer = setTimeout(() => {
                setVisible(false);
                onAnimationEnd();
            }, 5000); // 5 seconds
            return () => clearTimeout(timer);
        }
    }, [show, onAnimationEnd]);

    if (!visible) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-green-500 rounded-full p-4">
            <MdDoneOutline className='text-white'/>
            </div>
        </div>
    );
};

export default ConfirmAnimation;