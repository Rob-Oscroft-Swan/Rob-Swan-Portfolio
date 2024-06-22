import { useNavigate } from "react-router-dom";

function NavBar() {
    const nav = useNavigate();

    return (
        <div style={{ backgroundColor: '#3b4c55' }}>
            {window.innerWidth > 650 ?
                <div style={{ display: "flex", padding: '1em' }}>
                    <NavItem onClick={() => nav('/')} tooltip="Learn more about Rob and his journey with helping others">Home Page</NavItem>
                    <NavItem onClick={() => nav('/vision-value')} tooltip="Learn about Rob's Vision & Values">Vision & Values</NavItem>
                    <NavItem onClick={() => nav('/about-life-coaching')} tooltip="Find out About Life Coaching">About Life Coaching</NavItem>
                    <NavItem onClick={() => nav('/pricing')} tooltip="Check the Pricing">Pricing</NavItem>
                    <NavItem onClick={() => nav('/contact')} tooltip="Contact Rob">Contact Rob</NavItem>
                </div> :
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
            }
        </div>
    );
}

function NavItem({ onClick, children, tooltip }) {
    return (
        <div
            style={{
                flex: 1,
                cursor: "pointer",
                textAlign: 'center',
                border: '1px solid black',
                borderRadius: '5px', // Added rounded borders
                backgroundColor: '#456685', // Changed button color
                color: 'white', // Changed text color for better contrast
                padding: '0.5em',
                margin: '0.5em'
            }}
            onClick={onClick}
            title={tooltip}
        >
            {children}
        </div>
    );
}

export default NavBar;
