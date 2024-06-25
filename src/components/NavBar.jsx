import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Make sure to import your CSS file

function NavBar() {
    const nav = useNavigate();

    return (
        <div style={{ backgroundColor: '#3b4c55', fontFamily: "'Lato', sans-serif" }}>
            {window.innerWidth > 650 ? (
                <div style={{ display: "flex", padding: '1em' }}>
                    <NavItem onClick={() => nav('/')} tooltip="Learn more about Rob and his journey with helping others">Home Page</NavItem>
                    <NavItem onClick={() => nav('/vision-value')} tooltip="Learn about Rob's Vision & Values">Vision & Values</NavItem>
                    <NavItem onClick={() => nav('/about-life-coaching')} tooltip="Find out About Life Coaching">About Life Coaching</NavItem>
                    <NavItem onClick={() => nav('/pricing')} tooltip="Check the Pricing">Pricing</NavItem>
                    <NavItem onClick={() => nav('/contact')} tooltip="Contact Rob">Contact Rob</NavItem>
                </div>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1em' }}>
                        <NavItem onClick={() => nav('/')} tooltip="Learn more about Rob and his journey with helping others">Home Page</NavItem>
                        <NavItem onClick={() => nav('/vision-value')} tooltip="Learn about Rob's Vision & Values">Vision & Values</NavItem>
                        <NavItem onClick={() => nav('/about-life-coaching')} tooltip="Find out About Life Coaching">About Life Coaching</NavItem>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1em' }}>
                        <NavItem onClick={() => nav('/pricing')} tooltip="Check the Pricing">Pricing</NavItem>
                        <NavItem onClick={() => nav('/contact')} tooltip="Contact Rob">Contact Rob</NavItem>
                    </div>
                </div>
            )}
        </div>
    );
}

function NavItem({ onClick, children, tooltip }) {
    return (
        <div
            className="nav-item"
            onClick={onClick}
            title={tooltip}
        >
            {children}
        </div>
    );
}

export default NavBar;
