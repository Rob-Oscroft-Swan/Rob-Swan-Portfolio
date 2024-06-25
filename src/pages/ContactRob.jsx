import PageHeader from "../components/PageHeader";
import WhatsappMessage from "../components/WhatsappMessage";

function ContactRob() {
    return (
        <div>
            <PageHeader />
            <div>
                <div style={{padding: '1em', backgroundColor: '#446787', color: '#f1f1f1'}}>
                    <div style={{
                        fontSize: '1.75em',
                        paddingTop: '0.5em',
                        paddingBottom: '0.5em',
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 'bold',
                        textAlign: 'center'
                    }}>
                        Connect With Rob
                    </div>
                    <div style={{paddingTop: '0.5em', paddingBottom: '0.5em', fontFamily: 'Lato', fontWeight: 'lighter', fontSize: '1.25em', textAlign: 'center'}}>
                        As a life coach, my passion is the overall wellbeing of the individual. Focused on the practice
                        in
                        the "Tiny Habits" method, I specialize in helping individuals achieve lasting positive change by
                        starting small.
                    </div>
                    <div style={{paddingTop: '0.5em', paddingBottom: '0.5em', fontFamily: 'Lato', fontWeight: 'lighter', fontSize: '1.25em', textAlign: 'center'}}>
                        By replacing negative habits with constructive ones, I empower my clients to transform their
                        lives
                        incrementally and sustainably.
                    </div>
                    <div style={{paddingTop: '0.5em', paddingBottom: '0.5em', fontFamily: 'Lato', fontWeight: 'lighter', fontSize: '1.25em', textAlign: 'center'}}>
                        My areas of focus include optimizing morning and evening routines, enhancing study methods and
                        routines, cultivating deep focus/work habits, implementing effective time boxing and time
                        management
                        techniques, and establishing consistent exercise routines. With a background in leadership,
                        project
                        management, and personal development, I bring a holistic approach to coaching, fostering growth
                        and
                        resilience.
                    </div>
                    <div style={{paddingTop: '0.5em', paddingBottom: '0.5em', fontFamily: 'Lato', fontWeight: 'lighter', fontSize: '1.25em', textAlign: 'center'}}>
                        Let's work together to unlock your potential and create a more fulfilling, balanced life.
                        Contact me
                        via email or WhatsApp and I will respond to you within 24 hours.
                    </div>
                </div>
                <div style={{padding: '1em', backgroundColor: '#0A425B', color: '#f1f1f1', textAlign: 'center'}}>
                    <div style={{
                        fontSize: '1.75em',
                        paddingTop: '0.5em',
                        paddingBottom: '0.5em',
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 'bold'
                    }}>
                        Contact Rob
                    </div>
                    <div style={{paddingTop: '0.5em', paddingBottom: '0.5em', fontFamily: 'Lato', fontWeight: 'lighter', fontSize: '1.25em'}}>
                        Email: robswan41@gmail.com
                    </div>
                    <div style={{paddingTop: '0.5em', paddingBottom: '0.5em', fontFamily: 'Lato', fontWeight: 'lighter', fontSize: '1.25em'}}>
                        WhatsApp: +27 82 689 7696
                    </div>
                    <div style={{paddingTop: '0.5em', paddingBottom: '0.5em', fontFamily: 'Lato', fontWeight: 'lighter', fontSize: '1.25em'}}>
                        Calendly: <a href="https://calendly.com/robswan41/50min" target="_blank" rel="noopener noreferrer" style={{color: '#f1f1f1'}}>Click Here</a>
                    </div>
                </div>
            </div>


            <WhatsappMessage/>
        </div>
    );
}

export default ContactRob;
