import React from "react";
import "./Table.css";
import {
  Table as Tablemui,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Button,
  Box,
  Typography,
} from "@mui/material";
export default function Table({ titles, data, header }) {
  return (
    <div className="mui-tbl">
      <Typography
        textAlign="center"
        color="gray"
        variant="overline"
        fontWeight={600}
        fontSize={40}
        marginBottom={3}
      >
        {header}
      </Typography>
      <Tablemui style={{ border: "1px solid #E0E0E0" }} size="small">
        <TableHead>
          <TableRow>
            {titles.map((e, i) => {
              return <TableCell key={i}>{e}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((e, i) => {
            return (
              <TableRow key={i}>
                {titles.map((e1, i1) => {
                  return <TableCell key={i1}>{e[e1]}</TableCell>;
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Tablemui>
    </div>
  );
}
