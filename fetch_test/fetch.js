
async function test(){
    const response = await fetch("http://localhost:3000/test-fetch",{
        method:'GET',
        mode:'no-cors',
        credentials:'include',
        cache:'default',
        headers:{
            'Content-Type':'application/json'
        }
    });

    console.log(response.status);

    if(response.ok){
        const json = await response.json();
    console.log(json);
    }
}




