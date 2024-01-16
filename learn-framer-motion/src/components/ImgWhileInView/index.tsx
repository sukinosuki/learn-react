import { motion } from 'framer-motion';
import React from 'react'
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
const ImgWhileInView = () => {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>

    <motion.div
        whileInView={{ opacity: 1, y:0,scale: 1, transition: { duration: 0.3 } }}
        initial={{ opacity: 0, scale: 0.3,y:10 }}
        onViewportEnter={enter=>{
        console.log('ImgWhileInView enter ', enter);
        }}
        onViewportLeave={enter=>{
        console.log('ImgWhileInView leave ', enter);

        }}
  >
    <a href="https://vitejs.dev" target="_blank">
      <img src={viteLogo} className="logo" alt="Vite logo" />
    </a>
    <a href="https://react.dev" target="_blank">
      <img src={reactLogo} className="logo react" alt="React logo" />
    </a>
  </motion.div>
  </div>

  )
}

export default ImgWhileInView