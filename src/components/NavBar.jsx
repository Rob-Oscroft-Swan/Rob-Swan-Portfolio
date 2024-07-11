import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Make sure to import your CSS file

function NavBar() {
    const nav = useNavigate();

    const navItemStyle = {
        padding: '0.5em 1em',
        margin: '0.5em',
        backgroundColor: '#021626',
        borderRadius: '10px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        flex: '1 1 auto',
        textAlign: 'center',
        color: '#F1F1F1'
    };

    const navItemHoverStyle = {
        ...navItemStyle,
        backgroundColor: '#0A425B',
    };

    return (
        <div style={{ backgroundColor: '#0A425B', fontFamily: "'Lato', sans-serif", padding: '1em',
        }}>
            {window.innerWidth > 650 ? (
                <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'space-around' }}>
                    <NavItem onClick={() => nav('/')} tooltip="Learn more about Rob and his journey with helping others" style={navItemStyle} hoverStyle={navItemHoverStyle}>Home Page</NavItem>
                    <NavItem onClick={() => nav('/vision-value')} tooltip="Learn about Rob's Vision & Values" style={navItemStyle} hoverStyle={navItemHoverStyle}>Vision & Values</NavItem>
                    <NavItem onClick={() => nav('/about-life-coaching')} tooltip="Find out About Life Coaching" style={navItemStyle} hoverStyle={navItemHoverStyle}>About Life Coaching</NavItem>
                    <NavItem onClick={() => nav('/pricing')} tooltip="Check the Pricing" style={navItemStyle} hoverStyle={navItemHoverStyle}>Pricing</NavItem>
                    <NavItem onClick={() => nav('/contact')} tooltip="Get in contact with Rob" style={navItemStyle} hoverStyle={navItemHoverStyle}>Contact Rob</NavItem>
                </div>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <NavItem onClick={() => nav('/')} tooltip="Learn more about Rob and his journey with helping others" style={navItemStyle} hoverStyle={navItemHoverStyle}>Home Page</NavItem>
                        <NavItem onClick={() => nav('/vision-value')} tooltip="Learn about Rob's Vision & Values" style={navItemStyle} hoverStyle={navItemHoverStyle}>Vision & Values</NavItem>
                        <NavItem onClick={() => nav('/about-life-coaching')} tooltip="Find out About Life Coaching" style={navItemStyle} hoverStyle={navItemHoverStyle}>About Life Coaching</NavItem>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <NavItem onClick={() => nav('/pricing')} tooltip="Check the Pricing" style={navItemStyle} hoverStyle={navItemHoverStyle}>Pricing</NavItem>
                        <NavItem onClick={() => nav('/contact')} tooltip="Get in contact with Rob" style={navItemStyle} hoverStyle={navItemHoverStyle}>Contact Rob</NavItem>
                    </div>
                </div>
            )}
        </div>
    );
}

function NavItem({ onClick, children, tooltip, style, hoverStyle }) {
    return (
        <div
            className="nav-item"
            onClick={onClick}
            title={tooltip}
            style={style}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = style.backgroundColor}
        >
            {children}
        </div>
    );
}

export default NavBar;