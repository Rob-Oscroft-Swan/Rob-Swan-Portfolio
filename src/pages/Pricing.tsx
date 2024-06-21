import PageHeader from "../components/PageHeader";
import WhatsappMessage from "../components/WhatsappMessage";

function Pricing() {
    return (
        <div>
            <PageHeader />
            <div style={{padding: '1em'}}>
                <div style={{fontSize: '1.75em', paddingLeft: '0.5em', textDecoration: 'underline'}}>
                    Pricing
                </div>
                <div style={{padding: '0.5em'}}>
                    Each session is 50 minutes in length
                </div>
                <div style={{padding: '0.5em'}}>
                    First session is for free - no obligation to continue
                </div>
                <div style={{padding: '0.5em'}}>
                    Thereafter, R480 per session will be charged
                </div>
                <div style={{padding: '0.5em'}}>
                    12 hour cancellation will be penalized
                </div>
                <div style={{padding: '0.5em'}}>
                    Available times - go to my <a href={'https://calendly.com/robswan41/50min'}>Calendy</a>
                </div>
                <WhatsappMessage />
            </div>
        </div>

    )
}

export default Pricing;
