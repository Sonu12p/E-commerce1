// DashboardNavbar.tsx
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import { deepPurple } from "@mui/material/colors";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Middle } from "./Middle";

export default function Dashboard() {
  const { userData, logout } = useContext(AuthContext);
  return (
     <>
      <div className="section section-login bg-login-register" sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: "#d219b3ff" }}>
          <Toolbar>
            {/* Left side Logo / Title */}
            <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
              <img
                src="gym-logo.jpg" 
                alt=""
                style={{ width: 40, height: 40, marginRight: 10 }}
              />
              <Typography variant="h6" component="div">
                {/* GYM CENTRE */}
              </Typography>
            </Box>

            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              style={{ marginLeft: "900px" }}
            >
              Welcome, {userData?.username}
            </Typography>

            {/* Right side user menu */}
            <Box sx={{ flexGrow: 0 }}>
               <Tooltip title="Open settings">
                <IconButton onClick={logout} sx={{ p: 0 }}>
                  {/* User avatar (initials or image) */}
                  <Avatar sx={{ bgcolor: deepPurple[500] }}></Avatar>
                </IconButton>
              </Tooltip> 
              <Menu
                sx={{ mt: "45px" }}
                anchorEl={""}
                open={Boolean("")}
                onClose={""}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <MenuItem onClick={""}>Profile</MenuItem>
                <MenuItem onClick={""}>Settings</MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
        {/* <Middle /> */}
      </div>
     </>
  );
}
