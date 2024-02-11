const d = new Date(2024, 2, 9, 2, 0, 0);
const month = d.getMonth()
const hour = d.getHours();

console.log(month);

switch(month) {
    case 1: 
        console.log('It is January');
        break;
    case 2: 
        console.log('It is February');
    break;
    case 3: 
        console.log('It is march');
    break;
    default:
        console.log("It is not jan, feb, march");
}

switch (true) {
    case hour < 12:
    console.log('Good Morning');
    break;
    case hour < 18:
    console.log('Good Afternoon');
    break;
    default: 
    console.log('Good Night');
    break;
}