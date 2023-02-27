import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import routes from '../routes';
import ANIMATION from '../utils/framerMotion';

interface IProps {
  children: ReactNode;
  title: string;
  graphicsContent?: ReactNode;
}

const Auth = (props: IProps) => {
  const { children, title, graphicsContent } = props;

  return (
    <div>
      <div className="buzzz-auth-layout-container d-flex">
        <div className="content flex-fill px-3 scrollbar">
          <div className="content-width">
            <div className="d-flex justify-content-center">
              <motion.div layoutId="app_logo">
                <Link href={routes.home.path}>
                  <a href={routes.home.path}>
                    <img src="/svg/logo.svg" alt="logo" />
                  </a>
                </Link>
              </motion.div>
            </div>

            <div className="d-flex justify-content-center my-4">
              <h3 className="title">{title}</h3>
            </div>

            <div className="form-content">{children}</div>
          </div>
        </div>

        <div className="graphics flex-fill px-3 d-none d-lg-block">
          <div className="graphics-content d-flex justify-content-center align-items-center">
            <motion.div
              initial="offscreen"
              transition={{
                duration: 0.5,
                type: 'spring',
              }}
              animate="onscreen"
              variants={ANIMATION.scaleVariant}
            >
              {graphicsContent}
            </motion.div>
          </div>
          <div className="img">
            <img src="/svg/auth_graphics.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
