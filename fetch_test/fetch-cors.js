
async function cors(){
    await fetch("http://localhost:3000/test-fetch",{
        method:'GET',
        mode:'cors',
        credentials:'include',
        cache:'default',
        headers:{
            'Content-Type':'application/json'
        }
    });

    console.log("fetch");
}