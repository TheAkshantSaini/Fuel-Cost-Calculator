// Initialize variables with default values
let distance = 0;
let efficiency = 0;
let price = 0;
let days = 0;

// Load values from local storage if available
if (localStorage.getItem('distance')) {
  distance = parseFloat(localStorage.getItem('distance'));
  document.getElementById('distance').value = distance;
}
if (localStorage.getItem('efficiency')) {
  efficiency = parseFloat(localStorage.getItem('efficiency'));
  document.getElementById('efficiency').value = efficiency;
}
if (localStorage.getItem('price')) {
  price = parseFloat(localStorage.getItem('price'));
  document.getElementById('price').value = price;
}
if (localStorage.getItem('days')) {
  days = parseInt(localStorage.getItem('days'));
  document.getElementById('days').value = days;
}

// Input validation function
function validateInputs() {
  distance = parseFloat(document.getElementById('distance').value);
  efficiency = parseFloat(document.getElementById('efficiency').value);
  price = parseFloat(document.getElementById('price').value);
  days = parseInt(document.getElementById('days').value);

  if (isNaN(distance) || isNaN(efficiency) || isNaN(price) || isNaN(days) || days < 1 || days > 31) {
    alert('Please enter valid numeric values and a valid number of travel days (1-31).');
    return false;
  }

  localStorage.setItem('distance', distance);
  localStorage.setItem('efficiency', efficiency);
  localStorage.setItem('price', price);
  localStorage.setItem('days', days);

  return true;
}

// Chart visualization function
function createChart(costPerMonth) {
  const chartCanvas = document.getElementById('chart');
  const ctx = chartCanvas.getContext('2d');
  const labels = [];
  const data = [];

  for (let i = 1; i <= 12; i++) {
    labels.push(`Month ${i}`);
    data.push((costPerMonth * i).toFixed(2));
  }

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Cost (Rs) Per Month',
        data: data,
        backgroundColor: '#03DAC5',
        borderColor: '#BB86FC',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Cost (Rs)'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Month'
          }
        }
      }
    }
  });
}

// Calculate fuel cost function
function calculateFuelCost() {
  if (!validateInputs()) {
    return;
  }

  const costPerTrip = (distance / efficiency) * price;
  const distancePerTrip = distance;
  const fuelConsumedPerTrip = distance / efficiency;

  const costPerMonth = costPerTrip * days;
  const distancePerMonth = distance * days;
  const fuelConsumedPerMonth = fuelConsumedPerTrip * days;

  const costPerYear = costPerTrip * (days * 12);
  const distancePerYear = distance * (days * 12);
  const fuelConsumedPerYear = fuelConsumedPerTrip * (days * 12);

  document.getElementById('costPerTrip').textContent = costPerTrip.toFixed(2);
  document.getElementById('distanceTrip').textContent = distancePerTrip.toFixed(2);
  document.getElementById('fuelConsumedTrip').textContent = fuelConsumedPerTrip.toFixed(2);

  document.getElementById('costPerMonth').textContent = costPerMonth.toFixed(2);
  document.getElementById('distanceMonth').textContent = distancePerMonth.toFixed(2);
  document.getElementById('fuelConsumedMonth').textContent = fuelConsumedPerMonth.toFixed(2);

  document.getElementById('costPerYear').textContent = costPerYear.toFixed(2);
  document.getElementById('distanceYear').textContent = distancePerYear.toFixed(2);
  document.getElementById('fuelConsumedYear').textContent = fuelConsumedPerYear.toFixed(2);

  createChart(costPerMonth);
}

// Initial chart creation
calculateFuelCost();