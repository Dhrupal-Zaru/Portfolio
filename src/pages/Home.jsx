import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const skills = ["Html", "CSS", "JS", "React JS", "Tailwind Css", "Node js", "MongoDB", "Mysql"];

export default function Home() {
    return (
        <div className="mx-8 md:mx-25 px-10 md:px-25 p-10 flex flex-col md:flex-row items-center justify-between w-full">
            <div className="px-6 py-4 flex-1">
                <h1 className="text-3xl md:text-5xl text-purple-700 mb-3 font-bold tracking-tighter">Hii, I'm Dhrupal</h1>
                <h3 className="text-xl sm:text-2xl text-gray-600 mb-7 font-semibold tracking-tighter">Jr Software Developer</h3>
                <div className="text-sm font-semibold mb-5 flex flex-wrap gap-3">
                    {skills.map((skill) => (<p key={skill} className="bg-purple-100 text-purple-700 rounded-full px-3 py-2">{skill}</p>))}
                </div>
                <div className="flex gap-4 pb-6 text-sm">
                    <button onClick={() => window.open('https://www.linkedin.com/in/dhrupal-zaru-956141284/')}
                        className="bg-purple-500 p-2 rounded-full text-purple-50 hover:bg-purple-700 cursor-pointer ">
                        <FaLinkedinIn />
                    </button>
                    <button onClick={() => window.open('https://github.com/Dhrupal-Zaru')}
                        className="bg-purple-500 p-2 rounded-full text-purple-50 hover:bg-purple-700 cursor-pointer">
                        <FiGithub />
                    </button>
                </div>
                <button className="px-4 py-2 text-purple-100 bg-purple-600 hover:bg-purple-800 rounded-full font-semibold transition duration-300 cursor-pointer"
                    onClick={() => window.open('/cv.pdf')}>
                    View Resume
                </button>
            </div>
            <div className="flex-1 flex justify-center p-8">
                <img src="/profile.jpg" alt="Dhrupal Portfolio Profile" className="w-64 h-64 mr-20 md:mr-30 rounded-full object-cover shadow-lg border-4 border-purple-200" />
            </div>
        </div>
    )
}
