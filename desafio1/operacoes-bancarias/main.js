const user = {
    name: "Rafael",
    transactions: [],
    balance: 0
}

const userTransactions = user.transactions;

$(document).ready(() => {

    createTransaction({ type: "credit", value: 50 });
    createTransaction({ type: "credit", value: 120 });
    createTransaction({ type: "debit", value: 80 });
    createTransaction({ type: "debit", value: 30 });

    const spanBalance = document.querySelector(".balance");
    spanBalance.innerHTML = `Balanço = ${user.balance}`;

    const spanHigherCreditTransaction = document.querySelector(".higherCreditTransaction");
    const spanHigherDebitTransaction = document.querySelector(".higherDebitTransaction");

    spanHigherCreditTransaction.innerHTML = `Maior transação de crédito = ${getHigherTransactionByType("credit")}`;
    spanHigherDebitTransaction.innerHTML = `Maior transação de débito = ${getHigherTransactionByType("debit")}`;

    const spanTransacitonAverageAmount = document.querySelector(".transacitonAverageAmount");
    spanTransacitonAverageAmount.innerHTML = `Valor médio de todas as transações = ${getAverageTransactionValue()}`;

    const spanCountCredit = document.querySelector(".countCredit");
    const spanCountDedit = document.querySelector(".countDebit");
    spanCountCredit.innerHTML = `Total de transações de crédito = ${getTransactionsCount().credit}`;
    spanCountDedit.innerHTML = `Total de transações de dédito = ${getTransactionsCount().debit}`;

});

function createTransaction(transaction) {
    
    switch(transaction.type) {
        case "credit":
            user.balance += transaction.value;
            user.transactions.push(transaction);
            break;
        
        case "debit":
            user.balance -= transaction.value;
            user.transactions.push(transaction);
            break;

        default:
            user.balance;
            console.error("Invalid transaction");
            break;
    }
}

function getHigherTransactionByType(transactionType) {
    const higherTransaction = Math.max.apply(Math, userTransactions
                                .filter(usrTran => (usrTran.type === transactionType))
                                .map(usrTran => {
                                    return usrTran.value;
                                })
                            );
    return higherTransaction;
}

function getAverageTransactionValue() {
    let amountAverage = 0;
    for (transaction of userTransactions) {
        amountAverage += transaction.value;
    }
    return amountAverage / userTransactions.length;
}

const getTransactionsCount = () => {
    const transactionCount = userTransactions.reduce( (obj, transaction) => {
        if (!obj[transaction.type]) {
            obj[transaction.type] = 1;
        } else {
            obj[transaction.type]++;
        }
        return obj;
    }, {});
    return transactionCount;
}

