import React from 'react'
import LineGradient from '../components/LineGradient'
import { motion } from 'framer-motion'

import img01 from '../assets/project-1.jpeg'
import img02 from '../assets/project-2.jpeg'
import img03 from '../assets/project-3.jpeg'
import img04 from '../assets/project-4.jpeg'
import img05 from '../assets/project-5.jpeg'
import img06 from '../assets/project-6.jpeg'
import img07 from '../assets/project-7.jpeg'

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    },
}

const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }

}

const Project = ({title, image }) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`
    const projectTitle = title.split(" ").join("-").toLowerCase()

    return (
        <motion.div variants={projectVariant} className='relative'>
            <div className={overlayStyles}>
                <p className="text-2xl font-playfair">{title}</p>
                <p className='mt-7'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi earum iste voluptates.
                </p>
            </div>
            <img src={image} alt={projectTitle} />
        </motion.div>
    )
}

const Projects = () => {
  return (
    <section className='h-full pt-48 pb-48' id='projects'>
        {/* HEADINGS */}
        <motion.div        
                className='md:w-2/4 mx-auto text-center mt-20'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: -50 },
                  visible: { opacity: 1, y: 0 }
                }}
            >
                <div>
                    <p className="font-playfair font-semibold text-4xl">
                        <span className='text-red'>PRO</span>JECTS
                    </p>
                </div>
                <div className='flex justify-center mt-5'>
                    <LineGradient width="w-1/3" />
                </div>
                <p className="mt-10 mb-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam veritatis soluta tempora nam quia, nostrum labore consequuntur!
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
            </motion.div>

            {/* PROJECTS */}
            <div className="flex justify-center">
                <motion.div
                    className='sm:grid sm:grid-cols-3'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={container}
                >
                    {/* ROW 01 */}
                    <div
                        className='flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'
                    >
                        Beatiful User Interfaces.
                    </div>   

                    <Project title="Project 1" image={img01} />
                    <Project title="Project 2" image={img02} />

                    {/* ROW 02 */}
                    <Project title="Project 3" image={img03} />
                    <Project title="Project 4" image={img04} />
                    <Project title="Project 5" image={img05} />


                    {/* ROW 03 */}
                    <Project title="Project 6" image={img06} />
                    <Project title="Project 7" image={img07} />

                    <div
                        className='flex justify-center text-center items-center p-10 bg-blue max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'
                    >
                        SMOOTH USER EXPERIENCE.
                    </div>

                </motion.div>
            </div>
    </section>
  )
}

export default Projects