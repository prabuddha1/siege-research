
import './HumanTab.css';
import React from 'react';

import StaffCard from './StaffCard';

function HumanTab() {

  const [staff, setStaff] = React.useState([]);

   React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:2204/get_staff');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setStaff(data);
      } catch (error) {
        console.error('Failed to fetch publications:', error);
      } 
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="human-container">
      <h3 id="human-tab-title">Faculty and Staff</h3>

        <div id="staff-display">
            {staff.map((item, index) => (
              <StaffCard key={index} name={item["name"]} title={item["title"]} email={item['email']} image={item['image']}></StaffCard>
            ))}

            {/* <div className="staff-display-row">
                <StaffCard name="Prabuddha Chakraborty" title="Lab Lead" email="prabuddha@maine.edu" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSXwkDpRFXNG8EG553wBPW7Xxoe--u3I3b-8zdy-Oc3A&s"></StaffCard>
                <StaffCard name="Tanzim Mahfuz" title="Doctoral Student" email="tanzim.mahfuz@maine.edu" image="https://media.licdn.com/dms/image/C5603AQHWW9-44qQMAw/profile-displayphoto-shrink_400_400/0/1636832320122?e=1718236800&v=beta&t=4wRDiuHAu2V9c_ctNrleObEjOCaYt29a3YNTxYyLLAA"></StaffCard>
                <StaffCard name="Tasneem Suha" title="Doctoral Student" email="tasneem.suha@maine.edu" image="https://media.licdn.com/dms/image/C5603AQHIYqj4_VzG9Q/profile-displayphoto-shrink_400_400/0/1659473672610?e=1718236800&v=beta&t=43nVPDYDWyzwaZv-yjWyYMr3ki9_LTJeJLlfMDW4_pQ"></StaffCard>
            </div>

            <div className="staff-display-row">
                <StaffCard name="Md Hafizur Rahman" title="Doctoral Student" email="hafizur.rahman@maine.edu" image="https://scholar.googleusercontent.com/citations?view_op=view_photo&user=sB5h9xUAAAAJ&citpid=8"></StaffCard>
                <StaffCard name="Zafaryab Haider" title="Doctoral Student" email="zafaryab.haider@maine.edu" image="https://media.licdn.com/dms/image/D4E03AQETrHzQ61p62A/profile-displayphoto-shrink_400_400/0/1705363941368?e=1718236800&v=beta&t=MZTJfmaaUgk14NZvoBd4HEdmO0TW25xBB8bCp0Mj3Kw"></StaffCard>
                <StaffCard name="Sarah Glatter" title="Masters Student" email="sarah.glatter@maine.edu" image="https://umaine.edu/compumaine/wp-content/uploads/sites/495/2021/03/Sarah-Glatter.jpeg"></StaffCard>
   

            </div>

            <div className="staff-display-row">
                <StaffCard name="Katherine Arsenault" title="Masters Student" email="katherine.arsenault@maine.edu" image="https://media.licdn.com/dms/image/D4E03AQGRJLok3gvcwA/profile-displayphoto-shrink_800_800/0/1687732429007?e=2147483647&v=beta&t=0urSTGgZNcKichLpkB6qhMw2IxCLoUAT76LDlSqO8mU"></StaffCard>
                <StaffCard name="Nate Lowry" title="Undergraduate Student" email="nate.lowry@maine.edu" image="https://umaine.edu/vemi/wp-content/themes/umaine/content-blocks/people-list/silhouette.png"></StaffCard>
                <StaffCard name="Collin Scobie" title="Undergraduate Studentd" email="collin.scobie@maine.edu" image="https://umaine.edu/hackerspace/wp-content/uploads/sites/290/2023/08/Collin.jpg"></StaffCard>
   

            </div> */}

        </div>

         </div>
  );
}

export default HumanTab;
