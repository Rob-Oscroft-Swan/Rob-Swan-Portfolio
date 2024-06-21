import img from '../Images/img.png'
function WhatsappMessage() {
    const message = encodeURIComponent("Hey Rob!\nI want to know more about the Life Coaching you offer.");
    const phoneNumber = '+27826897696';
    const waURL = `https://wa.me/${phoneNumber}?text=${message}`

    function handleRedirectMessage() {
        const url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        window.location.href = url;
    }

    return <div style={{height: '2em', width: '2em', position: 'fixed', bottom: '20px', right: '20px', cursor: 'pointer'}} onClick={handleRedirectMessage}>
        <img src={img} style={{height:'3em', width: '3em'}}/>
    </div>
}

export default WhatsappMessage;
