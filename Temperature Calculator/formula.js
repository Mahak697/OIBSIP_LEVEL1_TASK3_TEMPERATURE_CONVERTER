// formula.js

// Celsius to Kelvin
function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}
// Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
// Celsius to Rankine
function celsiusToRankine(celsius) {
    // Rankine = Celsius * 9/5 + 491.67
    return celsius * 9/5 + 491.67;
}


// Fahrenheit to Kelvin
function fahrenheitToKelvin(fahrenheit) {
    // Kelvin = (Fahrenheit + 459.67) * 5/9
    return (fahrenheit + 459.67) * 5/9;
}

// Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
// Fahrenheit to Rankine
function fahrenheitToRankine(fahrenheit) {
    // Rankine = Fahrenheit + 459.67
    return fahrenheit + 459.67;
}


// Kelvin to Fahrenheit
function kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9/5 + 32;
}
// Kelvin to Celsius
function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}
// Kelvin to Rankine
function kelvinToRankine(kelvin) {
    // Rankine = Kelvin * 9/5
    return kelvin * 9/5;
}
// Rankine to Celsius
function rankineToCelsius(rankine) {
    // Celsius = (Rankine - 491.67) * 5/9
    return (rankine - 491.67) * 5/9;
}

// Rankine to Kelvin
function rankineToKelvin(rankine) {
    // Kelvin = Rankine * 5/9
    return rankine * 5/9;
}

// Rankine to Fahrenheit
function rankineToFahrenheit(rankine) {
    // Fahrenheit = Rankine - 459.67
    return rankine - 459.67;
}
// formula.js

// General function to handle same unit conversion
function sameUnitConversion(value) {
    return value;
}

// Celsius to Celsius (Same Unit)
function celsiusToCelsius(celsius) {
    return sameUnitConversion(celsius);
}

// Kelvin to Kelvin (Same Unit)
function kelvinToKelvin(kelvin) {
    return sameUnitConversion(kelvin);
}

// Fahrenheit to Fahrenheit (Same Unit)
function fahrenheitToFahrenheit(fahrenheit) {
    return sameUnitConversion(fahrenheit);
}

// Rankine to Rankine (Same Unit)
function rankineToRankine(rankine) {
    return sameUnitConversion(rankine);
}

