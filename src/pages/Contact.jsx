import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

export default function Contact() {
    return (
        <div className="w-full px-10 pb-12 flex flex-col gap-6 sm:gap-8 items-center">
            <h2 className="text-2xl font-bold md:text-3xl text-purple-700 mb-8 border-b-4 border-purple-500 pb-2">
                Contact Me
            </h2>
            <div className="px-20 sm:px-40 md:px-50 py-10 md:py-20 text-sm md:text-md flex flex-col items-center bg-purple-50 rounded-md max-w-xl md:max-w-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 border-purple-700">
                <h4 className=" text-xl md:text-2xl font-semibold text-gray-900 mb-4 md:mb-6">Dhrupal Zaru</h4>
                <p className="text-sm md:text-md font-semibold text-gray-600 mb-2">📞 9725061987</p>
                <p className="text-sm md:text-md font-semibold text-gray-600"> 📧 zarudhrupal2003@gmail.com</p>

                <div className="flex gap-4 px-5 pt-6 md:pt-8 text-lg">
                    <button onClick={() => window.open('https://www.linkedin.com/in/dhrupal-zaru-956141284/')}
                        className="bg-purple-500 p-2 rounded-full text-purple-50 hover:bg-purple-700 cursor-pointer ">
                        <FaLinkedinIn />
                    </button>
                    <button onClick={() => window.open('https://github.com/Dhrupal-Zaru')}
                        className="bg-purple-500 p-2 rounded-full text-purple-50 hover:bg-purple-700 cursor-pointer">
                        <FiGithub />
                    </button>
                </div>
            </div>
        </div>
    )
}
