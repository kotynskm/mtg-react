import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SignalCellularNoSimIcon from "@mui/icons-material/SignalCellularNoSim";
import "./style.css";

const drawerWidth = 240;
const margin = 5;

const PermanentDrawerLeft = () => {
  return (
    <Drawer
      PaperProps={{
        sx: {
          backgroundColor: "black",
          color: "red",
          width: drawerWidth,
          marginTop: margin,
        },
      }}
      variant="permanent"
      anchor="left"
      className="drawer"
    >
      <Toolbar />
      <Divider />
      <List>
        <ListItemButton href="/cardpage">
          <ListItemIcon>
            <SignalCellularNoSimIcon />
          </ListItemIcon>
          <ListItemText primary="Display Cards" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <SignalCellularNoSimIcon />
          </ListItemIcon>
          <ListItemText primary="Display Sets" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <SignalCellularNoSimIcon />
          </ListItemIcon>
          <ListItemText primary="Card Search" />
        </ListItemButton>
        {/* {["Display Cards", "Display Sets", "Hit Point Counter", "???"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? (
                    <SignalCellularNoSimIcon />
                  ) : (
                    <ColorizeIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )} */}
      </List>
      <Divider />
    </Drawer>
  );
};

export default PermanentDrawerLeft;
