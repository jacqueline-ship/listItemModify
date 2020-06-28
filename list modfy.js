const pdtnamo = document.querySelector("#pdtname")//placeholder
const btn =document.querySelector(".button")//btn
const holdder =document.querySelector(".pdts")//holdder
const modif = document.querySelector("#mod") //placeholder
const btnmod= document.querySelector(".buttonmod") //btn

let marketShop=[
    {
        name:"tomato",
        quantity:56,
        type:"Kilo"
    },
    {
       name:"pepsi",
       quantity:8,
       type:"Unit"
    },
     { name:"milk",
      quantity: 60,
      type:"kilo"
    },
    {
        name:"indomine noodles",
        quantity:100,
        type:"Unit"
    },
    {
        name:"luxe biscuit",
        quantity:40,
        type:"Unit"
    },
    {
       name:"egg",
       quantity:30,
       type:"Unit"
    },
    {
        name:"Ahmad tea",
        quantity:20,
        type:"Unit"
    },
    {
        name:"rice",
        quantity:8,
        type:"Kilo"
    },
    {
        name:"Twinkie cake",
        quantity:35,
        type:"Unit"
    },
    {
       name:"Lay's chips",
       quantity:40,
       type:"Unit"
    }
 ];

 
function n(){ 
  // const pdts =pdtnamo.value ;
   this.pdts =pdtnamo.value ;
    let pdt =String(pdts)
    for (let i = 0; i < marketShop.length; i++) {
        if (marketShop[i].name===pdt) {
document.querySelector(".pdts").innerHTML = ` quantity: ${marketShop[i].quantity}   ,,  type: ${marketShop[i].type } `
        }
    }
} 
btn.addEventListener("click" ,(e)=>{
    e.stopPropagation();
    n( )
     pdtnamo.value=""
})

function modified(){
        let num=modif.value
        let list =[...marketShop]
        for (let i = 0; i < list.length; i++) {
            if(list[i].name===pdts){
                 document.querySelector(".pdts").innerHTML= ` quantity: ${ list[i].quantity=num }   ,,  type: ${list[i].type } `
             // list[i].quantity=num ;
            }   
        }
}
btnmod.addEventListener("click",(e)=>{
    e.stopPropagation();
     modified()
    modif.value=""
})

