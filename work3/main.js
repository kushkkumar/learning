let name='Kush'

function makeUppercase(name){
    return name.toUpperCase();

}

let template=`<h1>${makeUppercase('Hello')} ${name}</h1>
<p>This is a sample template that has to be added for the learning purpose</p>`



document.getElementById('template').innerHTML=template;