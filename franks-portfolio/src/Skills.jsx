import { FaReact, FaJava, FaPython, FaHtml5, FaGitAlt, FaLinux} from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiMongodb, SiMicrosoftazure, SiCplusplus, SiFlask, SiDjango } from 'react-icons/si';


function Skills(){
  const techStackArr = [
    // Programming languages!
    { name: 'Java', icon: <FaJava size={40} className="text-gray-500 group-hover:text-[#2A5D88] transition duration-300" /> },
    { name: 'Python', icon: <FaPython size={40} className="text-gray-500 group-hover:text-[#FCD116] transition duration-300" /> },
    { name: 'JavaScript', icon: <SiJavascript size={40} className="text-gray-500 group-hover:text-[#F0DB4F] transition duration-300" /> },
    { name: 'C++', icon: <SiCplusplus size={40} className="text-gray-500 group-hover:text-[#007ACC] transition duration-300" /> },
    { name: 'HTML', icon: <FaHtml5 size={40} className="text-gray-500 group-hover:text-[#E34F26] transition duration-300" /> },

    // Framewrks
    { name: 'React', icon: <FaReact size={40} className="text-gray-500 group-hover:text-[#61DAFB] transition duration-300" /> },
    { name: 'Django', icon: <SiDjango size={40} className="text-gray-500 group-hover:text-[#00683A] transition duration-300" /> },
    { name: 'Flask', icon: <SiFlask size={40} className="text-gray-500 group-hover:text-[#555555] transition duration-300" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} className="text-gray-500 group-hover:text-[#38BDF8] transition duration-300" /> },
    
    // Developer Tools
    { name: 'Azure', icon: <SiMicrosoftazure size={40} className="text-gray-500 group-hover:text-[#008AD7] transition duration-300" /> },
    { name: 'Git', icon: <FaGitAlt size={40} className="text-gray-500 group-hover:text-[#F05033] transition duration-300" /> },
    { name: 'Linux', icon: <FaLinux size={40} className="text-gray-500 group-hover:text-[#FFD100] transition duration-300" /> },
     
    
    ];
    return (
  
    <div className="flex flex-col items-center justify-center pb-7">
      <div className='container mx-auto'>
        <h1 className="text-center p-4 text-4xl font-bold">My Technical Skills</h1>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>
            {techStackArr.map((tech, index) => (
              <div key={index} className='flex flex-col items-center p-4 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 group'>
                <span className="text-gray-500 group-hover:text-current transition duration-300">{tech.icon}</span>
                <span className="mt-2 text-center">{tech.name}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
    
    );
}

export default Skills

// return (
//     <section id="skills" className="bg-gray-100 py-10">
//         <div className="container mx-auto">
//             <h1 className="text-center text-4xl font-bold mb-6">My Skills</h1>
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//                 {techStack.map((tech, index) => (
//                     <div key={index} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
//                         {tech.icon}
//                         <span className="mt-2 text-center">{tech.name}</span>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     </section>
// );