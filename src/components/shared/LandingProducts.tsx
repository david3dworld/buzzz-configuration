import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ANIMATION from '../../utils/framerMotion';
import { LandingProductsType } from '../../utils/static';

interface IProps {
  value: LandingProductsType[0];
}

const LandingProducts = ({ value }: IProps) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <motion.div
      className="landing_hero_prod"
      variants={ANIMATION.prodConVariant}
      animate={isHover ? 'hover' : 'rest'}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Image src={value.img} width={350} height={340} alt="landing img" />
      {/* {value.coming && <p>Coming soon</p>} */}
      <motion.h1 variants={ANIMATION.prodHoverVariant} animate={isHover ? 'hover' : 'rest'}>
        {value.name}
      </motion.h1>
    </motion.div>
  );
};

export default LandingProducts;
