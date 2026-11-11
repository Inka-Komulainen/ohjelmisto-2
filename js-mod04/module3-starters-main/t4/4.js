'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const ul = document.getElementById('target');

for (let i in students) {
  let option = document.createElement('option');
  option.id = students[i].id;
  option.innerText = students[i].name;
  ul.appendChild(option);
}