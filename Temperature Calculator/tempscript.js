document.addEventListener('DOMContentLoaded', function () {
    const inputTemperature = document.getElementById('inputTemperature');
    const fromUnit = document.getElementById('fromUnit');
    const toUnit = document.getElementById('toUnit');
    const outputTemperature = document.getElementById('outputTemperature');
    const btnReset = document.getElementById('btnReset');
    const btnCalculate = document.getElementById('btnCalculate');

    btnReset.addEventListener('click', resetValues);
    btnCalculate.addEventListener('click', calculateTemperature);

    function resetValues() {
        inputTemperature.value = '';
        outputTemperature.value = '';
    }

    function calculateTemperature() {
        const fromValue = parseFloat(inputTemperature.value);

        if (isNaN(fromValue)) {
            alert('Please enter a valid temperature value.');
            return;
        }

        const fromUnitValue = fromUnit.value;
        const toUnitValue = toUnit.value;
        let result;

        if (fromUnitValue === 'Celsius' && toUnitValue === 'Kelvin') {
            result = celsiusToKelvin(fromValue);
        } else if (fromUnitValue === 'Kelvin' && toUnitValue === 'Celsius') {
            result = kelvinToCelsius(fromValue);
        } else if (fromUnitValue === 'Celsius' && toUnitValue === 'Fahrenheit') {
            result = celsiusToFahrenheit(fromValue);
        } else if (fromUnitValue === 'Fahrenheit' && toUnitValue === 'Celsius') {
            result = fahrenheitToCelsius(fromValue);
        } else if (fromUnitValue === 'Fahrenheit' && toUnitValue === 'Kelvin') {
            result = fahrenheitToKelvin(fromValue);
        } else if (fromUnitValue === 'Kelvin' && toUnitValue === 'Fahrenheit') {
            result = kelvinToFahrenheit(fromValue);
        } else if (fromUnitValue === 'Celsius' && toUnitValue === 'Rankine') {
            result = celsiusToRankine(fromValue);
        } else if (fromUnitValue === 'Fahrenheit' && toUnitValue === 'Rankine') {
            result = fahrenheitToRankine(fromValue);
        } else if (fromUnitValue === 'Kelvin' && toUnitValue === 'Rankine') {
            result = kelvinToRankine(fromValue);
        }
        else if (fromUnitValue === 'Celsius' && toUnitValue === 'Celsius') {
            result = celsiusToCelsius(fromValue);
        }
        else if (fromUnitValue === 'Kelvin' && toUnitValue === 'Kelvin') {
            result = kelvinToKelvin(fromValue);
        }
        else if (fromUnitValue === 'Fahrenheit' && toUnitValue === 'Fahrenheit') {
            result = fahrenheitToFahrenheit(fromValue);
        }
        else if (fromUnitValue === 'Rankine' && toUnitValue === 'Rankine') {
            result = rankineToRankine(fromValue);
        }

        outputTemperature.value = result.toFixed(2);
    }
    
});