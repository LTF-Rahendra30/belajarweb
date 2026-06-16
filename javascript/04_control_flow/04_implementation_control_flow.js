// The program to find out the predicste based on the entered value

function checkGreade(grades){
    for (let i =0; i < grades.length; i++){
        if (typeof grades[i] !== 'number'){
            throw new Error('Invalid input!. Plase provide an array of numbers');
        }
        const grade = grades[i];
        let predicate;

        if (grade >= 90){
            predicate = 'A';
        }
        else if (grade >= 80){
            predicate = 'B'
        }
        else if (grade >= 70){
            predicate = 'C'
        }
        else if (grade >= 60){
            predicate = 'D'
        }
        else{
            predicate = 'E'
        }

        console.log(`Grade ${i+1}: ${grade} (${predicate})`);
    }
}

try{
    const students = [96,86,67,75,59];
    checkGreade(students);
} catch(e){
    console.error(e);
}

// Output:
// Grade 1: 96 (A)
// Grade 2: 86 (B)
// Grade 3: 67 (D)
// Grade 4: 75 (C)
// Grade 5: 59 (E)
