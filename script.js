
function calculateRoots() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);

    const result = document.getElementById("result");

    if (!Number.isFinite(a) ||
        !Number.isFinite(b) ||
        !Number.isFinite(c)) {
        result.innerHTML = "Please enter all three coefficients.";
        return;
    }

    if (a === 0) {
        result.innerHTML = "Coefficient 'a' cannot be zero.";
        return;
    }

    const discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

        result.innerHTML =
            "Two Real Roots:<br>" +
            "Root 1 = " + root1.toFixed(4) +
            "<br>Root 2 = " + root2.toFixed(4);
    }
    else if (discriminant === 0) {
        const root = -b / (2 * a);

        result.innerHTML =
            "Equal Roots:<br>Root = " + root.toFixed(4);
    }
    else {
        const real = -b / (2 * a);
        const imaginary = Math.sqrt(-discriminant) / Math.abs(2 * a);

        result.innerHTML =
            "Complex Roots:<br>" +
            "Root 1 = " + real.toFixed(4) + " + " +
            imaginary.toFixed(4) + "i" +
            "<br>Root 2 = " + real.toFixed(4) + " - " +
            imaginary.toFixed(4) + "i";
    }
}

