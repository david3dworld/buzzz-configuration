import React, { Fragment } from 'react';
import { Header, ResourcesCard } from '../components';
import { resourcesArray } from '../utils/static';

const Resources = () => {
  return (
    <Fragment>
      <Header title="Buzzz | Resources" />
      <div className="buzzz-contact-us-container  buzzz-resources-container">
        <div className="title-con">
          <div className="app-container">
            <div className="title">
              <div className="img-con d-flex justify-content-end">
                <img src="/svg/title_icon.svg" alt="" />
              </div>
              <h2>Resources</h2>
            </div>
          </div>
        </div>

        <div className="app-container">
          <div className="resources-big-image-con py-5">
            <div className="img-con">
              <div className="overflow-hidden">
                <img src="/images/resources.png" alt="reources" />
              </div>
              <img src="/images/resources_after.png" alt="reources" className="overflow-img" />
            </div>
          </div>

          <div className="d-flex justify-content-between content-flex gap-5 my-4">
            <div>
              <h3>How to Run a Successful Clothing Line in the 21st Century.</h3>
            </div>

            <div className="second">
              <p>
                You opening this blog means you’re considering the idea of designing your own
                clothing line, which is great.
              </p>
              <p className="mt-4">
                The next piece of good news is, fashion is much more accessible and democratic than
                it was back in the day. In the words of Anna Wintour herself, “Everybody’s now
                invited to the party.”
              </p>
              <div className="btn-con mt-4">
                <button type="button" className="curved-btn outline">
                  Read more
                </button>
              </div>
            </div>
          </div>

          <div className="grid-container py-5">
            {resourcesArray.map((item) => (
              <ResourcesCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Resources;
