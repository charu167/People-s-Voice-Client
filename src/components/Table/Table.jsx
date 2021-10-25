import React, { useEffect, useState } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import "./Table.css";
const Table = (props) => {
  // useEffect(() => {
  //   console.log(Math.round(Date.now() / (1000 * 60 * 60 * 24)));
  // }, []);

  //Dropdown button
  const [dropdown, setDropdown] = useState(0);
  const [region, setRegion] = useState("all");
  const [type, setType] = useState("type");
  const [search, setSearch] = useState("");
  const [date, setDate] = useState({
    date1: null,
    date2: null,
  });

  // props.data.map((e) => {
  //   console.log(
  //     Math.round(Date.parse(e[7]) / (1000 * 60 * 60 * 24)) >
  //       Math.round(Date.now() / (1000 * 60 * 60 * 24))
  //   );
  // });

  // console.log(Math.round(Date.parse(date) / (1000 * 60 * 60 * 24)));

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
    .filter(
      (row) =>
        row[0] >= index &&
        row[0] <= index + itemsPerPageInterval &&
        (region === "all" ? true : row[5] === region) &&
        (type === "type" ? true : row[6] === type) &&
        (date.date2 === null
          ? true
          : Math.round(Date.parse(date.date2) / (1000 * 60 * 60 * 24)) >=
            Math.round(Date.parse(row[7]) / (1000 * 60 * 60 * 24))) &&
        (date.date1 === null
          ? true
          : Math.round(Date.parse(row[7]) / (1000 * 60 * 60 * 24)) >=
            Math.round(Date.parse(date.date1) / (1000 * 60 * 60 * 24)))
    )
    .map((filteredRow, index) => (
      <tr key={index} className="table-data">
        {filteredRow.map((e) => (
          <td>{e}</td>
        ))}
      </tr>
    ));

  const handleSearch = (val) => {
    if (val.toString().toLowerCase().includes(search.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  };

  const searchRows = () => {
    return props.data
      .filter((row) => {
        for (let i = 0; i < row.length; i++) {
          if (handleSearch(row[i])) {
            return true;
            break;
          } else {
            continue;
          }
        }
      })
      .map((filteredRow, index) => (
        <tr key={index} className="table-data">
          {filteredRow.map((e) => (
            <td>{e}</td>
          ))}
        </tr>
      ));
  };

  //rendering JSX
  return (
    <div className="table-container">
      <div className="date">
        <label htmlFor="date1">Start date</label>
        <input
          name="date1"
          type="date"
          onChange={(event) => {
            setDate({ ...date, ["date1"]: event.target.valueAsDate });
          }}
        />

        <label htmlFor="date2">End date</label>
        <input
          name="date2"
          type="date"
          onChange={(event) => {
            setDate({ ...date, ["date2"]: event.target.valueAsDate });
          }}
        />
      </div>

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
          <div>
            <select
              onChange={(event) => {
                setType(event.target.value);
              }}
            >
              <option value="type">type</option>
              <option value="road">road</option>
              <option value="water">water</option>
              <option value="electricity">electricity</option>
              <option value="other">other</option>
            </select>
          </div>
          {/* search */}
          <div className="search">
            <i class="bx bx-search-alt"></i>
            <input
              onChange={(event) => {
                setSearch(event.target.value);
              }}
              type="search"
              name="search"
              placeholder="Search"
            />
          </div>
        </div>
      </div>

      {/* Main Table */}
      <table className="table" id="Table">
        <thead>
          <tr className="table-head">{titles}</tr>
        </thead>
        <tbody>{search === "" ? rows : searchRows(search)}</tbody>
      </table>
    </div>
  );
};

export default Table;
