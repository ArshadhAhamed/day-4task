// 1. Object comparison::

var a={name:'person 1',age:5}
var b={age:5,name:'person 1'}
let flag=true
for(var key in a)
{
    if(a[key]!==b[key])
    flag=false;
    break;
}
console.log(flag)




2.to display country flags

const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all');


request.send(null);


request.onload = function () {
  const countries = JSON.parse(request.responseText);
  console.log(countries);

  for (var i = 0; i < countries.length; i++) {
    const { flag } = countries[i];
    console.log(flag);
  }
// }

// 3.
const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all');


request.send(null);


request.onload = function () {
  const countries = JSON.parse(request.responseText);
  console.log(countries);

  for (var i = 0; i < countries.length; i++) {
    const { flag,name:{common},region,subregion,population} = countries[i];
    console.log(flag);
    console.log("county name:",common,"region:",region,"subregion:",subregion,"population",population);
  }
}