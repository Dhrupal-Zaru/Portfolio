import { FaHotel } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { TfiWorld } from "react-icons/tfi";
import { GiFullPizza } from "react-icons/gi";
import { MdTravelExplore } from "react-icons/md";
import { LuSquareSplitHorizontal } from "react-icons/lu";
import { FaHospitalAlt } from "react-icons/fa";


// const theWildOasisTech = ["React JS", "Supabase", "TailwindCSS", "styled Components", "React Query", "Context API"];
// const pizzaTech = ["React JS", "React-Redux", "TailwindCSS", "React-Router-DOM", "Context API"];

const projects = [
    {
        icon: <FaHotel />,
        title: "The Wild Oasis",
        description:
            "A modern, hotel management system built to streamline and automate the core operations of a hotel. This comprehensive platform allows hotel staff and administrators to efficiently manage bookings, room availability (including cabins and luxury suites), guest check-ins and check-outs, and track guest details in real-time.",
        techStack: ["React JS", "Supabase", "TailwindCSS", "styled Components", "React Query", "Context API"],
        sourceLink: "https://github.com/Dhrupal-Zaru/The-Wild-Oasis",
        websiteLink: "https://the-wild-oasis-delta-jade.vercel.app/",
    },
    {
        icon: <GiFullPizza />,
        title: "Pizza Application",
        description:
            "A fully responsive and modern online pizza ordering web application built with React. The platform includes dynamic menu rendering based on real-time data, an interactive cart system that allows users to add or remove pizzas with instant feedback, and a seamless order tracking experience with real-time updates on order status. The project emphasizes clean UI design, efficient state management using Redux, and smooth user experience across all device sizes.",
        techStack: ["React JS", "React-Redux", "TailwindCSS", "React-Router-DOM", "Context API"],
        sourceLink: "https://github.com/Dhrupal-Zaru/Fast-React-Pizza",
        websiteLink: "https://fast-react-pizza-psi-fawn.vercel.app/",
    },
    {
        icon: <MdTravelExplore />,
        title: "Wirld Wise",
        description: "An interactive, map-based travel logging application that enables users to mark and record the places they have visited. The app offers a seamless experience for tracking journeys by allowing users to visually pin locations on a world map, add notes, and organize their travel history in a structured and engaging format. Designed with a focus on usability and responsiveness, WorldWise provides travelers with a digital journal to preserve memories and share experiences effortlessly.",
        techStack: ["React JS", "React-Router-DOM", "React-leaflet"],
        sourceLink: "https://github.com/Dhrupal-Zaru/Word-Wise",
        websiteLink: "",
    },
    {
        icon: <LuSquareSplitHorizontal />,
        title: "Eat And Split",
        description: "a user-friendly application designed to manage and track shared expenses among friends or groups. The app includes robust features such as friend management, easy bill splitting, and real-time payment tracking. Users can add friends, create group expenses, assign portions of a bill to specific individuals, and monitor who owes whom. The intuitive interface ensures transparency in financial interactions, making it ideal for roommates, travel buddies, or any group managing collective expenses.",
        techStack: ["React JS"],
        sourceLink: "https://github.com/Dhrupal-Zaru/Eat-N-Split",
        websiteLink: "https://eat-n-split-black.vercel.app/",
    },
    {
        icon: <LuSquareSplitHorizontal />,
        title: "Packing List App",
        description: "Developed a lightweight yet powerful React-based packing list application designed to assist users in organizing and preparing for their trips efficiently. The app allows users to add travel items, mark them as packed or unpacked, and automatically saves their list using browser local storage to ensure persistence across sessions.",
        techStack: ["React JS"],
        sourceLink: "https://github.com/Dhrupal-Zaru/Travel-List-App",
        websiteLink: "https://travel-list-app-omega.vercel.app/",
    },
    {
        icon: <FaHospitalAlt />,
        title: "Ortho Care",
        description: "Ortho care is One such program aimed to help patients to guide their path of orthopedic treatment . It provides tools for tracking healing, scheduling virtual medical visits, and creating custom, professionally advised physical therapy schedules.",
        techStack: ["Node.js", "Express", "MongoDB"],
        sourceLink: "https://github.com/Dhrupal-Zaru/Ortho-Care",
        websiteLink: "",
    },
];


export default function Projects() {
    return (
        <div className="w-full px-10 md:py-8 flex flex-col gap-4 sm:gap-8 items-center">
            <h2 className="text-2xl font-bold md:text-3xl text-purple-700 mb-4 border-b-4 border-purple-500 pb-2 ">Projects</h2>
            <div className="mx-8 sm:mx-12">
                {projects.map((project) => {
                    return (
                        <>
                            <div key={project.title} className="grid sm:grid-cols-[auto_1fr] gap-6 items-center mb-6 p-6 sm:p-8 bg-purple-50 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
                                <span className="h-15 w-15 text-2xl sm:h-20 sm:w-20 sm:text-3xl flex items-center justify-center bg-purple-300 rounded-full text-purple-800">{project.icon}</span>
                                <div>
                                    <h2 className="pb-3 text-xl font-bold text-purple-800">{project.title}</h2>
                                    <p className="text-xs sm:text-sm text-gray-500 mb-4">{project.description}</p>
                                    <div className="text-sm font-semibold flex flex-wrap gap-3">
                                        {project.techStack.map((skill) => (<p key={skill} className="bg-purple-100 text-purple-700 rounded-full px-3 py-2">{skill}</p>))}
                                    </div>
                                    <div className="flex gap-4 pt-6 md:pt-8 text-sm">
                                        <button onClick={() => window.open(project.sourceLink)}
                                            className="bg-purple-500 px-3 py-2 rounded-full text-purple-50 hover:bg-purple-700 cursor-pointer flex items-center gap-2">
                                            <span className="mt-1"><FiGithub /></span> Source
                                        </button>
                                        <button onClick={() => {
                                            if (project.websiteLink === '') {
                                                window.location.reload();
                                                return;
                                            }
                                            window.open(project.websiteLink);
                                        }}
                                            className="bg-purple-500 px-3 py-2 rounded-full text-purple-50 hover:bg-purple-700 cursor-pointer flex items-center gap-2">
                                            <span className="mt-1"><TfiWorld /></span> Website
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
                {/* <div className="grid sm:grid-cols-[auto_1fr] gap-6 items-center mb-6 p-6 sm:p-8 bg-purple-50 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
                    <span className="h-15 w-15 text-2xl sm:h-20 sm:w-20 sm:text-3xl flex items-center justify-center bg-purple-300 rounded-full text-purple-800"><FaHotel /></span>
                    <div>
                        <h2 className="pb-3 text-xl font-bold text-purple-800">The Wild Oasis</h2>
                        <p className="text-xs sm:text-sm text-gray-500 mb-4">A modern, hotel management system built to streamline and automate the core operations of a hotel. This comprehensive platform allows hotel staff and administrators to efficiently manage bookings, room availability (including cabins and luxury suites), guest check-ins and check-outs, and track guest details in real-time.</p>
                        <div className="text-sm font-semibold flex flex-wrap gap-3">
                            {theWildOasisTech.map((skill) => (<p key={skill} className="bg-purple-100 text-purple-700 rounded-full px-3 py-2">{skill}</p>))}
                        </div>
                        <div className="flex gap-4 pt-6 md:pt-8 text-sm">
                            <button onClick={() => window.open('https://github.com/Dhrupal-Zaru/The-Wild-Oasis')}
                                className="bg-purple-500 px-3 py-2 rounded-full text-purple-50 hover:bg-purple-700 cursor-pointer flex items-center gap-2">
                                <span className="mt-1"><FiGithub /></span> Source
                            </button>
                            <button onClick={() => window.open('https://the-wild-oasis-delta-jade.vercel.app/')}
                                className="bg-purple-500 px-3 py-2 rounded-full text-purple-50 hover:bg-purple-700 cursor-pointer flex items-center gap-2">
                                <span className="mt-1"><TfiWorld /></span> Website
                            </button>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>

    )
}
