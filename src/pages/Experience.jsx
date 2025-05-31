
import { FaBuildingUser } from "react-icons/fa6";

export default function Experience() {
    return (
        <div className="w-full px-10 sm:py-12 flex flex-col gap-6 sm:gap-8 items-center">
            <h2 className="text-2xl font-bold md:text-3xl text-purple-700 mb-8 border-b-4 border-purple-500 pb-2">Experience</h2>
            <div className="mx-8 sm:mx-12">
                <div className="grid sm:grid-cols-[auto_1fr] gap-6 items-center p-8 sm:p-10 bg-purple-50 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                    <span className="h-20 w-20 text-2xl sm:h-30 sm:w-30 sm:text-4xl flex items-center justify-center bg-purple-300 rounded-full text-purple-800"><FaBuildingUser /></span>
                    <div>
                        <h2 className="pb-3 text-xl font-bold text-purple-800">ZenDevX Solutions Pvt. Ltd</h2>
                        <p className="text-sm sm:text-md mb-1">Jr Software Developer</p>
                        <p className="text-xs sm:text-sm text-gray-500 mb-4">Sept 2023 - Present</p>
                        <div className="text-justify space-y-2 text-sm sm:text-md">
                            <p>
                                Developed and debugged ERP web applications following Agile methodologies.
                            </p>
                            <p>
                                Optimized a code generation tool for high-quality, cross-tech stack output through close collaboration with senior developers and clients.
                            </p>
                            <p>
                                Technologies: <strong>React.js, Node.js, Express.js, MongoDB, MYSQL, Postman, Git</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
