import Button from '@material-ui/core/Button';


function KavadScreen (props) {

    function startNextExperience() {
        props.history.push('/DeckOfCards');
    }

    //TODO: Add kavad mp4
    return (
        <div className='KavadScreen'>
            <video controls>
                <source src={'https://cdn.glitch.com/3f35993f-6c9d-4b3e-a61d-17e740d68d9b%2FKawad_Animation_1.mp4?v=1614349526421'} type="video/mp4" />
            </video>
            <Button className={'onKavadClick'} onClick={startNextExperience}> Next Experience</Button>

        </div>
    )
}

export default KavadScreen;