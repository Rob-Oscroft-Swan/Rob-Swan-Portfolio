import { useState, useEffect, useRef } from "react";
import motivation from "../Images/creativity.png";

function MotivationalQuotes() {
    const quotes = [
        {
            quote: `"There are no secrets to success. It is the result of preparation, hard work, and learning from failure."`,
            writer: `Colin Powell`,
        },
        {
            quote: `"Whenever you find yourself on the side of the majority, it is time to pause and reflect."`,
            writer: `Mark Twain`,
        },
        {
            quote: `"If you're trying to create a company, it's like baking a cake. You have to have all the ingredients in the right proportion."`,
            writer: `Elon Musk`,
        },
        {
            quote: `"There is only one boss. The customer. And he can fire everybody in the company from the chairman on down, simply by spending his money somewhere else."`,
            writer: `Sam Walton`,
        },
        {
            quote: `"A brand for a company is like a reputation for a person. You earn reputation by trying to do hard things well."`,
            writer: `Jeff Bezos`,
        },
        {
            quote: `“The most valuable businesses of coming decades will be built by entrepreneurs who seek to empower people rather than try to make them obsolete.”`,
            writer: `Peter Thiel`,
        },
        {
            quote: `“To move, you need mission and maintenance. Mission only, you'll break down. Maintenance only, you'll go nowhere. Both are critical in movement - we need to know when to push and when to fix.”`,
            writer: `Rob Oscroft Swan`,
        },
        {
            quote: `“There are no secrets to success. It is the result of preparation, hard work, and learning from failure."`,
            writer: `Colin Powell`,
        },
    ];
    const [quote, setQuote] = useState(quotes[0].quote);
    const [writer, setWriter] = useState(quotes[0].writer);
    const [showPopup, setShowPopup] = useState(false);
    const buttonRef = useRef(null);
    const popupRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setShowPopup(false);
            }
        }

        if (showPopup) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showPopup]);

    function getRandomQuote() {
        const quoteNumber = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[quoteNumber].quote);
        setWriter(quotes[quoteNumber].writer);
    }

    function handleButtonClick() {
        getRandomQuote();
        setShowPopup(true);
    }

    return (
        <div>
            <div
                ref={buttonRef}
                style={{ position: 'fixed', top: 20, right: 20 }}
            >
                <img
                    src={motivation}
                    style={{ cursor: 'pointer', height: '3em', width: '3em' }}
                    onClick={handleButtonClick}
                />
            </div>
            {showPopup && (
                <div
                    ref={popupRef}
                    style={{
                        position: 'fixed',
                        top: 20, // Align with the button
                        right: 'calc(20px + 3em)', // Position next to the button, considering its size
                        padding: '1em',
                        backgroundColor: '#C3D9E5',
                        color: '#021626',
                        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                        zIndex: 1000,
                        borderRadius: '5px',
                        width: window.innerWidth > 550 ? '20vw' : '70vw'
                    }}
                >
                    <p style={{fontFamily: 'Lato', fontWeight: 'lighter', fontSize: '1.25em', textAlign: 'center'}}>{quote}</p>
                    <p style={{fontSize: '1.5em', fontFamily: 'Nunito', textAlign: 'center'}}>- {writer}</p>
                </div>
            )}
        </div>
    );
}

export default MotivationalQuotes;
