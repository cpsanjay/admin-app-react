import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";
import Navbar from "./../../components/navbar/Navbar";
import Widgets from "../../components/widgets/Widgets";
import Charts from "./../../components/charts/Charts";
import Feature from "../../components/feature/Feature";
import Table from "./../../components/table/Table";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home-container">
        <Navbar />
        <div className="widgets">
          <Widgets type="user" />
          <Widgets type="order" />
          <Widgets type="earning" />
          <Widgets type="balance" />
        </div>
        <div className="charts">
          <Feature />
          <Charts aspect={2 / 1} title="Last 6 Moths (Revenue)" />
        </div>
        <div className="list-container">
          <div className="list-title">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
