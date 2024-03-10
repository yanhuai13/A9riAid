const express = require('express');
const app = express();

// Define route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to AgriAid! Our agritech platform is designed to assist farmers in maximizing crop yields through data-driven insights. We offer weather prediction, soil health monitoring, and smart irrigation recommendations, all accessible via a mobile-friendly interface.');
});

// Define route for the weather prediction page
app.get('/weather-prediction', (req, res) => {
  res.send('Our weather prediction service provides accurate and up-to-date information on local weather patterns, allowing farmers to plan their crop management strategies accordingly.');
});

// Define route for the soil health monitoring page
app.get('/soil-health-monitoring', (req, res) => {
  res.send('Our soil health monitoring service uses advanced sensors and analytics tools to provide farmers with real-time insights into soil nutrient levels, moisture content, and other key metrics.');
});

// Define route for the smart irrigation recommendations page
app.get('/smart-irrigation-recommendations', (req, res) => {
  res.send('Our smart irrigation recommendations service uses machine learning algorithms to optimize irrigation schedules based on weather patterns, soil moisture levels, and other factors, reducing water waste and maximizing crop yields.');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});