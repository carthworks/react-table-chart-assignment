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
    const activity = activityTypes[getRandomInt(0, activityTypes.length - 1)]; // Randomly select activity type
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
  console.log(randomData);
  console.log(randomData);
  return;
}
