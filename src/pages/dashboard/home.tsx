import React from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import Image from 'next/image';
import { CustomerTable, DashboardHeader } from '../../components';
import { chartData } from '../../utils/static';
import queries from '../../services/queries/users';
import analyticsQueries from '../../services/queries/analytics';

const Home = () => {
  const { data } = queries.readOne();
  const { data: orderData } = analyticsQueries.readOrders();
  const { data: revenueData } = analyticsQueries.readBusinnessRevenue();
  const { data: customerData } = analyticsQueries.readCustomers();
  return (
    <div className="dashboard_page">
      <DashboardHeader title="Dashboard" />
      <div className="dashboard_page_greeting">
        <h1>Welcome back, {data?.name.split(' ')[1]} 😃</h1>
        <h2>Manage Your customers list easily and track your sales.</h2>
      </div>
      <div className="dashboard_stats_cards">
        {/* orders */}
        <div className="stats_card_con" style={{ backgroundColor: '#8100F7' }}>
          <div style={{ backgroundColor: '#F6F2FF' }} className="stats_card_img">
            <Image src="/svg/order_stats_icon.svg" width={24} height={24} alt="stats" />
          </div>
          <div className="stats_card_content">
            <h1 style={{ color: '#fff' }}>Orders</h1>
            <div className="stats_card_value">
              <h3 style={{ color: '#fff' }}>{orderData?.monthOrder}</h3>
            </div>
          </div>
        </div>
        {/* orders */}

        {/* revenue */}
        <div className="stats_card_con" style={{ backgroundColor: '#fff' }}>
          <div style={{ backgroundColor: 'rgba(33, 163, 102, 0.2)' }} className="stats_card_img">
            <Image src="/svg/business_stats_icon.svg" width={24} height={24} alt="stats" />
          </div>
          <div className="stats_card_content">
            <h1 style={{ color: '#727278' }}>Business Revenue</h1>
            <div className="stats_card_value">
              <h3 style={{ color: '#000' }}>{revenueData?.revenue} %</h3>
            </div>
          </div>
        </div>
        {/* revenue */}

        {/* monthly views here */}
        {/* monthly views here */}

        {/*  customers */}
        <div className="stats_card_con" style={{ backgroundColor: '#fff' }}>
          <div style={{ backgroundColor: 'rgba(33, 163, 102, 0.2)' }} className="stats_card_img">
            <Image src="/svg/customers_stats_icon.svg" width={24} height={24} alt="stats" />
          </div>
          <div className="stats_card_content">
            <h1 style={{ color: '#727278' }}>Customers</h1>
            <div className="stats_card_value">
              <h3 style={{ color: '#000' }}>{customerData?.allTimeCustomer} </h3>
            </div>
          </div>
        </div>
        {/*  customers */}
      </div>
      <div className="dashboard_home_main">
        <div className="dashboard_chart">
          <div className="dashboard_chard_head">
            <h1>Sales Analytics</h1>
            <select className="form-select form-select-lg">
              <option selected>This Week</option>
              <option value={1}>This Month</option>
              <option value={2}>This Year</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={290}>
            <BarChart
              width={500}
              height={300}
              data={chartData}
              barSize={33}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="name"
                tickLine={false}
                axisLine={{ stroke: '#A8B0C4' }}
                tick={{ fill: '#A8B0C4', fontSize: 14 }}
                tickMargin={12}
              />
              <YAxis
                width={30}
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#A8B0C4', fontSize: 14 }}
              />
              <Tooltip />
              <Bar dataKey="pv" stackId="a" fill="#8100F7" />
              <Bar dataKey="uv" stackId="a" fill="#DCE4EA" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="dashboard_join_card">
          <div className="dashboard_image">
            <div className="dashboard_main_image">
              <Image src="/images/dashboard_img.png" alt="dashboard" width={281} height={168} />
            </div>
            <div className="dashboard_triangle">
              <Image src="/svg/triangle.svg" alt="triangle" width={48} height={44} />
            </div>
            <div className="dashboard_hexagon">
              <Image src="/svg/hexagon.svg" alt="hexagon" width={60} height={60} />
            </div>
          </div>
          <h1>Join our Facebook Community</h1>
          <p>Get the newest courses and answers to all your questions with our online business.</p>
          <a href="/" className="curved-btn.curved-btn.naked">
            Join
          </a>
        </div>
      </div>
      <div className="dashboard_customer_table">
        <CustomerTable showNumber={false} />
      </div>
    </div>
  );
};

export default Home;
