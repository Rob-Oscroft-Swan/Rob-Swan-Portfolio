import React, { useState } from 'react';
import img from '../Images/img.png';

function WhatsappMessage() {
    const message = encodeURIComponent("Hey Rob!\nI want to know more about the Life Coaching you offer.");
    const phoneNumber = '+27826897696';
    const waURL = `https://wa.me/${phoneNumber}?text=${message}`;

    function handleRedirectMessage() {
        window.open(waURL);
    }

    return (
        <div style={{ height: '2em', width: '2em', position: 'fixed', bottom: '20px', right: '20px', cursor: 'pointer' }} onClick={handleRedirectMessage}>
            <img src={img} alt="WhatsApp Icon" style={{ height: '3em', width: '3em' }} />
        </div>
    );
}

export default WhatsappMessage;
