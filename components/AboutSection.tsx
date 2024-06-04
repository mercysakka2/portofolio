import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "SQL" },
  { skill: "JavaScript" },
  { skill: "PHP" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Postman" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
        <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">Get to know me!</h1>
            <p>
              {" "}
              I am an active student majoring in Informatics, Computer Science at Universitas Klabat. I have a 
              strong enthusiasm for web development and have gained experience building websites during my 
              studies using ReactJS and MySQL. Have communication skills where when I work, I work with my team 
              so that we achieve our gooals. Time managment which while studying can set which time to study and 
              which time to participate in organizational activities.
            </p>
            <br/>
            <h3 className="text-center text-1xl font-bold mb-3 md:text-left">Education</h3>
            <p>
              Universitas Klabat - Manado <span className="font-semibold text-teal-600">2021 - Present{" "}
            </span>
            </p>
            <p>
              SMA Advent Tompaso - Tompaso <span className="font-semibold text-teal-600">2019 - 2021{" "}
            </span>
            </p>
            <p>
              SMP Advent Tompaso - Tompaso <span className="font-semibold text-teal-600">2017 - 2019{" "}
            </span>
            </p>
            <br/>
            <h3 className="text-center text-1xl font-bold mb-3 md:text-left">Organization Experience</h3>
            <p>
              UNKLAB Student Association - Airmadidi <span className="font-semibold text-teal-600">February 2024 - June 2024{" "}
            </span>
            </p>
            <p>
              Voice of Computer Science - Airmadidi <span className="font-semibold text-teal-600">September 2022 - Present{" "}
            </span>
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
