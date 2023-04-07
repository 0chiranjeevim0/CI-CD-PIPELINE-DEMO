const getData = async(callback) =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json();
    console.log(data);
    callback(data)
}


const printData = (data) =>{
    for(let i = 0;i<5;i++){
        const todo = document.createElement('h2');
        todo.innerText = data[i].title;
        document.body.appendChild(todo);

    }
}


getData(printData);