const val = document.querySelector('#task');
const form = document.querySelector('form');
const tasklist = document.querySelector('.collection');
const filter = document.querySelector("#filter");

form.addEventListener('submit', addtask);
tasklist.addEventListener('click', deltask);
<<<<<<< HEAD
<<<<<<< HEAD
filter.addEventListener('keyup',filterr);
document.addEventListener('DOMContentLoaded',loadLS);
=======
filter.addEventListener('keyup', filterr);
>>>>>>> 57872bdb3657210c795e4db0d866e90fee4cfc3b
=======
filter.addEventListener('keyup', filterr);
>>>>>>> 57872bdb3657210c795e4db0d866e90fee4cfc3b

function addtask(e) {
    const li = document.createElement('li');
    const link = document.createElement('a');
    const ii = document.createElement('i');
    li.className = 'collection-item';
    link.setAttribute('href', '#');
    link.className = 'delete-item secondary-content';
    ii.className = 'fa fa-remove';
    document.querySelector('ul.collection').appendChild(li);
    li.appendChild(link);
    link.appendChild(ii);
    li.appendChild(document.createTextNode(val.value));
<<<<<<< HEAD
<<<<<<< HEAD
    storeTaskLS(val.value);
    val.value='';
=======
    val.value = '';
>>>>>>> 57872bdb3657210c795e4db0d866e90fee4cfc3b
=======
    val.value = '';
>>>>>>> 57872bdb3657210c795e4db0d866e90fee4cfc3b
    e.preventDefault();
}
function storeTaskLS(taskk){
    let taskss;
    if(localStorage.getItem('taskss')===null){
        taskss=[];}
    else{
        taskss=JSON.parse(localStorage.getItem('taskss'));
    }
    taskss.push(taskk);
    localStorage.setItem('taskss',JSON.stringify(taskss));
}

<<<<<<< HEAD
function loadLS(){
    let taskss;
    if(localStorage.getItem('taskss')===null)
    {taskss=[];}
    else
    {
        taskss=JSON.parse(localStorage.getItem('taskss'));
    }
    taskss.forEach( function(tas){
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
        li.appendChild(document.createTextNode(tas));
    });

}

=======
>>>>>>> 57872bdb3657210c795e4db0d866e90fee4cfc3b
function deltask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {

        e.target.parentElement.parentElement.remove();
    }
    
}



function filterr(e) {
    const txt = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(
<<<<<<< HEAD
<<<<<<< HEAD
        function(li){
            const item=li.textContent.toLowerCase();
            if(item.indexOf(txt)!=-1)
            {
                li.style.display='block';
=======
=======
>>>>>>> 57872bdb3657210c795e4db0d866e90fee4cfc3b
        function (li) {
            const item = li.textContent.toLowerCase();
            if (item.indexOf(txt) != -1) {
                li.style.display = 'block';
<<<<<<< HEAD
>>>>>>> 57872bdb3657210c795e4db0d866e90fee4cfc3b
=======
>>>>>>> 57872bdb3657210c795e4db0d866e90fee4cfc3b
            }
            else {
                li.style.display = 'none';
            }
        }
    );
}