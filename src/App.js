import {Routes,Route} from "react-router-dom";

import './App.css';
import Header from './HeaderComponent/Header';
import Service from './ServiceComponent/Service';
import Content from './ContentComponent/Content';
import Footer from './FooterComponent/Footer';
import About from "./AboutComponent/About";
import Contact from "./Contactcomponent/Contact";
import Login from "./LoginComponent/Login";
import Logout from "./LogoutComponent/Logout";
import Register from "./RegisterComponent/Register";
import Adminhome from "./AdminhomeComponent/Adminhome";
import ManageUser from "./ManageUserComponent/ManageUser";
import AddCategory from "./AddCategoryComponent/AddCategory";
import Userhome from "./UserhomeComponent/Userhome";


function App() {
  return (
    <div>
    {/* container start */}
  
  
    <Header />
   
    {/* <Content /> */}
   <Routes>
   <Route path="/" element={<Content/>} ></Route>
   <Route path="/about" element={<About/>} ></Route>
   <Route path="/contact" element={<Contact/>} ></Route>
   <Route path="/register" element={<Register/>} ></Route>
   <Route path="/login" element={<Login/>} ></Route>
   <Route path="/logout" element={<Logout/>} ></Route>
   <Route path="/service" element={<Service/>} ></Route>
   <Route path="/admin" element={<Adminhome/>} ></Route>  
   <Route path="/manageusers" element={<ManageUser/>} ></Route>  
   <Route path="/addCategory" element={<AddCategory/>} ></Route>  
   <Route path="/user" element={<Userhome/>} ></Route>

   </Routes>

    {/* <Service /> */}

 
   
    <Footer />
    
   


  {/* container end */}
  </div>
  );
}

export default App;
