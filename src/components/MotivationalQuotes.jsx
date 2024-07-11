import { useState, useEffect, useRef } from "react";
import motivation from "../Images/creativity.png";

function MotivationalQuotes() {
    const quotes = [
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
        },
        {
            quote: '“The secret of getting ahead is getting started.”',
            writer: 'Anonymous'
        },
        {
            quote: '“Problems are not the problem; coping is the problem.”',
            writer: 'Anonymous'
        },
        {
            quote: '“Trust is built with consistency.”',
            writer: 'Anonymous'
        },
        {
            quote: '“The thing that is really hard, and really amazing, is giving up on being perfect and beginning the work of becoming yourself.”',
            writer: 'Anonymous'
        },
        {
            quote: '“Know who others think you are, but never let that define you. In life, you will be celebrated and criticized, trusted and ridiculed - all at once. Embrace the complexity of this journey.”',
            writer: 'Anonymous'
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
