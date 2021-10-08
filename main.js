let arr = [{
    question: "Наука о растениях",
    answers:["Биология","Зоология","Ботаника","Плантология"],
    tanswer:"Ботаника"
    }, {question: "Самый большой океан",
    answers:["Северно-ледовитый","Тихий","Индийский","Атлантитечский"],
    tanswer:"Тихий"
    }, {question: "Что украл Прометей?",
    answers:["Огонь","Небо","Сердце","Розу"],
    tanswer:"Огонь"
    }, {question: "В какое время года сутки короче?",
    answers:["Летом","Зимой","Весной и осенью","Одинаково"],
    tanswer:"Одинаково"
    },{question: "2+2*2",
    answers:["2","8","12","6"],
    tanswer:"6"
    }]

let quest = document.querySelector('h1'),
    buttonsTemp = document.querySelectorAll('.button'),
    k = 0
    money = 0
    moneyTxt = document.querySelector('p')
    answersCont = document.querySelector('.answers')
    contain = document.querySelector('.contain')

const again = document.createElement('button')


const check = (event) =>{
    let num = event.target.value
    if(num == arr[k].tanswer){
        k++
        money += 1000
        if(k == arr.length) {
            moneyTxt.textContent = "Выйгрышь: " + money + '$'
            final()
        }
        else  drawElements()
        
    }else{
        lose()
    }
}

const drawElements = () =>{
    again.style.visibility = "hidden"
    quest.textContent = arr[k].question
    for(let i = 0; i < buttonsTemp.length;i++){
        buttonsTemp[i].value = arr[k].answers[i]
        buttonsTemp[i].addEventListener('click',check)
    }
    moneyTxt.textContent = "Выйгрышь: " + money + '$'
}

const final = () =>{
    answersCont.style.visibility = "hidden";
    quest.textContent = "ВЫ ВЫЙГРАЛИ!"
}
const lose = () =>{
    answersCont.style.visibility = "hidden";
    quest.textContent = "ВЫ ПРОИГРАЛИ!"
    money = 0
    again.addEventListener("click",begin)
    again.textContent = "Начать заново"
    again.classList.add('again')
    again.style.visibility = "visible"
    contain.append(again)
}
const begin = () =>{
    k = 0
    drawElements()
    answersCont.style.visibility = "visible";
}
drawElements()

