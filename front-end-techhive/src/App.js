import React, { Component } from 'react';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector'; 
import { useState } from 'react';
import axios from 'axios';

export default function App() {
  const [infos,setInfos] = useState("");

  function getdata(){
    axios.get('http://localhost:3001/contact')
      .then(res => {
       setInfos(res.data);
    console.log(infos);
  })
}

  function addsubmit(e){
    e.preventDefault();
    const name = e.target.userNameInput.value;
    const email = e.target.userEmailInput.value;
    const mobNumb = e.target.userPhoneNumberInput.value;

    axios.post(`http://localhost:3001/contact/add`, {name, email, mobNumb})
    .then(alert("added"))
    .catch(err => alert(err))
  }
  var allData = [];

Object.keys(infos).forEach(function(key) {
        allData.push(infos[key]);
    });
    
const displayData = (
    allData.map((item) => {
          return (
          <>
          <div className='flex flex-row justify-between mt-12'>
            <div className='flex ml-20 p-8 bg-cyan-100 rounded'>
              <p className='font-bold justify-center'>User Name :</p>
                {item.name}
            </div>
            <div className='flex p-8 bg-cyan-100 rounded'>
              <p className='font-bold justify-center'>User email :</p>
                {item.email}
            </div>
            <div className='flex mr-20 p-8 bg-cyan-100 rounded'>
                <p className='font-bold justify-center'>User Number :</p>
                {item.mobNumb}
            </div>
          </div>
          </>
          )
    }));
  
  
  return(
    <form onSubmit= {addsubmit}>
      <div className="flex justify-center p-10 mb-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
        <h1 className="font-bold font-mono text-2xl text-white subpixel-antialiased" >Featching Contact Data</h1>
      </div>
      <div className='flex flex-col'>
            <div className='flex p-4'>
              <label htmlFor="UserName" className="pr-2 font-bold">Username :</label>
                <input name="userNameInput" type="text" placeholder='Name' className=" bg-cyan-50 rounded"/>

            </div>
            <div className='flex p-4' >
              <label htmlFor="UserEmail" className="pr-2 font-bold">Email :</label>
                <input name="userEmailInput" type="text" placeholder='Mail' className="bg-cyan-50 rounded"/>

            </div>
            <div className='flex p-4'> 
              <label htmlFor="UserPhoneNumber" className="pr-2 font-bold">Phone Number :</label>
                <input name="userPhoneNumberInput" type="number" placeholder='Mobile Number' className="bg-cyan-50 rounded" />
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
    <div className='flex justify-between'>
        <button className='p-2 ml-10 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>+ Add</button>
    </div>
      {displayData}
      <div className='flex justify-center'>
        <button type="button" onClick={getdata} className='px-20 my-8 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Get Data</button>
      </div>
    </form>
  );
}
