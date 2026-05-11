const id = location.search.split('?')[1];
const getproducts = async()=>{
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    const data = response.data;
    console.log(data);
    document.querySelector(".prodImg").innerHTML = `<img src="${data.thumbnail}" alt="${data.thumbnail}" class="lg:w-full"/>`
    document.querySelector(".prodH2").textContent = data.title; 
    document.querySelector(".prodPrice").textContent = '$ '+data.price; 
    document.querySelector(".prodStock").textContent = "In stock : "+data.stock; 
    document.querySelector(".prodDesc").textContent = data.description;
}
getproducts();