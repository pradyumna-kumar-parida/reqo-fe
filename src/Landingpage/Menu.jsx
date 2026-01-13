import React from "react";
import logo from "../../public/chat.png";
 import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
 const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function MenuReqo() {
  const user = JSON.parse(localStorage.getItem("user"));
  const fullName = user
    ? `${user.firstName.toUpperCase()} ${user.lastName.toUpperCase()}`
    : "";
const mainOptions = ["Chats", "Requests", "Contacts", "Profile"];
  const [open, setOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 const navigate = useNavigate();
  const handleMenus = (options) => {
    console.log("Clicked", options);
    if (mainOptions[1] === options) {
      console.log("right");
      navigate("/requests");
    } 
    else if(mainOptions[0] === options)
    {
      navigate("/landingsection")
    }
    else {
      console.log("Wrong");
    }
  };
   const handleLogout = () => {
    handleOpen()
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

    <div className="h-screen w-full bg-white text-black flex flex-col justify-between border-r border-gray-700">
      {/* Top Logo */}
      <div>
        <div className="px-4 py-3 bg-black ">
          <img src={logo} alt="logo" className="h-12 mx-auto drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]" />
        </div>

        {/* Menu */}
        <ul className="mt-4">
       {mainOptions.map((item, i) => (
        <li
          key={item}
          onClick={() => {
            handleMenus(item);
            setActiveIndex(i);
          }}
          className={`px-6 py-3 cursor-pointer hover:bg-gray-100 ${
            activeIndex === i ? "bg-red-500 text-white" : ""
          }`}
        >
          {item}
        </li>
        ))}

        </ul>
         <Divider/>
         <ul className="mt-4">
            <li
              className="px-6 py-3 text-blue-700 font-bold hover:bg-gray-100 cursor-pointer"
            >
              Setting
            </li>
            <li
           onClick={handleOpen}
              className="px-6 py-3 text-red-500 font-bold hover:bg-gray-100 cursor-pointer"
            >
              Logout
            </li>
        </ul>
      </div>

      {/* Bottom User */}
      <div className="flex items-center gap-3 p-4 bg-black">
        <img
          src="https://cdn-icons-png.flaticon.com/128/19006/19006438.png"
          className="w-9 h-9 rounded-full"
        />
        <span className="text-sm text-white font-semibold">{fullName}</span>
      </div>
     
    </div>
    </>
  );
}

// import React from "react";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// import logo from "../../public/chat.png";
// import Modal from "@mui/material/Modal";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import { useNavigate } from "react-router-dom";
// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   // width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };
// export default function MenuReqo() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
//   const mainOptions = ["Chats", "Requests", "Contacts", "Profile"];
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     window.location.reload();
//   };
//   const navigate = useNavigate();
//   const handleMenus = (options) => {
//     console.log("Clicked", options);
//     if (mainOptions[1] === options) {
//       console.log("right");
//       navigate("/requests");
//     } else {
//       console.log("Wrong");
//     }
//   };
//   const user = JSON.parse(localStorage.getItem("user"));

//   const fullName = user
//     ? `${user.firstName.toUpperCase()} ${user.lastName.toUpperCase()}`
//     : "";
//   return (
//     <>
//       <Modal
//         keepMounted
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="keep-mounted-modal-title"
//         aria-describedby="keep-mounted-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
//             Are you sure you want to log out?
//           </Typography>

//           <Typography
//             id="keep-mounted-modal-description"
//             sx={{ mt: 2, color: "text.secondary" }}
//           >
//             You will be signed out of your account.
//           </Typography>

//           {/* Buttons */}
//           <Box
//             sx={{
//               mt: 3,
//               display: "flex",
//               justifyContent: "flex-end",
//               gap: 2,
//             }}
//           >
//             <Button variant="outlined" onClick={handleClose}>
//               Cancel
//             </Button>

//             <Button variant="contained" color="error" onClick={handleLogout}>
//               Log out
//             </Button>
//           </Box>
//         </Box>
//       </Modal>

//       <div className="h-screen w-full flex bg-[#0b141a] text-white">
  
//         <Drawer
//           variant="permanent"
//           sx={{
//             width: "20%",
//             flexShrink: 0,
//             "& .MuiDrawer-paper": {
//               width: "10%",
//               boxSizing: "border-box",
//             },
//           }}
//         >
//           <Box className="h-screen">
//             <div className="px-4 py-2 bg-black ">
//               <img
//                 src={logo}
//                 alt="logo"
//                 className="h-14 drop-shadow-[0_0_2px_black] flex place-self-center"
//               />
//             </div>

//             <Divider />

//             <List>
//               {mainOptions.map((text) => (
//                 <ListItem key={text} disablePadding>
//                   <ListItemButton>
//                     <ListItemText
//                       primary={text}
//                       onClick={() => handleMenus(text)}
//                     />
//                   </ListItemButton>
//                 </ListItem>
//               ))}
//             </List>

//             <Divider />

//             <List>
//               <ListItem disablePadding>
//                 <ListItemButton>
//                   <ListItemText primary="Settings" className="text-blue-500" />
//                 </ListItemButton>
//               </ListItem>
//               <ListItem disablePadding>
//                 <ListItemButton onClick={handleOpen}>
//                   <ListItemText primary="Logout" className="text-red-500" />
//                 </ListItemButton>
//               </ListItem>
//             </List>
//             <div className=" absolute bottom-0 flex  items-center gap-3 p-4 bg-black  ml-auto">
//               <img
//                 src="https://cdn-icons-png.flaticon.com/128/19006/19006438.png"
//                 alt="profile"
//                 className="w-10 h-10 rounded-full"
//               />
//               <span className="font-semibold text-white text-sm ">
//                 {fullName}
//               </span>
//             </div>
//           </Box>
//         </Drawer>

    
//       </div>
//     </>
//   );
// }
