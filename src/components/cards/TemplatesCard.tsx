import React from 'react';

interface IProps {
  img: string;
  title: string;
  text: string;
}

const TemplatesCard = (props: IProps) => {
  const { img, title, text } = props;
  return (
    <div className="buzzz-templates-card-container">
      <div className="card">
        <div className="card-body">
          <div>
            <img src={img} alt="templates_image" className="template-img" />
          </div>
          <div>
            <h3>{title}</h3>
            <div className="d-flex mt-2">
              <p>{text}</p>
              <img src="../../../svg/templates-tick.svg" alt="tick-circle" className="mx-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplatesCard;
