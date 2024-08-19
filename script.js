const USD = 0.9
const BRL = 0.17
const JPY = 0.0062
const ARS = 0.00096
const CNY = 0.0076

let btn_form = document.querySelector("#btn-form");
//obtem elementos do form
let form = document.querySelector("form")
let amount = document.getElementById("amount");
let currency = document.getElementById("currency");
let footer = document.querySelector("main footer")
let description = document.getElementById("description")
let result = document.getElementById("result")


//addEventListener manipulated omput amount for get only numbers
//criar variavel com o padrão regex, pegar o value do form e comolar o amount.value.replaxe(varialvel do regex)
amount.addEventListener("input", () => {
  let has_characters_regex = /\D+/g
  amount.value = amount.value.replace(has_characters_regex, "")
})

//capturar o evento de submit do form com o onsubmit, colocar o event default


form.onsubmit = (event) => {
  event.preventDefault()

  switch (currency.value) {
    case "USD":
      convert_currency(amount.value, USD, "US$")
      break;

    case "BRL":
      convert_currency(amount.value, BRL, "R$")
      break;

    case "JPY":
      convert_currency(amount.value, JPY, "¥")
      break;

    case "ARS":
      convert_currency(amount.value, ARS, "$")
      break;

    case "CNY":
      convert_currency(amount.value, CNY, "¥")
      break;

    default:
      break;
  }
}


//criar função de conversão com switch, o swit dendro o onsubmit como arow func serve para fazer o input dos valores na função, como o pré fixo, valor da mueda e valor inserido

//função de converter tem que ta dentro de um try catch

function convert_currency(amount, price, symbol) {

  try {
    footer.classList.remove("none")
    let convert_currency = amount * price
    description.innerText = `€ 1 =  ${symbol} ${price}`
    result.innerText = convert_currency + " Euros"

  } catch (error) {
    alert("A conversão falhou, tente novamente mais tarde")
  }
  
}