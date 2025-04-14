import { useState } from "react";
import '../styles/font-switcher.css';

const FontSwitcher = ({setFont}) => {

    const [showOptions, setShowOptions] = useState(false);
    
    const fonts = [
        { name: "Inter", value: "'Inter', sans-serif" },
        { name: "Roboto", value: "'Roboto', sans-serif" },
        { name: "Source Sans Pro", value: "'Source Sans Pro', sans-serif" },
    ];
    const handleFontChange = (selectedFont) => {
        setFont(selectedFont);
        setShowOptions(false);
    };

    return (
        <div className="floating-font-switcher">
            <button 
                className="font-toggle-button"
                onClick={() => setShowOptions(!showOptions)}
                aria-label="Change font style"
            >
                Aa
            </button>

            {showOptions &&            
            <div className="font-options">
                    {fonts.map((selectedFont) =>
                        <button 
                        value={selectedFont.value}
                        className="font-option"
                        onClick={() => handleFontChange(selectedFont.value)}
                        style={{fontFamily: selectedFont.value}}                        
                        >
                            {selectedFont.name}
                        </button>
                    )}
            </div>}
            
       
        </div>
    );
};

export default FontSwitcher;