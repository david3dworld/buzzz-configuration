import Link from 'next/link';
import React from 'react';

interface IProps {
  item: {
    title: string;
    details: string;
    image: string;
    link: string;
    author: string;
    authorLink: string;
  };
}

const ResourcesCard = (props: IProps) => {
  const { item } = props;

  return (
    <Link href={item.link}>
      <a href={item.link}>
        <div className="buzzz-resources-card-con">
          <div className="img-con">
            <div className="overflow-hidden">
              <img src={item.image} alt="card" className="w-100" />
            </div>
          </div>
          <div className="text-con">
            <h3>{item.title}</h3>

            <p className="my-3">{item.details}</p>

            <div className="d-flex justify-content-between">
              <h5>
                By:
                <Link href={item.authorLink}>
                  <a href={item.authorLink}>
                    {' '}
                    {item.author}
                  </a>
                </Link>
              </h5>

              <h5>5 min read</h5>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ResourcesCard;
