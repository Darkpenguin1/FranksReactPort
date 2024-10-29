// About.jsx
import { Typewriter } from 'react-simple-typewriter';
function About() {
    return (
      <section className="bg-black text-white py-6 px-6" id="about">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-yellow-500">
          <Typewriter
              words={["Who am I?", "¿Quién soy yo?"]}
              loop={0} 
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>

         
          
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            <div className="flex justify-center">
              <img src="/test2.jpg" alt="Penguin Logo" className="rounded-full aspect-square object-cover h-56 w-56 md:h-64 md:w-64 lg:h-72 lg:w-72"/>
            </div>
            <p className="text-lg mb-6">
              I'm an 18 year old junior at UNC Charlotte studying computer science.
              I'm an aspiring Software/Cloud Engineer! Seeking summer 2025 Internships.
            </p>
          </div>

        </div>
      </section>
    );
  }
  
  export default About;
  