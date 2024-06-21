import header from '../Images/header.jpg'
import NavBar from "./NavBar";

function PageHeader() {
    return (
        <div style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column'}}>
            {/*Header Image*/}
            <div>
                <div style={{
                    color: 'white',
                    textAlign: 'center',
                    backgroundImage: `url(${header})`,
                    height: '35vh',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundPosition: 'center',
                    backgroundColor: '#3b4c55'
                }}>
                    {/*Add Quote once Rob comes up with one that doesn't make me barf, or if I come up with something nice to say.*/}
                </div>
                <div style={{backgroundColor: '#3b4c55'}}>
                    <NavBar />
                </div>
            </div>
            {/*Heading*/}
            <div style={{backgroundColor: '#67a1c9', display: 'flex', flexDirection: 'column', padding: '1em'}}>
                <div style={{textAlign: 'end', color: 'black'}}>
                    Ages 12-26
                </div>
                <div style={{color: 'white', textAlign: "center", fontSize: '4em'}}>
                    ROB SWAN COACHING
                </div>
                <div style={{color: '#07425c', textAlign: "center", fontSize: '2em'}}>
                    Cultivating Confidence, Focus & Forgiveness for a Fulfilling Life
                </div>
            </div>

        </div>
    )
}

export default PageHeader;
