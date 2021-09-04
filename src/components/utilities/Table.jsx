import React, { useState } from "react";

const Table = (props) => {
  //Dropdown button
  const [dropdown, setDropdown] = useState(0);

  //items to be shown at once in the table
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const itemsPerPageList = [5, 10, 15, 20];
  const dropDownMenu = itemsPerPageList.map((e) => (
    <li
      onClick={() => {
        setItemsPerPage(e);
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
    .filter((row) => row[0] > index && row[0] <= index + itemsPerPageInterval)
    .map((filteredRow) => (
      <tr className="table-data">
        {filteredRow.map((e) => (
          <td>{e}</td>
        ))}
      </tr>
    ));

  //rendering JSX
  return (
    <div className="table-container">
      {/* table header */}
      <div className="top-section">
        <div className="header">
          <span>{props.header}</span>
        </div>

        {/* Utilities */}
        <div className="utilities">
          {/* search */}
          <div className="search">
            <i class="bx bx-search-alt"></i>
            <input type="search" name="search" placeholder="Search" />
          </div>

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
                  if (index != 0) {
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
                  if (index != props.data.length) {
                    setIndex(index + itemsPerPageInterval);
                  }
                }}
              ></i>
            </button>
          </div>
        </div>
      </div>

      {/* Main Table */}
      <table className="table">
        <tr className="table-head">{titles}</tr>
        {rows}
      </table>
    </div>
  );
};

export default Table;
