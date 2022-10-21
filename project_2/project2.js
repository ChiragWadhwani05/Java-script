const joke = document.getElementById('joke');
const btn = document.getElementById('btn');

const generatejokes = async ()=>{
    try{
        const setHeader={
            headers:{
                Accept : "application/json"
            }
        }
        const response =await fetch('https://icanhazdadjoke.com/',setHeader);
        const data = await response.json();
        joke.innerHTML=data.joke;
    }catch(err){
        console.log(`${err}`);
    }
}
btn.addEventListener('click',generatejokes);
generatejokes();
