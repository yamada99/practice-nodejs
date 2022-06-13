
async function test(){
    await fetch("http://localhost:3000/test-fetch",{
        method:'GET',
        mode:'no-cors',
        credentials:'include',
        cache:'default',
        headers:{
            'Content-Type':'application/json'
        }
    });

    console.log("fetch");
}




