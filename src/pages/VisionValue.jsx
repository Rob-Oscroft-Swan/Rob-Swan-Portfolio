import PageHeader from "../components/PageHeader";
import WhatsappMessage from "../components/WhatsappMessage";

function VisionValue() {
    return (
        <div>
            <PageHeader/>
            <div style={{padding: '1em'}}>
                <div style={{fontSize: '2em',  paddingTop: '0.5em', paddingBottom: '0.5em', textDecoration: 'underline'}}>
                    Vision & Values
                </div>
                <div style={{fontSize: '1.5em',  paddingTop: '0.5em', paddingBottom: '0.5em', textDecoration: 'underline'}}>
                    Vision
                </div>
                <div style={{ paddingTop: '0.5em', paddingBottom: '0.5em'}}>
                    Empowering individuals to realize their fullest potential, cultivating a world where every person
                    lives with purpose, passion, and confidence.
                </div>
                <div style={{fontSize: '1.75em',  paddingTop: '0.5em', textDecoration: 'underline'}}>
                    Values
                </div>

                <div style={{
                    fontSize: '1.5em',
                    paddingTop: '0.5em',
                    fontWeight: 'lighter'
                }}>
                    Innovation
                </div>
                <div style={{ paddingBottom: '0.5em'}}>
                    I embrace creativity to solve challenges.
                </div>

                <div style={{
                    fontSize: '1.5em',
                    paddingTop: '0.5em',
                    fontWeight: 'lighter'
                }}>
                    Sincerity
                </div>
                <div style={{ paddingBottom: '0.5em'}}>
                    I prioritize honesty and genuine interactions.
                </div>

                <div style={{
                    fontSize: '1.5em',
                    paddingTop: '0.5em',
                    fontWeight: 'lighter'
                }}>
                    Autonomy
                </div>
                <div style={{ paddingBottom: '0.5em'}}>
                    I respect empowering our own journeys.
                </div>

                <div style={{
                    fontSize: '1.5em',
                    paddingTop: '0.5em',
                    fontWeight: 'lighter'
                }}>
                    Empathy
                </div>
                <div style={{ paddingBottom: '0.5em'}}>
                    I deeply care about other people.
                </div>
            </div>
            <WhatsappMessage />
        </div>
    )
}

export default VisionValue;
