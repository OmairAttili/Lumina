const getCategories = async()=>{
    const response  = await axios.get(`https://dummyjson.com/products/category-list`);
    console.log(response);
}
getCategories();