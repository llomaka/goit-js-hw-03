// Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

/* Типов транзакций всего два. Можно положить либо снять деньги со счета. */
const transactionType = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const objToday = new Date(),
  weekday = new Array('неділя', 'понеділок', 'вівторок', 'середа', 'четвер', "п'ятниця", 'субота'),
  dayOfWeek = weekday[objToday.getDay()],
  dayOfMonth = objToday.getDate(),
  months = new Array('січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'),
  curMonth = months[objToday.getMonth()],
  curYear = objToday.getFullYear(),
  curHour = objToday.getHours(),
  curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
  curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds();
const today = curHour + ":" + curMinute + ":" + curSeconds + " " + dayOfWeek + " " + dayOfMonth + " " + curMonth + " " + curYear + " року";


/* Каждая транзакция это объект со свойствами: id, type и amount */

const account = {
    // Текущий баланс счета
  balance: 0,

   // История транзакций
  transactions: [],

    /*
     * Метод создает и возвращает объект транзакции.
     * Принимает сумму и тип транзакции.
     */
  createTransaction(amount, type) {
    let generateId = this.transactions.length;
    const newTransaction = { id: generateId, type, amount };
    this.transactions.push(newTransaction);
    if (type == Transaction.DEPOSIT) { this.balance += amount; }
    else { this.balance -= amount; }
  },

    /*
     * Метод отвечающий за добавление суммы к балансу.
     * Принимает сумму транзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций
     */
  deposit(amount) {
    this.createTransaction(amount, Transaction.DEPOSIT);
  },

    /*
     * Метод отвечающий за снятие суммы с баланса.
     * Принимает сумму транзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций.
     *
     * Если amount больше чем текущий баланс, выводи сообщение
     * о том, что снятие такой суммы не возможно, недостаточно средств.
     */
  withdraw(amount) {
    if (amount > this.balance) { alert(`Снятие ${amount} невозможно. Не достаточно средств.`); return;}
    this.createTransaction(amount, Transaction.WITHDRAW);
  },

    /*
     * Метод возвращает текущий баланс
     */
  getBalance() {
    return this.balance;
  },

    /*
     * Метод ищет и возвращает объект транзакции по id
     */
  getTransactionDetails(id) {
    for (const item of this.transactions) {
        if (item.id === id) { console.table(item); return item; }
    }
    console.log(`Транзакция с идентификатором ${id} не найдена.`)
  },

    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
  getTransactionTotal(type) {
    let total = 0;
    for (const item of this.transactions) {
        if (item.type === type) { total += item.amount;}
    }
    return total;
  },
};


account.deposit(80);
account.deposit(300);
account.withdraw(200);
account.deposit(2000);
console.log(account.getBalance());
account.withdraw(120);
account.deposit(20);
console.log(account.getBalance());
console.log(account.getTransactionTotal('withdraw'));
account.getTransactionDetails(5);
