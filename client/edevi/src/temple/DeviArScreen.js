import Button from '@material-ui/core/Button';


function DeviArScreen (props) {

    function startNextExperience() {
        props.history.push('/Temple');
    }

    //TODO: Wire in the AR Iframe asset
    return (
        <div className='ARScreen'>
            <iframe src="https://glib-bouncy-minute.glitch.me/"  width="350px" height="600px" allow="camera" className='ARIframe'/>    
            <Button className={'onBowClick'} onClick={startNextExperience}> Temple</Button>

        </div>
    )
}

export default DeviArScreen;