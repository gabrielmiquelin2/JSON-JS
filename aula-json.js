const objs = [
  {
    "nome": "Gabriel",
    "idade": 17,
    "esta_trabalhando": true,
    "detalhes_profissao":{
      "profissao": "Jovem Aprendiz TI",
      "Empresa": "Grupo Crivialli",
      "Ano": 2023
    },
    "hobbies": ["Academia", "Estudar", "Comer"]
  },
  {
    "nome": "Lucas",
    "idade": 37,
    "esta_trabalhando": false,
    "detalhes_profissao":{
      "profissao": null,
      "Empresa": null,
      "Ano": 2023
    },
    "hobbies": ["Ler", "Correr", "Filmes"],
  }
]

//CONVERTER OBJETO PARA JSON
//tringify() é um dos vários métodos nativos da linguagem de programação JavaScript. Sua principal função é converter valores e objetos denotados na linguagem em uma String JSON 
const jsonData = JSON.stringify(objs)
console.log(jsonData)


//CONVERTER JSON PARA OBJETOS
const objData = JSON.parse(jsonData);
console.log(objData)

objData.map((pessoa) =>{
  console.log(pessoa.idade)
})