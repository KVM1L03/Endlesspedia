import React, { useState } from 'react';
import SearchBar from '../SearchBar.tsx';
import Button from './Button.tsx';

interface DefToDefFormProps {
    onSubmit: (fromTerm: string, toTerm: string) => void;
    loading: boolean;
}

const DefToDefForm: React.FC<DefToDefFormProps> = ({ onSubmit, loading }) => {
    const [fromTerm, setFromTerm] = useState<string>('');
    const [toTerm, setToTerm] = useState<string>('');
    const [fromError, setFromError] = useState<string>('');
    const [toError, setToError] = useState<string>('');

    const handleSubmit = () => {
        if (!fromTerm || !toTerm) {
            if (!fromTerm) setFromError('Text field cannot be empty, pick definition from list');
            if (!toTerm) setToError('Text field cannot be empty, pick definition from list');
            return;
        }
        setFromError('');
        setToError('');
        onSubmit(fromTerm, toTerm);
        setFromTerm('');
        setToTerm('');
    };

    return (
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">From:</label>
                <SearchBar
                    placeholder="Search for terms..."
                    inputClassName="bg-gray-100"
                    resultClassName="bg-white"
                    resultItemClassName="text-blue-500"
                    onResultClick={(term) => {
                        setFromTerm(term);
                        setFromError('');
                    }}
                />
                {fromError && (
                    <div className="text-red-500 mt-2">
                        {fromError}
                    </div>
                )}
            </div>

            <div className="flex justify-center mb-4 text-xl">↓</div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">To:</label>
                <SearchBar
                    placeholder="Search for terms..."
                    inputClassName="bg-gray-100"
                    resultClassName="bg-white"
                    resultItemClassName="text-blue-500"
                    onResultClick={(term) => {
                        setToTerm(term);
                        setToError('');
                    }}
                />
                {toError && (
                    <div className="text-red-500 mt-2">
                        {toError}
                    </div>
                )}
            </div>
            <Button
                color="#ff8f12"
                text="Submit"
                onClick={handleSubmit}
                textColor="black"
                disabled={loading || !fromTerm || !toTerm}
            />
        </div>
    );
};

export default DefToDefForm;