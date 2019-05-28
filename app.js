const val = document.querySelector('#task');
const form = document.querySelector('form');
const tasklist = document.querySelector('.collection');
const filter = document.querySelector("#filter");

form.addEventListener('submit', addtask);
tasklist.addEventListener('click', deltask);
filter.addEventListener('keyup', filterr);

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
    val.value = '';
    e.preventDefault();
}

function deltask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {

        e.target.parentElement.parentElement.remove();
    }
}



function filterr(e) {
    const txt = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(
        function (li) {
            const item = li.firstChild.textContent.toLowerCase();
            if (item.indexOf(txt) != -1) {
                li.style.display = 'block';
            }
            else {
                li.style.display = 'none';
            }
        }
    );
}