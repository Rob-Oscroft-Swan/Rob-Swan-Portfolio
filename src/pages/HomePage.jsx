import PageHeader from "../components/PageHeader";
import WhatsappMessage from "../components/WhatsappMessage";
import MotivationalQuotes from "../components/MotivationalQuotes";

function HomePage() {
    return (
        <div >
            <PageHeader />
            <div style={{backgroundColor: '#456685', color: 'white', textAlign: 'center', fontSize: '2.5em', padding: '0.5em'}}>
                Start the journey right here, where you live with purpose, passion and resilience.
            </div>
            <div style={{backgroundColor: '#c2d9e7', color: 'black', fontSize: '1.5em', fontWeight: 'lighter', textAlign: 'center', padding: '0.5em'}}>
                First session no cost or obligation
                <br/>
                +27 82 689 7696
            </div>
            <div style={{padding: '1em'}}>
                <div style={{fontSize: '1.75em',  paddingTop: '0.5em', paddingBottom: '0.5em', textDecoration: 'underline'}}>
                    My Journey
                </div>
                <div style={{ paddingTop: '0.5em', paddingBottom: '0.5em'}}>
                    With over seven years in full-time ministry within the church, two years of online life coaching
                    focused on European and American teenagers, and currently a project manager at a software
                    development firm, I bring a diverse background to my life coaching practice. My work has always
                    centered on people and their well-being. Starting with myself.
                </div>
                <div style={{ paddingTop: '0.5em', paddingBottom: '0.5em'}}>
                    As a full-time project manager, my passion for life coaching stems from a desire to connect with and
                    help others. I aim to facilitate holistic healing, fostering confidence through meaningful
                    conversations and small, transformative habits.
                </div>
                <div style={{ paddingTop: '0.5em', paddingBottom: '0.5em'}}>
                    My goal in a conversation is for the person talking with me to leave feeling better than when they
                    arrived, in whatever way that means for them right now.
                </div>
                <div style={{ paddingTop: '0.5em', paddingBottom: '0.5em'}}>
                    When I'm not working, you'll find me enjoying nature, whether that's exploring the African bush,
                    swimming in the ocean, or just walking my dog. I also love getting creative with gardening,
                    photography, baking, and woodworking.
                </div>

                <div style={{fontSize: '1.75em',  paddingTop: '0.5em', paddingBottom: '0.5em', textDecoration: 'underline'}}>
                    What to Expect if you Connect with Me
                </div>
                <div style={{ paddingTop: '0.5em', paddingBottom: '0.5em'}}>
                    We'll schedule a convenient time to meet via Google Meet. Our first conversation will be free and will set the tone for future sessions. We'll then discuss a tailored plan to meet your needs and circumstances.
                </div>
                <div style={{ paddingTop: '0.5em', paddingBottom: '0.5em'}}>
                    I'm not a registered psychologist, so I can't offer professional advice. But if you're looking for someone dedicated to helping you find your best life, reach out and let's chat.
                </div>
            </div>
            <WhatsappMessage />
        </div>
    )
}

export default HomePage;
