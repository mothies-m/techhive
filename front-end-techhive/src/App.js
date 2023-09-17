import React, { Component } from 'react';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector'; 
import { useState } from 'react';
import axios from 'axios';

export default function App() {
  const [infos,setInfos] = useState("");

  function addsubmit(e){
    e.preventDefault();
    const name = e.target.userNameInput.value;
    const email = e.target.userEmailInput.value;
    const mobNumb = e.target.userPhoneNumberInput.value;
    axios.post(`http://localhost:3001/contact/add`, {name, email, mobNumb})
        .then(alert("added"))
  }

  function getdata(){
    axios.get('http://localhost:3001/contact')
      .then(res => {
       setInfos(res.data);
    })
  }
  return (
    <div className="">
      <div className="flex justify-center p-10 mb-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
        <h1 className="font-bold font-mono text-2xl text-white subpixel-antialiased" >Featching Contact Data</h1>
      </div>
      <div className='flex flex-col'>
            <div className='flex p-4'>
              <label htmlFor="UserName" className="pr-2 font-bold">Username :</label>
                <input htmlFor="userNameInput" type="text" placeholder='Name' className=" bg-cyan-50 rounded"/>

            </div>
            <div className='flex p-4' >
              <label htmlFor="UserEmail" className="pr-2 font-bold">Email :</label>
                <input htmlFor="userEmailInput" type="text" placeholder='Mail' className="bg-cyan-50 rounded"/>

            </div>
            <div className='flex p-4'> 
              <label htmlFor="UserPhoneNumber" className="pr-2 font-bold">Phone Number :</label>
                <input htmlFor="userPhoneNumberInput" type="number" placeholder='Mobile Number' className="bg-cyan-50 rounded" />
            </div>
            <div className='flex p-4'>
              <label htmlFor="country" className="font-bold">Select Country :</label>
                <select className='ml-1 bg-cyan-50 rounded'>
                    <option value="">--Select below--</option>
                    <option value="ind">India</option>
                    <option value="us">USA</option>
                </select>
            </div>
            <div className='flex p-4'>
              <label htmlFor="country" className="font-bold">Select State :</label>
                <select className='ml-1 bg-cyan-50 rounded'>
                    <option value="">--Select below--</option>
                    <option value="texas">Texas</option>
                    <option value="florida">Florida</option>
                    <option value="TN">TamilNadu</option>
                    <option value="KR">Kerala</option>
                </select>
            </div>
      </div>
      <div className='flex justify-normal'>
        <button className='btn btn-success p-2 ml-10 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>+ Add</button>
      </div>
    </div>
  );
}
