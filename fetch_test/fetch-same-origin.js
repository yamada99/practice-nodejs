
async function sameOrigin(){
    await fetch("http://localhost:3000/test-fetch",{
        method:'GET',
        mode:'same-origin',
        credentials:'include',
        cache:'default',
        headers:{
            'Content-Type':'application/json'
        }
    });

    console.log("fetch-same-origin");
}