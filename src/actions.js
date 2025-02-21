export const addIncome = (amount) => {
    return {
        type: "ADD_INCOME",
        payload: amount
    }
}

export const addExpenses = (amount) => {
    return {
        type: "ADD_EXPENSES",
        payload: amount
    }
}