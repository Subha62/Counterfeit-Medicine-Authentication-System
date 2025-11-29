// import Home from './components/home/Home';
// import Login from './components/home/Login';
// import ScannerPage from './components/pages/ScannerPage';
// import Admin from './components/pages/Admin';
// import Manufacturer from './components/pages/Manufacturer';
// import Supplier from './components/pages/Supplier';
// import Retailer from './components/pages/Retailer';
// import { Routes, Route } from 'react-router-dom';
// import RequireAuth from './components/RequireAuth';
// import Layout from './components/Layout';
// import AddAccount from './components/pages/AddAccount';
// import ManageAccount from './components/pages/ManageAccount';
// import AddProduct from './components/pages/AddProduct';
// import Profile from './components/pages/Profile';
// import UpdateProduct from './components/pages/UpdateProduct';
// import Product from './components/pages/Product';
// import AuthenticProduct from './components/pages/AuthenticProduct';
// import FakeProduct from './components/pages/FakeProduct';
// import UpdateProductDetails from './components/pages/UpdateProductDetails';
// import Register from "./components/home/Register";


// function App() {

//   return (
//     <Routes>
//       <Route path='/' element={<Layout />}>

//         {/* public routes */}
//         <Route exact path='/' element={< Home />}></Route>
//         <Route exact path='/login' element={< Login />}></Route>
//         <Route exact path='/scanner' element={< ScannerPage />}></Route>
//         <Route exact path='/product' element={< Product />}></Route>
//         <Route exact path='/authentic-product' element={< AuthenticProduct />}></Route>
//         <Route exact path='/fake-product' element={< FakeProduct />}></Route>
//         <Route path="/register" element={<Register />} />


//         {/* private routes */}
//         <Route element={<RequireAuth allowedRoles={["admin"]} />}>
//           <Route exact path='/admin' element={< Admin />}></Route>
//           <Route exact path='/add-account' element={< AddAccount />}></Route>
//           <Route exact path='/manage-account' element={< ManageAccount />}></Route> 

//         </Route>

//         <Route element={<RequireAuth allowedRoles={["manufacturer", "supplier", "retailer"]} />}>
//           <Route exact path='/profile' element={< Profile />}></Route>
//           <Route exact path='/update-product' element={< UpdateProduct />}></Route>
//           <Route exact path='/update-product-details' element={< UpdateProductDetails />}></Route>
//         </Route>

//         <Route element={<RequireAuth allowedRoles={["supplier", "retailer"]} />}>
//           <Route exact path='/update-product' element={< UpdateProduct />}></Route>
//           <Route exact path='/update-product-details' element={< UpdateProductDetails />}></Route>
//         </Route>

//         <Route element={<RequireAuth allowedRoles={["manufacturer"]} />}>
//           <Route exact path='/manufacturer' element={< Manufacturer />}></Route>
//           <Route exact path='/add-product' element={< AddProduct />}></Route>
//         </Route>

//         <Route element={<RequireAuth allowedRoles={["supplier"]} />}>
//           <Route exact path='/supplier' element={< Supplier />}></Route>        
//         </Route>

//         <Route element={<RequireAuth allowedRoles={["retailer"]} />}>
//           <Route exact path='/retailer' element={< Retailer />}></Route>
//         </Route>

//         {/* catch all */}
//         {/* <Route path='*' element={< Missing />}></Route> */}

//       </Route>
//     </Routes>

//   );
// }

// export default App;





import Home from './components/home/Home';
import Login from './components/home/Login';
import ScannerPage from './components/pages/ScannerPage';
import Admin from './components/pages/Admin';
import Manufacturer from './components/pages/Manufacturer';
import Supplier from './components/pages/Supplier';
import Retailer from './components/pages/Retailer';
import { Routes, Route } from 'react-router-dom';
import RequireAuth from './components/RequireAuth';
import Layout from './components/Layout';
import AddAccount from './components/pages/AddAccount';
import ManageAccount from './components/pages/ManageAccount';
import AddProduct from './components/pages/AddProduct';
import Profile from './components/pages/Profile';
import UpdateProduct from './components/pages/UpdateProduct';
import Product from './components/pages/Product';
import AuthenticProduct from './components/pages/AuthenticProduct';
import FakeProduct from './components/pages/FakeProduct';
import UpdateProductDetails from './components/pages/UpdateProductDetails';
import Register from "./components/home/Register";
import FeaturedMedicine from "./components/home/FeaturedMedicine";
import ServicesSection    from "./components/home/ServicesSection";
import GuidesPage from "./components/home/GuidesPage";
import Guide from "./components/home/Guide"; 
import ServicesPage from './components/home/ServicesPage'; 
import Contact from './components/home/Contact';
import VerifyOTP from './components/pages/VerifyOTP';
import User from './components/pages/User';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>

        {/* public routes */}
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/scanner' element={<ScannerPage />} />
        <Route exact path='/product' element={<Product />} />
        <Route exact path='/authentic-product' element={<AuthenticProduct />} />
        <Route exact path='/fake-product' element={<FakeProduct />} />
        <Route path="/register" element={<Register />} />
        <Route exact path="/services" element={<ServicesSection/>} />
        <Route exact path ="/services-page" element={<ServicesPage/>}/>
        <Route exact path ="/contact"   element={<Contact/>} />
         <Route path="/verify-otp" element={<VerifyOTP />} />
         <Route exact path="/user" element={<User />} />


        {/* ⭐ ROUTE for Guide.jsx */}
        <Route exact path="/how-it-works" element={<Guide />} />

        <Route path="/featured-medicines" element={<FeaturedMedicine />} />

        {/* ⭐ ROUTE for Full Guides Page */}
        <Route exact path='/guides' element={<GuidesPage />} />



        {/* private routes... (unchanged) */}
        <Route element={<RequireAuth allowedRoles={["admin"]} />}>
          <Route exact path='/admin' element={<Admin />} />
          <Route exact path='/add-account' element={<AddAccount />} />
          <Route exact path='/manage-account' element={<ManageAccount />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={["manufacturer", "supplier", "retailer","user"]} />}>
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/update-product' element={<UpdateProduct />} />
          <Route exact path='/update-product-details' element={<UpdateProductDetails />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={["supplier", "retailer"]} />}>
          <Route exact path='/update-product' element={<UpdateProduct />} />
          <Route exact path='/update-product-details' element={<UpdateProductDetails />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={["manufacturer"]} />}>
          <Route exact path='/manufacturer' element={<Manufacturer />} />
          <Route exact path='/add-product' element={<AddProduct />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={["supplier"]} />}>
          <Route exact path='/supplier' element={<Supplier />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={["retailer"]} />}>
          <Route exact path='/retailer' element={<Retailer />} />
        </Route>

      </Route>
    </Routes>
  );
}

export default App;
