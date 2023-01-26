/*//Converting to number
console.log(Number("23"));
console.log(Number("23"));
console.log(+"23" === Number("23")); //true

//parsing to number => start with number
console.log(Number.parseInt("23px")); //23
console.log(Number.parseInt("  23px  ")); //23
console.log(Number.parseInt("e23")); //NaN

console.log(Number.parseInt("23.5px")); //23
console.log(Number.parseFloat("23.5px")); //23.5
console.log(Number.parseFloat("  23.5px  ")); //23.5
console.log(Number.parseFloat("e23.5")); //NaN

//checked if number is NaN
console.log(Number.isNaN("23.5px")); //false
console.log(Number.isNaN(23.5)); //false
console.log(Number.isNaN(23 / 0)); //false (Infinty)
console.log(Number.isNaN("a" / 8)); //true
console.log(Number.isNaN(+"20")); //false

//checked if number is Finite
console.log(Number.isFinite(+"20")); //true
console.log(Number.isFinite(+"20x")); //false
console.log(Number.isFinite(+"20" / 0)); //false
console.log(Number.isFinite(20)); //true

//checked if number is Intege
console.log(Number.isInteger(20)); //true
console.log(Number.isInteger(20.5)); //false
console.log(Number.isInteger(20 / 0)); //false
console.log(Number.isInteger(+"20")); //true
*/

/*//squar and power of Numbers
console.log(Math.sqrt(25)); //5
console.log(25 ** (1 / 2)); //5
console.log(25 ** (1 / 2)); //5
console.log(2 ** 3); //8

//max & min
console.log(Math.max(2, 5, 8, 10, 66, 15, 8)); //66
console.log(Math.max(2, 5, 8, 10, "66", 15, 8)); //66
console.log(Math.max(2, 5, 8, 10, "66px", 15, 8)); //NaN
console.log(Math.min(2, 5, 8, 10, 66, 15, 8)); //2

//Area of ciral with 10px diameter
console.log(Math.PI * Number.parseFloat("10px") ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

//random number between 2 values
const between = (max, min) => Math.trunc(Math.random() * (max - min) + 1) + min;
console.log(between(10, 5));

//Rounding Numbers
console.log(Math.round(2.5)); //3
console.log(Math.round(2.3)); //2

console.log(Math.ceil(2.5)); //3
console.log(Math.ceil(2.2)); //3

console.log(Math.floor(2.8)); //2
console.log(Math.floor(2.3)); //2

console.log(Math.floor(2.3)); //2
console.log(Math.trunc(2.3)); //2

//floor => to least
console.log(Math.floor(-2.3)); //3
console.log(Math.trunc(-2.3)); //2

console.log((2.3).toFixed()); //2
console.log((2.3).toFixed(1)); //2.3
console.log((-2.3).toFixed(2)); //2.30
console.log(+(2.3).toFixed(1)); //2.3 => number not String
*/

/*// The Remainder Operator => remaining of division
console.log(5 % 2); //1
console.log(8 % 3); //2
console.log(8 % 2); //0

// Working with BigInt
const maxSave = Number.MAX_SAFE_INTEGER;
console.log(maxSave); //9007199254740991
console.log(maxSave + 1); //9007199254740992
console.log(maxSave - 1); //9007199254740990
console.log(maxSave * 10); //90071992547409900
console.log(maxSave / 10); //900719925474099.1

console.log(4838430248342043823408394839483204n);
console.log(BigInt(48384302));

console.log(10n + 10n); //20n
console.log(10n * 10n); //100n
// console.log(10n + 10); //Error
// console.log(Math.sqrt(100n)); //Error

const n = BigInt(48384302);
console.log(4838430248342043823408394839483204n * n); //234104070341716447649026445248796866263608n

console.log(20n > 15); //true
console.log(20n === 20); //false
console.log(typeof 20n); //bigint
console.log(20n == "20"); //true

console.log(n + " is REALLY big!!!"); //48384302 is REALLY big!!!

// Divisions
console.log(11n / 3n); //3n
console.log(10 / 3); //3.3333333333333335
*/

// const calcDaysPassed = (date1, date2) =>
//  Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
// console.log(calcDaysPassed(new Date(2022, 11, 2), new Date(2022, 11, 10)));

/*//Intl Method
//DateTimeFormat()
const date = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
};
const local = ['eg-US', 'eg-UK', 'pt-PT', 'ar-EG'];
local.forEach((val, i) => {
  const formatedDate = new Intl.DateTimeFormat(val, options).format(date);
  console.log(`Form Data as ${val}: ${formatedDate}`);
});

//NumberFormat()
const num = 32515336.25;
const numOptions = {
  // unit: "celsius",
  // unit: 'kilometer-per-hour',
  style: 'currency',
  currency: 'EUR',
  // useGrouping: false,
};
local.forEach((val, i) => {
  const formatedNumber = new Intl.NumberFormat(val, numOptions).format(num);
  console.log(`Form Data as ${val}: ${formatedNumber}`);
});
*/

/*//setTimeout
const nums = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const numsTimer = setTimeout(
  function (n1, n2) {
    nums.push(n1, n2);
    console.log(...nums);
  },
  3000,
  22,
  24
);
//clearTimeout
if (nums.includes(6)) clearTimeout(numsTimer);
*/

/////////////////-------Banckist App-------//////////
// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300, 1400],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-07-26T17:01:17.194Z',
    '2022-12-16T23:36:17.929Z',
    '2022-12-17T10:51:36.790Z',
    '2022-12-15T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE , //pt-PT
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};
const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'EGP',
  locale: 'ar-EG',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-07-26T17:01:17.194Z',
    '2022-12-16T23:36:17.929Z',
    '2022-12-17T10:51:36.790Z',
    '2022-12-15T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'de-DE',
};
const accounts = [account1, account2, account3, account4];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

///////////////////////////////
//Formating Date
const formatDate = (date, locale) => {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));

  const showPeriod = calcDaysPassed(new Date(), date);
  // console.log(showPeriod);
  if (showPeriod === 0) return 'Today';
  if (showPeriod === 1) return 'Yasterday';
  if (showPeriod <= 7) return `${showPeriod} days ago`;

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat(locale).format(date);
};

//Formating Currency
const formatCurr = (value, local, currency) => {
  return new Intl.NumberFormat(local, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

//Display movements
const movmentesCountainer = function (acc, sort = false) {
  containerMovements.innerHTML = ''; //empty countainer first

  const movements = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movements.forEach((ele, index) => {
    const style = ele > 0 ? 'deposit' : 'withdrawal';
    const dayMov = new Date(acc.movementsDates[index]);
    const date = formatDate(dayMov, acc.locale);

    const formatedCurrency = formatCurr(
      ele,
      acc.locale,

      acc.currency
    );

    const movements__row = `<div class="movements__row">
          <div class="movements__type movements__type--${style}">${
      index + 1
    } ${style}</div>
    <div class="movements__date">${date}</div>

          <div class="movements__value">${formatedCurrency}</div>
        </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', movements__row);
  });
};
// movmentesCountainer(account1.movements);

//Display movements summary
const movementsSummary = function (account) {
  const income = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, curr) => acc + curr, 0);
  labelSumIn.textContent = `${formatCurr(
    income,
    account.locale,
    account.currency
  )}`;

  const outcome = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, curr) => acc + curr, 0);
  labelSumOut.textContent = `${formatCurr(
    Math.abs(outcome),
    account.locale,
    account.currency
  )}`;

  const interestRate = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter(mov => mov >= 1)
    .reduce((acc, curr) => acc + curr, 0);
  labelSumInterest.textContent = `${formatCurr(
    interestRate,
    account.locale,
    account.currency
  )}`;
};
// movementsSummary(account1.movements);

//Display balance
const displayBalance = function (acc) {
  acc.balance = acc.movements.reduce((pre, curr) => pre + curr, 0);
  labelBalance.textContent = `${formatCurr(
    acc.balance,
    acc.locale,
    acc.currency
  )} `;
};
// displayBalance(account1.movements);

//coumpoting usernames
const username = function (accounts) {
  accounts.forEach(
    account =>
      (account.username = account.owner
        .toLowerCase()
        .split(' ')
        .map(letter => letter[0])
        .join(''))
  );
};
username(accounts);
// console.log(accounts);

//Update account
const upduateAccount = function (account) {
  //show account movements
  movmentesCountainer(account);
  //show account movements summary
  movementsSummary(account);
  //show account balance
  displayBalance(account);
};

//Event handlers
let currentAccount, timer;

//if user doesn't do any action at 5 mins, he will log out
const logOutTimer = function () {
  //set 5 min to log out
  const closer = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    labelTimer.textContent = `${min}:${sec}`;
    if (time === 0) {
      //clearInterval()
      clearInterval(timer);
      //user log out
      containerApp.style.opacity = 0;
      //change welcom massege
      labelWelcome.textContent = `Log in to get started`;
    }
    //decrease timer
    time--;
  };
  // Set time to 5 minutes
  let time = 300;
  closer();

  // Call the timer every second
  const timer = setInterval(closer, 1000);
  return timer;
};

//Impement login action
btnLogin.addEventListener('click', event => {
  event.preventDefault();
  // console.log("clicked");
  //check username

  // currentAccount = account1;
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  const Today = new Date();
  if (+inputLoginPin.value === currentAccount?.pin) {
    //optional channing => remmber!
    //show account Data and welcome massege
    containerApp.style.opacity = 100;
    // console.log(Today.getHours());
    let time;
    if (Today.getHours() < 12) time = 'morning';
    if (Today.getHours() >= 12 && Today.getHours() < 15) time = 'afternoon';
    if (Today.getHours() >= 15) time = 'evening';

    labelWelcome.textContent = `Good ${time} ${
      currentAccount.owner.split(' ')[0]
    }`;

    //clear login form
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
  } else {
    console.log(false);
  }

  //show date
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    // weekday: "long",
  };
  labelDate.textContent = new Intl.DateTimeFormat(
    currentAccount.locale,
    options
  ).format(Today);
  // const day = `${Today.getDate()}`.padStart(2, 0);
  // const month = `${Today.getMonth() + 1}`.padStart(2, 0);
  // const year = Today.getFullYear();
  // const hour = `${Today.getHours()}`.padStart(2, 0);
  // const min = `${Today.getMinutes()}`.padStart(2, 0);
  // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

  //clear to previous timer
  if (timer) clearInterval(timer);
  timer = logOutTimer();

  //upduateAccount
  upduateAccount(currentAccount);
});

//Impement transfeir action
btnTransfer.addEventListener('click', e => {
  e.preventDefault();

  const resiver = accounts.find(acc => acc.username === inputTransferTo.value);
  const amount = +inputTransferAmount.value;

  //clear transfeir form
  inputTransferAmount.value = inputTransferTo.value = '';
  // console.log(currentAccount);
  // console.log(typeof amount);
  if (
    amount > 0 &&
    // resiver &&
    amount <= currentAccount.balance &&
    resiver?.username !== currentAccount.username
  ) {
    //Do transfeir
    // console.log("done");
    currentAccount.movements.push(-amount);
    resiver.movements.push(amount);
    // console.log(resiver);

    // Add Date
    currentAccount.movementsDates.push(new Date().toISOString());
    resiver.movementsDates.push(new Date().toISOString());

    //upduateAccount
    upduateAccount(currentAccount);

    //Reset timer
    clearInterval(timer);
    timer = logOutTimer();
  } else {
    console.log(new Error());
  }
});

//Impement close account action
btnClose.addEventListener('click', e => {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  } else {
    console.log('Not valid data');
    console.log(currentAccount.username);
    console.log(user);
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

// Impement loan action
btnLoan.addEventListener('click', e => {
  e.preventDefault();
  const laonAmount = Math.floor(+inputLoanAmount.value);
  if (
    laonAmount > 0 &&
    currentAccount.movements.some(mov => mov >= laonAmount * 0.1)
  ) {
    setTimeout(function () {
      // Add loan to movments
      currentAccount.movements.push(laonAmount);
      // Add loan date
      currentAccount.movementsDates.push(new Date());

      //Update account
      upduateAccount(currentAccount);

      //Reset timer
      clearInterval(timer);
      timer = logOutTimer();
    }, 3000);
  }
  inputLoanAmount.value = '';
});

let order = false;
btnSort.addEventListener('click', e => {
  e.preventDefault();
  movmentesCountainer(currentAccount, !order);
  order = !order;
});
