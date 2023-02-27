import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useActiveRoute } from '../../hooks';

interface IProps {
  isOpen: boolean;
  item: {
    id: number;
    name: string;
    route: string;
    subRoutes: {
      id: number;
      name: string;
      route: string;
    }[];
  };
  handleClick: () => void;
}

const SidebarAccordion = (props: IProps) => {
  const { item, isOpen, handleClick } = props;
  // const [isOpen, setIsOpen] = useState(false);
  const [isActive] = useActiveRoute();

  return (
    <div className="buzzz-sidebar-accordion-con">
      <button
        onClick={handleClick}
        className="btn w-100 d-flex justify-content-between align-items-center"
        type="button"
      >
        <p className={`${isActive(item.route)}`}>{item.name}</p>
        {' '}
        <img src={!isOpen ? '/svg/dashboard_plus.svg' : '/svg/dashboard_minus.svg'} alt="icon" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 1, height: 0 },
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            style={{ overflow: 'hidden' }}
            className="links-con"
          >
            <div className="py-3">
              {item.subRoutes.map((link) => (
                <div key={link.id} className="my-2">
                  <Link href={link.route}>
                    <a href={link.route} className={`${isActive(link.route)}`}>
                      {link.name}
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SidebarAccordion;
