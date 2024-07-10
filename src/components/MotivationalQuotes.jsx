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
        {
            quote: '“Most people do not listen with the intent to understand; they listen with the intent to reply.”',
            writer: 'Anonymous'
        },
        {
            quote: '“In the pursuit of goals, remember the balance ' +
                'of mission and maintenance. Mission alone ' +
                'leads to burnout, maintenance alone leads to ' +
                'stagnation. Discern when to push and when to fix.”',
            writer: 'Anonymous'
        },
        {
            quote: '“Adaptability is the compass that guides you through uncharted waters. Embrace change,' +
                'for it\'s the forge where we are molded in this life.”',
            writer: 'Anonymous'
        },
        {
            quote: '“We often think of choice as a thing. But choice is not a thing. Our options may be things, but a choice is an action.”',
            writer: 'Anonymous'
        },
        {
            quote: '“Learn how to do less but better, so you can achieve the highest possible return on every precious moment of your life.”',
            writer: 'Anonymous'
        },
        {
            quote: '“It always seems impossible until it\'s done.”',
            writer: 'Anonymous'
        },
        {
            quote: '“Be and remain positive. Challenge your will and ego to be and stay positive.”',
            writer: 'Anonymous'
        },
        {
            quote: '“Ability is what you\'re capable of doing. Motivation determines what you do. Attitude determines how well you do it.”',
            writer: 'Anonymous'
        },
        {
            quote: '“I love people who make me laugh. I honestly think it\'s the thing I like most, to laugh. It cures a multitude of ills. It\'s probably the most important thing in a person.”',
            writer: 'Anonymous'
        },
        {
            quote: '“Lose an hour in the morning, and you will spend all day looking for it.”',
            writer: 'Anonymous'
        },
        {
            quote: '“Success is not built on success. It\'s built on failure. It\'s built on frustration. Sometimes it’s built on catastrophe.”',
            writer: 'Anonymous'
        },
        {
            quote: '“Let us not look back in anger, nor forward in fear, but around in awareness.”',
            writer: 'Anonymous'
        },
        {
            quote: '“The greatest gift you can give your family and the world is a healthy you.”',
            writer: 'Anonymous'
        },
        {
            quote: '“The harder I work, the luckier I get.”',
            writer: 'Anonymous'
        }
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
                style={{ position: 'fixed', top: 20, right: 20, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' 
                }}
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
