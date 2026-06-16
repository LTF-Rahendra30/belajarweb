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
        else if (grade >= 80){
            predicate = 'B'
        }
    }
}