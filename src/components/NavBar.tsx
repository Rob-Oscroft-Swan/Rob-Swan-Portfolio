import {useNavigate} from "react-router-dom";

function NavBar() {
    const nav = useNavigate();
    return (
        <div style={{backgroundColor: '#3b4c55'}}>
            {window.innerWidth > 650 ?
                <div style={{display: "flex", padding: '1em'}}>
                    <div style={{flex: 1, cursor: "pointer", textAlign: 'center'}} onClick={() => {
                        nav('/')
                    }}>
                        Home Page
                    </div>
                    <div style={{flex: 1, cursor: "pointer", textAlign: 'center'}} onClick={() => {
                        nav('/vision-value')
                    }}>
                        Vision & Values
                    </div>
                    <div style={{flex: 1, cursor: "pointer", textAlign: 'center'}} onClick={() => {
                        nav('/about-life-coaching')
                    }}>
                        About Life Coaching
                    </div>
                    <div style={{flex: 1, cursor: "pointer", textAlign: 'center'}} onClick={() => {
                        nav('/pricing')
                    }}>
                        Pricing
                    </div>
                    <div style={{flex: 1, cursor: "pointer", textAlign: 'center'}} onClick={() => {
                        nav('/contact')
                    }}>
                        Contact Rob
                    </div>
                </div> :
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1em'}}>
                        <div style={{flex: 1, cursor: "pointer", textAlign: 'center'}} onClick={() => {
                            nav('/')
                        }}>
                            Home Page
                        </div>
                        <div style={{flex: 1, cursor: "pointer", textAlign: 'center'}} onClick={() => {
                            nav('/vision-value')
                        }}>
                            Vision & Values
                        </div>
                        <div style={{flex: 1, cursor: "pointer", textAlign: 'center'}} onClick={() => {
                            nav('/about-life-coaching')
                        }}>
                            About Life Coaching
                        </div>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1em'}}>
                        <div style={{flex: 1, cursor: "pointer", textAlign: 'center'}} onClick={() => {
                            nav('/pricing')
                        }}>
                            Pricing
                        </div>
                        <div style={{flex: 1, cursor: "pointer", textAlign: 'center'}} onClick={() => {
                            nav('/contact')
                        }}>
                            Contact Rob
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default NavBar;
