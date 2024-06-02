import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "Photoshop" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Canva" },
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
              Hi, I am Mercy Sakka, a graduate of SMA Advent Tompaso in 2021. After completing my high school 
              education, I immediately continued my studies at Universitas Klabat, where I am currently pursuing 
              a Bachelors degree in the Faculty of Computer Science, majoring in Informatics. Now in my 6th 
              semester, I am passionate about delving deeper into the world of technology.
            </p>
            <br/>
            <p>
              During my time at Universitas Klabat, I have learned a lot about informatics, from programming 
              to data management. In addition to attending lectures, I am actively involved in various campus 
              activities related to technology, which have helped me develop teamwork and leadership skills. These 
              experiences have been invaluable for my personal growth and future career.
            </p>
            <br/>
            <p>
              Recently, I achieved a significant milestone by earning the Adobe Certification Professional. This 
              certification has strengthened my skills in using professional graphic design tools, adding value 
              to my expertise in the field of information technology. With the knowledge and skills I have acquired, 
              I am ready to face challenges in the tech world and contribute significantly to this field.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
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
