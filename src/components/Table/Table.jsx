import React, { useEffect, useState } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import "./Table.css";
const Table = (props) => {
  //Dropdown button
  const [dropdown, setDropdown] = useState(0);
  const [regionList, setRegionList] = useState([
    "all",
    "indori",
    "talegaon",
    "Beverly Hills",
    "Manhattan",
    "wadgaon",
    "New York",
  ]);
  const [region, setRegion] = useState("all");

  //items to be shown at once in the table
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const itemsPerPageList = [10, 20, 30, 40, "all"];
  const dropDownMenu = itemsPerPageList.map((e) => (
    <li
      onClick={() => {
        if (e === "all") {
          setItemsPerPage(props.data.length);
        } else {
          setItemsPerPage(e);
        }
        setDropdown(0);
      }}
    >
      {e} items per page
    </li>
  ));

  //starting and ending index(Pagination sort of...)
  const itemsPerPageInterval = itemsPerPage;
  const [index, setIndex] = useState(0);

  //table headers coming from props
  const titles = props.titles.map((title) => <th>{title}</th>);

  //each row in table coming from props
  const rows = props.data
    .filter((row) =>
      row[0] >= index &&
      row[0] <= index + itemsPerPageInterval &&
      region === "all"
        ? true
        : row[5] === region
    )
    .map((filteredRow, index) => (
      <tr key={index} className="table-data">
        {filteredRow.map((e) => (
          <td>{e}</td>
        ))}
      </tr>
    ));

  //rendering JSX
  return (
    <div className="table-container">
      <div
        style={!props.additional ? { display: "none" } : { display: "flex" }}
        className="additional"
      >
        {/* excel */}
        <div className="excel">
          <ReactHTMLTableToExcel
            className="btn"
            table="Table"
            filename="empToEx"
            sheet="Sheet"
            buttonText="Download as Excel"
          />
        </div>
        
      </div>
      {/* table header */}
      <div className="top-section">
        <div className="header">
          <span>{props.header}</span>
        </div>

        {/* Utilities */}
        <div className="utilities">
          {/* items per page */}
          <div className="items-per-page">
            <button onClick={() => setDropdown(!dropdown)}>
              {itemsPerPage} items per page<i class="bx bx-chevron-down"></i>
            </button>
            <ul className={`dropdown ${dropdown ? "active" : ""}`}>
              {dropDownMenu}
            </ul>
          </div>

          {/* current index  */}
          <div className="current-render-number">
            <button>
              <i
                class="bx bx-chevron-left"
                onClick={() => {
                  if (index - itemsPerPageInterval >= 0) {
                    setIndex(index - itemsPerPageInterval);
                  }
                }}
              ></i>
              <span>
                {`${index === 0 ? 1 : index + 1}`} -{" "}
                {`${
                  index === props.data.length
                    ? props.data.length
                    : index + itemsPerPageInterval
                }`}{" "}
                (out of {props.data.length})
              </span>
              <i
                class="bx bx-chevron-right"
                onClick={() => {
                  if (index < props.data.length) {
                    setIndex(index + itemsPerPageInterval);
                  }
                }}
              ></i>
            </button>
          </div>
          <div>
            <input type="date" name="from_date"></input>
          </div>
          <div>
            <input type="date" name="to_date"></input>
          </div>
          <div>
          <select
          className={`regionList ${props.regionList ? "" : "inactive"}`}
          onChange={(event) => {
          setRegion(event.target.value);
          }}
          id=""
          >
          {props.regions.map((e) => {
          return <option value={e}>{e}</option>;
          })}
          </select>
          </div>
          
          {/* search */}
          <div className="search">
            <i class="bx bx-search-alt"></i>
            <input type="search" name="search" placeholder="Search" />
          </div>
        </div>
      </div>

      {/* Main Table */}
      <table className="table" id="Table">
        <thead>
          <tr className="table-head">{titles}</tr>
        </thead>
        {rows}
      </table>
    </div>
  );
};

export default Table;
