import { Typewriter } from 'react-simple-typewriter';

function TypeWriterEffect(){
    return <div className='text-center p-4 max-w-lg mx-auto'>
        <div className='text-6xl font-bold'>
            <Typewriter
            words={["Hi, I'm Frank!", "Hola, Soy Fran!"]}
            loop={2} // Number of times to loop the animation (use 0 for infinite loop)
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            />
        </div>
        
    </div>
}

export default TypeWriterEffect