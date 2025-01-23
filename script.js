async function calculateScore() {
    // Get input values
    const foot = parseFloat(document.getElementById('foot').value) || 0;
    const bicycle = parseFloat(document.getElementById('bicycle').value) || 0;
    const publicTransport = parseFloat(document.getElementById('public_transport').value) || 0;
    const car = parseFloat(document.getElementById('car').value) || 0;

    // Send data to Flask backend
    try {
        const response = await fetch('http://127.0.0.1:5000/calculate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ foot, bicycle, public_transport: publicTransport, car }),
        });

        // Get the result from Flask
        const data = await response.json();
        const score = data.score;

        // Display the result
        document.getElementById('result').innerText = Your Sustainability Score is: {$score};
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('result').innerText = 'Error calculating score.';
    }
}