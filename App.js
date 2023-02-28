import { useState, useEffect } from "react";
import product_identification from "./artifacts/contracts/product_identification.sol/product_identification.json";
import { ethers } from "ethers";
import './App.css'; 
function App() {
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [initialValue1,updatedValue1] = useState(null);
  const [initialValue2,updatedValue2] = useState(null);
  const [initialValue3,updatedValue3] = useState(null);
  const [manu1,manu2] = useState(null);
  const [pro1,pro2] = useState(null);
  const [ret1,ret2] = useState(null);
  const [cust1,cust2] = useState(null);
  useEffect(() => {
    const loadProvider = async () => {
      let contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
      const url = "http://localhost:8545";
      const provider = new ethers.providers.JsonRpcProvider(url);
      const contract = new ethers.Contract(
        contractAddress,
        product_identification.abi,
        provider
      );
      setContract(contract);
      setProvider(provider);
      // console.log(contract);
    };
    loadProvider();
  }, []);
   const verifyManufacturer = async () => {
    const input = document.querySelector("#m");
    const signer = contract.connect(provider.getSigner());
    signer.VerifyManufacturer(input.value);
    const output = await contract.manufacturerOutput();
    manu2(output);
    };
    const ProductDetails = async () => {
    const input1 = document.querySelector("#p1");
    const input2 = document.querySelector("#p2");
    const input3 = document.querySelector("#p3");
    const input4 = document.querySelector("#p4");
    const input5 = document.querySelector("#p5");
    const input6 = document.querySelector("#p6");
    const input7 = document.querySelector("#p7");
    const input8 = document.querySelector("#p8");
    const signer = contract.connect(provider.getSigner());
    signer.createProduct(input1.value,input2.value,input3.value,input4.value,input5.value,input6.value,input7.value,input8.value);
    const output =await contract.proOutput();
    pro2(output);
  };
  const RetailerDetails = async () => {
    const input1 = document.querySelector("#r1");
    const input2 = document.querySelector("#r2");
    const input3 = document.querySelector("#r3");
    const input4 = document.querySelector("#r4");
    const signer = contract.connect(provider.getSigner());
    signer.createRetailer(input1.value,input2.value,input3.value,input4.value);
    const output = await contract.retOutput();
    ret2(output);
  };
  const check = async () => {
    const input1 = document.querySelector("#f1");
    const input2 = document.querySelector("#f2");
    const signer = contract.connect(provider.getSigner());
    signer.check_fake(input1.value,input2.value);
    const output1 = await contract.getValue1();
    updatedValue1(output1);
    const output2 = await contract.getValue2();
    updatedValue2(output2);
    const output3 = await contract.getValue3();
    updatedValue3(output3);
  };
  const CustomerDetails = async () => {
    const input1 = document.querySelector("#c1");
    const input2 = document.querySelector("#c2");
    const input3 = document.querySelector("#c3");
    const input4 = document.querySelector("#c4");
    const signer = contract.connect(provider.getSigner());
    signer.create_customer(input1.value,input2.value,input3.value,input4.value);
    const output = await contract.custOutput();
    cust2(output);
  };
  return (
    
    <div className="App" id="full">
     <div id="heading">
      <p id="title">ProductIdentification</p>
      <p id="dapp">A Blockchain Decentralized Application</p>
     </div>
     <div id="fake">
      <h1 id="cf">Check Fake</h1>
      <label id="pid">Enter Product Id</label>
      <input type="text" id="f1"></input><br/>
      <br/>
      <label id="sno">Enter Serial Number</label>
      <input type="text" id="f2"></input><br/>
      <br/>
      <button onClick={check} id="click">Click</button>
      <p>{initialValue1}</p>
      <p>{initialValue2}</p>
      <p>{initialValue3}</p>
      </div>
     <div id="manuproduct">
      <div id="manu">
        <h1>Verify Manufacturer</h1>
        <input className="input" type="text" id="m"></input>
        <button className="button" onClick={verifyManufacturer}>
          Verify
        </button>
        <h3>{manu1}</h3>
      </div>
      <div id="product">
      <h1>Create Product</h1>
      <label>Enter Brand of product</label>
      <input type="text" id="p1"></input><br/>
      <label>Enter Product Id</label>
      <input type="text" id="p2"></input><br/>
      <label>Enter Status</label>
      <input type="text" id="p3"></input><br/>
      <label>Enter Manufacturer Id</label>
      <input type="text" id="p4"></input><br/>
      <label>Enter Manufacturer Name</label>
      <input type="text" id="p5"></input><br/>
      <label>Enter Manufacturer Location</label>
      <input type="text" id="p6"></input><br/>
      <label>Enter serial no</label>
      <input type="text" id="p7"></input><br/>
      <label>Enter Retailer Id</label>
      <input type="text" id="p8"></input><br/>
      <button onClick={ProductDetails}>Submit</button>
      <h3>{pro1}</h3>
      </div>
      <div id="retailer">
      <h1>Create Retailer</h1>
      <label>Enter Name</label>
      <input type="text" id="r1"></input><br/>
      <label>Enter Phone Number</label>
      <input type="text" id="r2"></input><br/>
      <label>Enter Location</label>
      <input type="text" id="r3"></input><br/>
      <label>Enter Retailer Id</label>
      <input type="text" id="r4"></input><br/>
      <button onClick={RetailerDetails}>Submit</button>
      <h3>{ret1}</h3>
      </div>
      </div>
      
      <div id="customer">
      <h1>Create Customer</h1>
      <label>Enter Name of Customer</label>
      <input type="text" id="c1"></input><br/>
      <label>Enter Customer Id</label>
      <input type="text" id="c2"></input><br/>
      <label>Enter Location </label>
      <input type="text" id="c3"></input><br/>
      <label>Enter Serial Number</label>
      <input type="text" id="c4"></input><br/>
      <button onClick={CustomerDetails}>Submit</button>
      <h3>{cust1}</h3>
      </div>
      
    </div>
  );
}

export default App;
