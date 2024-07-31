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
const storage = getStorage(app);

const CoverImage = () => {
    const [images, setImages] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
      const fileRef = ref(storage, 'coverImages.json');
  
      const fetchData = async () => {
        try {
          const url = await getDownloadURL(fileRef);
          const response = await fetch(url);
  
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
  
          const data = await response.json();
  
          const imageData = data.map((item, index) => ({
            original: item,
            thumbnail: item,
            alt: `Image ${index}`,
            id: index
          }));
  
          setImages(imageData);
          setLoading(false); // Set loading to false once images are loaded
        } catch (error) {
          console.error('Failed to fetch cover images:', error);
          setLoading(false); // Set loading to false even if there's an error
        }
      };
  
      fetchData();
    }, []);

    const renderImage = (item) => {
        return (
            <div style={{ maxWidth: '100vw', margin: '0 auto' }}>
                <img
                    src={item.original}
                    alt={item.alt}
                    style={{ width: '100vw', height: '100vh', objectFit: 'cover' , borderRadius: "5px"}}
                />
            </div>
        );
    };

    return (
      <div>
      {loading ? (
        <img className="image-thumbnail" src="https://i.imgur.com/10GR1C3.jpeg" alt="Temporary cover" />
      ) : (
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
      )}
    </div>
        
    );
};

export default CoverImage;
