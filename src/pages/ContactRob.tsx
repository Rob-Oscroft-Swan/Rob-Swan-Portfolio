import PageHeader from "../components/PageHeader";
import WhatsappMessage from "../components/WhatsappMessage";

function ContactRob() {
    return (
        <div>
            <PageHeader />
            <div style={{padding: '1em'}}>
                <div style={{fontSize: '1.75em', paddingLeft: '0.5em', textDecoration: 'underline'}}>
                    Connect With Rob
                </div>
                <div style={{padding: '0.5em'}}>
                    As a life coach, my passion is the overall wellbeing of the individual. Focused on the practice in
                    the "Tiny Habits" method, I specialize in helping individuals achieve lasting positive change by
                    starting small.
                </div>
                <div style={{padding: '0.5em'}}>
                    By replacing negative habits with constructive ones, I empower my clients to transform their lives
                    incrementally and sustainably.
                </div>
                <div style={{padding: '0.5em'}}>
                    My areas of focus include optimizing morning and evening routines, enhancing study methods and
                    routines, cultivating deep focus/work habits, implementing effective time boxing and time management
                    techniques, and establishing consistent exercise routines. With a background in leadership, project
                    management, and personal development, I bring a holistic approach to coaching, fostering growth and
                    resilience.
                </div>
                <div style={{padding: '0.5em'}}>
                    Let's work together to unlock your potential and create a more fulfilling, balanced life. Contact me
                    via email or WhatsApp and I will respond to you within 24 hours.
                </div>

                <div style={{fontSize: '1.75em', paddingLeft: '0.5em', textDecoration: 'underline'}}>
                    Contact Rob
                </div>
                <div style={{padding: '0.5em'}}>
                    Email: robswan41@gmail.com
                </div>
                <div style={{padding: '0.5em'}}>
                    WhatsApp: +27 82 689 7696
                </div>
                <div style={{padding: '0.5em'}}>
                    Calendly: <a href={'https://calendly.com/robswan41/50min'}>Click Here</a>
                </div>
            </div>
            <WhatsappMessage />
        </div>

    )
}

export default ContactRob;
