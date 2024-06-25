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
                    width: '100%',
                    height: '40vh',
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
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                marginBottom: '3.25em'
                            }}>
                                <p style={{fontSize: '5em', margin: 0, fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', color: '#0a425b'}}>
                                    ROB SWAN COACHING
                                </p>
                            </div>
                            <div style={{paddingLeft: '1.5em', paddingRight: '1.5em'}}>
                                <p style={{margin: 0, fontSize: '3em', fontFamily: 'Nunito, sans-serif', color: '#446787'}}>
                                    Cultivating Confidence, Focus & Forgiveness for a Fulfilling Life
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
