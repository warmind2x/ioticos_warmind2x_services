function hello() {
    setTimeout(() => {
        console.log("hola mundo");
        hello();
    }, 1000);
    
}

hello();