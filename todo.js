const addform = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generatetemplate = (todo) =>{

    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span class="text-light">${todo}</span>
        <i class="far fa-trash-alt delete text-light"></i>
    </li>
    ` 
    list.innerHTML += html;
};

addform.addEventListener('submit',e =>{
    e.preventDefault();
    let val = addform.add.value.trim();
    if(val.length){
        generatetemplate(val);
        addform.reset();
    }

});

list.addEventListener('click',e=>{
    console.log(e);
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

const filtertodos = (val)=>{

    Array.from(list.children)
    .filter(todo=>!todo.textContent.toLowerCase().includes(val))
    .forEach(todo=>todo.classList.add('filtered'));

    Array.from(list.children)
    .filter(todo=>todo.textContent.toLowerCase().includes(val))
    .forEach(todo=>todo.classList.remove('filtered'));
    
};

search.parentElement.addEventListener('submit',(e)=>{
    e.preventDefault();
});


search.addEventListener('keyup',(e)=>{
    const val = search.value.trim().toLowerCase();
    filtertodos(val);
});



