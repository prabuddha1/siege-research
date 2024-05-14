
import './HumanTab.css';
import React from 'react';

import StaffCard from './StaffCard';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { ref, getDownloadURL } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhN7k417IE4HdGDtIlAPutebfh8WSlqjk",
  authDomain: "lab-website-f577d.firebaseapp.com",
  projectId: "lab-website-f577d",
  storageBucket: "lab-website-f577d.appspot.com",
  messagingSenderId: "111384155166",
  appId: "1:111384155166:web:ba9fb56f84be67a2a4ca0f",
  measurementId: "G-6245NWRYWG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const storage = getStorage(app);


function HumanTab() {

  const fileRef = ref(storage, 'staff.json');
  React.useEffect(() => {
    // Get the download URL of the file
    getDownloadURL(fileRef)
      .then((url) => {
        // Use the URL to download the file or perform further processing
        console.log("Download URL:", url);

        const fetchData = async () => {
          try {
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();

            console.log(data);
            setStaff(data["staff"]);
          } catch (error) {
            console.error('Failed to fetch publications:', error);
          } 
        };

        fetchData();
      })
      .catch((error) => {
        // Handle any errors
        console.error("Error getting download URL:", error);
      });
  }, []); // Empty dependency array means this effect runs once on mount

  const [staff, setStaff] = React.useState([]);

  //  React.useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://127.0.0.1:2204/get_staff');
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const data = await response.json();
  //       setStaff(data);
  //     } catch (error) {
  //       console.error('Failed to fetch publications:', error);
  //     } 
  //   };

  //   fetchData();
  // }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="human-container">
      {/* <h3 id="human-tab-title">Faculty and Staff</h3> */}
{/* 
        <div id="staff-display">
            {staff.map((item, index) => (
              <StaffCard key={index} name={item["name"]} title={item["title"]} email={item['email']} image={item['image']}></StaffCard>
            ))}

        </div> */}

          <div id="bio-display">
     

            {staff.map((item, index) => (
              <div className={`${item['bio']!=null ? '' : 'hiddenTab'} bio`} key={index}>
                <img className="bio-image" src={item['image']}></img>
                <h4>{item["name"]}</h4>
                <h3>{item["title"]}</h3>
                <h3>{item['email']}</h3>
                <p>{item["bio"]}</p>
              </div>
            ))}
          </div>

         </div>
  );
}

export default HumanTab;
