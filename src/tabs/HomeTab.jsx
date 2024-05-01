
import './HomeTab.css';
import React from 'react';

function HomeTab() {

   const [publications, setPublications] = React.useState([]);

   React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:2204/get_publications');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPublications(data);
      } catch (error) {
        console.error('Failed to fetch publications:', error);
      } 
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount



  return (
    <div className="home-container">

      <div className="top-lab-display">
        <h3>Welcome to the IOT Lab!</h3>
        <img alt="lab" src="https://i.imgur.com/xaqV3Lr.png"></img>
      </div>

      <div className="middle-lab-display">
        <div className="research-areas-display">
            <h2 className="research-area-title">Research Areas</h2>

            <div className="research-area-container">
                <div className='research-area-display offset-color2'>
                    <h3>Artificial Intelligence</h3>
                    <img className="research-area-image" src="https://static.vecteezy.com/system/resources/previews/010/518/719/original/artificial-intelligence-ai-processor-chip-icon-symbol-for-graphic-design-logo-website-social-media-mobile-app-ui-illustration-vector.jpg"></img>
                    <h3>Learn More!</h3>
                </div>
            

                <div className='research-area-display offset-color1'>
                    <h3>Internet-of-Things</h3>
                    <img className="research-area-image" src="https://cdn-icons-png.flaticon.com/512/2808/2808777.png"></img>
                    <h3>Learn More!</h3>
                </div>


                <div className='research-area-display offset-color2'>
                    <h3>System Security</h3>
                    <img className="research-area-image" src="https://cdn-icons-png.flaticon.com/512/4152/4152814.png"></img>
                    
                    <h3>Learn More!</h3>
                </div>
            </div>
           
            
        </div>

        <div className="about-lab-display">
            <h2 className="about-header">About The IOT Lab</h2>
            <h4 className="about-tagline">Leading the Charge: Pioneering AI, IoT, and Security</h4>
        
            <img id="about-image" src="https://media.licdn.com/dms/image/D4E22AQF-_wKiSYKHeg/feedshare-shrink_800/0/1712699163566?e=2147483647&v=beta&t=Xh6PR84dUdIJy7jy6sviZE7bzJmjZxizQvw0rEw-Lxk"></img>

            <h3 className="lab-description">Prabuddha Chakraborty is an Assistant Professor at the University of Maine. His research interest lies in the intersecting areas of Artificial Intelligence, Internet-of-Things, and system security. He received his PhD in Electrical and Computer Engineering from the University of Florida. He has worked within the Security Software Team at Texas Instruments and the FPGA acceleration R&D team at Xilinx. His research effort has so far led to more than 20 peer-reviewed journal and conference articles published or accepted in prestigious venues such as Nature Scientific Reports, IEEE Internet of Things Journal, Neural Computing and Applications, IEEE Transactions on Information Forensics and Security, International Test Conference, and Design Automation Conference</h3>
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
      
    </div>
  );
}

export default HomeTab;