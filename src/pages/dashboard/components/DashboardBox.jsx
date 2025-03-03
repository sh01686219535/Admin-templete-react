
import { HiDotsVertical } from "react-icons/hi";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { IoIosTimer } from "react-icons/io";
import Button from "@mui/material/Button";

function DashboardBox({ color = ["#fff", "#eee"], icon, grow = false }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const ITEM_HEIGHT = 48;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Button // Keeping this as the main wrapper
      className="dashboardBox p-4 rounded-lg shadow-lg"
      style={{
        backgroundImage: `linear-gradient(to right, ${color[0]}, ${color[1]})`,
      }}
    >
      <div className="flex w-full justify-between">
        <div className="col1">
          <h4 className="text-white">Total Users</h4>
          <span className="text-white">777</span>
        </div>

        {/* Trending Icon based on 'grow' */}
        <span className="chart">
          {grow ? <TrendingUpIcon /> : <TrendingDownIcon />}
        </span>

        {/* Icon for the box */}
        {icon && <div className="icon">{icon}</div>}
      </div>

      {/* Footer Section */}
      <div className="flex items-center justify-between month w-full">
        <h6 className="text-white capitalize">Last Month</h6>

        {/* Replacing Button with span/div to prevent "button inside button" */}
        <div onClick={handleClick} className="dot toggleIcon cursor-pointer">
          <HiDotsVertical />
        </div>

        {/* Dropdown Menu */}
        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          slotProps={{
            paper: {
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: "20ch",
              },
            },
          }}
        >
          {["Last Day", "Last Week", "Last Month", "Last Year"].map(
            (label, index) => (
              <MenuItem key={index} onClick={handleClose}>
                <IoIosTimer /> {label}
              </MenuItem>
            )
          )}
        </Menu>
      </div>
    </Button>
  );
}

export default DashboardBox;

