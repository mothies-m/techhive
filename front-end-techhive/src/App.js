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
    axios.post(`http://localhost:3000/item/add`, {name, email, mobNumb})
        .then(alert("added"))
  }

  function getdata(){
    axios.get('http://localhost:3000/item')
      .then(res => {
       setInfos(res.data);
    })
  }
  return (
    <div className="">
      <div className="flex justify-center p-10 mb-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
        <h1 className="font-bold font-mono text-2xl text-white subpixel-antialiased" >Featching Contact Data</h1>
      </div>
      <div className='flex flex-row flex-wrap'>
            <div className='flex p-2'>
              <label htmlFor="UserName" className="pr-2">Username</label>
                <input htmlFor="userNameInput" type="text" className=""/>

            </div>
            <div className='flex p-2 ml-10' >
              <label htmlFor="UserEmail" className="pr-2">Email</label>
                <input htmlFor="userEmailInput" type="text" className=""/>

            </div>
            <div className='flex p-2'> 
              <label htmlFor="UserPhoneNumber" className="pr-2">Phone Number</label>
                <input htmlFor="userPhoneNumberInput" type="number" className="" />
            </div>
            <div className='flex p-2'>
              <label htmlFor="country">Select Country</label>
                <select className='countries'>
                    <option value="">--Select below--</option>
                    <option value="ind">India</option>
                    <option value="us">USA</option>
                </select>
            </div>
            <div className='flex p-2'>
              <label htmlFor="country">Select State</label>
                <select className='countries'>
                    <option value="">--Select below--</option>
                    <option value="texas">Texas</option>
                    <option value="florida">Florida</option>
                    <option value="TN">TamilNadu</option>
                    <option value="KR">Kerala</option>
                </select>
            </div>
      </div>
      <div className='flex justify-normal'>
        <button className='p-2 m-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>+ Add</button>
      </div>
    </div>
  );
}
