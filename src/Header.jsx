import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SvgIcon from "@mui/material/SvgIcon";
import "./style.css";

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        className="appbar-width"
        position="fixed"
        style={{ background: "#000000" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            // link here to take us to "/" to go to Home page
            href="/"
          >
            <HomeIcon color="primary" />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MTG React
          </Typography>
          <Button
            color="inherit"
            target="_blank"
            href="https://kotynskm.github.io/portfolio-website/"
          >
            About The Developer
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
