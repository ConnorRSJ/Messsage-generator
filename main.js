
const randomStrings = [['must', 'should', 'should not', 'can', 'can not'], ['blue', 'red', 'yellow', 'violet', 'orange'], ['roses', 'tulips', 'daisies']];

const createMessage = strings => {
    messageString = [];
    for (i = 0; i < strings.length; i++) {
        messageString.push(strings[i][Math.floor(Math.random() * strings[i].length)]);
    }
    console.log(`You ${messageString[0]} get your partner ${messageString[1]} ${messageString[2]} for your aniversary!`);
}

createMessage(randomStrings);