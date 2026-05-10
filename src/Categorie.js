const loc = location.search.split('?')[1];
document.querySelector(".categoryName").textContent=loc;
const getProd = async()=>{
    const response = await axios.get(`https://dummyjson.com/products/category/${loc}`)
    const products = response.data.products;
    const getProducts = products.map((p)=>{
        return `<a href="./ProductsDetails.html?${p.id}" class="item shadow-md py-4 hover:border transition-all duration-100">
                    <img src="${p.thumbnail}" alt="Product"/>
                    <div class="flex flex-col gap-2 items-center justify-center">
                        <h2>${p.title}</h2>
                        <span>$${p.price}</span>
                    </div>
                </a>`
    }).join("")
    document.querySelector(".Items").innerHTML=getProducts;
}
getProd();