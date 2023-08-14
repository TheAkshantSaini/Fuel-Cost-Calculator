function calculateFuelCost() {
  const distance = parseFloat(document.getElementById('distance').value);
  const efficiency = parseFloat(document.getElementById('efficiency').value);
  const price = parseFloat(document.getElementById('price').value);
  const days = parseInt(document.getElementById('days').value);

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
}
