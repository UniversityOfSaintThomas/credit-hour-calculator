function calculateHours() {
    const credits = parseFloat(document.getElementById('credits').value);
    const termLength = parseInt(document.getElementById('termLength').value);
    const resultDiv = document.getElementById('result');
    
    console.log('Credits:', credits); // Debug log
    console.log('Term Length:', termLength); // Debug log

    if (isNaN(credits) || isNaN(termLength) || credits < 1 || credits > 4 || termLength < 1 || termLength > 15) {
        alert('Please enter valid values. Credits should be between 1 and 4, and term length should be between 1 and 15 weeks.');
        return;
    }
    
    const totalLearningTime = credits * 42.5;
    const timeOnTaskPerWeek = (totalLearningTime / termLength).toFixed(1);
    
    console.log('Total Learning Time:', totalLearningTime); // Debug log
    console.log('Time on Task per Week:', timeOnTaskPerWeek); // Debug log

    resultDiv.innerHTML = `
        <p><strong>Total Learning Time:</strong> ${totalLearningTime.toFixed(1)} hours</p>
        <p><strong>Time on Task per Week:</strong> ${timeOnTaskPerWeek} hours</p>
    `;

    console.log('Result HTML:', resultDiv.innerHTML); // Debug log
}
