import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import "./CoverImage.css";

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

const CoverImage = () => {
    const [images, setImages] = React.useState([]);

    const fileRef = ref(storage, 'coverImages.json');
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

              let imageData = [];
              for (let i = 0; i < data.length; i++){
                imageData.push( {original:  data[i],
                    thumbnail: data[i],
                    alt: `Image ${i}`,
                    id: i});
              }
              setImages(data);
              console.log(data);
             

            } catch (error) {
              console.error('Failed to fetch cover images:', error);
            } 
          };

          fetchData();
        })
        .catch((error) => {
          // Handle any errors
          console.error("Error getting download URL:", error);
        });
    }, []); // Empty dependency array means this effect runs once on mount


    const renderImage = (item) => {
        return (
            <div style={{ maxWidth: '40vw', margin: '0 auto' }}>
                <img
                    src={item.original}
                    alt={item.alt}
                    style={{ width: '100%', height: 'auto', maxHeight: '48vh', objectFit: 'cover' , borderRadius: "5px"}}
                />
            </div>
        );
    };

    return (
        <ImageGallery
            items={images}
            showNav={true}
            showThumbnails={false}
            autoPlay={true}
            slideInterval={7000}
            showPlayButton={false}
            showFullscreenButton={false}
            renderItem={renderImage}
        />
    );
};

export default CoverImage;
