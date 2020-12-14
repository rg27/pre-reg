import React, { useState } from "react";
import macbook from '../images/yee.png'

import {
  Card,
  CardBody,
  Button, 
  Form, 
  FormGroup, 
  Label, 
  Input,
} from 'reactstrap';

const Main = () => {
  const [data, setData] = useState ({
    name:"",
    emailaddress:"",
    account:"",
    employeeID:"",
    going:""
  });

  const {name,emailaddress,account,employeeID,going} = data;

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value})
  }
 
const handleSubmit = async (e) => {
  e.preventDefault();
  
  try{
    const response = await fetch(
        "https://v1.nocodeapi.com/rey12/google_sheets/hezCXdcCJhiiRoMG?tabId=Sheet1",
      {
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify([
          [name,emailaddress,account,employeeID,going, new Date().toLocaleString()],
        ]),
    }
  );
    await response.json();
    setData({ ...data, name: "", emailaddress: "",account: "",employeeID: "", going: ""});
  }catch(err){
    console.log(err)
  }
}

return (

    <div class="container pt-0 md:pt-2 mx-auto flex flex-wrap flex-col md:flex-row items-center grid grid-cols-3 gap-4">
        <Form class="bg-gray-900  w-full shadow-lg rounded-lg px-10 pt-2 pb-2 mb-0" onSubmit={handleSubmit}>
            <div class="mb-0">
                <label class="block text-blue-300 py-1 font-bold mb-0" for="name">
                    Name 
                </label>
                <FormGroup >
                <div  class="shadow appearance-none border rounded w-full p-1 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out">
                    <input 
                    required="true"
                    type="text" 
                    name="name" 
                    class="shadow appearance-none border rounded w-full p-1 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                    placeholder="Full Name"
                    value={name}
                    onChange={handleChange} 
                    />
                </div>
                </FormGroup>
            </div>

            <div class="mb-0">
                <label class="block text-blue-300 py-1 font-bold mb-0" for="emailaddress">
                    Email 
                </label>
                <FormGroup>
                <div  class="shadow appearance-none border rounded w-full p-1 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out">
                    <input 
                        required="true"
                        class="shadow appearance-none border rounded w-full p-1 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                        type="text" 
                        name="emailaddress" 
                        placeholder="Company Email"
                        value={emailaddress}
                        onChange={handleChange} 
                    />
                </div>
                </FormGroup>
            </div>

            <div class="mb-0">
                <label class="block text-blue-300 py-1 font-bold mb-0" for="employeeID">
                    Employee ID
                </label>  

                <FormGroup>
                <div  class="shadow appearance-none border rounded w-full p-1 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out">
                    <input
                    required="true"
                    class="shadow appearance-none border rounded w-full p-1 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                    type="text" 
                    name="employeeID" 
                    placeholder="Employee ID"
                    value={employeeID}
                    onChange={handleChange} 
                    />
                </div>
                </FormGroup>
            </div>

            <div class="mb-0">
                <label class="block text-blue-300 py-1 font-bold mb-0" for="account">
                    Account 
                </label>  

                <FormGroup>
                <div  class="shadow appearance-none border rounded w-full p-1 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out">
                    <select 
                        type='select' 
                        required="true"  
                        value={account}   
                        onChange={handleChange}   
                        name="account" 
                        id="exampleAccount"
                        class="shadow appearance-none border rounded w-full p-1 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                    >
                    <option  value=" ">--Choose Account--</option>
                    <option value="ADMIN">ADMIN</option>
                    <option value="B2B">B2B</option>
                    <option value="BB">BB</option>
                    <option value="BIZ DEV">BIZ DEV</option>
                    <option value="CLX">CLX</option>
                    <option value="COMPLIANCE & REGULATORY">COMPLIANCE & REGULATORY</option>
                    <option value="CSE">CSE</option>
                    <option value="DATA CORE">DATA CORE</option>
                    <option value="DENVER">DENVER</option>
                    <option value="DFX">DFX</option>
                    <option value="FACILITIES">FACILITIES</option>
                    <option value="FINANCE">FINANCE</option>
                    <option value="HR Dept">HR Dept</option>
                    <option value="IT Dept">IT Dept</option>
                    <option value="PBC">PBC</option>
                    <option value="PLANO">PLANO</option>
                    <option value="RB">RB</option>
                    <option value="RECRUITMENT">RECRUITMENT</option>
                    <option value="Security">Security</option>
                    <option value="SFY">SFY</option>
                    <option value="SG">SG</option>
                    <option value="TRNG">TRNG</option>
                    <option value="UTILITY">UTILITY</option>
                    <option value="VOC">VOC</option>
                    <option value="WFXMD">WFXMD</option>
                    <option value="WFXMN">WFXMN</option>
                    <option value="XMT">XMT</option>
                    <option value="Others">Others</option>
                    </select>
                </div>
                </FormGroup>
            </div>

        
            <div class="mb-0">
                <label class="block text-blue-300 py-1 font-bold mb-0" for="going">
                    Going? 
                </label>  
                <FormGroup>
                <div  class="shadow appearance-none border rounded w-full p-1 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out">
                <select 
                        required="true"
                        class="shadow appearance-none border rounded w-full p-1 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                        type="select" 
                        name="going" 
                        placeholder="Going?"
                        value={going}
                        onChange={handleChange} 
                    >
                    <option  value=" ">--Choose--</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="Maybe">Maybe</option>
                    </select>
                </div>
                 
                </FormGroup>
            </div>
            <div class="flex items-center justify-between pt-4">
            <Button className="feedbutton">Submit</Button>
        </div>
      </Form>
   
        <div class="w-full xl:w-5/5 p-1 col-span-2">
          <img 
          class="mx-auto  md:w-5/5 transform -rotate-2 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6 h-80"  
          src={macbook} 
          />
        </div>
    </div>

  );
};

export default Main;