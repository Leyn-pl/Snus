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
        if(n > 10){buy = confirm("Вы потратите все свои снюскойны (" + n*snuscost + ") на покупку " + n + " снюса")}
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
    if(code == "100sec"){
        alert("Вы получили " + Math.ceil(snusval/10)*100 + " снюскойнов, сэкономив 100 секунд своей жизни.")
        snuscoins += Math.ceil(snusval/10)*100
        cheats = " | Читы"
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
    } else if(code == "editvar") {
        editvar()
        cheats = " | Читы"
    } else if(code == "help") {
        alert("Нет, это не так просто.")
    } else if(code != "" && code != null){alert('Чит-код "' + code + '" не найден')}
}

//Редатирование переменных
function editvar(){
    text = document.getElementById("text")
    varname = prompt("Введите название переменной или help", "")
    if(varname == "help"){
        alert("snusval - количество снюса, snuscoins - снюскойны, snuscost - цена снюса, text - коллекция снюса.")
    } else if(varname == "snusval") {
        var x = prompt("Введите количество снюса: ", snusval)
        snusval = x*1
    } else if(varname == "snuscoins") {
        var x = prompt("Введите количество снюскойнов: ", snuscoins)
        snuscoins = x*1
    } else if(varname == "snuscost") {
        var x = prompt("Введите цену снюса: ", snuscost)
        snuscost = x*1
    } else if(varname == "text") {
        var x = prompt("Введите коллекцию снюса: ", "")
        text.innerHTML = x
    } else {alert("Переменная " + varname + " не найдена. Напишите help для списка переменных.")}
}

//Купить [ ] снюса
function custom(){
    var count = prompt("Сколько снюса купить?", 1000)
    snus(count*1)
}

//Рестарт
function restart(){
    r = confirm("Вы точно хотите начать сначала?")
    if(r == true){
        location.reload()
    }
}
