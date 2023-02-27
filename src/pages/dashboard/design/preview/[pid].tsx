import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import routes from '../../../../routes';
import cartQueries from '../../../../services/queries/cart';
import queries from '../../../../services/queries/product';
import { Button, DashboardHeader } from '../../../../components';
import style from '../preview.module.css';

interface QueryProps {
  pid?: string;
}

const Preview = () => {
  const router = useRouter();
  const { pid }: QueryProps = router.query;
  const { data } = queries.readOne(pid);
  const { mutate, isLoading } = cartQueries.create();
  const submit = () => {
    const postData = {
      quantity: 1,
      product: pid,
    };
    mutate(postData);
  };
  return (
    <div>
      <DashboardHeader title="Design" />
      <div className={style.content}>
        {/* <div className={style.nav}>Navbar</div> */}
        <div className={style.imageWrapper}>
          <div className={style.leftImageContent}>
            <Image src="/images/previewImgBig.png" width={863} height={608} alt="design img" />
          </div>
          <div className={style.rightImageContent}>
            {new Array(5).fill(0).map((_, index) => (
              <Image key={index} src="/images/previewImgSmall.png" width={118} height={112} />
            ))}
          </div>
        </div>
        <div className={style.btnContainer}>
          <p className={style.price}>₦{data?.price || data?.product.price}</p>
          <div className={style.actionBtn}>
            <Link href={routes.dashboard.myBuzz.path}>
              <a href={routes.dashboard.myBuzz.path}>
                <button type="button" className={style.backBtn}>
                  Back
                </button>
              </a>
            </Link>
            <button type="button" className={style.marketBtn}>
              Share to Marketplace
            </button>
            {/* <button type="button" className={style.checkout} onClick={submit}>
              Add to cart
            </button> */}
            <Button
              title="Add to cart"
              loading={isLoading}
              onClick={submit}
              className={style.checkout}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
