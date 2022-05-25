import React from "react";
import "./ImageList.css";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListSubheader,
  IconButton,
  Button,
} from "@mui/material";

import { InfoRounded } from "@mui/icons-material";

const itemData = [
  {
    img: "https://icon-library.com/images/trust-icon-png/trust-icon-png-3.jpg",
    title: "Integrity",
  },
  {
    img: "https://www.pngitem.com/pimgs/m/377-3773875_picture-black-and-white-stock-beaver-in-action.png",
    title: "Speed",
  },
  {
    img: "https://www.pngall.com/wp-content/uploads/4/Support-PNG-Transparent-HD-Photo.png",
    title: "Trasperancy",
  },
  {
    img: "https://www.pngall.com/wp-content/uploads/2016/04/Analysis-PNG-Pic.png",
    title: "Analysis",
  },
];

export default function Imagelist() {
  return (
    <div>
      <ImageList sx={{ width: 500, height: 450 }}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={`${item.img}`} alt={item.title} loading="lazy" />
            <ImageListItemBar
              title={item.title}
              actionIcon={
                <Button
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                ></Button>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
