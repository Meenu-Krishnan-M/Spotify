import { useContext } from 'react';
import Display from './components/Display'
import Sidebar from './components/Sidebar'
import { PlayerContext } from './context/PlayerContext'
import Player from './components/Player'

const App = () => {


const {audioRef,track} = useContext(PlayerContext);

return (

<div className='h-screen bg-black'>

<div className='h-[90%] flex'>

<Sidebar/>

<Display />

</div>

<Player/>

<audio ref={audioRef} src={track.file} preload='auto'></audio>

</div>

)

}

export default App