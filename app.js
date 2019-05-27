const val=document.querySelector('#task');
const addbtn=document.querySelector('input#btn');
const form=document.querySelector('form');
const taskk=document.getElementById('task');
form.addEventListener('submit',addtask);
function addtask(e){
    const li=document.createElement('li');
    const link=document.createElement('a');
    const ii=document.createElement('i');
    li.className='collection-item';
    link.setAttribute('href','#');
    link.className='delete-item secondary-content';
    ii.className='fa fa-remove';
    document.querySelector('ul.collection').appendChild(li);
    li.appendChild(link);
    link.appendChild(ii);
    li.appendChild(document.createTextNode(val.value));
    taskk.value='';
    e.preventDefault();
}