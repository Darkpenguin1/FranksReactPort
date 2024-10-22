// Hero.jsx
import { Typewriter } from 'react-simple-typewriter';

function Hero() {
  return (
    <section className="bg-black text-white h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        
        <h1 className="text-5xl font-bold mb-4">
          <Typewriter
            words={["Hi, I'm Frank!", "Hola, Soy Fran!"]}
            loop={0} 
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>

        
        <button className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded mt-4">
          Learn More About Me!
        </button>
      </div>
    </section>
  );
}

export default Hero;


// Maybe I could use the type writer effect as the hero
// or Maybe use a picture... 
// The about section needs more space
// 