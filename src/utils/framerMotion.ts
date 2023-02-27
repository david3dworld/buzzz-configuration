import { Variants } from 'framer-motion';

const homeInViewVariant: Variants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      ease: 'easeIn',
      duration: 0.6,
      staggerChildren: 1,
    },
  },
};

const slideInVariant: Variants = {
  initial: {
    y: 150,
    opacity: 0,
  },

  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: 'easeIn',
      duration: 0.6,
    },
  },
};

const slideInVariantCon: Variants = {
  initial: {
    y: 150,
    opacity: 0,
  },

  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: 'easeIn',
      duration: 0.6,
      // delay: 0.2,
      staggerChildren: 0.3,
    },
  },
};

const cardHoverVariant: Variants = {
  rest: {
    boxShadow: 'none',
  },

  hover: {
    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)',
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
};

const cardImageHoverVariant: Variants = {
  rest: {
    scale: 1,
  },

  hover: {
    scale: 1.2,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
};

const scaleVariant: Variants = {
  offscreen: {
    scale: 0.3,
    opacity: 0,
    y: 100,
  },
  onscreen: {
    scale: 1,
    opacity: 1,
    y: 0,
  },
};

const fadeUpVariant: Variants = {
  offscreen: {
    // scale: 0.8,
    opacity: 0,
    y: 100,
    rotateX: '-40deg',
  },
  onscreen: {
    // scale: 1,
    opacity: 1,
    y: 0,
    rotateX: '0deg',
    transition: {
      duration: 0.61,
    },
  },
};

const fadeDownVariant: Variants = {
  offscreen: {
    // scale: 0.8,
    opacity: 0,
    y: -100,
    rotateX: '40deg',
  },
  onscreen: {
    // scale: 1,
    opacity: 1,
    y: 0,
    rotateX: '0deg',
    transition: {
      duration: 1,
    },
  },
};

const prodHoverVariant: Variants = {
  rest: {
    opacity: 0,
  },

  hover: {
    opacity: 1,
    transition: {
      duration: 0.14,
      ease: 'easeIn',
    },
  },
};

const prodConVariant: Variants = {
  rest: {
    translateY: 0,
  },

  hover: {
    translateY: -50,
    transition: {
      duration: 0.44,
      ease: 'easeInOut',
    },
  },
};

const ANIMATION = {
  prodHoverVariant,
  homeInViewVariant,
  slideInVariant,
  slideInVariantCon,
  cardHoverVariant,
  cardImageHoverVariant,
  scaleVariant,
  fadeUpVariant,
  prodConVariant,
  fadeDownVariant,
};

export default ANIMATION;
