const id = location.search.split('?')[1];
const getproducts = async()=>{
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    const data = response.data;
    document.querySelector(".prodImg").innerHTML = `<img src="${data.thumbnail}" alt="${data.thumbnail}" class="lg:w-full"/>`
    document.querySelector(".prodH2").textContent = data.title; 
    document.querySelector(".prodPrice").textContent = '$ '+data.price; 
    document.querySelector(".prodStock").textContent = "In stock : "+data.stock; 
    document.querySelector(".prodDesc").textContent = data.description;
    const rev=data.reviews;
    console.log(rev)
    const getReviews = rev.map((r)=>{
        return`<div class="rounded-[12px] bg-[#C4C6CF]/30 h-60 p-4">
            <div class="flex items-center justify-between">
                <div class="flex flex-col gap-1">
                    <h2 class="text-[#000613] text-xl font-Manrope font-semibold">${r.reviewerName}</h2>
                    </div>
                <span class="text-[#43474E] font-Inter font-semibold text-xs">${r.date}</span>
            </div>
            <div class="flex flex-col gap-1">
            <span class="text-[#000613] font-Inter text-lg font-bold">${r.comment}</span>
            <span class="font-Inter text-[#43474E]">Email : ${r.reviewerEmail}</span>
            </div>
        </div>`
    }).join('')
    document.querySelector(".Testimonial").innerHTML = getReviews;
}
getproducts();