import React from 'react';
import './personalinfo.css';

const MyInfos = {
  TTL: "Bandung, 02 September 2002",
  Gender: "Perempuan",
  TinggiBadan: "150 cm",
  BeratBadan: "40 kg",
  StatusPernikahan: "Belum Menikah",
  Whatsapp: "+62 857 2430 5747",
  Email: "sriseptiani209@gmail.com",
};

const PersonalInfo = () => {
    return (
      <div className="container mx-auto p-2 text-center pt-20">
      <h2 className="text-xl font-bold mb-4 text-center text-black-600">Personal Info</h2>
      <div className="grid grid-cols-12 gap-1 p-4">
        <ul className="col-span-12 md:col-span-4">
          {Object.entries(MyInfos).map(([key, value]) => (
            <li key={key} className="flex justify-between border-b py-2">
              <span className="font-medium">{key.replace(/([A-Z])/g, ' $1')}: </span>
              <span>{value}</span>
            </li>
          ))}
        </ul>
      </div>
      </div>
    );
  };
  
  export default PersonalInfo;