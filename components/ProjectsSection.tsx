import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
      name: "Roll a Ball",
      description:
        "Roll a Ball is a simple game often used as an introductory project in game development using Unity. This project is frequently assigned to students in a Computer Graphics course or introductory game development class because it covers many basic concepts in game creation. Roll a Ball is a game where the player controls a ball within an arena, with the goal of collecting a number of objects (such as small cubes or coins) scattered around the area. The player moves the ball using keyboard controls or other input devices. The game ends and the player wins when all the objects are collected.",
      image: "/rollaball.png",
      github: "https://github.com", // Added placeholder link
      link: "https://youtu.be/BbIuOmI4ZHs" // Added placeholder link
  },
  {
      name: "Application Information UK",
      description: "Designing a user interface (UI) for an informational application for Universitas Klabat (UNKLAB) involves understanding the needs of the users and creating a layout that is both functional and aesthetically pleasing. This project is aimed at fulfilling the requirements for a Human-Computer Interaction (HCI) course using Figma, a popular UI/UX design tool. The Figma design for this project was created collaboratively with a group.",
      image: "/systeminfounklab.png",
      github: "https://github.com/appinfouk", // Added placeholder link
      link: "https://www.figma.com/file/TnKP4lJ7lWd0Qr7Dd0c6PR/Mobile-app-UI?type=design&node-id=0%3A1&mode=design&t=lvNEPSXwybPp7yAX-1" // Added placeholder link
  },
  {
      name: "Chatbot",
      description: "Building a chatbot that can help users find recipes and step-by-step guides for cooking typical North Sulawesi food. This chatbot is to ask various recipes, how to make them, and follow the cooking steps presented in an easy-to-understand language, namely Indonesian.",
      image: "/chatbot.png",
      github: "https://github.com/mercysakka2/chatbot-FE.git", // Added placeholder link
      link: "https://www.chatbot.com" // Added placeholder link
  },
  {
    name: "UKantin",
    description: "This desktop application is designed specifically for a single user, the admin, who functions as the cashier at the UNKLAB Canteen. The application will allow the admin to manage food and beverage sales transactions, organize inventory data, and generate financial reports. The system uses an SQL database for CRUD (Create, Read, Update, Delete) operations to ensure data is well-organized and efficiently managed. This project was created collaboratively with a group.",
    image: "/ukantin.png",
    github: "https://github.com/mercysakka2/app-desktop-VP.git", // Added placeholder link
    link: "https://drive.google.com/file/d/1pFOyxD6XMN_1EwOFuSNA0NtJm6HdGhma/view?usp=sharing" // Added placeholder link
},
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
