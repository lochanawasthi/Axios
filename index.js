// let btn = document.querySelector("button");

// btn.addEventListener("click",async()=>{
// let fact = await getFacts();
// console.log(fact);

// let p = document.querySelector("#result");
// p.innerText = fact;
// });


// let url = "https://catfact.ninja/fact";

// async function getFacts(){
// try
// {
// let res = await axios.get(url);
// return res.data.fact;

// }
// catch(e){
// return "No Fact Found";
// }
// } 
// CAt API



// Dog Api
let url = "https://dog.ceo/api/breeds/image/random";

let btn  = document.querySelector("button");

btn.addEventListener("click", async()=> {
    
let fact = await getDog();

console.log(fact);
let img = document.querySelector("#result");
img.setAttribute("src",fact);

});

async function getDog() {
    try{
        let res = await axios.get(url);
        return res.data.message;
    }
    catch(e){
        return "Error In code";
    }
}
