let x = document.getElementById('main-img');
let y = document.getElementById('type1');
let z = document.getElementById('type2');
let t3 = document.getElementById('type3');
document.getElementById('type1').onclick = function(){
    x.src = y.src; // Assign the source URL of 'type2' to 'main-img'
}
document.getElementById('type2').onclick = function(){
    x.src = z.src; // Assign the source URL of 'type2' to 'main-img'
}
document.getElementById('type3').onclick = function(){
    x.src = t3.src; // Assign the source URL of 'type2' to 'main-img'
}
