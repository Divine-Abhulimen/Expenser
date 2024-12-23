import React from "react";
import "../assets/styles/IncomeRevenue.css";
import "../assets/styles/global.css";
import Navbar from "../../components/NavBar/NavBar";
import dots from "../../images/dots.svg";
import GlobalButton from "../../components/GlobalButton/GlobalButton";
import { FaPlus } from "react-icons/fa";

function IncomeRevenue() {
  return (
    <div className="page">
      <Navbar />
      <div className="page-content">
        <div className="header">
          <h3>Income and Revenue Tracker</h3>
          <img src={dots} alt="dots" className="dots" />
        </div>
        <div className="inc-rev-totals">
          <div className="inc-rev-header">
            <span className="yellow-bar inc-rev"></span>
            <h2 className="inc-rev-title">Your total <strong>income</strong></h2>
            <span className="inc-rev-total">$ 0.00</span>
          </div>
          <div className="inc-rev-header">
            <span className="yellow-bar inc-rev"></span>
            <h2 className="inc-rev-title">Your total <strong>revenue</strong></h2>
            <span className="inc-rev-total">$ 0.00</span>
          </div>
        </div>
        {/** Revenue table */}
        <div className="table-container">
          <div className="table-header inc-rev">
            <h2 className="table-title">
              <span className="yellow-bar"></span> My Revenue
            </h2>
            <GlobalButton
              bg={"white"}
              textColor={"#222222"}
              icon={FaPlus}
              text={"Add a Revenue"}
              onClick={null}
              link={null}
            />
          </div>
          <table className="global-table">
            <thead>
              <tr>
                {[
                  "Item",
                  "Transaction date",
                  "Amount",
                  "Category",
                  "Merchant",
                  "Invoice",
                ].map((head) => (
                  <th key={head}>{head} ⬍</th>
                ))}
              </tr>
            </thead>
            <tbody>No items yet...</tbody>
          </table>
        </div>
        {/** Revenue table */}
        <div className="table-container">
          <div className="table-header inc-rev">
            <h2 className="table-title">
              <span className="yellow-bar"></span> My Income
            </h2>
            <GlobalButton
              bg={"white"}
              textColor={"#222222"}
              icon={FaPlus}
              text={"Add an Income"}
              onClick={null}
              link={null}
            />
          </div>
          <table className="global-table">
            <thead>
              <tr>
                {[
                  "Item",
                  "Transaction date",
                  "Amount",
                  "Category",
                  "Merchant",
                  "Invoice",
                ].map((head) => (
                  <th key={head}>{head} ⬍</th>
                ))}
              </tr>
            </thead>
            <tbody>No items yet...</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default IncomeRevenue;
