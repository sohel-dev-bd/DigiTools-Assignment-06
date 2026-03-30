import { useState } from "react";
import Banner from "./component/Banner";
import Cart from "./component/Cart";
import Footer from "./component/Footer";
import Models from "./component/Models";
import NavBar from "./component/NavBar";
import { ToastContainer } from 'react-toastify'
import Count from "./component/Count";

const getModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
};

const modelPromise = getModels();

function App() {
  const [activeTab, setActiveTab] = useState("model");
  const [carts, setCarts] = useState([])



  return (
    <>
      <NavBar />

      <Banner />

      <Count/>

      {/* name of each tab group should be unique */}

          <div className="text-center mt-14">
        <h2 className="text-5xl font-bold">Premium Digital Tools</h2>
        <p>Choose from our curated collection of premium digital products designedto boost your productivity and creativity.</p>
      </div>

      <div className="tabs tabs-box justify-center mt-10">
        <input 
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40 font-extrabold mx-5 text-sm bg-[#9514FA] hover:bg-red-500 transition-all"
          aria-label="Models"
          onClick={() => setActiveTab("model")}
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40 font-extrabold text-sm bg-none hover:bg-red-500 transition-all"
          aria-label={`Cart (${carts.length})`}
          onClick={() => setActiveTab("cart")}
        />
      </div>


      {activeTab === "model" && <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts}/>}

      {activeTab === "cart" && <Cart  carts={carts} setCarts={setCarts}/>}

      
      <Footer />

       <ToastContainer/>
    </>
  );
}

export default App;
