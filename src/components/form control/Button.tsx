import React, { Fragment } from 'react';
import Link from 'next/link';
import { RenderIf } from '..';

interface IProps {
  title: string;
  className?: string;
  loading?: boolean;
  href?: string;
  onClick?: any;
  bg?: string;
}

export default function SubmitButton(props: IProps) {
  const { title, className, loading, href, onClick, bg } = props;

  if (href) {
    return (
      <Link href={href}>
        <a
          style={{ backgroundColor: bg }}
          href={href}
          className={`btn btn-success w-100 curved-btn ${className}`}
        >
          {title}
        </a>
      </Link>
    );
  }

  const spinner = (
    <div className="text-center">
      <div
        className="spinner-border"
        style={{ height: '1.3rem', width: '1.3rem', borderWidth: '0.18rem' }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );

  return (
    <Fragment>
      <RenderIf condition={!!loading}>
        <button
          style={{ backgroundColor: bg }}
          disabled={loading}
          type="submit"
          className={`curved-btn w-100 ${className}`}
        >
          {spinner}
        </button>
      </RenderIf>
      <RenderIf condition={!loading}>
        <button
          style={{ backgroundColor: bg }}
          type={onClick ? 'button' : 'submit'}
          onClick={onClick}
          className={`w-100 curved-btn ${className}`}
        >
          {title}
        </button>
      </RenderIf>
    </Fragment>
  );
}
