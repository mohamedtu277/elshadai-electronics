// Hussnan Enterprise frontend demo. Replace sample catalogue and WhatsApp number before launch.
const WHATSAPP_NUMBER="+23288 265 984"; // digits only, international format, e.g. +23288 265 984
const products=[
{id:1,name:"iPhone 15 Pro (128GB)",brand:"Apple",category:"Smartphones",price:18500,tag:"New",tab:"New Arrivals",rating:12,img:"https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500&auto=format&fit=crop&q=85"},
{id:2,name:"HP Laptop 15 (8GB/512GB)",brand:"HP",category:"Laptops & Computers",price:9800,tag:"Best Seller",tab:"Best Sellers",rating:8,img:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=85"},
{id:3,name:"Samsung Galaxy A55",brand:"Samsung",category:"Smartphones",price:8200,tag:"New",tab:"New Arrivals",rating:15,img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=85"},
{id:4,name:"AirPods Pro (2nd Gen)",brand:"Apple",category:"Audio",price:4500,tag:"Hot",tab:"Best Sellers",rating:15,img:"https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500&auto=format&fit=crop&q=85"},
{id:5,name:"Samsung 43” Smart TV",brand:"Samsung",category:"TV & Home Entertainment",price:6900,tag:"Sale",tab:"On Sale",rating:7,img:"https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&auto=format&fit=crop&q=85"},
{id:6,name:"Smart Watch T500",brand:"Generic",category:"Accessories",price:1200,tag:"Popular",tab:"Best Sellers",rating:9,img:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=85"},
{id:7,name:"Wireless Gaming Controller",brand:"Generic",category:"Gaming",price:1450,tag:"New",tab:"New Arrivals",rating:6,img:"https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=500&auto=format&fit=crop&q=85"},
{id:8,name:"Android Tablet 10-inch",brand:"Generic",category:"Tablets",price:3900,tag:"Popular",tab:"Best Sellers",rating:11,img:"https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format&fit=crop&q=85"},
{id:9,name:"JBL Portable Speaker",brand:"JBL",category:"Audio",price:2600,tag:"Popular",tab:"Best Sellers",rating:14,img:"https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?w=500&auto=format&fit=crop&q=85"},
{id:10,name:"Fast Charge USB-C Cable",brand:"Generic",category:"Accessories",price:550,tag:"Hot",tab:"Best Sellers",rating:18,img:"https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&auto=format&fit=crop&q=85"},
{id:11,name:"Bluetooth Earbuds X10",brand:"Generic",category:"Accessories",price:1800,tag:"New",tab:"New Arrivals",rating:13,img:"https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&auto=format&fit=crop&q=85"},
{id:12,name:"Gaming Headset Pro",brand:"Generic",category:"Gaming",price:2200,tag:"Sale",tab:"On Sale",rating:10,img:"https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&auto=format&fit=crop&q=85"},
{id:13,name:"Lenovo Tab M10",brand:"Lenovo",category:"Tablets",price:4300,tag:"Popular",tab:"Best Sellers",rating:9,img:"https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format&fit=crop&q=85"},
{id:14,name:"32” Monitor HD",brand:"Generic",category:"Laptops & Computers",price:7600,tag:"New",tab:"New Arrivals",rating:8,img:"https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&auto=format&fit=crop&q=85"},
{id:15,name:"Bluetooth Keyboard",brand:"Generic",category:"Accessories",price:1100,tag:"Popular",tab:"Best Sellers",rating:16,img:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&auto=format&fit=crop&q=85"},
{id:16,name:"Smart Home Camera Mini",brand:"Generic",category:"Smart Home",price:2800,tag:"Best Seller",tab:"Best Sellers",rating:12,img:"https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&auto=format&fit=crop&q=85"},
{id:17,name:"Mini Projector 1080P",brand:"Generic",category:"TV & Home Entertainment",price:9200,tag:"Sale",tab:"On Sale",rating:7,img:"https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=500&auto=format&fit=crop&q=85"},
{id:18,name:"Power Bank 20000mAh",brand:"Generic",category:"Accessories",price:1600,tag:"Popular",tab:"Best Sellers",rating:17,img:"https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&auto=format&fit=crop&q=85"},
{id:19,name:"Canon EOS M50",brand:"Canon",category:"Cameras & Drones",price:14200,tag:"New",tab:"New Arrivals",rating:11,img:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=85"},
{id:20,name:"DJI Mini 4 Pro Drone",brand:"DJI",category:"Cameras & Drones",price:18600,tag:"Hot",tab:"Best Sellers",rating:8,img:"https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&auto=format&fit=crop&q=85"},
{id:21,name:"Smart Plug 2-Pack",brand:"Generic",category:"Smart Home",price:2400,tag:"Popular",tab:"Best Sellers",rating:16,img:"https://images.unsplash.com/photo-1558002038-1055907df827?w=500&auto=format&fit=crop&q=85"},
{id:22,name:"Wi-Fi Router AX3000",brand:"TP-Link",category:"Smart Home",price:6200,tag:"Best Seller",tab:"Best Sellers",rating:13,img:"https://images.unsplash.com/photo-1562408590-e32931084e23?w=500&auto=format&fit=crop&q=85"},
{id:23,name:"Mechanical Keyboard K75",brand:"Generic",category:"Accessories",price:3300,tag:"Hot",tab:"New Arrivals",rating:12,img:"https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500&auto=format&fit=crop&q=85"},
{id:24,name:"USB-C Hub 7-in-1",brand:"Generic",category:"Accessories",price:1950,tag:"Popular",tab:"Best Sellers",rating:18,img:"https://images.unsplash.com/photo-1528141603775-81fd11f2f9be?w=500&auto=format&fit=crop&q=85"},
{id:25,name:"Acer 14-inch Laptop",brand:"Acer",category:"Laptops & Computers",price:11400,tag:"Sale",tab:"On Sale",rating:9,img:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&auto=format&fit=crop&q=85"},
{id:26,name:"Noise Cancelling Headphones",brand:"Sony",category:"Audio",price:5200,tag:"Best Seller",tab:"Best Sellers",rating:14,img:"https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&auto=format&fit=crop&q=85"}
];
const $=id=>document.getElementById(id),money=n=>"NLe "+Number(n).toLocaleString("en-US");
let cart=JSON.parse(localStorage.getItem("elshadiseCartV2")||"[]"),wishes=JSON.parse(localStorage.getItem("elshadiseWishes")||"[]"),category="All",tab="Best Sellers";
function getProduct(id){return products.find(p=>p.id===Number(id));}
function normalizeCart(){cart=cart.filter(item=>item && item.id && Number(item.qty)>0 && getProduct(item.id));}
function persist(){normalizeCart();localStorage.setItem("elshadiseCartV2",JSON.stringify(cart));renderCart()}
function setBodyScrollLock(lock){document.body.classList.toggle("lock-scroll",Boolean(lock));}
function renderProducts(){
 const q=$("searchInput").value.toLowerCase().trim(),sort=$("sortSelect").value;
 let list=products.filter(p=>(category==="All"||p.category===category)&&(!q||(p.name+" "+p.brand+" "+p.category).toLowerCase().includes(q))&&(tab==="All"||p.tab===tab));
 if(sort==="low")list.sort((a,b)=>a.price-b.price);if(sort==="high")list.sort((a,b)=>b.price-a.price);
 $("resultCount").textContent=list.length;
 $("productGrid").innerHTML=list.map(p=>`<article class="product-card"><div class="product-photo"><span class="product-tag">${p.tag}</span><button class="wish ${wishes.includes(p.id)?"active":""}" data-wish="${p.id}" aria-label="Add to wishlist">♥</button><img src="${p.img}" alt="${p.name}" loading="lazy"></div><div class="product-info"><div class="product-brand">${p.brand}</div><div class="product-name">${p.name}</div><div class="product-meta"><div class="product-price">${money(p.price)}</div><div class="stars">★★★★★ <small>(${p.rating})</small></div></div><div class="product-actions"><button class="add-cart" data-add="${p.id}">Add to Cart</button><button class="buy-now" data-buy="${p.id}">Buy Now</button></div></div></article>`).join("");
 $("noResults").hidden=list.length>0;
}
function renderCart(){
 normalizeCart();
 const count=cart.reduce((s,x)=>s+x.qty,0),total=cart.reduce((s,x)=>{const p=getProduct(x.id); return s + (p ? p.price*x.qty : 0);},0);
 $("cartCount").textContent=count;$("cartItemsCount").textContent=`(${count})`;$("cartTotal").textContent=money(total);$("wishCount").textContent=wishes.length;
 $("cartEmpty").style.display=count?"none":"block";$("cartBottom").style.display=count?"block":"none";
 $("cartLines").innerHTML=cart.map(x=>{let p=getProduct(x.id); if(!p) return ""; return `<div class="cart-line"><div class="cart-thumb">▣</div><div><b>${p.name}</b><small>${money(p.price)} each</small><div class="qty"><button data-qty="${p.id}" data-d="-1">−</button>${x.qty}<button data-qty="${p.id}" data-d="1">+</button></div></div><div><b>${money(p.price*x.qty)}</b><button class="remove" data-remove="${p.id}">Remove</button></div></div>`}).join("");
}
function toast(msg){let t=$("toast");t.textContent=msg;t.classList.add("show");clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>t.classList.remove("show"),2300)}
function showCart(){ $("cartPanel").classList.add("open");$("shade").classList.add("show");setBodyScrollLock(true); }
function hideCart(){ $("cartPanel").classList.remove("open");$("shade").classList.remove("show");setBodyScrollLock(false); }
function setWhatsAppLink(id,message){let el=$(id);if(el)el.onclick=e=>{e.preventDefault();if(WHATSAPP_NUMBER.includes("X")){toast("Add your WhatsApp number in app.js first");return}window.open("https://wa.me/"+WHATSAPP_NUMBER+"?text="+encodeURIComponent(message||"Hello ELSHADAI Electronics & Accessories, I need help with an order."),"_blank")}}
document.addEventListener("click",e=>{
 let add=e.target.closest("[data-add]");if(add){let id=Number(add.dataset.add);const product=getProduct(id);if(!product)return;let item=cart.find(x=>x.id===id);item?item.qty++:cart.push({id,qty:1});persist();toast("Product added to your cart")}
 let buy=e.target.closest("[data-buy]");if(buy){let id=Number(buy.dataset.buy);const product=getProduct(id);if(!product)return;let item=cart.find(x=>x.id===id);item?item.qty++:cart.push({id,qty:1});persist();showCart();toast("Order ready for checkout")}
 let qty=e.target.closest("[data-qty]");if(qty){let id=Number(qty.dataset.qty);let item=cart.find(x=>x.id===id);if(!item)return;item.qty+=Number(qty.dataset.d);if(item.qty<1)cart=cart.filter(x=>x.id!==id);persist()}
 let rem=e.target.closest("[data-remove]");if(rem){cart=cart.filter(x=>x.id!==Number(rem.dataset.remove));persist()}
 let wish=e.target.closest("[data-wish]");if(wish){let id=Number(wish.dataset.wish);wishes=wishes.includes(id)?wishes.filter(x=>x!==id):[...wishes,id];localStorage.setItem("elshadiseWishes",JSON.stringify(wishes));renderProducts();renderCart();toast("Wishlist updated")}
 let cat=e.target.closest("[data-cat]");if(cat){category=cat.dataset.cat;tab="All";document.querySelectorAll(".tab").forEach(b=>b.classList.toggle("active",b.dataset.tab==="All"));document.querySelectorAll(".category-pill").forEach(b=>b.classList.toggle("active",b.dataset.cat===category));renderProducts();$("products").scrollIntoView({behavior:"smooth"});$("sidebar").classList.remove("show")}
 let t=e.target.closest("[data-tab]");if(t){tab=t.dataset.tab;document.querySelectorAll(".tab").forEach(b=>b.classList.toggle("active",b===t));renderProducts()}
});
document.addEventListener("keydown",e=>{if(e.key==="Escape"){hideCart();$("checkoutShade").classList.remove("show");$("sidebar").classList.remove("show");$("mainNav").classList.remove("mobile-open");}});
$("searchForm").addEventListener("submit",e=>{e.preventDefault();category="All";tab="All";renderProducts();$("products").scrollIntoView({behavior:"smooth"})});
$("searchInput").addEventListener("input",()=>{category="All";tab="All";renderProducts()});$("sortSelect").addEventListener("change",renderProducts);
$("cartOpen").onclick=showCart;$("cartClose").onclick=hideCart;$("shade").onclick=hideCart;$("keepShopping").onclick=hideCart;
$("categoryToggle").onclick=()=>$("sidebar").classList.toggle("show");$("hamburger").onclick=()=>$("mainNav").classList.toggle("mobile-open");
$("checkoutStart").onclick=()=>{hideCart();$("checkoutShade").classList.add("show");setBodyScrollLock(true)};$("checkoutClose").onclick=()=>{$("checkoutShade").classList.remove("show");setBodyScrollLock(false)};
$("checkoutShade").addEventListener("click",e=>{if(e.target===$("checkoutShade")){$("checkoutShade").classList.remove("show");setBodyScrollLock(false)}});
$("checkoutForm").addEventListener("submit",e=>{
 e.preventDefault();normalizeCart();if(!cart.length)return;let f=new FormData(e.target),lines=cart.map(x=>{let p=getProduct(x.id); if(!p) return ""; return `${p.name} x${x.qty} — ${money(p.price*x.qty)}`}).filter(Boolean).join("\n"),total=cart.reduce((s,x)=>{let p=getProduct(x.id); return s + (p ? p.price*x.qty : 0);},0);
 let msg=`Hello ELSHADAI Electronics & Accessories, I would like to order:\n${lines}\nSubtotal: ${money(total)}\nName: ${f.get("name")}\nPhone: ${f.get("phone")}\nAddress: ${f.get("address")}\nNote: ${f.get("note")||"None"}`;
 if(f.get("method")==="whatsapp"){if(WHATSAPP_NUMBER.includes("X")){toast("Set your WhatsApp number in app.js first");return}window.open("https://wa.me/"+WHATSAPP_NUMBER+"?text="+encodeURIComponent(msg),"_blank")}
 else alert("Website order preview only — server order saving will be connected in the Laravel stage.\n\n"+msg);
 cart=[];persist();$("checkoutShade").classList.remove("show");e.target.reset();toast("Thank you for shopping with Hussnan");setBodyScrollLock(false);
});
$("subscribeForm").addEventListener("submit",e=>{e.preventDefault();$("subscribeMessage").textContent="Thank you! Newsletter signup will be connected later.";e.target.reset()});
$("accountBtn").onclick=()=>toast("Customer accounts will be enabled in the backend stage");
$("wishlistBtn").onclick=()=>toast("Your wishlist contains "+wishes.length+" item(s)");
$("year").textContent=new Date().getFullYear();
setWhatsAppLink("topWhatsApp");setWhatsAppLink("promoWhatsApp");setWhatsAppLink("floatWhatsApp");
renderProducts();renderCart();