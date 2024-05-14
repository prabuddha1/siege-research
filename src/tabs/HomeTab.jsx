
import './HomeTab.css';
import React from 'react';

import SlidingImage from './SlidingImage.jsx';
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

function HomeTab() {

   const [publications, setPublications] = React.useState([]);
   const [researchAreas, setResearchAreas] = React.useState("none");

   const fileRef = ref(storage, 'Publications.json');
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
              setPublications(data);
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


  //  React.useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://127.0.0.1:2204/get_publications');
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const data = await response.json();
  //       setPublications(data);
  //     } catch (error) {
  //       console.error('Failed to fetch publications:', error);
  //     } 
  //   };

  //   fetchData();
  // }, []); // Empty dependency array means this effect runs once on mount



  return (
    <div className="home-container">

      <div className="top-lab-display">
        <img className="lab-name-display" src="https://i.imgur.com/yn4CCBv.png"></img>
     
        <img className="top-display-image" alt="lab" src="https://i.imgur.com/xaqV3Lr.png"></img>
        </div>

        <div className="middle-lab-display">
          <div className="research-areas-display">


            <div className="research-area-container">
              <a className="research-display-link" onClick={() => setResearchAreas("AI")}>
                <div className='research-area-display offset-color2'>
                  <h3>Artificial Intelligence</h3>
                  <img className="research-area-image" src="https://cdn-icons-png.flaticon.com/512/826/826118.png"></img>
                  <h3>Learn More!</h3>
                </div>

              </a>


              <a className="research-display-link" onClick={() => setResearchAreas("IoT")}>
                <div className='research-area-display offset-color1'>
                  <h3>Internet-of-Things</h3>
                  <img className="research-area-image" src="https://cdn-icons-png.flaticon.com/512/2808/2808777.png"></img>
                  <h3>Learn More!</h3>
                </div>
              </a>

              <a className="research-display-link"  onClick={() => setResearchAreas("Security")}>
                <div className='research-area-display offset-color2'>
                  <h3>System Security</h3>
                  <img className="research-area-image" src="https://cdn-icons-png.flaticon.com/512/4152/4152814.png"></img>

                  <h3>Learn More!</h3>
                </div>
              </a>

            </div>


          </div>

          <div className="about-lab-display">

            <div className={`${researchAreas == 'none' ? 'about-display-tab' : 'hiddenTab'}`}>
                {/* <h4 className="about-tagline">Pioneering AI, IoT, and Security</h4> */}
      
                <SlidingImage></SlidingImage>

                <h3 className="lab-description">Prabuddha Chakraborty is an Assistant Professor at the University of Maine. His research interest lies in the intersecting areas of Artificial Intelligence, Internet-of-Things, and system security. He received his PhD in Electrical and Computer Engineering from the University of Florida. He has worked within the Security Software Team at Texas Instruments and the FPGA acceleration R&D team at Xilinx. His research effort has so far led to more than 20 peer-reviewed journal and conference articles published or accepted in prestigious venues such as Nature Scientific Reports, IEEE Internet of Things Journal, Neural Computing and Applications, IEEE Transactions on Information Forensics and Security, International Test Conference, and Design Automation Conference</h3>
          
            </div>

            <div className={`${researchAreas == 'AI' ? 'about-display-tab' : 'hiddenTab'}`}>
                <h4 className="about-tagline">Artificial Intelligence</h4>
      
                <img className="lab-display-image" src="https://www.cnet.com/a/img/resize/9a13e1e92a7b66cbff9db2934b3f66bf01a4afb6/hub/2023/08/24/821b0d86-e29b-4028-ac71-ef63ca020de8/gettyimages-1472123000.jpg?auto=webp&fit=crop&height=675&width=1200"></img>

                <h3 className="lab-description">Artificial Intelligence (AI) is a branch of computer science that focuses on creating intelligent machines capable of performing tasks that typically require human intelligence. It involves the study and development of algorithms and models that enable computers to understand, reason, learn, and make decisions. AI has applications in various fields, including natural language processing, computer vision, robotics, and data analysis.</h3>
          
            </div>

            <div className={`${researchAreas == 'IoT' ? 'about-display-tab' : 'hiddenTab'}`}>
                <h4 className="about-tagline"> Internet of Things</h4>

                <img className="lab-display-image" src="https://assets.datamation.com/uploads/2021/04/IOT-4.png"></img>

                <h3 className="lab-description">The Internet of Things (IoT) refers to the network of physical devices, vehicles, appliances, and other objects embedded with sensors, software, and connectivity, enabling them to collect and exchange data. IoT allows for the integration of the physical world with the digital world, creating opportunities for automation, monitoring, and control. It has applications in various domains, including smart homes, healthcare, transportation, and industrial automation.</h3>
          
            </div>

            <div className={`${researchAreas == 'Security' ? 'about-display-tab' : 'hiddenTab'}`}>
                <h4 className="about-tagline">Security</h4>
      
                <img className="lab-display-image" src="https://www.cnet.com/a/img/resize/9a13e1e92a7b66cbff9db2934b3f66bf01a4afb6/hub/2023/08/24/821b0d86-e29b-4028-ac71-ef63ca020de8/gettyimages-1472123000.jpg?auto=webp&fit=crop&height=675&width=1200"></img>


                <h3 className="lab-description">System security involves protecting computer systems and networks from unauthorized access, use, disclosure, disruption, modification, or destruction. It encompasses various measures, such as authentication, encryption, access control, and intrusion detection, to ensure the confidentiality, integrity, and availability of information. Security is crucial in today's digital world to safeguard sensitive data and prevent cyber threats and attacks.</h3>
          
            </div>
          </div>

      </div>

      <div className="bottom-lab-display">
        <div className="research-display">
            <h3>Research</h3>

            <div className="research">
                <img className="research-image" src="https://i.imgur.com/hgDQPdb.png"></img>
            </div>

            <div className="research">
                <img className="research-image" src="https://i.imgur.com/Wu62TI7.png"></img>
            </div>
        </div>

        <div className="publications-display">
            <h3>Publications</h3>

            <div id="publication-list">
                {publications.map(pub => (
                    <div className="publication">
                        <a key={pub._id} href={pub.url} className="publication-title">{pub.name}</a>
                    </div>
                ))}
              
            </div>
        </div>

      </div>

      <div className="recent-achievements">
          <h2 className="section-title">Recent Achievements & Notable Contributions</h2>

          <div className="achievements-container">
            <h3>Selected Achievements</h3>
            <ul>
              <li>TTTC’s E. J. McCluskey Best Doctoral Thesis 2022 Award</li>
              <li>Top Picks in Hardware and Embedded Security 2021, IEEE HSTTC</li>
              <li>Innovation of the Year Award, University of Florida, 2022</li>
              <li>Featured work on IEEE Spectrum for innovative electric vehicle charging technologies</li>
            </ul>

            <h3>Notable Research Contributions</h3>
            <ul>
              <li>HASTE: Software Security Analysis for Timing Attacks on Clear Hardware</li>
              <li>SAIL: Analyzing Structural Artifacts of Logic Locking Using Machine Learning</li>
              <li>MAGIC: Machine Learning Guided Image Compression for IoT</li>
              <li>BINGO: Brain-Inspired Learning Memory Network</li>
            </ul>
          </div>
      </div>
      
      <div className="site-footer">
          <h4>Contact Information</h4>
          <p>Email: <a href="mailto:prabuddha@maine.edu">prabuddha@maine.edu</a></p>
          <p>Explore More: <a href="https://www.google.com/scholar?q=Prabuddha+Chakraborty">Google Scholar Profile</a></p>
          <p>Download: <a href="ProfileResumeLink">Resume</a> (updated 12/10/2023)</p>
          <h3>Site Developed by Sophie Walden</h3>
        </div>


    </div>
  );
}

export default HomeTab;
