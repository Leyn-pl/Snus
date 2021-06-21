//Snus by LEYN v1.3

alert('СНЮС\nСоздатель этого (Лён) наюзался снюса. Нажимайте "Купить снюс". Вам нужно 10 снюскойнов чтобы купить снюс. Чем больше у вас снюса, тем больше вы получаете снюскойнов  в секунду.')
var snusval = 1
var snuscoins = 100
var snuscost = 10
var cheats = ""
var hardmode = ""

//Покупка снюса
function snus(n){
    var buy = true
    if(snuscoins >= snuscost*n){
        if(n*snuscost > 100){buy = confirm("Вы потратите много снюскойнов (" + n*snuscost + ") на покупку " + n + " снюса")}
        if(n*snuscost > 1000){buy = confirm("Вы потратите очень много снюскойнов (" + n*snuscost + ") на покупку " + n + " снюса")}
        if(buy == true){
            snusval += 1*n
            snuscoins -= snuscost*n
            var val = document.getElementById("val");
            val.innerHTML = "Снюс: " + snusval + " | Снюскойнов: " + snuscoins + cheats + hardmode
            var text = document.getElementById("text");
            var i = n
            while(Math.floor(i/10) > 0){
                text.innerHTML += " снюс  снюс  снюс  снюс  снюс снюс  снюс  снюс  снюс  снюс";
                i -= 10
            }
            while(i > 0){
                text.innerHTML += " снюс";
                i--
            }
        }
    } else {alert("Тебе нужно " + snuscost*n + " снюскойнов!\n" + snuscoins + "/" + snuscost*n)}
    var max = document.getElementById("buyall");
    max.value = "Купить максимум снюса (" +  Math.floor(snuscoins/snuscost) + ")"
}

//Добавление снюскойнов
function addsc(){
    snuscoins += Math.ceil(snusval/10)
    var val = document.getElementById("val");
    val.innerHTML = "Снюс: " + snusval + " | Снюскойнов: " + snuscoins + cheats + hardmode;
    var max = document.getElementById("buyall");
    max.value = "Купить максимум снюса (" +  Math.floor(snuscoins/snuscost) + ")"
}
setInterval(addsc, 1000)

//Читы
function cheat(){
    code = prompt("Введите чит-код:", "");
    if(code == "skiptime"){
        var sec = prompt("Сколько секунд вы хотите скипнуть? (до 1000)", 100)
        if(sec > 1000){
            alert('Для кого написано "до 1000"?')
        } else if(isNaN(sec) != true) {
            alert("Вы получили " + Math.ceil(snusval/10)*sec + " снюскойнов, сэкономив " + sec + " секунд своей жизни.");
            snuscoins += Math.ceil(snusval/10)*sec;
            cheats = " | Читы"
        } else {alert("Введите число!")}
    } else if(code == "imlazy") {
        alert("Вы получили 10000 снюскойнов. Тебе реально лень ждать?")
        snuscoins  += 10000
        cheats = " | Читы"
    } else if(code == "hardmode") {
        alert("Вы включили сложный режим. Пути надаз уже нет.")
        snuscost = 50
        hardmode = " | Сложный режим"
    } else if(code == "easymode") {
        alert("Вы включили лёгкий режим. Пути надаз уже нет.")
        snuscost = 5
        hardmode = " | Лёгкий режим"
    } else if(code == "sellsnus") {
        alert("Вы продали весь свой снюс (" + (snusval-1) + ") за " + (snusval-1)*snuscost + " снюскойнов. Но зачем?")
        snuscoins += (snusval-1)*snuscost
        snusval = 1
        var text = document.getElementById("text")
        text.innerHTML = "Снюс";
    } else if(code == "buildfactory") {
        alert("Вы построили фабрику снюса. Больше снюскойнов! (Стоп, а это легально?)");
        setInterval(addsc, 1000);
        cheats = " | Читы";
    } else if(code == "editvar") {
        editvar()
        cheats = " | Читы"
    } else if(code == "help") {
        alert("Нет, это не так просто.");
    } else if(code == "snussale") {
        alert("РАСПРОДАЖА СНЮСА!!! ВСЕГО 1 СНЮСКОЙН!!!");
        snuscost = 1;
        cheats = " | Читы";
    } else if(code != "" && code != null){alert('Чит-код "' + code + '" не найден')}
}

//Редатирование переменных
function editvar(){
    text = document.getElementById("text")
    varname = prompt("Введите название переменной или help", "")
    if(varname == "help"){
        alert("snusval - количество снюса, snuscoins - снюскойны, snuscost - цена снюса, text - коллекция снюса.")
    } else if(varname == "snusval") {
        let x = prompt("Введите количество снюса: ", snusval)
        if(isNaN(x) != true){
            snusval = x*1
        }else{alert("Введите число!")}
    } else if(varname == "snuscoins") {
        let x = prompt("Введите количество снюскойнов: ", snuscoins)
        if(isNaN(x) != true){
            snuscoins = x*1
        }else{alert("Введите число!")}
    } else if(varname == "snuscost") {
        let x = prompt("Введите цену снюса: ", snuscost)
        if(isNaN(x) != true){
            snuscost = x*1
        }else{alert("Введите число!")}
    } else if(varname == "text") {
        let x = prompt("Введите коллекцию снюса: ", "")
        text.innerHTML = x
    } else {alert('Переменная "' + varname + '" не найдена. Напишите help для списка переменных.')}
}

//Купить [ ] снюса
function custom(){
    let count = prompt("Сколько снюса купить?", 1000)
    if(isNaN(count) != true){
        snus(count*1)
    }else{
        alert("Введите число!")
    }
}

//Рестарт
function restart(){
    r = confirm("Вы точно хотите начать сначала?")
    if(r == true){
        location.reload()
    }
}

function timealert(){
    let x = confirm("Ты играешь уже пол часа. Тебе реально понравилось?");
    if(x){
        alert("Ого, да как вообще можно в это играть -_-")
    } else {restart()}
}
setTimeout(timealert, 1800000)
