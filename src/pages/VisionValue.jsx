import PageHeader from "../components/PageHeader";
import WhatsappMessage from "../components/WhatsappMessage";

function VisionValue() {
    return (
        <div>
            <PageHeader/>
            <div style={{textAlign:"center"}}>
                <div style={{padding: '1.5em', backgroundColor: '#446787', color: '#f1f1f1'}}>
                    <div style={{
                        fontSize: '1.5em',
                        paddingTop: '0.5em',
                        paddingBottom: '0.25em',
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 'bold'
                    }}>
                        Vision
                    </div>
                    <div style={{paddingTop: '0.25em', fontFamily: 'Lato', fontWeight: 'lighter', fontSize: '1.5em'}}>
                        Empowering individuals to realize their fullest potential, cultivating a world where every
                        person
                        lives with purpose, passion, and confidence.
                    </div>
                </div>

                <div style={{padding: '1.5em', backgroundColor: '#0A425B', color: '#f1f1f1'}}>
                    <div style={{fontSize: '1.5em', paddingTop: '0.5em', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', textAlign: 'center'}}>
                        Values
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                            <div>
                                <div style={{
                                    fontSize: '2em',
                                    paddingTop: '0.5em',
                                    fontWeight: 'lighter',
                                    fontFamily: 'Nunito',
                                    textAlign: 'center'
                                }}>
                                    Innovation
                                </div>
                                <div style={{paddingBottom: '0.5em', fontFamily: 'Lato', fontWeight: 'lighter', fontSize: '1.5em', textAlign: 'center'}}>
                                    I embrace creativity to solve challenges.
                                </div>
                            </div>
                            <div>
                                <div style={{
                                    fontSize: '2em',
                                    paddingTop: '0.5em',
                                    fontWeight: 'lighter',
                                    fontFamily: 'Nunito',
                                    textAlign: 'center'
                                }}>
                                    Sincerity
                                </div>
                                <div style={{paddingBottom: '0.5em', fontFamily: 'Lato', fontWeight: 'lighter', fontSize: '1.5em', textAlign: 'center'}}>
                                    I prioritize honesty and genuine interactions.
                                </div>
                            </div>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                            <div>
                                <div style={{
                                    fontSize: '2em',
                                    paddingTop: '0.5em',
                                    fontWeight: 'lighter',
                                    fontFamily: 'Nunito',
                                    textAlign: 'center'
                                }}>
                                    Autonomy
                                </div>
                                <div style={{paddingBottom: '0.5em', fontFamily: 'Lato', fontWeight: 'lighter', fontSize: '1.5em', textAlign: 'center'}}>
                                    I respect empowering our own journeys.
                                </div>

                            </div>
                            <div >
                                <div style={{
                                    fontSize: '2em',
                                    paddingTop: '0.5em',
                                    fontWeight: 'lighter',
                                    fontFamily: 'Nunito',
                                    textAlign: 'center'
                                }}>
                                    Empathy
                                </div>
                                <div style={{paddingBottom: '0.5em', fontFamily: 'Lato', fontWeight: 'lighter', fontSize: '1.5em', textAlign: 'center'}}>
                                    I deeply care about other people.
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <WhatsappMessage/>
        </div>
    )
}

export default VisionValue;
