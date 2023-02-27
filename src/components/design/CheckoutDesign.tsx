import React from 'react';
import Link from 'next/link';

const CheckoutDesign = () => {
  return (
    <div className="checkout-design-container justify-content-between mt-5">
      <div>
        <button className="d-flex align-items-center gap-5 checkout-btn" type="button">
          <Link href="/dashboard/design/design">
            Generate mockup
          </Link>
        </button>
      </div>
      <div className="checkout-details d-flex align-items-center">
        <span>
          $45.98
        </span>
        <button className="d-flex align-items-center gap-2 checkout-btn ml-4" type="button">
          <Link href="/dashboard/design/design">
            Checkout
          </Link>
        </button>
        <img src="/svg/cart.svg" alt="" />
      </div>
    </div>
  );
};

export default CheckoutDesign;
