

'use strict'
let form=document.getElementById('movies');
let sub=document.getElementById('save');
let imgArr=['action.png','adventure.png','animation.png','comedy.png','detective.png','fantasy.png'
,'history.png','horror.png','musical.png','pirate.png','romantic.png','sci-fi.png','war.png','western.png'];
let article=document.getElementById('myList');
let array=[];
let logo=0;

function Movie(name,category,year,logo){
    this.name=name;
    this.category=category;
    this.year=year;
    
    Movie.all.push(this);
}
Movie.all=[];




Movie.prototype.rend=function(){
let tr = document.createElement('tr')
let td = document.createElement('td')

td.textContent='X'
tr.appendChild(td)

td = document.createElement('td')
td.textContent=logo
tr.appendChild(td)

td = document.createElement('td')
td.textContent=this.name
tr.appendChild(td)

td = document.createElement('td')
td.textContent=this.year
tr.appendChild(td)


article.appendChild(tr)
}

form.addEventListener('submit',addList);
function addList(e){
e.preventDefault();

let newName=e.target.name.value;
// console.log(newName)
let newCat=e.target.movieCat.value;
////// cat is a shortcut to category ////
// console.log(newCat)
let newYear=e.target.year.value;
// console.log(newYear)

if (e.target.movieCat.value == 'action'){
    logo='./img/action.png'
}
else if (e.target.movieCat.value == 'adventure'){
    logo='./img/adventure.png'
}
else if (e.target.movieCat.value == 'animation'){
    logo='./img/animation.png'
}
else if (e.target.movieCat.value == 'comedy'){
    logo='./img/comedy.png'
}
else if (e.target.movieCat.value == 'detective'){
    logo='./img/detective.png'
}
else if (e.target.movieCat.value == 'fantasy'){
    logo='./img/fantasy.png'
}
else if (e.target.movieCat.value == 'histor'){
    logo='./img/history.png'
}
else if (e.target.movieCat.value == 'action'){
    logo='./img/horror.png'
}
else if (e.target.movieCat.value == 'horror'){
    logo='./img/action.png'
}
else if (e.target.movieCat.value == 'musical'){
    logo='./img/musical.png'
}
else if (e.target.movieCat.value == 'pirate'){
    logo='./img/pirate.png'
}
else if (e.target.movieCat.value == 'romantic'){
    logo='./img/romantic.png'
}
else if (e.target.movieCat.value == 'sci-fi'){
    logo='./img/sci-fi.png'
}
else if (e.target.movieCat.value == 'war'){
    logo='./img/war.png'
}
else if (e.target.movieCat.value == 'western'){
    logo='./img/western.png'
}


let newMovie=new Movie(newName,newCat,newYear);
newMovie.rend();
setLocal();

}
getLocal();
for (let i=0; i<imgArr.length;i++){
array.push([imgArr[i].split('.')[0] , imgArr[i]])
// console.log(array)

}

function setLocal(){
    let data=JSON.stringify(Movie.all)
}

function getLocal(){
    if (localStorage.tasks){
        localStorage.tasks=JSON.parse(data)
        for(let i=0; i<data.length; i++){
           data =new Movie(data[i].name,data[i].category,data[i].year)
    }}
}

