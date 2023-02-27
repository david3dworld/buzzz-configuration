import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Accordion } from 'react-bootstrap';
import { footerLinksArray } from '../../utils/static';
import routes from '../../routes';

const footerSocialLinksArray = [
  {
    id: 1,
    link: 'https://twitter.com/yourbuzzzapp?s=20&t=u2bSxV_xa_XNTcUFVc4otQ',
    icon: '/svg/footer_facebook.svg',
  },
  {
    id: 2,
    link: 'https://twitter.com/yourbuzzzapp?s=20&t=u2bSxV_xa_XNTcUFVc4otQ',
    icon: '/svg/footer_twitter.svg',
  },
  {
    id: 3,
    link: 'https://instagram.com/yourbuzzzapp?igshid=YmMyMTA2M2Y=',
    icon: '/svg/footer_instagram.svg',
  },
];

const noNews = [routes.contact.path, routes.contact.contact.path, routes.resources.path];

const AppMobileFooter = () => {
  return (
    <div
      style={{ flex: 1 }}
      className="footer-mobile-top d-lg-flex d-lg-block d-lg-none justify-content-center gap-3"
    >
      {footerLinksArray.map((value, index) => (
        <Accordion key={value.id}>
          <Accordion.Item eventKey="0">
            <ul className="px-3">
              <Accordion.Header className="footer-header" key={index}>
                {value.header}
              </Accordion.Header>
              {value.links.map((link, key) => (
                <a key={key} href={link.a}>
                  <Accordion.Body>
                    <li>{link.title}</li>
                  </Accordion.Body>
                </a>
              ))}
            </ul>
          </Accordion.Item>
        </Accordion>
      ))}
    </div>
  );
};

const AppFooter = () => {
  const router = useRouter();
  return (
    <Fragment>
      {noNews.includes(router.pathname) && (
        <div className="buzzz-subscribe-con">
          <div className="app-container">
            <div className="content">
              <h2>Subscribe to our mailing list</h2>
              <div className="mailing_input">
                <div className="mailing_input_con">
                  <input type="text" placeholder="Email address" name="email" />
                </div>
              </div>
              <div className="btn-con d-flex justify-content-center align-items-center">
                <button className="curved-btn" type="button">
                  Subscribe now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <footer className="footer-con pt-4 pb-1">
        <div className="app-container py-5">
          <div className="d-md-flex d-sm-block" style={{ gap: '8rem' }}>
            <div className="icon-con">
              <img src="svg/logo_prime.svg" alt="logo" />
              <p className="my-3">
                Join the Buzzz community in transforming consumers into creators.
              </p>
              <div className="d-flex gap-3">
                {footerSocialLinksArray.map((item, i) => (
                  <Link href={item.link} key={i}>
                    <a key={item.id} href={item.link} target="_blank" rel="noreferrer">
                      <img src={item.icon} alt="social" />
                    </a>
                  </Link>
                ))}
              </div>
            </div>
            <div
              style={{ flex: 1 }}
              className="footer-top d-lg-flex d-none d-lg-block justify-content-center gap-3"
            >
              {footerLinksArray.map((value, index) => (
                <ul key={index} className="px-3">
                  <h1 key={index}>{value.header}</h1>
                  {value.links.map((link, key) => (
                    <a key={key} href={link.a}>
                      <li key={key}>{link.title}</li>
                    </a>
                  ))}
                </ul>
              ))}
            </div>
            <AppMobileFooter />
          </div>
          <div className="footer-center py-4">
            <div className="d-md-flex d-sm-block justify-content-center" style={{ gap: '8rem' }}>
              {/* <div className="icon-con2" style={{ visibility: 'hidden' }}>
                <img src="./svg/logo_prime.svg" alt="logo" />
                <p className="my-3">
                  Join the Buzzz community in transforming consumers into creators.
                </p>
                <div className="d-flex gap-3">
                  {footerSocialLinksArray.map((item) => (
                    <a key={item.id} href={item.link}>
                      <img src={item.icon} alt="social" />
                    </a>
                  ))}
                </div>
              </div> */}
              <div className="px-md-3 px-sm-0" style={{ flex: 1 }}>
                <div className="footer-bottom pt-4">
                  <h5>(c) Copyright 2022 Buzzz. All Rights Reserved</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default AppFooter;
