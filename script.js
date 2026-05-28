// Array to store data (acts like an ArrayList in Java)
let students = [];

// Main function triggered by the button
function addStudent() {
    const nameInput = document.getElementById('studentName');
    const gradeInput = document.getElementById('studentGrade');
    
    const name = nameInput.value.trim();
    const grade = parseFloat(gradeInput.value);

    // Validate inputs
    if (name === '' || isNaN(grade) || grade < 0 || grade > 100) {
        alert('Please enter a valid name and a grade between 0 and 100.');
        return;
    }

    // Store data as an object in the array
    students.push({ name: name, grade: grade });

    // Clear input fields for the next entry
    nameInput.value = '';
    gradeInput.value = '';

    // Update the visual reports
    updateSummary();
    displayStudents();
}

// Function to calculate average, highest, and lowest scores
function updateSummary() {
    if (students.length === 0) return;

    let total = 0;
    let highest = students[0].grade;
    let lowest = students[0].grade;
    let highestName = students[0].name;
    let lowestName = students[0].name;

    // Loop through the array (similar to a Java for-loop)
    for (let i = 0; i < students.length; i++) {
        let currentGrade = students[i].grade;
        total += currentGrade;

        // Check for highest
        if (currentGrade > highest) {
            highest = currentGrade;
            highestName = students[i].name;
        }

        // Check for lowest
        if (currentGrade < lowest) {
            lowest = currentGrade;
            lowestName = students[i].name;
        }
    }

    // Calculate average
    const average = total / students.length;

    // Push calculations to the HTML page
    document.getElementById('totalStudents').textContent = students.length;
    document.getElementById('averageGrade').textContent = average.toFixed(2);
    document.getElementById('highestGrade').textContent = `${highest} (${highestName})`;
    document.getElementById('lowestGrade').textContent = `${lowest} (${lowestName})`;
}

// Function to render the student list
function displayStudents() {
    const listElement = document.getElementById('studentList');
    listElement.innerHTML = ''; // Clear the current list before redrawing

    // Loop through array and create an <li> for each student
    students.forEach(student => {
        const li = document.createElement('li');
        
        const nameSpan = document.createElement('span');
        nameSpan.textContent = student.name;
        
        const gradeSpan = document.createElement('span');
        gradeSpan.textContent = `${student.grade}%`;
        
        li.appendChild(nameSpan);
        li.appendChild(gradeSpan);
        listElement.appendChild(li);
    });
}