import React, { useEffect, useState } from 'react';
import { MdDoneOutline } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

interface WinPopoutProps {
    show: boolean;
    onAnimationEnd: () => void;
    steps: number;
    time: string;
}

const WinPopout: React.FC<WinPopoutProps> = ({ show, onAnimationEnd, steps, time }) => {
    const [visible, setVisible] = useState(show);

    useEffect(() => {
        if (show) {
            setVisible(true);
        }
    }, [show]);

    const handleClose = () => {
        setVisible(false);
        onAnimationEnd();
    };

    if (!visible) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 font-robotoMono">
            <div className="bg-green-500 rounded-lg p-6 flex flex-col items-center relative">
                <button className="absolute top-2 right-2 text-white" onClick={handleClose}>
                    <AiOutlineClose className="text-lg" />
                </button>
                <MdDoneOutline className="text-white text-6xl mb-4" />
                <h2 className="text-white text-2xl font-bold mb-2">Congratulations, you got it!</h2>
                <p className="text-white text-lg">Steps: {steps}</p>
                <p className="text-white text-lg">Time: {time}</p>
            </div>
        </div>
    );
};

export default WinPopout;