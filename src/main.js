const getcategories = async()=>{
    const response = await axios.get(`https://dummyjson.com/products/category-list`);
    const categories = response.data;
    const displayCategories = categories.map((c)=>{
       return `<a href="./Categorie.html?${c}" class="bg-amber-400 py-6 px-3 text-center rounded-full font-Manrope font-semibold hover:bg-amber-400/70 hover:scale-95 transition-all"><h2>${c}</h2></a>`;
    }).join("")
    document.querySelector(".categories").innerHTML= displayCategories;
}
getcategories();
const getProducts = async()=>{
    const response = await axios.get(`https://dummyjson.com/products?limit=10`);
    const Products = response.data.products;
    console.log(Products);
    const displayProducts = Products.map((p)=>{
        return `<a href="./ProductsDetails.html?${p.id}" class="flex flex-col gap-4 shadow-md w-fit sm:w-full">
                    <img src="${p.thumbnail}" alt="Products"/>
                    <div class="flex items-center justify-between px-3 py-3">
                        <div class="flex flex-col">
                            <span class="text-[#000613] font-bold font-Manrope">${p.title}</span>
                            <span>${p.rating}</span>
                        </div>
                        <span class="text-[#000613] font-Inter font-bold">${p.price}$</span>
                    </div>
                </a>`
    }).join("")
    document.querySelector(".Items").innerHTML = displayProducts;
}
getProducts();
