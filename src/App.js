import React, { useEffect, useState } from 'react';
import './style.css';

export default function App() {
  const [gDate, setGDate] = useState(null);
  const getRowItem = (itemSelected) => {
    //console.log('itemSelected');
    console.log(itemSelected);
  };

  useEffect(() => {
    function GenerateData() {
      // Define an array of possible activity types
      const activityTypes = ['Work', 'Study', 'Exercise', 'Hobby'];

      // Define a function to generate a random integer between min and max (inclusive)
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
      // Define a function to generate random data for a single entry
      function generateRandomData() {
        const startDate = new Date(2021, 0, 1); // Start date for time range
        const endDate = new Date(2022, 11, 31); // End date for time range
        const time = new Date(
          startDate.getTime() +
            Math.random() * (endDate.getTime() - startDate.getTime())
        ); // Generate random datetime within time range
        const activity =
          activityTypes[getRandomInt(0, activityTypes.length - 1)]; // Randomly select activity type
        const duration = getRandomInt(1, 8); // Generate random duration between 1 and 8 hours
        const type = Math.random() < 0.5 ? 'Personal' : 'Project'; // Randomly select type as "Personal" or "Project"
        // Create and return a new object with the generated data
        return {
          time,
          activity,
          duration,
          type,
        };
      }
      // Generate an array of random data entries
      const numEntries = 100; // Number of entries to generate
      const randomData = [];
      for (let i = 0; i < numEntries; i++) {
        randomData.push(generateRandomData());
      }

      // Log the generated data to the console
      return randomData;
    }
    //const alldata = GenerateData();
    setGDate(GenerateData());
  }, []);

  // On top of that page is a chart where activities are stacked per hour
  // during the day. Below that is a table of all the time entries that can be
  // scrolled.
  // Can you let us know how you would approach building this page?
  // What techniques and technologies would you use?

  return (
    <div>
      {/* <Chart/>
      <Activity-Table/> */}
      <table>
        <tr>
          <th> Activity</th>
          <th> duration</th>
          <th> time</th>
          <th> type</th>
        </tr>

        {gDate && (
          <>
            {gDate.map((item) => (
              <tr key={item.time} onClick={() => getRowItem(item)}>
                <td>{item.activity}</td>
                <td>{item.duration}</td>
                <td>{String(item.time)}</td>
                <td>{item.type}</td>
              </tr>
            ))}
          </>
        )}
      </table>
    </div>
  );
}
