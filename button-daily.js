$(function() {
  
  $("#select-novel").click(function(){
  var novel = document.getElementById("select-novel");
  novel.classList.add("active");
  var comic = document.getElementById('select-comic')
  comic.classList.remove('active')

  Array.prototype.forEach.call(document.getElementsByClassName('button-day-of-week'), 
  item => item.setAttribute("type","n"));

  document.querySelector('.button-day-of-week.active').classList.remove('active'); 
  
  var d = new Date();
var n = d.getDay();

n = n > 0 ? n - 1 : 6; 

$('.day-in-this-week').eq(n).addClass('active');

  var today = new Date();
var dayOfWeek = today.getDay();
  if (dayOfWeek == 0) {
    document.getElementById("all-today").className = "container today-active today-sun";
  } else if (dayOfWeek == 1) {
    document.getElementById("all-today").className = "container today-active today-mon";
  } else if (dayOfWeek == 2) {
    document.getElementById("all-today").className = "container today-active today-tue";
  } else if (dayOfWeek == 3) {
    document.getElementById("all-today").className = "container today-active today-wed";
  } else if (dayOfWeek == 4) {
    document.getElementById("all-today").className = "container today-active today-thu";
  } else if (dayOfWeek == 5) {
    document.getElementById("all-today").className = "container today-active today-fri";
  } else if (dayOfWeek == 6) {
    document.getElementById("all-today").className = "container today-active today-sat";
  } else {}

  var todayy = new Date();
  var dayOfWeekk = todayy.getDay();
  if (dayOfWeekk == 0) {
    document.getElementById("content").innerText = "[Series][daily][minggu]";
  } else if (dayOfWeekk == 1) {
    document.getElementById("content").innerText = "[Series][daily][senin]";
  } else if (dayOfWeekk == 2) {
    document.getElementById("content").innerText = "[Series][daily][selasa]";
  } else if (dayOfWeekk == 3) {
    document.getElementById("content").innerText = "[Series][daily][rabu]";
  } else if (dayOfWeekk == 4) {
    document.getElementById("content").innerText = "[Series][daily][kamis]";
  } else if (dayOfWeekk == 5) {
    document.getElementById("content").innerText = "[Series][daily][jumat]";
  } else if (dayOfWeekk == 6) {
    document.getElementById("content").innerText = "[Series][daily][sabtu]";
  } else {}
  });
  $("#select-comic").click(function(){
    var comic = document.getElementById("select-comic");
    comic.classList.add("active");
    var novel = document.getElementById('select-novel')
    novel.classList.remove('active')

    Array.prototype.forEach.call(document.getElementsByClassName('button-day-of-week'), 
  item => item.setAttribute("type","c"));

    document.querySelector('.button-day-of-week.active').classList.remove('active');
  var d = new Date();
var n = d.getDay();

n = n > 0 ? n - 1 : 6; 

$('.day-in-this-week').eq(n).addClass('active');

  var today = new Date();
var dayOfWeek = today.getDay();
  if (dayOfWeek == 0) {
    document.getElementById("all-today").className = "container today-active today-sun";
  } else if (dayOfWeek == 1) {
    document.getElementById("all-today").className = "container today-active today-mon";
  } else if (dayOfWeek == 2) {
    document.getElementById("all-today").className = "container today-active today-tue";
  } else if (dayOfWeek == 3) {
    document.getElementById("all-today").className = "container today-active today-wed";
  } else if (dayOfWeek == 4) {
    document.getElementById("all-today").className = "container today-active today-thu";
  } else if (dayOfWeek == 5) {
    document.getElementById("all-today").className = "container today-active today-fri";
  } else if (dayOfWeek == 6) {
    document.getElementById("all-today").className = "container today-active today-sat";
  } else {}

    var todayy = new Date();
var dayOfWeekk = todayy.getDay();
  if (dayOfWeekk == 0) {
    document.getElementById("content").innerText = "[Series][daily][minggu]";
  } else if (dayOfWeekk == 1) {
    document.getElementById("content").innerText = "[Series][daily][senin]";
  } else if (dayOfWeekk == 2) {
    document.getElementById("content").innerText = "[Series][daily][selasa]";
  } else if (dayOfWeekk == 3) {
    document.getElementById("content").innerText = "[Series][daily][rabu]";
  } else if (dayOfWeekk == 4) {
    document.getElementById("content").innerText = "[Series][daily][kamis]";
  } else if (dayOfWeekk == 5) {
    document.getElementById("content").innerText = "[Series][daily][jumat]";
  } else if (dayOfWeekk == 6) {
    document.getElementById("content").innerText = "[Series][daily][sabtu]";
  } else {}
    });

    let carts = document.querySelectorAll('.button-day-of-week');

    for (let i = 0; i < carts.length; i++) {
      var button = carts[i]
      button.addEventListener('click', () => {
        addToCartClicked(carts[i])
        console.log(button)
      })
  }

  var addToCartClicked = function(carts) {
    if (document. querySelector('.button-day-of-week.active') !== null) {
      document. querySelector('.button-day-of-week.active'). classList. remove('active');
    }
    carts.classList.add('active');
  }

})();



