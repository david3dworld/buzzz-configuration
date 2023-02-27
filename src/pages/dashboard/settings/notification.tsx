import React from 'react';
import { Checkbox, SettingsSwitchCard } from '../../../components';

const Security = () => {
  return (
    <div className="mx-3 buzzz-notifications-settings-wrap">
      <div className="buzzz-notifications-settings-container ">
        <div className="big-con bg-white ">
          <div className="header p-3 p-md-4 d-flex justify-content-between gap-2">
            <div className="title">
              <h3>Notifications</h3>
            </div>
            <div className="d-flex justify-content-between align-items-center ">
              <h3>Call</h3>
            </div>
            <div>
              <h3>Email</h3>
            </div>
            <div>
              <h3>Sms</h3>
            </div>
          </div>
          <div className="content p-3 p-md-4 d-flex justify-content-between gap-2">
            <div className="title">
              <h3>API limits</h3>
            </div>
            <div className="d-flex justify-content-between align-items-center gap-5">
              <div className="d-flex justify-content-between">
                <Checkbox bg="#66CB9F" checked />
              </div>
              <div className="d-flex justify-content-between">
                <Checkbox bg="#66CB9F" checked />
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <Checkbox bg="#66CB9F" checked />
            </div>
          </div>
          <div className="content p-3 p-md-4 d-flex justify-content-between gap-2">
            <div className="title">
              <h3>Reminders</h3>
            </div>
            <div className="d-flex justify-content-between align-items-center gap-5">
              <div className="d-flex justify-content-between">
                <Checkbox bg="#66CB9F" checked />
              </div>
              <div className="d-flex justify-content-between">
                <Checkbox bg="#66CB9F" checked />
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <Checkbox bg="#66CB9F" checked />
            </div>
          </div>

          <div className="content p-3 p-md-4 d-flex justify-content-between gap-2">
            <div className="title">
              <h3>Storage</h3>
            </div>
            <div className="d-flex justify-content-between align-items-center gap-5">
              <div className="d-flex justify-content-between">
                <Checkbox bg="#66CB9F" checked />
              </div>
              <div className="d-flex justify-content-between">
                <Checkbox bg="#66CB9F" checked />
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <Checkbox bg="#66CB9F" checked />
            </div>
          </div>

          <div className="content p-3 p-md-4 d-flex justify-content-between gap-2">
            <div className="title">
              <h3>Reminders</h3>
            </div>
            <div className="d-flex justify-content-between align-items-center gap-5">
              <div className="d-flex justify-content-between">
                <Checkbox bg="#66CB9F" checked />
              </div>
              <div className="d-flex justify-content-between">
                <Checkbox bg="#66CB9F" checked />
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <Checkbox bg="#66CB9F" checked />
            </div>
          </div>
        </div>

        <div className="d-flex notification-switch-con gap-4 mt-4 pt-2">
          <SettingsSwitchCard
            title="Sales and promotions"
            details="We only notify you with our promotions."
            checked
          />

          <SettingsSwitchCard
            title="Sales and promotions"
            details="We only notify you with our promotions."
            checked
          />
        </div>
      </div>
    </div>
  );
};

export default Security;
