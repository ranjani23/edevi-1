import Button from '@material-ui/core/Button';


function ARScreen (props) {

    function startNextExperience() {
        props.history.push('/Glitch/Pledge/ARScreen/KavadScreen');
    }

    //TODO: Wire in the AR Iframe asset
    return (
        <div className='ARScreen'>
            <iframe src="https://glib-bouncy-minute.glitch.me/"  width="350px" height="600px" allow="camera" className='ARIframe'/>    
            <Button className={'onBowClick'} onClick={startNextExperience}> Next Experience</Button>

        </div>
    )
}

export default ARScreen;