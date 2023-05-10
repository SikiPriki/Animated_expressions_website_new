//Gemensam URL del
let api_url='http://127.0.0.1:5000/face'

//Getting the the URL data
async function getFace(url){
    try{
        const respons=await fetch(url)
        console.log(respons)
        return await respons.json()
    }catch(error){
        console.log(error)
    }
}

//HTML ids
let ids=["#inc-mouth","#right-eb","#left-eb","#eye-left","#eye-right"]


//Function that animates
function animFunction(val){

    //Getting all the values from API
    let parts=[val.mouth,val.eb_right,val.eb_left,val.eye_left,val.eye_right]

    //Looping through all the animations and new values
    for(let i=0; i<ids.length; i++){
     //animation
        anime({
            targets: ids[i],
            d:[
                {value: parts[i]} 
            ],
            duration:750,
            easing:"easeInQuad",
        })
    }
}


//Happy face
async function smile(){
   let smile= await getFace(api_url+"?name=smile")
   smile=smile[0]
   
   animFunction(smile)
}

//Sad face
async function sad(){
    let sad= await getFace(api_url+"?name=sad")
    sad=sad[0]
    
    animFunction(sad)
}

//Original face
async function neutral(){
    let neutral= await getFace(api_url+"?name=neutral")
    neutral=neutral[0]

    animFunction(neutral)
}


//Event listeners for the button
document.getElementById('but_happy').addEventListener("click", smile)
document.getElementById('but_sad').addEventListener("click", sad)
document.getElementById('but_neut').addEventListener("click", neutral)


//https://animejs.com/documentation/#playPause