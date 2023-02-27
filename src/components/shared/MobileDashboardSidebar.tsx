import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { DashboardSidebar } from '..';
import { useOutsideClick } from '../../hooks';

interface IProps {
  show: boolean;
  handleClose: () => void;
}

const MobileDashboardSidebar = (props: IProps) => {
  const { show, handleClose } = props;
  const router = useRouter();
  const callback = () => {
    handleClose();
  };

  const [sideRef]: any = useOutsideClick(callback);

  useEffect(() => {
    handleClose();
  }, [router.pathname]);

  return (
    <div>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ display: 'none', opacity: 0 }}
            animate={{ display: 'block', opacity: 1 }}
            exit={{ display: 'none', opacity: 0 }}
            className="mobile-dashboard-sidebar-container"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '240px' }}
              exit={{ width: 0 }}
              transition={{
                delay: 0.1,
              }}
              ref={sideRef}
              className="content"
            >
              <DashboardSidebar />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileDashboardSidebar;
