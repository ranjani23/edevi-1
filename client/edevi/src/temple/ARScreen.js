
function ARScreen (props) {

    //TODO: Wire in the AR Iframe asset
    return (
        <div className='ARScreen'>
            <iframe src="https://glib-bouncy-minute.glitch.me/"  width="350px" height="600px" allow="camera" className='ARIframe'/>    
        </div>
    )
}

export default ARScreen;