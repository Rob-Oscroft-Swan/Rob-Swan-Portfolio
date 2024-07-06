import PageHeader from "../components/PageHeader";
import WhatsappMessage from "../components/WhatsappMessage";
import MotivationalQuotes from "../components/MotivationalQuotes";

function HomePage() {
    return (
        <div >
            <PageHeader />
            <div style={{textAlign: 'center'}}>
                <div style={{backgroundColor: '#446787', color: '#f1f1f1', padding: '1.5em',}}>
                    <div style={{
                        fontSize: '1.75em',
                        paddingTop: '0.5em',
                        paddingBottom: '0.5em',
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 'bold',
                    }}>
                        My Journey
                    </div>
                    <div style={{paddingTop: '0.5em', paddingBottom: '0.5em', fontFamily: 'Lato', fontWeight: 'lighter', fontSize: '1.25em'}}>
                        With over seven years in full-time ministry within the church, two years of online life coaching focused in the European and American market, and currently a project manager at a software development firm, I bring a diverse background to my life coaching practice. My work has always centered on people and their well-being. Starting with myself.
                    </div>
                    <div style={{paddingTop: '0.5em', paddingBottom: '0.5em', fontFamily: 'Lato', fontWeight: 'lighter', fontSize: '1.25em'}}>
                        As a full-time project manager, my passion for life coaching stems from a desire to connect with
                        and
                        help others. I aim to facilitate holistic healing, fostering confidence through meaningful
                        conversations and small, transformative habits.
                    </div>
                    <div style={{paddingTop: '0.5em', paddingBottom: '0.5em', fontFamily: 'Lato', fontWeight: 'lighter', fontSize: '1.25em'}}>
                        My goal in a conversation is for the person talking with me to leave feeling better than when
                        they
                        arrived, in whatever way that means for them right now.
                    </div>
                    <div style={{paddingTop: '0.5em', fontFamily: 'Lato', fontWeight: 'lighter', fontSize: '1.25em'}}>
                        When I'm not working, you'll find me enjoying nature, whether that's exploring the African bush,
                        swimming in the ocean, or just walking my dog. I also love getting creative with gardening,
                        photography, baking, and woodworking.
                    </div>
                </div>

                <div style={{padding: '1.5em', backgroundColor: '#0A425B', color: '#f1f1f1'}}>
                    <div style={{
                        fontSize: '1.75em',
                        paddingTop: '0.5em',
                        paddingBottom: '0.5em',
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 'bold'
                    }}>
                        What to Expect if you Connect with Me
                    </div>
                    <div style={{paddingTop: '0.5em', paddingBottom: '0.5em', fontFamily: 'Lato', fontWeight: 'lighter', fontSize: '1.25em'}}>
                        We'll schedule a convenient time to meet via Google Meet, normally 50 minutes. Our first session will have no cost or obligation and during which we will discuss a tailored plan to meet your needs and circumstances.
                    </div>
                    <div style={{paddingTop: '0.5em', paddingBottom: '0.5em', fontFamily: 'Lato', fontWeight: 'lighter', fontSize: '1.25em'}}>
                        I'm not a registered psychologist, so I can't offer professional advice. But if you're looking
                        for someone dedicated to helping you find your best life, reach out and let's chat.
                    </div>
                </div>

            </div>
            <WhatsappMessage/>
        </div>
    )
}

export default HomePage;
