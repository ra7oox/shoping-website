var products=[
    
        {
            "title":"product1",
            "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur.",
            "price":90
        }
    ,
    
    {
            "title":"product2",
            "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur.",
            "price":30
        }
    ,
 
    {
            "title":"product3",
            "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur.",
            "price":90
        }
    



   

]
var imgg=["./images/produit1.jpg","./images/produit2.jpg","./images/produit3.jpg"]
function add_products(){
    var section=document.getElementById("section")
    
    for(let i=0;i<= products.length;i++){
        var div_product=document.createElement("div")
    div_product.setAttribute("class","produit")
    section.appendChild(div_product)
    var title=document.createElement("h1")
    var img=document.createElement("img")
    var description=document.createElement("p")
    var price_contain=document.createElement("span")
    var price=document.createElement("span")
    var button=document.createElement("button")
    title.innerHTML=products[i].title
    div_product.appendChild(title)

    
    img.setAttribute("src",imgg[i])
    img.setAttribute("class","img")
    div_product.appendChild(img)
    description.innerHTML=products[i].description
    div_product.appendChild(description)
    price.innerHTML=products[i].price
    price_contain.innerHTML="$"
    price_contain.setAttribute("class","price")
    price_contain.appendChild(price)
    div_product.appendChild(price_contain)
    button.innerHTML="add to cart"
    button.setAttribute("class","btn btn-success")
    button.setAttribute("onclick","add_total(this)")

    div_product.appendChild(button)

    
    

    }
}
var total=0
function add_total(btn){
    var totall=document.getElementById("total")
    var tst=btn.parentNode
    var span=tst.children[3].lastChild.innerHTML
    total=total+Number(span)
    totall.innerHTML="total is:"+total+"$"
    
    
}
 