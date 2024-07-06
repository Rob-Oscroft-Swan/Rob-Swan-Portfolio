import header from '../Images/banner.jpg';
import NavBar from './NavBar';
import MotivationalQuotes from "./MotivationalQuotes";
import '../App.css'

function PageHeader() {
    return (
        <div style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column'}}>
            {/* Header Image */}
            <MotivationalQuotes/>
            <div style={{backgroundColor: '#3b4c55'}}>
                <NavBar/>
            </div>
            <div>
                <div style={{
                    color: 'white',
                    textAlign: 'center',
                    backgroundImage: `url(${header})`,
                    width: '100vw',
                    height: '60vh',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundPosition: 'center',

                }}>
                    <div style={{height: '100%', width: '100%'}}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'stretch',
                        }}>
                            <div style={{paddingTop: '0', paddingBottom: '0'}}>
                                <p style={{marginBottom: '0', fontSize: '1.2em', fontFamily: 'Nunito, sans-serif', color: '#446787'}}>
                                    Cultivating Confidence, Focus & Forgiveness for a Fulfilling Life
                                </p>
                            </div>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                marginBottom: '0'
                            }}>
                                <p className="rob-swan-coaching" style={{fontSize: '4rem', margin: '3rem 1rem 0rem 1rem', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', color: '#021626'}}>
                                    ROB SWAN COACHING
                                </p>
                            </div>
                            
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default PageHeader;
