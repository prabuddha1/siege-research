
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

        </div>

         </div>
  );
}

export default HumanTab;
