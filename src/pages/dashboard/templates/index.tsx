import { useRouter } from 'next/router';
import React from 'react';
import { Button, DashboardHeader, TemplatesCard } from '../../../components';
import routes from '../../../routes';
import { templatesArray, allTemplatesArray } from '../../../utils/static';

const Index = () => {
  const router = useRouter();
  return (
    <div>
      <DashboardHeader title="Dashboard" />
      <div className="container pb-3 buzzz-dashboard-templates">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-xl-3 d-xl-block d-none">
                <div className="mt-3">
                  <h1>Templates</h1>
                </div>

                <div className="all-templates">
                  <h3 className="pb-2">All templates</h3>
                  <div className="all-temp-item">
                    {allTemplatesArray.map((item) => (
                      <div className="d-flex justify-content-between pb-2">
                        <p key={item.id} className="mt-1">
                          {item.tempName}
                        </p>
                        <img src="/svg/add-square.svg" alt="add" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="all-temp-card all-temp-card-mobile">
                  <img src="/svg/temp-card.svg" alt="light" />
                  <div className="card">
                    <div className="card-body">
                      <div className="card-cont">
                        <h3>Thoughts Time</h3>
                        <p className="mt-2">
                          Express yourself and bring your imaginations to life.
                        </p>
                      </div>
                      <div className="card-btn">
                        <Button
                          title="Start Designing"
                          onClick={() => router.push(routes.dashboard.design.design.path)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-8">
                <div className="mt-3 mobile_template_title">
                  <h1>Templates</h1>
                </div>
                <div className="mt-3">
                  <h1>T-Shirts Design Templates</h1>
                  <p className="temp-txt">
                    Use our baseball designs and customize your perfect look
                  </p>
                </div>

                <div className="d-block d-xl-none">
                  <div className="all-temp-mobile">
                    <div className="card">
                      <div className="card-body d-flex justify-content-between">
                        <p>All templates</p>
                        <img src="/svg/temp-mobile.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="template-section-card mt-4">
                  {templatesArray.map((item) => (
                    <TemplatesCard
                      key={item.id}
                      img={item.img}
                      title={item.title}
                      text={item.text}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
