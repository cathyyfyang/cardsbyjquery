console.log("test")

const students = [
    {id:1, name:'Bob',age:21},
    {id:2, name:'Tina',age:22},
    {id:3, name:'Jery',age:23},
    {id:4, name:'Jane',age:24},
]
students.map((x)=>{
$(".cards").append(`<div class="card"><div class="id">${x.id}</div><div class="name">${x.name}</div> <div class="age">${x.age}</div></div>`);
});












