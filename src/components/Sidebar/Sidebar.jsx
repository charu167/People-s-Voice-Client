import * as React from "react";
import { useRouteMatch, NavLink } from "react-router-dom";
import "./Sidebar.css";
import { styled, useTheme } from "@mui/material/styles";

import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import {
  Dashboard,
  Summarize,
  FormatListBulleted,
  PersonAddAlt1,
  People,
} from "@mui/icons-material";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { path } = useRouteMatch();

  console.log(path);

  const handleDrawerClose = () => {
    setOpen(!open);
  };

  const items = [
    {
      name: "Dashboard",
      link: "",
      icon: <Dashboard />,
    },
    {
      name: "Reports",
      link: "/reports",
      icon: <Summarize />,
    },
    {
      name: "Gramsevak",
      link: path === "/gramsevak" ? "#" : "/gslist",
      icon: <FormatListBulleted />,
    },
    {
      name: "New GS",
      link: path === "/gramsevak" ? "/complainreg" : "/gsreg",
      icon: <PersonAddAlt1 />,
    },
    {
      name: "Users",
      link: "/userdetail",
      icon: <People />,
    },
  ];

  return (
    <div className="sidebar">
      <Drawer variant="permanent" open={open}>
        <DrawerHeader onClick={handleDrawerClose}>
          <IconButton>
            {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {items.map((e, i) => (
            <NavLink className="link" to={`${path}` + e.link}>
              <ListItemButton
                key={e.name}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {e.icon}
                </ListItemIcon>
                <ListItemText primary={e.name} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </NavLink>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
