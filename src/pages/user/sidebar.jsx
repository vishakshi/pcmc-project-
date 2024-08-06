import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { EmojiEventsOutlined, Logout, Settings } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Competetion from "./competetion";
import UpdateUser from "../../components/update-user";
import Setting from "./setting";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      style={{flex:1}}
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const Sidebar = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/user-login", { replace: true });
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          borderRight: 1,
          borderColor: "divider",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box></Box>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
        >
          <Tab
            icon={<EmojiEventsOutlined />}
            label="Competetion"
            {...a11yProps(0)}
          />
          <Tab icon={<Settings />} label="Setting" {...a11yProps(1)} />
        </Tabs>
        <Box>
          <Button
            size="medium"
            sx={{ border: 0, ":hover": { border: 0 } }}
            onClick={handleLogout}
            endIcon={<Logout />}
            variant="outlined"
          ></Button>
        </Box>
      </Box>
      <TabPanel value={value} index={0}>
        <Competetion />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Setting />
      </TabPanel>
    </Box>
  );
};

export default Sidebar;
