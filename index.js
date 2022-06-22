let letter = String(prompt('Enter a letter you like:'))

let usersLetter = []

for (let user of users) {
    if (user.name.includes(letter)) {
        usersLetter.push(user)
    }
}

console.log(`Users with letter ${letter}`)
console.log(usersLetter)

////////////////////////////////////////////////////////////////////////

let i = 0

let intervalId = setInterval(() => {
    let user = usersLetter[i]
    if (user) {
        console.log(`Hi ${user.name}!`)
        i++
    } else {
        clearInterval(intervalId)
    }
}, 2000)

////////////////////////////////////////////////////////////////////////

let userId = Number(prompt('Enter the user ID:'))
let userTodos = todos.filter(todo => todo.userId === userId)
let incompleteTodos = userTodos.filter(todo => todo.completed === false)
console.log(incompleteTodos)

////////////////////////////////////////////////////////////////////////