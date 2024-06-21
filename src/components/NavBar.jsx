import { useNavigate } from "react-router-dom";

function NavBar() {
    const nav = useNavigate();

    return (
        <div style={{ backgroundColor: '#3b4c55' }}>
            {window.innerWidth > 650 ?
                <div style={{ display: "flex", padding: '1em' }}>
                    <NavItem onClick={() => nav('/')}>Home Page</NavItem>
                    <NavItem onClick={() => nav('/vision-value')}>Vision & Values</NavItem>
                    <NavItem onClick={() => nav('/about-life-coaching')}>About Life Coaching</NavItem>
                    <NavItem onClick={() => nav('/pricing')}>Pricing</NavItem>
                    <NavItem onClick={() => nav('/contact')}>Contact Rob</NavItem>
                </div> :
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1em' }}>
                        <NavItem onClick={() => nav('/')}>Home Page</NavItem>
                        <NavItem onClick={() => nav('/vision-value')}>Vision & Values</NavItem>
                        <NavItem onClick={() => nav('/about-life-coaching')}>About Life Coaching</NavItem>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1em' }}>
                        <NavItem onClick={() => nav('/pricing')}>Pricing</NavItem>
                        <NavItem onClick={() => nav('/contact')}>Contact Rob</NavItem>
                    </div>
                </div>
            }
        </div>
    );
}

function NavItem({ onClick, children }) {
    return (
        <div style={{ flex: 1, cursor: "pointer", textAlign: 'center' }} onClick={onClick}>
            {children}
        </div>
    );
}

export default NavBar;
