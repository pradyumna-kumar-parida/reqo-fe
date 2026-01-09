import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import logo from "../../public/chat.png";
import Sidebar from "./Sidebar";
import ChatWindow from "./chatWindow";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function LandPage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const mainOptions = ["Chats", "Requests", "Contacts", "Profile"];
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Are you sure you want to log out?
          </Typography>

          <Typography
            id="keep-mounted-modal-description"
            sx={{ mt: 2, color: "text.secondary" }}
          >
            You will be signed out of your account.
          </Typography>

          {/* Buttons */}
          <Box
            sx={{
              mt: 3,
              display: "flex",
              justifyContent: "flex-end",
              gap: 2,
            }}
          >
            <Button variant="outlined" onClick={handleClose}>
              Cancel
            </Button>

            <Button variant="contained" color="error" onClick={handleLogout}>
              Log out
            </Button>
          </Box>
        </Box>
      </Modal>

      <div className="h-screen flex bg-[#0b141a] text-white">
        {/* ===== LEFT DRAWER (10%) ===== */}
        <Drawer
          variant="permanent"
          sx={{
            width: "10%",
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: "10%",
              boxSizing: "border-box",
            },
          }}
        >
          <Box>
            <div className="px-4 py-2 bg-black ">
              <img
                src={logo}
                alt="logo"
                className="h-14 drop-shadow-[0_0_2px_black] flex place-self-center"
              />
            </div>

            <Divider />

            <List>
              {mainOptions.map((text) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>

            <Divider />

            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Settings" className="text-blue-500" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={handleOpen}>
                  <ListItemText primary="Logout" className="text-red-500" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>

        {/* ===== CHAT LIST (20%) ===== */}
        <div className="w-[30%] border-r border-gray-700">
          <Sidebar />
        </div>

        {/* ===== CHAT WINDOW (60%) ===== */}
        <div className="w-full">
          <ChatWindow />
        </div>
      </div>
    </>
  );
}
