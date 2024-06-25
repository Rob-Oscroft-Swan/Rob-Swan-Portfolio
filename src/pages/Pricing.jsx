import PageHeader from "../components/PageHeader";
import WhatsappMessage from "../components/WhatsappMessage";

function Pricing() {
    return (
        <div>
            <PageHeader />
            <div >
                <div style={{padding: '1.5em', backgroundColor: '#446787', color: '#f1f1f1', fontFamily: 'Nunito', fontSize: '1.75em', textAlign: 'center'}}>
                    Start the journey right here, where you live with purpose, passion and resilience.
                </div>
                <div style={{padding: '1.5em', backgroundColor: '#0A425B', color: '#f1f1f1', textAlign: 'center'}}>
                    <div style={{
                        paddingTop: '0.5em',
                        paddingBottom: '0.5em',
                        fontFamily: 'Lato',
                        fontWeight: 'lighter',
                        fontSize: '1.25em'
                    }}>
                        Each session is 50 minutes in length
                    </div>
                    <div style={{
                        paddingTop: '0.5em',
                        paddingBottom: '0.5em',
                        fontFamily: 'Lato',
                        fontWeight: 'lighter',
                        fontSize: '1.25em'
                    }}>
                        First session is for free - no obligation to continue
                    </div>
                    <div style={{
                        paddingTop: '0.5em',
                        paddingBottom: '0.5em',
                        fontFamily: 'Lato',
                        fontWeight: 'lighter',
                        fontSize: '1.25em'
                    }}>
                        Thereafter, R480 per session will be charged
                    </div>
                    <div style={{
                        paddingTop: '0.5em',
                        paddingBottom: '0.5em',
                        fontFamily: 'Lato',
                        fontWeight: 'lighter',
                        fontSize: '1.25em'
                    }}>
                        12 hour cancellation will be penalized
                    </div>
                    <div style={{
                        paddingTop: '0.5em',
                        paddingBottom: '0.5em',
                        fontFamily: 'Lato',
                        fontWeight: 'lighter',
                        fontSize: '1.25em'
                    }}>
                        Available times - go to my <a href="https://calendly.com/robswan41/50min" target="_blank" rel="noopener noreferrer" style={{color: '#f1f1f1'}}>Calendly</a>
                    </div>
                </div>
                <WhatsappMessage/>
            </div>
        </div>

    )
}

export default Pricing;
