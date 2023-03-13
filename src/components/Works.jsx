import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { style } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          My Work
        </p>
        <h2 className={styles.sectionHeadText}>
          Projects.
        </h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p 
          variants={fadeIn("","",0.1,1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading=[30px]'
        >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Vitae itaque quas, incidunt quos distinctio delectus ipsam amet officiis,
        quis corporis obcaecati eveniet optio enim rem quidem ut accusamus officia eius!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Eligendi veritatis qui corrupti odio fuga exercitationem minus deserunt ex incidunt voluptatum voluptatem nam recusandae,
        nemo consectetur molestiae? Repudiandae corporis modi unde.
        </motion.p>
      </div>
    </>
  )
}

export default SectionWrapper(Works, "");