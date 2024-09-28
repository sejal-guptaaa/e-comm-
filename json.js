let main_cnt = document.getElementById("main_cnt")

fetcPPPPPP  h("https://dummyjson.com/products").then((e)=>{return e.json()}).then((e)=>{
    let all_products = e.products
    all_products.forEach((v) => {
        let cnt = document.createElement("div")
        cnt.classList="cnt"
        let img_cnt = document.createElement("div")
        img_cnt.classList = "img_cnt"
        let img = document.createElement("img")
        img.classList="img"
        img.src=(v.images)
        let products_name = document.createElement("h3")
        products_name.textContent=v.title
        img_cnt.appendChild(img)
        img_cnt.appendChild(products_name)
        let btn_cnt = document.createElement("div")
        btn_cnt.classList = "btn_cnt"
        let bnb = document.createElement("button")
        bnb.textContent = "Buy Now"
        let vma = document.createElement("a")
        vma.textContent = "View More"
        vma.href="product.html"
        vma.target = "blank"
        main_cnt.appendChild(cnt)
        cnt.appendChild(img_cnt)
        cnt.appendChild(btn_cnt)
        btn_cnt.appendChild(bnb)
        btn_cnt.appendChild(vma)


    



    });

})