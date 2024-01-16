import { motion, Variants } from 'framer-motion'
import * as React from 'react'
import './index.css'
type TProps = {
    children: React.ReactNode
}

const Divvariants:Variants = {
    open:{
        opacity:1
    }
}
// 
const Reveal:React.FC<TProps> = (props) => {
    const {children} = props

  return (
    <div className='layout'>
        <motion.div className='placeholder'
        initial={{
            x: 0
        }}
        animate={{
            x: '100%',
            transition:{
                duration:0.7,
                delay:0.3,

            }
        }}>
        </motion.div>
        <motion.div
        initial={{
            y:'100%',
            opacity:0
        }}
        animate={{
            y:0,
            opacity:1,
            transition:{
                delay:0.5,
                duration:0.5,
                damping: 100
            }
        }}>

            {children}
        </motion.div>
    </div>
  )
}

export default Reveal