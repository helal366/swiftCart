document.addEventListener("DOMContentLoaded", () => {
    const cardContainer = document.getElementById("card_container");
    const allBtn = document.getElementById("all_products");
    const electronicsBtn = document.getElementById("electronics_products");
    const loadAllProducts = async () => {
        const url = "https://fakestoreapi.com/products";
        const res = await fetch(url);
        const data = await res.json();
        displayAllProducts(data);
    }
    const displayAllProducts = (products) => {
        cardContainer.innerHTML = "";
        products.forEach(product => {
            // console.log(product);
            const card = document.createElement("div");
            card.className = "card bg-base-100 shadow-sm border-2 border-gray-200";
            card.innerHTML = `
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
                        <div type="button" class="flex flex-wrap items-center justify-between text-sm gap-4 ">
                           
                            <button id="product_${product.id}"  class="cursor-pointer flex-1 border-2 border-gray-300 rounded py-1 px-1 text-center hover:bg-gray-200">
                            <i class="fa-regular fa-eye"></i>
                            <span> Details</span>
                            </button>
    
                            <button  class=" flex-1 rounded text-white cursor-pointer py-1 px-1 text-center bg-[#442dec] hover:bg-[#1401a6]">
                                <i class="fa-solid fa-cart-arrow-down"></i>
                                <span>Add</span>
                            </button>
                        </div>
                    </div>
            `;
            cardContainer.appendChild(card);

            card.querySelector(`#product_${product.id}`).addEventListener("click", () => {
                productDetailsModal(product.id);
            })
            
        });
    }

    // load catagory products
    const catagoryProducts = async () => {
        // all catagory names
        const url = "https://fakestoreapi.com/products/categories";
        const res = await fetch(url);
        const catagoryNames = await res.json();

        const catagoryContainer = document.getElementById("catagory_container");
        const catagoryDivs = document.querySelectorAll("#catagory_container div");
        catagoryContainer.addEventListener("click", (e) => {
            catagoryDivs.forEach(div => {
                div.classList.remove("active2");
            })
            const selectedCatagory = e.target.closest("div");
            if (!selectedCatagory) return;
            selectedCatagory.classList.add("active2");
            const catagoryName = selectedCatagory.innerText.trim().toLowerCase();
            const isExist = catagoryNames.includes(catagoryName);
            if (isExist) {
                loadCatagoryProducts(catagoryName);
            }
        })
    }
    const loadCatagoryProducts = async (catagoryName) => {
        const urlCatagory = `https://fakestoreapi.com/products/category/${catagoryName}`;
        const res = await fetch(urlCatagory);
        const catagoryProducts = await res.json();
        displayAllProducts(catagoryProducts);

    }
    catagoryProducts();

    // modal show product details
    const productDetailsModal = async(id) => {
        const url=`https://fakestoreapi.com/products/${id}`;
        const res=await fetch(url);
        const product=await res.json();
        console.log(product);
        const modalContent=document.getElementById("modal_content");
        modalContent.innerHTML="";
        modalContent.innerHTML=`
            <div class="flex flex-col border-4 border-gray-300 rounded-md shadow p-5">
                    <img class="w-full p-2 max-h-72 bg-gray-200 shadow-md rounded-t-md" src=${product.image} alt=${product.category}>

                    <div class="bg-gray-600 text-white p-5 space-y-3 rounded-b-md text-xs border-t-2 border-white">
                        <h3 class="font-semibold text-base">${product.title}</h3>
                        <p class="">
                            ${product.description}
                        </p>
                        <div>
                            <p class="mb-2">${product.category}</p>
                            <div>
                                <p><span class="text-bold">Price: </span> $${product.price} </p> 
                                <p><span class="text-bold">In stock: </span> ${product.rating.count}</p>
                                <p><span class="text-bold">Rate: </span> ${product.rating.rate}</p>
                            </div>
                        </div>
                    </div>
                </div>
        `;

        const detailsModal=document.getElementById("details_modal");
        detailsModal.showModal();
    }

    loadAllProducts();
    allBtn.addEventListener("click", () => {
        loadAllProducts();
    })
})


