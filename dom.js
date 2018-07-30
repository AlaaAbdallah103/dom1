// examine document object//

//console.dir(document);

//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title = '123';
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//document.all[10].textContent ='hello';
//console.log(document.forms);
//console.log(document.forms[0]);
//console.log(document.links);
//console.log(document.images);

//get elementbyid//
//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000';
//console.log('header-title');
//headerTitle.textContent ='hello';
//headerTitle.innerText = 'Goodbye';
//headerTitle.innerHTML ='<h3>Hello</h3>';


//getting elementsByClassNames//
//var items= document.getElementsByClassName('list-group-item');
//console.log('items');
//items[1].textContent='Hello';
//items[1].style.fontWeight='bold';
//items[1].style.backgroundColor='yellow'

//gives erorr//
//items.style.backgroundColor='#f4f4f4';
//for (var i = 0; i< items.length; i++){
	//items[i].style.backgroundColor='#f4f4f4';
//}

// get elementsbytagname//
//var li= document.getElementsByTagName('li');
//console.log('li');
//li[1].textContent='Hello';
//li[1].style.fontWeight='bold';
//li[1].style.backgroundColor='yellow'

//gives erorr//
//li.style.backgroundColor='#f4f4f4';
//for (var i = 0; i< li.length; i++){
	//li[i].style.backgroundColor='#f4f4f4';
//}

// QUERYSELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

 //var secondItem = document.querySelector('.list-group-item:nth-child(2)');
 //secondItem.style.color = 'coral';


// QUERYSELECTORALL //
 var titles = document.querySelectorAll('.title');

 console.log(titles);
 titles[0].textContent = 'Hello';

 var odd = document.querySelectorAll('li:nth-child(odd)');
 var even= document.querySelectorAll('li:nth-child(even)');

 for(var i = 0; i < odd.length; i++){
  odd[i].style.backgroundColor = '#f4f4f4';
   even[i].style.backgroundColor = '#ccc';
 }

 //i can't understand this part//

