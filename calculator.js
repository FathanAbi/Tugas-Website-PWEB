
        // tambah
        function tambah() {
            // Get the values of the input fields
            const num1 = parseFloat(document.getElementById("num1").value);
            const num2 = parseFloat(document.getElementById("num2").value);

            // Check if both inputs are valid numbers
            if (isNaN(num1) || isNaN(num2)) {
                document.getElementById("result").textContent = "Please enter valid numbers.";
            } else {
                // Calculate the sum and display the result
                const hasil = num1 + num2;
                document.getElementById("result").textContent = `Result: ${hasil}`;
            }
        }

        function kurang() {
            // Get the values of the input fields
            const num1 = parseFloat(document.getElementById("num1").value);
            const num2 = parseFloat(document.getElementById("num2").value);

            // Check if both inputs are valid numbers
            if (isNaN(num1) || isNaN(num2)) {
                document.getElementById("result").textContent = "Please enter valid numbers.";
            } else {
                // Calculate the sum and display the result
                const hasil = num1 - num2;
                document.getElementById("result").textContent = `Result: ${hasil}`;
            }
        }

        function kali() {
            // Get the values of the input fields
            const num1 = parseFloat(document.getElementById("num1").value);
            const num2 = parseFloat(document.getElementById("num2").value);

            // Check if both inputs are valid numbers
            if (isNaN(num1) || isNaN(num2)) {
                document.getElementById("result").textContent = "Please enter valid numbers.";
            } else {
                // Calculate the sum and display the result
                const hasil = num1 * num2;
                document.getElementById("result").textContent = `Result: ${hasil}`;
            }
        }

        function bagi() {
            // Get the values of the input fields
            const num1 = parseFloat(document.getElementById("num1").value);
            const num2 = parseFloat(document.getElementById("num2").value);

            // Check if both inputs are valid numbers
            if (isNaN(num1) || isNaN(num2)) {
                document.getElementById("result").textContent = "Please enter valid numbers.";
            } else {
                // Calculate the sum and display the result
                const hasil = num1 / num2;
                document.getElementById("result").textContent = `Result: ${hasil}`;
            }
        }
    