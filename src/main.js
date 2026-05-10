const getcategories = async()=>{
    const response = await axios.get(`https://dummyjson.com/products/category-list`);
    const categories = response.data;
    const displayCategories = categories.map((c)=>{
       return `<a href="./Categorie.html?${c}" class="bg-amber-400 py-6 px-3 text-center rounded-full font-Manrope font-semibold hover:bg-amber-400/70 hover:scale-95 transition-all"><h2>${c}</h2></a>`;
    }).join("")
    document.querySelector(".categories").innerHTML= displayCategories;
}
getcategories();
