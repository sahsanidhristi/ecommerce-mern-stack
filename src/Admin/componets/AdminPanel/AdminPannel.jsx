import { ThemeProvider } from "@emotion/react";
import { Avatar, Box, CssBaseline, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import { getUser, logout } from "../../../Redux/Auth/Action";
import AdminNavbar from "../../Navigation/AdminNavbar";
import Dashboard from "../../Views/Admin";
import DemoAdmin from "../../Views/DemoAdmin";
import { customTheme } from "../../them/customeThem";
import Customerss from "../customers/Customerss";
import ProductsTable from "../Products/ProductsTable";
import OrdersTable from "../Orders/OrdersTable"
import UpdateProductForm from "../updateProduct/UpdateProduct";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ProductsIcon from '@mui/icons-material/Shop';
import CustomersIcon from '@mui/icons-material/People';
import OrdersIcon from '@mui/icons-material/ShoppingCart';
import EarningsIcon from '@mui/icons-material/MonetizationOn';
import WeeklyIcon from '@mui/icons-material/DateRange';
import MonthlyIcon from '@mui/icons-material/DateRange';
import AddProductIcon from '@mui/icons-material/AddBox';
import CreateProductForm from "../createProduct/CreateProductForm";

const drawerWidth = 240;

const menu = [
  { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
  { name: "Products", path: "/admin/products", icon: <ProductsIcon /> },
  { name: "Customers", path: "/admin/customers", icon: <CustomersIcon /> },
  { name: "Orders", path: "/admin/orders", icon: <OrdersIcon /> },
  // { name: "Total Earnings", path: "/admin/earnings", icon: <EarningsIcon /> },
  // { name: "Weekly Overview", path: "/admin/weekly", icon: <WeeklyIcon /> },
  // { name: "Monthly Overview", path: "/admin/monthly", icon: <MonthlyIcon /> },
  { name: "Add Product", path: "/admin/products/create", icon: <AddProductIcon /> },
];

export default function AdminPanel() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  const [sideBarVisible, setSideBarVisible] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector(store => store);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const jwt = localStorage.getItem("jwt");

  React.useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt]);

  const drawer = (
    <Box sx={{ overflow: "auto" ,display:"flex",justifyContent:"space-between",flexDirection:"column"}}>
      {isLargeScreen && <Toolbar />}
      <List>
        {menu.map((item, index) => 
          <ListItem key={item.name} disablePadding onClick={() => navigate(item.path)}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        )}
      </List>
      <List disablePadding>
        <Divider />
        <ListItem onClick={handleLogout} disablePadding>
          <ListItemButton>
            <Avatar
              className="text-white"
              sx={{ bgcolor: deepPurple[500], color: "white", cursor: "pointer" }}
            >
              {auth.user?.firstName[0].toUpperCase()}
            </Avatar>
            <ListItemText className="ml-5" primary={"Logout"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const handleSideBarViewInMobile = () => {
    setSideBarVisible(true);
  };

  const handleCloseSideBar = () => {
    setSideBarVisible(false);
  };

  const drawerVariant = isLargeScreen ? "permanent" : "temporary";

  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={{ display: `${isLargeScreen ? "flex" : "block"}` }}>
        <CssBaseline />
        <AdminNavbar handleSideBarViewInMobile={handleSideBarViewInMobile} />
        <Drawer
          variant={drawerVariant}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
              ...(drawerVariant === "temporary" && {
                top: 0,
                [`& .MuiPaper-root.MuiDrawer-paperAnchorTop.MuiDrawer-paperTemporary`]: {
                  position: "relative",
                  left: 0,
                  right: 0,
                  height: "100%",
                  zIndex: (theme) => theme.zIndex.drawer + 2,
                }
              }),
            },
          }}
          open={isLargeScreen || sideBarVisible}
          onClose={handleCloseSideBar}
        >
          {drawer}
        </Drawer>
        <Box className="adminContainer" component="main" sx={{ flexGrow: 1 }}>
          <Toolbar />
          <Routes>
          <Route path="/" element={ <Dashboard />}></Route>
            {/* <Route path="/product/create" element={</CreateProductFro>}></Route> */}
            <Route path='/products/create' element={<CreateProductForm/>}></Route>
            <Route path="/product/update/:productId" element={<UpdateProductForm/>}></Route>
            <Route path="/products" element={<ProductsTable/>}></Route>
            <Route path="/orders" element={<OrdersTable/>}></Route>
            <Route path="/customers" element={<Customerss/>}></Route>
            <Route path="/demo" element={<DemoAdmin />}></Route>
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

// import {
//   Box,
//   CssBaseline,
//   Drawer,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   Toolbar,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
// import React from "react";
// import { useState } from "react";
// import { Route, Routes, useNavigate } from "react-router-dom";
// import EmailIcon from "@mui/icons-material/Email";
// import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import { BlackMesa } from "mdi-material-ui";
// import Dashboard from "../Dashboard";
// import CustomersTable from "../CustomersTables";
// import ProductsTable from "../ProductsTables";
// import OrdersTable from "../Orders/OrdersTable";
// import CreatingProductsForm from "../CreatingProductsForm";



// const menu = [
//   { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
//   { name: "Products", path: "/admin/products", icon: <DashboardIcon /> },
//   { name: "Customers", path: "/admin/customers", icon: <DashboardIcon /> },
//   { name: "Orders", path: "/admin/orders", icon: <DashboardIcon /> },
//   {
//     name: "Add Product",
//     path: "/admin/product/create",
//     icon: <DashboardIcon />,
//   },
// ];
// export default function AdminPannel() {
//   const theme = useTheme();
//   const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

//   const [sideBarVisible, setSideBarVisible] = useState(false);
//   const navigate = useNavigate();

//   const drawer = (
//     <Box
//       sx={{
//         overflow: "auto",
//         display: "flex",
//         flexDirection: "column",
//         height: "100%",
//         justifyContent: "space-between",
//       }}
//     >
//       <>
//         {/* {isLargeScreen && <Toolbar/>} */}
//         <List>
//           {menu.map((item, index) => (
//             <ListItem
//               key={item.name}
//               disablePadding
//               onClick={() => navigate(item.path)}
//             >
//               <ListItemButton>
//                 <ListItemIcon>{item.icon}</ListItemIcon>
//                 <ListItemText>{item.name}</ListItemText>
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </>

//       <List>
//         <ListItem disablePadding>
//           <ListItemButton>
//             <ListItemIcon>
//               <AccountCircleIcon />
//             </ListItemIcon>
//             <ListItemText>Account</ListItemText>
//           </ListItemButton>
//         </ListItem>
//       </List>
//     </Box>
//   );

//   return (
//     <div>

//       <div className="flex h-[100vh]">
//         <CssBaseline />

//         <div className="w-[15%]  border border-r-gray-300 h-full">
//           {drawer}
//         </div>

//      <div  className="w-[85%] ">
//           <Routes>
//            <Route path='/' element={<Dashboard/>}></Route>
//            <Route path='/product/create' element={<CreatingProductsForm/>}></Route>
//            <Route path='/products'element={<ProductsTable/>}></Route>
//         <Route path='/orders' element={<OrdersTable/>}></Route>     
//       <Route path='/customers'element={<CustomersTable/>}></Route>
          
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// }
