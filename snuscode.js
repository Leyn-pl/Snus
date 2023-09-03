//Snus by LEYN v1.4.2 public

alert('СНЮС v1.4.2\nСоздатель этого (Лён) наюзался снюса. Чем больше у вас снюса, тем больше вы получаете снюскойнов  в секунду, но снюс дорожает. Вы можете кинуть снюс. Каждый кинутый снюс даёт +1% к получению снюскойнов. Чтобы пройти игру, нужно вкинуть 1.000.000.000 снюса. После нажанитя кнопки конца игры вы откроете один из чит-кодов. Наведите на слово в коллекции чтобы узнать сколько в нём снюса.')
var snusval = 1
var snuscoins = 100
var snuscost = 10
var vkidval = 0
var cheats = ""
var victory = false
var nolose = false
var allsnus = 1
var time = 0
var secs = "00"
var mins = "0"
var prevvkid = 1000
var prevbuy = 1000
var n = 0

//Покупка снюса
function snus(n){
    var buy = true
    if(snuscoins >= snuscost*n){
        if(n*snuscost == snuscoins){
            buy = confirm("Вы потратите все свои снюскойны на покупку " + n + " снюса!")
        } else if(n*snuscost > snuscoins/100*90) {
            buy = confirm("Вы потратите много снюскойнов (" + n*snuscost + ") на покупку " + n + " снюса!")
        }
        if(buy){
            snusval += 1*n;
            snuscoins -= snuscost*n;
			allsnus += 1*n
            snuscost = Math.floor(allsnus/15)+10;
            var val = document.getElementById("val");
            val.innerHTML = "Снюс: " + snusval + " | Снюскойнов: " + snuscoins + " | Снюса вкинуто: " + vkidval + cheats
            var val2 = document.getElementById("val2");
            val2.innerHTML = "Цена снюса: " + snuscost + " | Снюскойнов в секунду: " + Math.round(Math.floor(snusval/15)+1+((Math.floor(snusval/15)+1)*vkidval/100));
            var text = document.getElementById("text");
			if(Math.random()*1000000/n<1){gold()};
			if(n>=10000000000){
				text.innerHTML += " <a class='purple' title="+n+">СНЮС</a>";
			}else if(n>=1000000000){
				text.innerHTML += " <a class='red' title="+n+">СНЮС</a>";
			}else if(n>=100000000){
				text.innerHTML += " <a class='blue' title="+n+">СНЮС</a>";
			}else if(n>=10000000){
				text.innerHTML += " <a class='green' title="+n+">СНЮС</a>";
			}else if(n>=1000000){
				text.innerHTML += " <a class='black' title="+n+">СНЮС</a>";
			}else if(n>=100000){
				text.innerHTML += " <a class='purple' title="+n+">снюс</a>";
			}else if(n>=10000){
				text.innerHTML += " <a class='red' title="+n+">снюс</a>";
			}else if(n>=1000){
				text.innerHTML += " <a class='blue' title="+n+">снюс</a>";
			}else if(n>=100){
				text.innerHTML += " <a class='green' title="+n+">снюс</a>";
			}else if(n>=10){
				text.innerHTML += " <a class='black' title="+n+">снюс</a>";
			}else if(n>=1){
				text.innerHTML += " <a class='gray' title="+n+">снюс</a>";
			}
        }
    } else {alert("Тебе нужно " + snuscost*n + " снюскойнов!\n" + snuscoins + "/" + snuscost*n)}
    var max = document.getElementById("buyall");
    max.value = "Купить максимум снюса (" +  Math.floor(snuscoins/snuscost) + ")"
}

//Вкид
function vkid(n){
    var kinut = true
    if(snusval >= n){
        if(n >= snusval){
            kinut = confirm("Вы потратите весь свой снюс на вкид!")
        } else if(n > snusval/100*90) {
            kinut = confirm("Вы потратите много снюса (" + n + ") на вкид!")
        }
        if(kinut){
            if(victory != true && vkidval+n >= 1000000000){
                alert("Вы прошли игру! Вы успешно вкинули миллиард снюса. Не представляю, как твоя губа ещё на месте...");
                victory = true;
                if(cheats != " | Читы"){
			document.getElementById("hbutton").style.display = "inline"
		}else{
			alert("Вы не получите чит-код, так как прошли игру с читами")
		};
            }
            vkidval += n;
            snusval -= n;
            var val = document.getElementById("val");
            val.innerHTML = "Снюс: " + snusval + " | Снюскойнов: " + snuscoins + " | Снюса вкинуто: " + vkidval + cheats;
            var val2 = document.getElementById("val2");
            val2.innerHTML = "Цена снюса: " + snuscost + " | Снюскойнов в секунду: " + Math.round(Math.floor(snusval/15)+1+((Math.floor(snusval/15)+1)*vkidval/100));
        }
    } else {alert("У тебя не хватает снюса!")}
}
console.log("Ты чего смотришь, тут ничго нет ._.")

//Добавление снюскойнов
function addsc(){
    if(snusval < 1 && nolose == false){
        var end = confirm("У вас закончился снюс! Вы больше не получаете снюскойнов. Игра окончена. Нажите ОК чтобы начать сначала.");
        nolose = true;
    }
	if(snusval+vkidval != allsnus){
		alert("Попался, жалкий читер! Ну ничего, кто-то украл весь твой снюс!");
		snusval = 1;
		vkidval = 0;
		allsnus = 1;
		console.log("ЧИТЫ ОБНАРУЖЕНЫ!!!");
	}
    if(end){restart()}
    let addval = Math.floor(snusval/15)+1
    snuscoins += Math.round(addval+(addval*vkidval/100));
    var val = document.getElementById("val");
    val.innerHTML = "Снюс: " + snusval + " | Снюскойнов: " + snuscoins + " | Снюса вкинуто: " + vkidval + cheats
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
        alert("Вы получили 10000 снюскойнов. Тебе реально лень ждать?");
        snuscoins  += 10000;
        cheats = " | Читы"
    } else if(code == "tearlip") {
        alert("Вы украли 1000 снюса и вкинули его. Ваша губа порвана!");
        vkidval += 1000;
		allsnus += 1000;
        cheats = " | Читы"
    } else if(code == "sellsnus") {
        alert("Вы продали весь свой снюс (" + (snusval-1) + ") за " + (snusval-1)*snuscost + " снюскойнов. Но зачем?");
        snuscoins += (snusval-1)*snuscost;
		allsnus -= snusval-1
        snusval = 1;
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
    } else if(code != "" || code != null){alert('Чит-код "' + code + '" не найден')}
}

//Редатирование переменных
function editvar(){
    text = document.getElementById("text")
    varname = prompt("Введите название переменной или help", "")
    if(varname == "help"){
        alert("snusval - количество снюса, snuscoins - снюскойны, vkidval - кинутый снюс, snuscost - цена снюса, text - коллекция снюса.")
    } else if(varname == "snusval") {
        let x = prompt("Введите количество снюса: ", snusval)
        if(isNaN(x) != true){
            snusval = x*1;
	    allsnus = x*1+vkidval*1;
        }else{alert("Введите число!")}
    } else if(varname == "snuscoins") {
        let x = prompt("Введите количество снюскойнов: ", snuscoins)
        if(isNaN(x) != true){
            snuscoins = x*1
        }else{alert("Введите число!")}
    } else if(varname == "vkidval") {
        let x = prompt("Введите количество кинутого снюса: ", vkidval)
        if(isNaN(x) != true){
            vkidval = x*1;
	    allsnus = x*1+snusval*1
        }else{alert("Введите число!")}
    } else if(varname == "snuscost") {
        let x = prompt("Введите цену снюса: ", snuscost)
        if(isNaN(x) != true){
            snuscost = x*1
        }else{alert("Введите число!")}
    } else if(varname == "text") {
        let x = prompt("Введите коллекцию снюса: ", "")
        text.innerHTML = x
    } else if(varname != "" || varname != null){alert('Переменная "' + varname + '" не найдена. Напишите help для списка переменных.')}
}

//Купить [ ] снюса
function scustom(){
    let count = prompt("Сколько снюса купить?", prevbuy)
    if(isNaN(count) != true){
        snus(count*1);
		prevbuy = count
    }else{
        alert("Введите число!")
    }
}

//Вкинуть [ ] снюса
function vcustom(){
    let count = prompt("Сколько снюса вкинуть?", prevvkid)
    if(isNaN(count) != true){
        vkid(count*1);
		prevvid = count
    }else{
        alert("Введите число!")
    }
}

//Рестарт
function restart(){
    var r = confirm("Вы точно хотите начать сначала?")
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

function endgame(){
    var rand = Math.floor(Math.random()*10);
    if(rand == 0){alert("skiptime")};
    if(rand == 1){alert("imlazy")};
    if(rand == 3){alert("skiptime")};
    if(rand == 4){alert("tearlip")};
    if(rand == 5){alert("snussale")};
    if(rand == 6){alert("editvar")};
    if(rand == 7){alert("skiptime")};
    if(rand == 8){alert("buildfactory")};
    if(rand == 9){alert("tearlip")};
    document.getElementById("hbutton").style.display = "none";
}

//Золотой снюс
function gold(){
	alert("Вам выпал золотой снюс! Цена снюса снижена на 1%");
	snuscost = Math.round(snuscost * 0.99);
	text.innerHTML += " <i class='gold' title='Золотой снюс: цена снижена на 1%'>СНЮС</i>"
}

//Таймер
function timer(){
	time++
	secs = time%60
	mins = Math.floor(time/60)
	if(secs<10){secs = "0"+secs}
	document.getElementById("time").innerHTML = " | "+mins+":"+secs
	if(Math.floor(Math.random()*600)<=1){alert("Снимите стикер с камеры")}
}
setInterval(timer, 1000)
