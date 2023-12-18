
function updateResultSection(result, formula) {
    const temperatureResultElement = document.getElementById('temperatureResult');
    const temperatureFormulaElement = document.getElementById('temperatureFormula');

    // Update the result value
    temperatureResultElement.textContent = `Result: ${result.toFixed(2)}`;

    // Update the formula
    temperatureFormulaElement.textContent = `Formula: ${formula}`;
}
