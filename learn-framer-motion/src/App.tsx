import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import Reveal from "./components/Reveal";
import ImgWhileInView from "./components/ImgWhileInView";

const line1 = 'Time to render our text. We first need a parent element'


function App() {
  const [count, setCount] = useState(0);

  const [show, setShow] = useState(true);
  const constrainsRef = useRef(null);
  const { scrollYProgress } = useScroll();
  console.log("scrollYProgress ", scrollYProgress);
  const scale = useTransform(scrollYProgress, [0, 2], [1, 2])
  const left = useTransform(scrollYProgress, [0, 1], [0, 200]);
  console.log("scale ", scale);

  const x = useMotionValue(0);
  const xInput = [-100, 0, 100];
  const opacity = useTransform(x, xInput, [0, 1, 0]);
  const background = useTransform(x, xInput, [
    "linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)",
    "linear-gradient(180deg, #7700ff 0%, rgb(68, 0, 255) 100%)",
    "linear-gradient(180deg, rgb(230, 255, 0) 0%, rgb(3, 209, 0) 100%)"
  ]);
  console.log("x ", x);
  console.log("opacity ", opacity);

  return (
    <div>

<Reveal>
  <h2>Hanami</h2>
</Reveal>
        <motion.div
        variants={{
          hidden: {
            opacity: 1,
          },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        {line1.split('').map((char, index) => (
          <motion.span key={index} variants={{
            hidden: {
              opacity: 0,
              y: 50,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                //   delay: 5,
              },
            },
          }}>
            {char}
          </motion.span>
        ))}
      </motion.div>

      <motion.div
        drag
        style={{ x, opacity, width: 100, height: 100, background }}
        dragConstraints={{left:0,right:0}}
      />
      <Reveal>
        <h2>ahanaana</h2>
      </Reveal>

      <motion.div
        whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.3 } }}
        initial={{ opacity: 0, scale: 0.3 }}
        onViewportEnter={enter=>{
          console.log('img enter ', enter);
        }}
        onViewportLeave={enter=>{
          console.log('img leave ', enter);

        }}
      >
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </motion.div>

      <AnimatePresence>
        {show && (
          <motion.div
            layout="position"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, scale: 0.3, transition: { duration: 2 } }}
            transition={{
              type: "spring",
              stiffness: 1000,
              damping: 40,
              duration: 5000,
            }}
          >
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </motion.div>
        )}

      </AnimatePresence>
      <motion.button
        layout
        style={{ width: 100, height: 100 }}
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{ scale: 0.8, rotate: -90, borderRadius: "50%" }}
        onClick={() => setShow(!show)}
      >
        toggle show
      </motion.button>


      <motion.div
        ref={constrainsRef}
        style={{
          background: "orange",
          overflow: "hidden",
          color: "white",
          height: 200,
          width: 200,
        }}
      >
        <motion.h1
          style={{
            margin: 0,
            fontSize: 20,
            background: "green",
            display: "inline-block",
          }}
          drag
          dragConstraints={constrainsRef}
        >
          Vite + React
        </motion.h1>
      </motion.div>

      <motion.div
        style={{ background: "orange", marginTop: 20, scale }}
        className="card"
      >
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </motion.div>

      <motion.ul
        initial="hidden"
        animate="show"
        style={{ background: "orange", color: "white" }}
        variants={{
          hidden: {
            opacity: 0,
            transition: {
              when: "afterChildren",
            },
          },
          show: {
            opacity: 1,
            transition: {
              duration: 2,
              staggerChildren: 0.3,
              // delayChildren: 1,
              // staggerDirection: -1,
            },
          },
        }}
      >
        {new Array(10).fill("aa").map((item) => (
          <motion.li
            key={item}
            variants={{
              hidden: { x: -10, opacity: 0 },
              show: {
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.3,
                  // type:'tween'
                  // repeat: Infinity,
                  // repeatType: "reverse",
                },
              },
            }}
          >
            hanami-{item}
          </motion.li>
        ))}
      </motion.ul>

      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          // delay: 0.5,
          ease: [1, 0.21, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
      />
      <motion.div
        className="box"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          transition:{
            repeat:Infinity,
            repeatDelay:2,
            duration: 2
          }
        }}
      />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>


<ImgWhileInView></ImgWhileInView>
    </div>
  );
}

export default App;
