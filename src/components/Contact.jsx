import {motion} from "framer-motion"
export default Contact=>{
    return(
        <div className="border-b border-neutral-900 pb-20">
            <motion.h2 
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:0.5}}
            className="my-10 text-center text-4xl">Get In Touch</motion.h2>
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1}}
            className="text-center tracking-tighter">
                <p className="my-4">+91 8904690153</p>
                <a href="mailto:amogha0711@gmail.com" target="_blank">
                amogha0711@gmail.com</a>
            </motion.div>
        </div>
    )
}