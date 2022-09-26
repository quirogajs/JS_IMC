export function calculateImc(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}

export function notNumber(value) {
    return isNaN(value) || value == ""
}