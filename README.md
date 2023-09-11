# Fuel Cost Calculator

This is a simple web-based Fuel Cost Calculator that helps you estimate the cost of fuel for your trips based on distance, fuel efficiency, fuel price, and the number of travel days per month. It provides you with cost estimates per trip, per month, and per year.

## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To use this Fuel Cost Calculator, follow these steps:

1. Clone the repository to your local machine or download the project files.

2. Open the `index.html` file in your web browser to access the calculator.

## Usage

1. Enter the trip details in the input fields:
   - Trip Distance (km)
   - Fuel Efficiency (km/l)
   - Fuel Price (Rs/l)
   - Travel Days per Month (Days)

2. Click the "Calculate" button to calculate the fuel cost.

3. The calculator will display the following results:
   - Per Trip:
     - Cost (Rs)
     - Distance (km)
     - Fuel Consumed (litres)
   - Per Month:
     - Cost (Rs)
     - Distance (km)
     - Fuel Consumed (litres)
   - Per Year:
     - Cost (Rs)
     - Distance (km)
     - Fuel Consumed (litres)

## Update Details V1.1

### 1. Input Validation

- Implemented robust input validation to ensure that users provide valid numeric values for trip distance, fuel efficiency, fuel price, and travel days per month (1-31).

### 2. Error Handling

- Enhanced error handling to provide meaningful alert messages to users if they input invalid values or exceed the valid range of travel days.

### 4. Chart Visualization

- Introduced a chart visualization using the Chart.js library to display cost per month. This provides users with a graphical representation of their fuel cost data over time.

### 5. Persistent Data

- Added persistent data storage using Local Storage to remember user input values between sessions, enhancing the user experience.

### 6. Improved User Interface

- Refined the user interface with updated styling, labels, and input field placeholders for better usability.


## Contributing

If you'd like to contribute to this project, feel free to fork the repository, make your improvements, and submit a pull request. Your contributions are greatly appreciated.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Thanks!

- Thank you for using the Fuel Cost Calculator. We hope these updates enhance your fuel cost estimation experience!
- Enjoy calculating your fuel costs with this handy Fuel Cost Calculator!
