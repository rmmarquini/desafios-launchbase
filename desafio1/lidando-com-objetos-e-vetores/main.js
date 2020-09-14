/**
 * Construção e impressão de objetos + Vetores e objetos
 */
console.log("Construção e impressão de objetos + Vetores e objetos")

const usuarios = [
    {
        name: "Rafael Mardegan",
        age: 35,
        company: {
            name: "Lugos Lab Software House",
            location: {
                address: "Praça Monsenhor João Batista Lisboa",
                number: "01 B",
                neighborhood: "Centro",
                zipcode: "13900-080",
                city: "Amparo",
                state: "SP"
            },
            services: "Software House",
            color: "Yellow"
        },
        lives_in: {
            address: "Rodovia Amparo/Monte Alegre do Sul",
            number: "Km 3.5",
            neighborhood: "Condomínio Fazenda Orypaba",
            address_complement: "Alameda dos Maracujás - Vivenda 145",
            zipcode: "13820-000",
            city: "Monte Alegre do Sul",
            state: "SP"
        },
        skills: [
            {
                technology: "Java",
                level: 5
            },
            {
                technology: "Javascript",
                level: 5
            }
        ],
        position: "Software Engineer"
    }
];

for (let i=0; i < usuarios.length; i++) {
    let skills = usuarios[i].skills;
    let techs = skills.map((skill) => {
        return skill.technology;
    });
    console.log(`O usuário ${usuarios[i].name} tem ${usuarios[i].age} anos, possui proeficiência com as tecnologias ${techs.join(", ")} e trabalha na empresa ${usuarios[i].company.name} localizada na ${usuarios[i].company.location.address}, n ${usuarios[i].company.location.number}, ${usuarios[i].company.location.neighborhood}, ${usuarios[i].company.location.city} - ${usuarios[i].company.location.state}, onde exerce o cargo de ${usuarios[i].position}.`);
}
