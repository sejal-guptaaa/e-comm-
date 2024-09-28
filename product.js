let prod_cnt = document.getElementById("prod_cnt")

fetch("https://dummyjson.com/products").then((e)=>{return e.json()}).then((e)=>{
    let all_products = e.products
    all_products.forEach((v) => {

        let cnt = document.createElement("div")
        cnt.classList="cnt"
        let cn1 = document.createElement("div")
        cn1.classList="cn1"
        let cn2 = document.createElement("div")
        cn2.classList="cn2"
        let cn3 = document.createElement("div")
        cn3.classList="cn3"
        
    });

})