// About.jsx
function About() {
    return (
      <section className="bg-white text-gray-900 py-24 px-6" id="about">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Who am I?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex justify-center">
              <img src="/penguinLogoPicture.png" alt="Penguin Logo" className=" h-16 w-16"/>
            </div>
            <p className="text-lg mb-6">
              I'm an 18 year old junior at Unc Charlotte studying computer science.
              I'm an aspiring Software/Cloud Engineer!
            </p>
          </div>
          
          

        </div>
      </section>
    );
  }
  
  export default About;
  