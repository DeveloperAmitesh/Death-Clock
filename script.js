document.getElementById('deathForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const dob = new Date(document.getElementById('dob').value);
    const gender = document.getElementById('gender').value;
    const smoking = document.getElementById('smoking').value;
    const exercise = document.getElementById('exercise').value;
    const diet = document.getElementById('diet').value;
    
    if (!dob || !gender || !smoking || !exercise || !diet) {
        alert('Please fill in all fields');
        return;
    }
    
    const currentYear = new Date().getFullYear();
    const birthYear = dob.getFullYear();
    
    let averageLifeExpectancy;
    
    if (gender === 'male') {
        averageLifeExpectancy = 76;
    } else {
        averageLifeExpectancy = 81;
    }
    
    if (smoking === 'yes') {
        averageLifeExpectancy -= 10;
    }
    
    if (exercise === 'regular') {
        averageLifeExpectancy += 5;
    } else if (exercise === 'sometimes') {
        averageLifeExpectancy += 2;
    }
    
    if (diet === 'healthy') {
        averageLifeExpectancy += 5;
    } else if (diet === 'unhealthy') {
        averageLifeExpectancy -= 5;
    }

    const deathYear = birthYear + averageLifeExpectancy;
    const yearsLeft = deathYear - currentYear;
    const deathDate = new Date(dob);
    deathDate.setFullYear(deathYear);
    
    document.getElementById('result').innerText = `You have approximately ${yearsLeft} years left to live. Expected death date: ${deathDate.toDateString()}`;
});
