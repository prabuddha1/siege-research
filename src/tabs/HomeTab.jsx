
import PublicationsTimeline from './PublicationsTimeline';

import './HomeTab.css';
import React from 'react';
import { Chrono } from "react-chrono";

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
   const [news, setNews] = React.useState([]);
   const [newsKey, setNewsKey] = React.useState(0);

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

              setPublications(data);

              const newsCards = data.map(publication => ({
                title: publication.date,
                cardTitle: publication.name,
                cardDetailedText: publication.description,
              }));
          
              // Sort newsCards by date ascending
              setNews(prevNews => {
                // Concatenate existing news with new newsCards
                const updatedNews = [...prevNews, ...newsCards];
        
                // Sort updatedNews by date ascending
                updatedNews.sort((a, b) => new Date(a.title) - new Date(b.title));
        
                return updatedNews;
              });
              setNewsKey(prevKey => prevKey + 1); 

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

    const awardsFileRef = ref(storage, 'awards.json');
      React.useEffect(() => {
        // Get the download URL of the file
        getDownloadURL(awardsFileRef)
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

                const newsCards = data.map(publication => ({
                  title: publication.date,
                  cardTitle: publication.name,
                  cardDetailedText: publication.description,
                }));
            
                // Sort newsCards by date ascending
                setNews(prevNews => {
                  // Concatenate existing news with new newsCards
                  const updatedNews = [...prevNews, ...newsCards];
          
                  // Sort updatedNews by date ascending
                  updatedNews.sort((a, b) => new Date(a.title) - new Date(b.title));
          
                  return updatedNews;
                });
                setNewsKey(prevKey => prevKey + 1); 

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




    let [IOTindex, setIOTindex] = React.useState(0);
    let [SecurityIndex, setSecurityindex] = React.useState(0);
    let [AIindex, setAIindex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
          setIOTindex((prevIndex) => (prevIndex + 1) % publications.filter(pub => pub["tag"]=="IOT").length);
          setSecurityindex((prevIndex) => (prevIndex + 1) % publications.filter(pub => pub["tag"]=="Security").length);
          setAIindex((prevIndex) => (prevIndex + 1) % publications.filter(pub => pub["tag"]=="AI").length);
        }
        , 5000);

        return () => clearInterval(interval);
      }, [publications]);
        

  return (
    <div className="home-container">

      <div className="top-lab-display">
        <img className="lab-name-display" src="https://i.imgur.com/yn4CCBv.png"></img>
     
        <img className="top-display-image" alt="lab" src="https://i.imgur.com/jyCBncl.jpeg"></img>
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
      
                <SlidingImage></SlidingImage>

                <h3 className="lab-description">
                  
                  <p>Welcome to the Secure and Intelligent Edge Research Lab. We are a community of young academic researchers unified together by our desire to make an impact in the world around us. 
                  </p>
<p>We work in the University of Maine Electrical and Computer Engineering School.</p>

Our lab works to combine multiple areas of experimentation and research; from edge devices and cybersecurity to artificial intelligence and
</h3>
          
            </div>

            <div className={`${researchAreas == 'AI' ? 'about-display-tab' : 'hiddenTab'}`}>
                {publications.filter(pub => pub["tag"]=="AI").splice(AIindex,1).map(pub => (
                    <div className="publication">
                        <h4 className="about-tagline">{pub.name}</h4>

                        <img className="lab-display-image" src={pub.image}></img>


                        <h3 className="lab-description">{pub.description}</h3>
                    </div>
                ))}
              
            </div>

            <div className={`${researchAreas == 'IoT' ? 'about-display-tab' : 'hiddenTab'}`}>
                 {publications.filter(pub => pub["tag"]=="IOT").splice(IOTindex,1).map(pub => (
                    <div className="publication" key={pub.name}>
                        <h4 className="about-tagline">{pub.name}</h4>

                        <img className="lab-display-image" src={pub.image}></img>


                        <h3 className="lab-description">{pub.description}</h3>

                    </div>
                ))}
            </div>

            <div className={`${researchAreas == 'Security' ? 'about-display-tab' : 'hiddenTab'}`}>
                   {publications.filter(pub => pub["tag"]=="Security").splice(SecurityIndex,1).map(pub => (
                    <div className="publication" key={pub.name}>
                        <h4 className="about-tagline">{pub.name}</h4>

                        <img className="lab-display-image" src={pub.image}></img>


                        <h3 className="lab-description">{pub.description}</h3>

                    </div>
                ))}
            </div>
          </div>

      </div>

      <div className="bottom-lab-display">
        <Chrono key={newsKey} items={news} mode="VERTICAL_ALTERNATING" 
                theme={{
            primary: 'black',
            secondary: 'orange',
            cardBgColor: 'white',
            titleColor: 'grey',
            titleColorActive: 'black',
          }}/>
       

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
