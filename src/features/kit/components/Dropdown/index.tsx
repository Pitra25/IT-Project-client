import React, { useState } from 'react';
import { DropdownWrapper } from './Dropdown.styled.ts'

interface DropdownProps {
    options: { value: string; label: string }[]
    onSelect: (selectedValue: string) => void
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
    const [selectedValue, setSelectedValue] = useState(options[0]?.value || '');

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value
        setSelectedValue(value)
        onSelect(value)
    };

    return (
        <DropdownWrapper>
            <select className="dropdown-select" value={selectedValue} onChange={handleChange}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </DropdownWrapper>
    );
};

export default Dropdown;