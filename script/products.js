document.addEventListener("DOMContentLoaded", ()=>{
    const cardContainer=document.getElementById("card_container");
    const allBtn=document.getElementById("all_products");
    const electronicsBtn=document.getElementById("electronics_products");
    const loadAllProducts=async()=>{
        const url="https://fakestoreapi.com/products";
        const res=await fetch(url);
        const data=await res.json();
        displayAllProducts(data);
    }
    const displayAllProducts=(products)=>{
        cardContainer.innerHTML="";
        products.forEach(product=> {
            // console.log(product);
            const card=document.createElement("div");
            card.className="card bg-base-100 shadow-sm border-2 border-gray-200";
            card.innerHTML=`
                <figure class="bg-gray-200">
                        <img class="py-4 px-6 h-52 object-cover" src=${product.image} alt=${product.category} />
                    </figure>
                    <div class="px-2 py-3">
                        <div class="flex justify-between items-center text-[10px] mb-3">
                            <div class="rounded-full border border-gray-300 py-[2px] px-[12px] bg-blue-100 font-semibold text-[#442dec]">${product.category}</div>
                            <div class="items-end">
                                <span><i class="fa-solid fa-star text-yellow-500"></i></span> 
                                <span>${product.rating.rate}</span> 
                                <span>(${product.rating.count})</span>
                            </div>
                        </div>
                        <h3 class="font-semibold mb-2 truncate">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h3>
                        <h2 class="font-semibold text-lg mb-2">$109.5</h2>
                        <div class="flex flex-wrap items-center justify-between text-sm gap-4 ">
                            <div class="flex-1 border-2 border-gray-300 rounded py-1 px-1 text-center">
                                <i class="fa-regular fa-eye"></i>
                                <span> Details</span>
                            </div>
    
                            <div type="button" class=" flex-1 rounded text-white cursor-pointer py-1 px-1 text-center bg-[#442dec] hover:bg-[#1401a6]">
                                <i class="fa-solid fa-cart-arrow-down"></i>
                                <span>Add</span>
                            </div>
                        </div>
                    </div>
            `;
            cardContainer.appendChild(card);
        });
    }

    // load catagory products
    const catagoryProducts=async()=>{
        // all catagory names
        const url="https://fakestoreapi.com/products/categories";
        const res=await fetch(url);
        const catagoryNames=await res.json();

        const catagoryContainer=document.getElementById("catagory_container");
        const catagoryDivs=document.querySelectorAll("#catagory_container div");
        catagoryContainer.addEventListener("click", (e)=>{
            catagoryDivs.forEach(div=>{
                div.classList.remove("active2");
            })
            const selectedCatagory=e.target.closest("div");
            if(!selectedCatagory) return;
            selectedCatagory.classList.add("active2");
            const catagoryName=selectedCatagory.innerText.trim().toLowerCase();
            const isExist=catagoryNames.includes(catagoryName);
            if(isExist){               
                loadCatagoryProducts(catagoryName);
            }
        })
    }
    const loadCatagoryProducts=async(catagoryName)=>{
        const urlCatagory=`https://fakestoreapi.com/products/category/${catagoryName}`;
        const res=await fetch(urlCatagory);
        const catagoryProducts=await res.json();
        displayAllProducts(catagoryProducts);

    }
    catagoryProducts();

    loadAllProducts();
    allBtn.addEventListener("click", ()=>{
        loadAllProducts();
    })
})

