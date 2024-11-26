const character = '#';
const count = 6;
for(let i = 1; i <= count; i++) {
    console.log(' '.repeat(count + i) + character.repeat((count - i) * 2)  )
}