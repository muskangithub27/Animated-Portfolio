import "./portfolio.scss"
import {useRef} from "react";
import {motion,useScroll,useSpring,useTransform} from "framer-motion";

const items = [
    {
        id:1,
        title:"React Commerce",
        img:"./public/react2.webp",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        id:2,
        title:"Next.js Blog",
        img:"./public/node2.jpg",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        id:3,
        title:"Vanilla JS App",
        img:"./public/js2.jpg",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        id:4,
        title:"Music App",
        img:"./public/musicapp2.jpg",
        desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
] ;
const Single = ({ item }) => {
    const ref = useRef();
  
    const { scrollYProgress } = useScroll({
      target: ref,
    });
  
    const y = useTransform(scrollYProgress, [0, 1], [-300,300]);
  
    return (
      <section >
        <div className="container">
          <div className="wrapper">
            <div className="imageContainer" ref={ref}>
              <img src={item.img} alt="" />
            </div>
            <motion.div className="textContainer" style={{y}}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <button>See Demo</button>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };
  
  const Portfolio = () => {
    const ref = useRef();
  
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["end end", "start start"],
    });
  
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
    });
  
    return (
      <div className="portfolio" ref={ref}>
        <div className="progress">
          <h1>Featured Works</h1>
          <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </div>
    );
  };
  
export default Portfolio;