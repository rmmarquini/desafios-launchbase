$(document).ready(() => {
    const users = [
        {name: "Rafael", techs: ["Java", "JS", "Node.js"]},
        {name: "Victor", techs: ["Java", "MathLab"]},
        {name: "Monique", techs: ["C++", "MathLab"]}
    ]

    usersTechs(users);
    userWorksWithMathLab(users);


    const usuarios = [
        {
            nome: "Salvio",
            receitas: [115.3, 48.7, 98.3, 14.5],
            despesas: [85.3, 13.5, 19.9]
        },
        {
            nome: "Marcio",
            receitas: [24.6, 214.3, 45.3],
            despesas: [185.3, 12.1, 120.0]
        },
        {
            nome: "Lucia",
            receitas: [9.8, 120.3, 340.2, 45.3],
            despesas: [450.2, 29.9]
        },
        {
            nome: "Rafael",
            receitas: [9.8, 120.3, 340.2, 45.3],
            despesas: [9.8, 120.3, 340.2, 45.3]
        }
    ];

    retornaSaldo(usuarios);
});


function usersTechs(users) {
    const divContent = document.querySelector('.content-task1');
    for (let i=0; i < users.length; i++) {
            divContent.innerHTML += `${users[i].name} trabalha com ${users[i].techs.join(', ')}.<br />`;
    }
}

function userWorksWithMathLab(users) {
    const divContent = document.querySelector('.content-task2');
    for (let i=0; i<users.length; i++) {
        const userWorksWithMathLab = checkIfUserWorksWithMathLab(users[i]);
        if (userWorksWithMathLab)
            divContent.innerHTML += `${users[i].name} trabalha com MathLab.<br />`
    }
}

function checkIfUserWorksWithMathLab(user) {
    return user.techs.includes("MathLab") ? true : false;
}

function retornaSaldo(usuarios) {
    const divContent = document.querySelector('.content-task3');
    for (let i=0; i<usuarios.length; i++) {
        const saldo = calculaSaldo(usuarios[i].receitas, usuarios[i].despesas);
        switch(true) {
            case (saldo > 0):
                divContent.innerHTML += `${usuarios[i].nome} possui saldo POSITIVO de ${saldo}.<br />`;
                break;
            
            case (saldo < 0):
                divContent.innerHTML += `${usuarios[i].nome} possui saldo NEGATIVO de ${saldo}.<br />`;
                break;

            default:
                divContent.innerHTML += `${usuarios[i].nome} possui saldo ${saldo}.<br />`;
                break;
        }
    }
}

function calculaSaldo(receitas, despesas) {
    const totalReceitas = somaNumerosDoArray(receitas);
    const totalDespesas = somaNumerosDoArray(despesas);
    return (totalReceitas - totalDespesas).toFixed(2);
}

function somaNumerosDoArray(nums) {
    const sum = nums.reduce( (total, num) => {
        return total += num;
    });
    return sum;
}

