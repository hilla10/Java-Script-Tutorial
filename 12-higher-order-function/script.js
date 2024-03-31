const companies = [
  {
    name: 'Company One',
    category: 'Finance',
    start: 1981,
    end: 2004,
  },
  {
    name: 'Company Two',
    category: 'Retail',
    start: 1992,
    end: 2008,
  },
  {
    name: 'Company Three',
    category: 'Auto',
    start: 1999,
    end: 2007,
  },
  {
    name: 'Company Four',
    category: 'Retail',
    start: 1989,
    end: 2010,
  },
  {
    name: 'Company Five',
    category: 'Technology',
    start: 2009,
    end: 2014,
  },
  {
    name: 'Company Six',
    category: 'Finance',
    start: 1987,
    end: 2010,
  },
  {
    name: 'Company Seven',
    category: 'Auto',
    start: 1986,
    end: 1996,
  },
  {
    name: 'Company Eight',
    category: 'Technology',
    start: 2011,
    end: 2016,
  },
  {
    name: 'Company Nine',
    category: 'Retail',
    start: 1981,
    end: 1989,
  },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

/* for (let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
} */

// forEach

// companies.forEach((company) => console.log(company.name));

// filter

// Get 21 older
/* let canDrink = [];
for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 21) {
    canDrink.push(ages[i]);
  }
}

console.log(canDrink); */

const canDrink = ages.filter((age) => age >= 21);

// Filter retail companies

const retailCompanies = companies.filter(
  (company) => company.category === 'Retail'
);
console.log(retailCompanies);

// Get 80s companies
const eightiesCompanies = companies.filter(
  (company) => company.start >= 1800 && company.start < 1990
);
console.log(eightiesCompanies);

// Get companies that lasted 10 years or more

const lastedTenYears = companies.filter(
  (company) => company.end - company.start >= 10
);
console.log(lastedTenYears);

// map
// create array of company names
/* const companyName = companies.map((company) => company.name);
console.log(companyName); */

/* const testMap = companies.map(
  (company) => `${company.name} [${company.start} - ${company.end}]`
);
console.log(testMap); */

const ageSquare = ages.map((age) => Math.sqrt(age)).map((age) => age * 2);

// console.log(ageSquare);

// sort
// Sort companies by start year
/* const sortedCompanies = companies.sort((c1, c2) =>
  c1.start > c2.start ? 1 : -1
);

// Sort ages
const sortAges = ages.sort((a, b) => a - b);
console.log(sortAges);
 */
// reduce

let ageSum = 0;
for (let i = 0; i < ages.length; i++) {
  ageSum += ages[i];
}

const ageTotal = ages.reduce((acc, curr) => acc + curr, 0);

// Get Total years for all companies
const totalYears = companies.reduce(
  (total, company) => total + (company.end - company.start),
  0
);

//  Combine Methods
const combined = ages
  .map((age) => age * 2)
  .filter((age) => age >= 40)
  .sort((a, b) => a - b)
  .reduce((acc, curr) => acc + curr, 0);

console.log(combined);
