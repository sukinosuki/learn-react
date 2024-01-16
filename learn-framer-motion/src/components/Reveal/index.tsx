'use client'

import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
import ImgWhileInView from '../ImgWhileInView'
type TProps = {
  children: React.ReactElement
  width?: string | number
}

const Reveal: React.FC<TProps> = (props) => {
  const { children, width = 'fit-content' } = props
  const ref = useRef()
  const isInView = useInView(ref, { once: false })
  const mainControl = useAnimation()
  const slideControl = useAnimation()

  useEffect(() => {
    console.log('isInView ', isInView)
    if (isInView) {
      // mainControl.start('visible')
      //   slideControl.start('visible')
    }
  }, [isInView])

  return (
    // <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
    <div  ref={ref} style={{ position: 'relative', overflow:'hidden'  }}>

      <ImgWhileInView></ImgWhileInView>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y:'100%',
            // scale:0.1
          },
          visible: {
            opacity: 1,
            y: 0,
            // scale:1
          },
        }}
        initial="hidden"
        // animate="visible"
        // animate={mainControl}
        // whileInView={{ opacity: 1, y: 0 }}
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        onViewportEnter={enter=>{
          console.log('enter ', enter);
        }}
        onViewportLeave={enter=>{
          console.log('leave ', enter);

        }}
      >
        {children}
      </motion.div>

      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: '100%' },
        }}
        initial="hidden"
        // animate={slideControl}
        whileInView="visible"
        transition={{
          duration: 0.5,
          ease: 'easeIn',
        }}
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          background: 'orange',
          zIndex: 20,
        }}
      ></motion.div>
    </div>
  )
}

export default Reveal
