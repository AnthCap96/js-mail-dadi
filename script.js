// MAIL

let user_mail = prompt (`Inserisci la tua e-mail`)

const list_mail = (`milo@gmail.com`, `melevisione@gmail.com`, `lupolucio@gmail.com`, `orcorubio@gmail.com`)

let Check = Negative

for (let i = 0; i < list_mail.length; i++) {

    let list_mail_check = list_mail(i)
    console.log(list_mail_check);

    if (user_mail === list_mail_check) {
    Check = Positive
    console.log(Check);
    }
}

if (Check) {
    console.log("LOGIN!")
} else {
    console.log("REGISTER!")
}  




// DADI

let computer_numb = Math.floor(Math.random() * 6) + 1;
let user_numb = Math.floor(Math.random() * 6) + 1;
console.log(computer_numb, user_numb);

if (computer_numb === user_numb) {
    console.log("DRAW!🏳️")
} else if (computer_numb < user_numb) {
    console.log("YOU WIN! 😄")
} else if(computer_numb > user_numb) {
    console.log("YOU LOSE! 😞")
}



