import {RiReactjsLine} from 'react-icons/ri'
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { TbBrandMysql } from "react-icons/tb";
import {motion} from 'framer-motion'
const iconVariants=(duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:'linear',
            repeat:Infinity,
            repeatType:"reverse"
        }
    }
})
export default Tech=>{
    return(
        <div className="border-b border-neutral-800 pb-24">
            <motion.h2 whileInView={{opacity:1,y:0}}
                initial={{opacity:0,y:-100}}
                transition={{duration:1.5}} className="my-24 text-center text-2xl">Technologies
                <motion.div 
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:-100}}
                transition={{duration:1.5}}className="flex flex-wrap items-center justify-center gap-4 py-10">
                    <motion.div
                    whileHover={{ scale: 1.1 }}
                    onHoverStart={e => {}}
                    onHoverEnd={e => {}} 
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                        <RiReactjsLine className='text-7xl text-cyan-400'/>
                    </motion.div>
                    <motion.div
                    whileHover={{ scale: 1.1 }}
                    onHoverStart={e => {}}
                    onHoverEnd={e => {}} 
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiMongodb className='text-7xl text-green-500'/>
                    </motion.div>
                    <motion.div
                    whileHover={{ scale: 1.1 }}
                    onHoverStart={e => {}}
                    onHoverEnd={e => {}} 
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                        <FaNodeJs  className='text-7xl text-green-500'/>
                    </motion.div>
                    <motion.div
                    whileHover={{ scale: 1.1 }}
                    onHoverStart={e => {}}
                    onHoverEnd={e => {}} 
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                        <SiExpress  className='text-7xl text-green-300'/>
                    </motion.div>
                    <motion.div 
                    whileHover={{ scale: 1.1 }}
                    onHoverStart={e => {}}
                    onHoverEnd={e => {}} 
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                        <FaBootstrap className='text-7xl text-blue-400'/>
                    </motion.div>
                    <motion.div 
                    whileHover={{ scale: 1.1 }}
                    onHoverStart={e => {}}
                    onHoverEnd={e => {}} 
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandMysql className='text-7xl text-blue-400'/>
                    </motion.div>
                </motion.div>
            </motion.h2>
            </div>
    )
}