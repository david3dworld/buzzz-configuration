/* eslint-disable jsx-a11y/control-has-associated-label */
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import React, { Fragment, useState } from 'react';
import { Button, GenderModal, PreviewQuantity, ProductList } from '../../components';
import { useCopyToClipboard } from '../../hooks';
import routes from '../../routes';
import queries from '../../services/queries/product';
import cartQueries from '../../services/queries/cart';
import config from '../../config';
import { getLocalStorge } from '../../services/helper';
import { useCartContext } from '../../context/CartContext';

interface QueryProps {
  pid?: string;
}

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const sizes = ['S', 'M', 'L', 'XL', '2XL', '3XL'];

const Preview = () => {
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(true);
  const [copyState, copyFunction, reset] = useCopyToClipboard();
  const router = useRouter();
  const { pid }: QueryProps = router.query;
  const { data } = queries.readOne(pid);
  const { mutate, isLoading } = cartQueries.create();
  const [activeColor, setActiveColor] = useState(colors[0]);
  const [activeSize, setActiveSize] = useState(sizes[0]);
  const { addCart } = useCartContext();

  const toggleGender = () => setShow(!show);

  const submit = () => {
    const isAuthenticated = getLocalStorge(config.isAuthenticated);
    const postData = {
      quantity,
      product: pid,
    };
    const localData = {
      product: { ...data, quantity },
      total: quantity * parseInt(data.price, 10),
      quantity,
    };
    if (!!isAuthenticated === false) {
      addCart(pid, localData);
      setTimeout(() => {
        router.push(routes.marketplace.path);
      }, 1000);
    } else {
      mutate(postData);
    }
  };

  return (
    <main className="preivew">
      <div className="preview_con">
        <div className="preview_img_con">
          <div className="preview_header">
            <div className="preview_back">
              <Link href={routes.marketplace.path}>
                <a href={routes.marketplace.path}>
                  <Image src="/svg/arrow-left.svg" width={24} height={24} alt="back" />
                </a>
              </Link>
            </div>
            <div className="preview_breadcrumbs">
              <span>Home</span>
              <span>/</span>
              <span>Male</span>
              <span>/</span>
              <span className="breadcumb_bold">{data?.name}</span>
            </div>
            <div className="preview_share">
              <button type="button">
                <Image src="/svg/share.svg" width={16} height={16} alt="share" />
                <span>Share</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  if (!pid) return;
                  copyFunction(pid);
                  reset();
                }}
              >
                <Image src="/svg/copy.svg" width={16} height={16} alt="share" />
                <span>{copyState ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>
          <div className="preview_body">
            <div className="preview_body_img">
              <div
                className="preview_body_img_main"
                // style={{ background: colors[selectedColourIndex] }}
              >
                <Image src="/images/preview_img1.png" width={598} height={735} alt="preview body" />
              </div>
              <div className="preview_body_img_aux">
                {[1, 2, 3, 4, 5, 6].map((_, i: number) => (
                  <Image
                    src="/images/preview_img1.png"
                    width={118}
                    height={112}
                    alt="preview body"
                    key={i}
                  />
                ))}
              </div>
              <div className="preview_body_img_aux_slide">
                <CarouselProvider
                  naturalSlideWidth={118}
                  naturalSlideHeight={112}
                  totalSlides={6}
                  visibleSlides={1}
                  isPlaying
                  infinite
                  interval={3000}
                >
                  <Slider className="carousel_slider">
                    {[1, 2, 3, 4, 5, 6].map((_, i: number) => (
                      <Slide index={i} className="carousel_slide" key={i}>
                        <Image
                          src="/images/preview_img1.png"
                          width={118}
                          height={112}
                          alt="preview body"
                          key={i}
                        />
                      </Slide>
                    ))}
                  </Slider>
                </CarouselProvider>
              </div>
            </div>
            <div className="preview_body_controls">
              <h1>{data?.name}</h1>
              <h3>₦{data?.price}</h3>
              <div className="preview_controls_quantity">
                <p>Select quantity</p>
                <PreviewQuantity
                  value={quantity}
                  increase={() => setQuantity((prev) => prev + 1)}
                  decrease={() => setQuantity((prev) => prev - 1)}
                />
              </div>
              <div className="preview_controls_colors">
                <h1>COLORS</h1>
                <div className="preview_controls_colors_con">
                  {colors.map((color: string, i: number) => (
                    <div
                      key={i}
                      className={`preview_controls_color ${
                        color === activeColor && 'active_color'
                      }`}
                    >
                      <button
                        style={{ backgroundColor: color }}
                        onClick={() => setActiveColor(color)}
                        type="button"
                      />
                    </div>
                    // <span style={{ backgroundColor: colors[i] }} key={i} />
                  ))}
                </div>
              </div>
              <div className="preview_controls_size">
                <h1>SIZES AVAILABLE</h1>
                <div className="preview_controls_size_con">
                  {sizes.map((size: string, i: number) => (
                    <Fragment key={i}>
                      <button
                        type="button"
                        style={{
                          backgroundColor: size === activeSize ? 'lightgray' : 'transparent',
                        }}
                        onClick={() => setActiveSize(size)}
                      >
                        {size}
                      </button>
                      <span>|</span>
                    </Fragment>
                  ))}
                </div>
              </div>
              <div className="preview_control_button">
                <Button title="Add to cart" loading={isLoading} onClick={submit} />
              </div>
            </div>
          </div>
        </div>
        <div className="preview_info_con">
          <h1>About Product</h1>
          <div className="preview_info_body">
            <h3>PRODUCT’S NAME</h3>
            <p>SOFT XX ROUNDECK</p>
          </div>
          <div className="preview_info_body">
            <h3>DESIGNER’S NAME</h3>
            <p>HAKEEM OLASUPO</p>
          </div>
          <div className="preview_info_body">
            <h3>INSPIRATION</h3>
            <p>garment flat. below the armhole flat measure the garment across the chest.</p>
          </div>
          <div className="preview_info_socials">
            <Image src="/svg/facebook.svg" width={30} height={30} alt="facebook" />
            <Image src="/svg/twitter.svg" width={30} height={30} alt="facebook" />
            <Image src="/svg/instagram.svg" width={30} height={30} alt="facebook" />
            <Image src="/svg/reddit.svg" width={30} height={30} alt="facebook" />
          </div>
        </div>

        <div>
          <h3 className="mb-4">Recommended Products</h3>

          <ProductList />
        </div>
      </div>
      <GenderModal show={show} onHide={toggleGender} closeModal={toggleGender} />
    </main>
  );
};

export default Preview;
