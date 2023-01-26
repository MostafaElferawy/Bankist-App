

/////////////////-------Banckist App-------//////////
// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Mostafa Elferawy',
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
  owner: 'Mona Ali',
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
