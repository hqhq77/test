document.addEventListener('DOMContentLoaded', () => {
    fetchSensorData();
  });
  
  function fetchSensorData() {
    fetch('http://192.168.1.19:8080/')
      .then(response => response.json())
      .then(data => {
        console.log('Received sensor data:', data);
        displaySensorData(data);
      })
      .catch(error => console.error('Error fetching sensor data:', error));
  }
  
  function displaySensorData(data) {
    const sensorDataDiv = document.getElementById('sensorData');
    sensorDataDiv.innerHTML = `
      <h2>Sensor Data:</h2>
      <p>Data: ${data}%</p>
      <!-- Add more data fields as needed -->
    `;
  }
  
