import { useState } from "react";

const PRODUCTS = [
  {
    id: 1, category: "Electronics",
    name: "Sony WH-1000XM5 Headphones",
    price: 299.99, originalPrice: 379.99, rating: 4.8, reviews: 12847,
    badge: "Best Seller",
    image: "https://picsum.photos/seed/headphones/400/400",
    description: "Industry-leading noise cancellation with 30-hour battery life. Crystal clear hands-free calling with precise voice pickup.",
    features: ["30-hour battery", "ANC Technology", "Multipoint connection", "Fold-flat design"],
  },
  {
    id: 2, category: "Electronics",
    name: "Apple iPad Air 11-inch",
    price: 749.00, originalPrice: 799.00, rating: 4.9, reviews: 5621,
    badge: "Amazon's Choice",
    image: "https://picsum.photos/seed/ipad/400/400",
    description: "Supercharged by the Apple M2 chip. Brilliant 11-inch Liquid Retina display with True Tone and P3 wide color.",
    features: ["Apple M2 chip", "11\" Liquid Retina", "All-day battery", "USB-C connector"],
  },
  {
    id: 3, category: "Books",
    name: "Atomic Habits – James Clear",
    price: 16.99, originalPrice: 27.00, rating: 4.8, reviews: 98312,
    badge: "#1 Best Seller",
    image: "https://picsum.photos/seed/book1/400/400",
    description: "No.1 New York Times bestseller. Tiny changes, remarkable results. An easy & proven way to build good habits.",
    features: ["416 pages", "Paperback", "Available in Kindle", "Audiobook available"],
  },
  {
    id: 4, category: "Home",
    name: "Instant Pot Duo 7-in-1",
    price: 79.95, originalPrice: 99.99, rating: 4.7, reviews: 73214,
    badge: "Deal of the Day",
    image: "https://picsum.photos/seed/pot/400/400",
    description: "7-in-1 multi-use programmable pressure cooker, slow cooker, rice cooker, steamer, sauté, yogurt maker & warmer.",
    features: ["7-in-1 functions", "6 Quart capacity", "13 smart programs", "Energy efficient"],
  },
  {
    id: 5, category: "Clothing",
    name: "Levi's 501 Original Jeans",
    price: 59.50, originalPrice: 79.50, rating: 4.5, reviews: 32109,
    badge: null,
    image: "https://picsum.photos/seed/jeans/400/400",
    description: "The original blue jean since 1873. Straight fit with a mid rise. Button fly closure. 100% cotton denim.",
    features: ["100% Cotton", "Button fly", "Mid rise", "Straight fit"],
  },
  {
    id: 6, category: "Electronics",
    name: "Kindle Paperwhite 16GB",
    price: 139.99, originalPrice: 159.99, rating: 4.7, reviews: 28453,
    badge: "New",
    image: "https://picsum.photos/seed/kindle/400/400",
    description: "Thinner and lighter with 6.8\" display and adjustable warm light. Up to 10 weeks of battery life.",
    features: ["6.8\" display", "Adjustable warm light", "10-week battery", "IPX8 waterproof"],
  },
  // --- 24 new products ---
  {
    id: 7, category: "Electronics",
    name: "Samsung 65\" QLED 4K Smart TV",
    price: 897.99, originalPrice: 1299.99, rating: 4.6, reviews: 9341,
    badge: "Deal of the Day",
    image: "https://picsum.photos/seed/tv/400/400",
    description: "Quantum Dot technology delivers 100% Color Volume for over a billion shades. Real Game Enhancer+ for seamless gaming.",
    features: ["4K QLED", "HDR10+", "120Hz refresh", "Alexa built-in"],
  },
  {
    id: 8, category: "Electronics",
    name: "Apple AirPods Pro (2nd Gen)",
    price: 189.00, originalPrice: 249.00, rating: 4.8, reviews: 43210,
    badge: "Best Seller",
    image: "https://picsum.photos/seed/airpods/400/400",
    description: "Up to 2x more Active Noise Cancellation. Adaptive Transparency. Personalised Spatial Audio with dynamic head tracking.",
    features: ["ANC 2x improved", "Adaptive Transparency", "6hr battery", "MagSafe charging"],
  },
  {
    id: 9, category: "Electronics",
    name: "Logitech MX Master 3S Mouse",
    price: 74.99, originalPrice: 99.99, rating: 4.7, reviews: 18654,
    badge: "Amazon's Choice",
    image: "https://picsum.photos/seed/mouse/400/400",
    description: "8K DPI any-surface tracking, ultra-fast MagSpeed scrolling, quiet clicks, and ergonomic shape for all-day comfort.",
    features: ["8000 DPI", "MagSpeed scroll", "Quiet clicks", "Multi-device"],
  },
  {
    id: 10, category: "Electronics",
    name: "GoPro HERO12 Black",
    price: 299.99, originalPrice: 399.99, rating: 4.6, reviews: 7823,
    badge: "New",
    image: "https://picsum.photos/seed/gopro/400/400",
    description: "5.3K60 + 4K120 video, HyperSmooth 6.0 stabilization, waterproof to 33ft. The most powerful HERO ever.",
    features: ["5.3K60 video", "HyperSmooth 6.0", "33ft waterproof", "Live streaming"],
  },
  {
    id: 11, category: "Electronics",
    name: "Anker 65W USB-C Charger",
    price: 29.99, originalPrice: 45.99, rating: 4.8, reviews: 52341,
    badge: "Best Seller",
    image: "https://picsum.photos/seed/charger/400/400",
    description: "GaN II technology delivers laptop-level power in a compact size. Charges MacBook Pro 14\" at full speed.",
    features: ["65W output", "GaN II tech", "2-port USB-C", "Compact design"],
  },
  {
    id: 12, category: "Books",
    name: "The Psychology of Money",
    price: 14.29, originalPrice: 20.00, rating: 4.7, reviews: 67834,
    badge: "#1 Best Seller",
    image: "https://picsum.photos/seed/book2/400/400",
    description: "Timeless lessons on wealth, greed, and happiness. Morgan Housel shares 19 short stories exploring the ways people think about money.",
    features: ["256 pages", "Paperback & Kindle", "Audiobook available", "Business bestseller"],
  },
  {
    id: 13, category: "Books",
    name: "Ikigai: The Japanese Secret",
    price: 12.99, originalPrice: 18.99, rating: 4.6, reviews: 34512,
    badge: null,
    image: "https://picsum.photos/seed/book3/400/400",
    description: "The Japanese concept of ikigai is the reason we get up every morning. This uplifting guide teaches you how to find your own.",
    features: ["208 pages", "Hardcover", "Illustrated", "Gift edition available"],
  },
  {
    id: 14, category: "Books",
    name: "Dune – Frank Herbert",
    price: 10.99, originalPrice: 17.99, rating: 4.8, reviews: 112045,
    badge: "Classic",
    image: "https://picsum.photos/seed/book4/400/400",
    description: "Set in the distant future amidst a feudal interstellar society. The greatest science-fiction novel ever written.",
    features: ["896 pages", "Paperback", "Award-winning", "Series of 6 books"],
  },
  {
    id: 15, category: "Books",
    name: "Zero to One – Peter Thiel",
    price: 13.49, originalPrice: 19.99, rating: 4.6, reviews: 28901,
    badge: null,
    image: "https://picsum.photos/seed/book5/400/400",
    description: "Notes on startups, or how to build the future. The best book I've read on startups — Elon Musk.",
    features: ["224 pages", "Paperback", "Startup guide", "Kindle edition"],
  },
  {
    id: 16, category: "Home",
    name: "Dyson V15 Detect Vacuum",
    price: 549.99, originalPrice: 749.99, rating: 4.7, reviews: 15632,
    badge: "Best Seller",
    image: "https://picsum.photos/seed/vacuum/400/400",
    description: "Laser detects microscopic dust. Acoustic piezo sensor counts and sizes particles. Automatically adapts suction across all floor types.",
    features: ["Laser dust detection", "60min runtime", "HEPA filtration", "LCD screen"],
  },
  {
    id: 17, category: "Home",
    name: "Nespresso Vertuo Next Coffee",
    price: 109.95, originalPrice: 179.95, rating: 4.6, reviews: 22198,
    badge: "Deal of the Day",
    image: "https://picsum.photos/seed/coffee1/400/400",
    description: "Brew 5 cup sizes: Espresso, Double Espresso, Gran Lungo, Mug & Alto. Centrifusion technology spins capsules at 7000rpm.",
    features: ["5 cup sizes", "Centrifusion tech", "WiFi connected", "Recyclable pods"],
  },
  {
    id: 18, category: "Home",
    name: "Philips Hue Smart Bulb Starter",
    price: 79.99, originalPrice: 99.99, rating: 4.5, reviews: 41230,
    badge: "Amazon's Choice",
    image: "https://picsum.photos/seed/bulb/400/400",
    description: "16 million colours and shades of white. Control with voice or app. Works with Alexa, Google Assistant, and Apple HomeKit.",
    features: ["16M colors", "Voice control", "Starter kit (3 bulbs)", "Hub included"],
  },
  {
    id: 19, category: "Home",
    name: "LEVOIT Air Purifier Core 400S",
    price: 149.99, originalPrice: 199.99, rating: 4.7, reviews: 18904,
    badge: "Best Seller",
    image: "https://picsum.photos/seed/purifier/400/400",
    description: "H13 True HEPA filter captures 99.97% of particles. Smart control via VeSync app. Covers up to 1,588 sq ft in 1 hour.",
    features: ["H13 True HEPA", "1588 sq ft coverage", "Smart app control", "Auto mode"],
  },
  {
    id: 20, category: "Home",
    name: "Cuisinart 12-Cup Coffee Maker",
    price: 59.99, originalPrice: 89.99, rating: 4.6, reviews: 34501,
    badge: null,
    image: "https://picsum.photos/seed/coffee2/400/400",
    description: "Brew 1–12 cups. Fully automatic with 24-hour programmability. Brew Strength control and adjustable keep-warm temperature.",
    features: ["12-cup capacity", "24hr programmable", "Brew strength control", "BPA free"],
  },
  {
    id: 21, category: "Clothing",
    name: "Nike Air Max 270 Sneakers",
    price: 109.97, originalPrice: 150.00, rating: 4.6, reviews: 29430,
    badge: "Best Seller",
    image: "https://picsum.photos/seed/nike/400/400",
    description: "Max Air unit in the heel for all-day comfort. Engineered mesh upper for breathability. Lightweight foam midsole.",
    features: ["Max Air heel unit", "Engineered mesh", "Foam midsole", "Available in 12 colors"],
  },
  {
    id: 22, category: "Clothing",
    name: "Champion Reverse Weave Hoodie",
    price: 44.99, originalPrice: 65.00, rating: 4.5, reviews: 13870,
    badge: null,
    image: "https://picsum.photos/seed/hoodie/400/400",
    description: "Iconic reverse weave construction reduces shrinkage. Ribbed side panels to maintain shape. Double-layer hood.",
    features: ["Reverse weave", "Ribbed side panels", "Kangaroo pocket", "Unisex fit"],
  },
  {
    id: 23, category: "Clothing",
    name: "Adidas Ultraboost 23 Running",
    price: 139.95, originalPrice: 190.00, rating: 4.7, reviews: 21056,
    badge: "Amazon's Choice",
    image: "https://picsum.photos/seed/adidas/400/400",
    description: "BOOST midsole returns energy with every stride. Primeknit+ upper adapts to your foot shape. Continental rubber outsole.",
    features: ["BOOST midsole", "Primeknit+ upper", "Continental rubber", "Stretchweb outsole"],
  },
  {
    id: 24, category: "Clothing",
    name: "Patagonia Better Sweater Fleece",
    price: 119.00, originalPrice: 149.00, rating: 4.8, reviews: 8923,
    badge: null,
    image: "https://picsum.photos/seed/fleece/400/400",
    description: "Made from 100% recycled polyester fleece. Classic full-zip design with stand-up collar and zippered hand pockets.",
    features: ["100% recycled polyester", "Full-zip", "Stand collar", "Fair Trade Certified"],
  },
  {
    id: 25, category: "Sports",
    name: "Bowflex SelectTech 552 Dumbbells",
    price: 349.00, originalPrice: 549.00, rating: 4.8, reviews: 31204,
    badge: "Best Seller",
    image: "https://picsum.photos/seed/dumbbell/400/400",
    description: "Replaces 15 sets of weights. Dial system lets you select from 5–52.5 lbs in seconds. Ideal for strength training at home.",
    features: ["5–52.5 lb range", "Replaces 15 sets", "Dial selector", "Space-saving"],
  },
  {
    id: 26, category: "Sports",
    name: "Hydro Flask 32 oz Water Bottle",
    price: 34.95, originalPrice: 44.95, rating: 4.8, reviews: 89231,
    badge: "Best Seller",
    image: "https://picsum.photos/seed/bottle/400/400",
    description: "TempShield double-wall vacuum insulation keeps drinks cold 24hrs, hot 12hrs. BPA-free 18/8 stainless steel.",
    features: ["Cold 24hr / Hot 12hr", "BPA-free", "Wide mouth lid", "Dishwasher safe"],
  },
  {
    id: 27, category: "Sports",
    name: "Manduka PRO Yoga Mat",
    price: 88.00, originalPrice: 120.00, rating: 4.7, reviews: 14502,
    badge: "Amazon's Choice",
    image: "https://picsum.photos/seed/yoga/400/400",
    description: "Lifetime guarantee. 6mm cushioning for joint support. Closed-cell surface prevents moisture and bacteria. Non-slip grip.",
    features: ["Lifetime guarantee", "6mm cushioning", "Non-slip", "Eco-certified"],
  },
  {
    id: 28, category: "Sports",
    name: "Wilson Evolution Basketball",
    price: 39.99, originalPrice: 59.99, rating: 4.7, reviews: 22341,
    badge: null,
    image: "https://picsum.photos/seed/basketball/400/400",
    description: "Composite leather cover for soft feel and excellent grip. Cushion Core technology for consistent bounce and durability.",
    features: ["Composite leather", "Cushion Core", "Indoor use", "Official size 7"],
  },
  {
    id: 29, category: "Beauty",
    name: "CeraVe Moisturizing Cream 19oz",
    price: 18.99, originalPrice: 24.99, rating: 4.8, reviews: 143210,
    badge: "Best Seller",
    image: "https://picsum.photos/seed/cream/400/400",
    description: "Developed with dermatologists. Contains hyaluronic acid and 3 essential ceramides. Non-greasy, fragrance-free formula.",
    features: ["19oz tub", "Fragrance-free", "3 Ceramides", "Hyaluronic acid"],
  },
  {
    id: 30, category: "Beauty",
    name: "Oral-B iO Series 9 Electric Toothbrush",
    price: 149.99, originalPrice: 249.99, rating: 4.7, reviews: 19087,
    badge: "Deal of the Day",
    image: "https://picsum.photos/seed/toothbrush/400/400",
    description: "Revolutionary magnetic drive oscillating technology for a professional clean at home. AI identifies your brushing zone.",
    features: ["AI pressure sensor", "7 brushing modes", "2-week battery", "Travel case"],
  },
];

const CATEGORIES = ["All", "Electronics", "Books", "Home", "Clothing", "Sports", "Beauty"];

const Star = ({ filled, half }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill={filled ? "#F90" : half ? "url(#half)" : "none"} stroke="#F90" strokeWidth="1.5" style={{display:"inline"}}>
    {half && <defs><linearGradient id="half"><stop offset="50%" stopColor="#F90"/><stop offset="50%" stopColor="transparent"/></linearGradient></defs>}
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
  </svg>
);

const Stars = ({ rating }) => {
  return (
    <span style={{display:"inline-flex",gap:"1px",alignItems:"center"}}>
      {[1,2,3,4,5].map(i => (
        <Star key={i} filled={i <= Math.floor(rating)} half={i === Math.ceil(rating) && rating % 1 >= 0.5} />
      ))}
    </span>
  );
};

const discount = (orig, curr) => Math.round(((orig - curr) / orig) * 100);

export default function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [addedId, setAddedId] = useState(null);
  const [qty, setQty] = useState(1);

  const filtered = PRODUCTS.filter(p =>
    (category === "All" || p.category === category) &&
    (p.name.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase()))
  );

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const cartTotal = cart.reduce((s, i) => s + i.price * i.qty, 0);

  const addToCart = (product, q = 1) => {
    setCart(prev => {
      const ex = prev.find(i => i.id === product.id);
      if (ex) return prev.map(i => i.id === product.id ? {...i, qty: i.qty + q} : i);
      return [...prev, {...product, qty: q}];
    });
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1200);
  };

  const removeFromCart = (id) => setCart(prev => prev.filter(i => i.id !== id));
  const updateQty = (id, q) => {
    if (q < 1) { removeFromCart(id); return; }
    setCart(prev => prev.map(i => i.id === id ? {...i, qty: q} : i));
  };

  const openProduct = (p) => { setSelectedProduct(p); setQty(1); setCartOpen(false); };

  return (
    <div style={{fontFamily:"'Segoe UI',Arial,sans-serif",background:"#f0f2f2",minHeight:"100vh",color:"#0F1111"}}>
      {/* NAV */}
      <nav style={{background:"#131921",color:"#fff",padding:"0",position:"sticky",top:0,zIndex:100,boxShadow:"0 2px 8px rgba(0,0,0,.3)"}}>
        <div style={{display:"flex",alignItems:"center",gap:"12px",padding:"8px 16px",maxWidth:"1400px",margin:"0 auto"}}>
          {/* Logo */}
          <div onClick={() => {setSelectedProduct(null);setCartOpen(false);}} style={{cursor:"pointer",display:"flex",alignItems:"center",gap:"2px",padding:"4px 8px",border:"2px solid transparent",borderRadius:"3px",transition:"border-color .15s"}}>
            <span style={{fontSize:"24px",fontWeight:"900",letterSpacing:"-1px",color:"#FF9900"}}>amazon</span>
          </div>

          {/* Search bar */}
          <div style={{flex:1,display:"flex",borderRadius:"4px",overflow:"hidden",maxWidth:"700px"}}>
            <select value={category} onChange={e=>setCategory(e.target.value)}
              style={{background:"#f3f3f3",border:"none",padding:"0 8px",fontSize:"12px",color:"#555",borderRight:"1px solid #cdcdcd",cursor:"pointer"}}>
              {CATEGORIES.map(c => <option key={c}>{c}</option>)}
            </select>
            <input value={search} onChange={e=>setSearch(e.target.value)}
              placeholder="Search Amazon"
              style={{flex:1,border:"none",padding:"8px 12px",fontSize:"15px",outline:"none",background:"#fff"}}/>
            <button style={{background:"#FF9900",border:"none",padding:"0 16px",cursor:"pointer",fontSize:"20px"}}>🔍</button>
          </div>

          {/* Cart */}
          <button onClick={() => {setCartOpen(true);setSelectedProduct(null);}}
            style={{background:"transparent",border:"none",color:"#fff",cursor:"pointer",display:"flex",alignItems:"center",gap:"6px",padding:"6px 12px",borderRadius:"3px",transition:"background .15s",fontSize:"14px",fontWeight:"700",position:"relative"}}>
            <span style={{fontSize:"28px",lineHeight:1}}>🛒</span>
            <span>Cart</span>
            {cartCount > 0 && (
              <span style={{position:"absolute",top:"2px",left:"24px",background:"#FF9900",color:"#111",borderRadius:"50%",width:"20px",height:"20px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"12px",fontWeight:"800"}}>
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Category bar */}
        <div style={{background:"#232F3E",padding:"6px 24px",display:"flex",gap:"4px",overflowX:"auto"}}>
          {CATEGORIES.map(c => (
            <button key={c} onClick={()=>{setCategory(c);setSelectedProduct(null);setCartOpen(false);}}
              style={{background:category===c?"rgba(255,255,255,.15)":"transparent",border:category===c?"1px solid #fff":"1px solid transparent",
                color:"#fff",padding:"4px 12px",borderRadius:"2px",cursor:"pointer",fontSize:"13px",whiteSpace:"nowrap",transition:"all .15s"}}>
              {c}
            </button>
          ))}
        </div>
      </nav>

      {/* CART PANEL */}
      {cartOpen && (
        <div style={{maxWidth:"1400px",margin:"20px auto",padding:"0 16px"}}>
          <div style={{background:"#fff",borderRadius:"8px",boxShadow:"0 2px 12px rgba(0,0,0,.1)",padding:"24px"}}>
            <h2 style={{margin:"0 0 20px",fontSize:"28px",fontWeight:"400",borderBottom:"1px solid #ddd",paddingBottom:"12px"}}>
              Shopping Cart
            </h2>
            {cart.length === 0 ? (
              <div style={{textAlign:"center",padding:"60px 0",color:"#666"}}>
                <div style={{fontSize:"64px",marginBottom:"16px"}}>🛒</div>
                <p style={{fontSize:"18px"}}>Your cart is empty</p>
                <button onClick={()=>setCartOpen(false)} style={{marginTop:"16px",background:"#FFD814",border:"none",padding:"10px 24px",borderRadius:"8px",fontSize:"14px",cursor:"pointer",fontWeight:"700"}}>
                  Continue Shopping
                </button>
              </div>
            ) : (
              <>
                {cart.map(item => (
                  <div key={item.id} style={{display:"flex",gap:"16px",padding:"16px 0",borderBottom:"1px solid #eee",alignItems:"center"}}>
                    <img src={item.image} alt={item.name} onError={e=>{e.target.style.display="none"}} style={{width:"100px",height:"100px",objectFit:"cover",borderRadius:"4px",cursor:"pointer"}} onClick={()=>openProduct(item)}/>
                    <div style={{flex:1}}>
                      <p style={{margin:"0 0 4px",fontWeight:"600",fontSize:"16px",cursor:"pointer",color:"#0066C0"}} onClick={()=>openProduct(item)}>{item.name}</p>
                      <p style={{margin:"0 0 8px",color:"#067D62",fontSize:"13px"}}>In Stock</p>
                      <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
                        <div style={{display:"flex",alignItems:"center",border:"1px solid #ddd",borderRadius:"8px",overflow:"hidden"}}>
                          <button onClick={()=>updateQty(item.id,item.qty-1)} style={{background:"#f0f2f2",border:"none",padding:"6px 12px",cursor:"pointer",fontSize:"16px"}}>−</button>
                          <span style={{padding:"6px 14px",fontSize:"14px",fontWeight:"700"}}>{item.qty}</span>
                          <button onClick={()=>updateQty(item.id,item.qty+1)} style={{background:"#f0f2f2",border:"none",padding:"6px 12px",cursor:"pointer",fontSize:"16px"}}>+</button>
                        </div>
                        <button onClick={()=>removeFromCart(item.id)} style={{background:"none",border:"none",color:"#0066C0",cursor:"pointer",fontSize:"13px"}}>Delete</button>
                      </div>
                    </div>
                    <div style={{textAlign:"right"}}>
                      <p style={{margin:0,fontSize:"20px",fontWeight:"700"}}>${(item.price*item.qty).toFixed(2)}</p>
                      <p style={{margin:"4px 0 0",fontSize:"13px",color:"#666"}}>${item.price.toFixed(2)} each</p>
                    </div>
                  </div>
                ))}
                <div style={{marginTop:"24px",textAlign:"right"}}>
                  <p style={{fontSize:"20px",margin:"0 0 16px"}}>
                    Subtotal ({cartCount} item{cartCount>1?"s":""}): <strong>${cartTotal.toFixed(2)}</strong>
                  </p>
                  <button style={{background:"#FFD814",border:"1px solid #FFA41C",padding:"12px 40px",borderRadius:"8px",fontSize:"15px",cursor:"pointer",fontWeight:"700",letterSpacing:".3px"}}>
                    Proceed to Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* PRODUCT DETAIL */}
      {selectedProduct && !cartOpen && (
        <div style={{maxWidth:"1400px",margin:"20px auto",padding:"0 16px"}}>
          <button onClick={()=>setSelectedProduct(null)} style={{background:"none",border:"none",color:"#0066C0",cursor:"pointer",fontSize:"14px",marginBottom:"12px"}}>
            ← Back to results
          </button>
          <div style={{background:"#fff",borderRadius:"8px",boxShadow:"0 2px 12px rgba(0,0,0,.08)",padding:"32px",display:"flex",gap:"40px",flexWrap:"wrap"}}>
            <img src={selectedProduct.image} alt={selectedProduct.name}
              onError={e=>{e.target.src="https://picsum.photos/seed/"+selectedProduct.id+"/400/400"}}
              style={{width:"340px",height:"340px",objectFit:"cover",borderRadius:"8px",flexShrink:0}}/>
            <div style={{flex:1,minWidth:"260px"}}>
              <p style={{margin:"0 0 4px",fontSize:"13px",color:"#565959"}}>{selectedProduct.category}</p>
              <h1 style={{margin:"0 0 12px",fontSize:"24px",fontWeight:"400",lineHeight:1.3}}>{selectedProduct.name}</h1>
              <div style={{display:"flex",alignItems:"center",gap:"8px",marginBottom:"12px"}}>
                <Stars rating={selectedProduct.rating}/>
                <span style={{color:"#0066C0",fontSize:"14px",cursor:"pointer"}}>{selectedProduct.reviews.toLocaleString()} ratings</span>
              </div>
              {selectedProduct.badge && (
                <span style={{background:"#CC0C39",color:"#fff",padding:"3px 8px",borderRadius:"3px",fontSize:"12px",fontWeight:"700",marginBottom:"12px",display:"inline-block"}}>
                  {selectedProduct.badge}
                </span>
              )}
              <div style={{borderTop:"1px solid #ddd",borderBottom:"1px solid #ddd",padding:"16px 0",margin:"12px 0"}}>
                <span style={{fontSize:"28px",fontWeight:"700",color:"#B12704"}}>
                  ${selectedProduct.price.toFixed(2)}
                </span>
                {selectedProduct.originalPrice > selectedProduct.price && (
                  <span style={{marginLeft:"12px",color:"#565959",fontSize:"14px"}}>
                    M.R.P.: <s>${selectedProduct.originalPrice.toFixed(2)}</s>
                    <span style={{color:"#CC0C39",marginLeft:"8px",fontWeight:"600"}}>
                      ({discount(selectedProduct.originalPrice, selectedProduct.price)}% off)
                    </span>
                  </span>
                )}
              </div>
              <p style={{color:"#067D62",fontWeight:"700",fontSize:"14px",margin:"0 0 8px"}}>✓ In Stock</p>
              <p style={{fontSize:"14px",color:"#444",lineHeight:1.6,margin:"0 0 16px"}}>{selectedProduct.description}</p>
              <ul style={{padding:"0 0 0 18px",margin:"0 0 24px",color:"#444",fontSize:"14px",lineHeight:2}}>
                {selectedProduct.features.map((f,i) => <li key={i}>{f}</li>)}
              </ul>
              <div style={{display:"flex",alignItems:"center",gap:"12px",marginBottom:"16px"}}>
                <label style={{fontSize:"14px",fontWeight:"600"}}>Qty:</label>
                <select value={qty} onChange={e=>setQty(Number(e.target.value))}
                  style={{padding:"6px 12px",border:"1px solid #ddd",borderRadius:"8px",fontSize:"14px",cursor:"pointer"}}>
                  {[1,2,3,4,5].map(n=><option key={n} value={n}>{n}</option>)}
                </select>
              </div>
              <div style={{display:"flex",gap:"12px",flexWrap:"wrap"}}>
                <button onClick={()=>addToCart(selectedProduct,qty)}
                  style={{background:addedId===selectedProduct.id?"#e8c400":"#FFD814",border:"1px solid #FFA41C",
                    padding:"12px 28px",borderRadius:"20px",fontSize:"14px",cursor:"pointer",fontWeight:"700",transition:"background .2s",minWidth:"160px"}}>
                  {addedId===selectedProduct.id ? "✓ Added!" : "Add to Cart"}
                </button>
                <button style={{background:"#FFA41C",border:"1px solid #FF8F00",padding:"12px 28px",borderRadius:"20px",fontSize:"14px",cursor:"pointer",fontWeight:"700",minWidth:"160px"}}>
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PRODUCT GRID */}
      {!selectedProduct && !cartOpen && (
        <div style={{maxWidth:"1400px",margin:"0 auto",padding:"16px"}}>
          {/* Banner */}
          <div style={{background:"linear-gradient(135deg,#131921 0%,#232F3E 100%)",borderRadius:"8px",padding:"28px 36px",marginBottom:"20px",color:"#fff",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"12px"}}>
            <div>
              <h2 style={{margin:"0 0 6px",fontSize:"26px",fontWeight:"700"}}>Today's Deals</h2>
              <p style={{margin:0,color:"#aaa",fontSize:"14px"}}>Up to 40% off on selected items</p>
            </div>
            <span style={{background:"#FF9900",color:"#111",padding:"10px 24px",borderRadius:"20px",fontWeight:"700",fontSize:"14px",cursor:"pointer"}}>
              Shop All Deals →
            </span>
          </div>

          <p style={{margin:"0 0 16px",color:"#555",fontSize:"14px"}}>
            Showing <strong>{filtered.length}</strong> result{filtered.length!==1?"s":""} {category!=="All"?`in "${category}"`:""}
          </p>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",gap:"16px"}}>
            {filtered.map(p => (
              <div key={p.id} onClick={()=>openProduct(p)}
                style={{background:"#fff",borderRadius:"8px",overflow:"hidden",boxShadow:"0 1px 4px rgba(0,0,0,.08)",
                  cursor:"pointer",transition:"box-shadow .2s,transform .2s",display:"flex",flexDirection:"column"}}
                onMouseEnter={e=>{e.currentTarget.style.boxShadow="0 4px 20px rgba(0,0,0,.15)";e.currentTarget.style.transform="translateY(-2px)"}}
                onMouseLeave={e=>{e.currentTarget.style.boxShadow="0 1px 4px rgba(0,0,0,.08)";e.currentTarget.style.transform="translateY(0)"}}>
                <div style={{position:"relative"}}>
                  <img src={p.image} alt={p.name} onError={e=>{e.target.src="https://picsum.photos/seed/"+p.id+"/400/400"}} style={{width:"100%",height:"200px",objectFit:"cover",display:"block"}}/>
                  {p.badge && (
                    <span style={{position:"absolute",top:"10px",left:"10px",background:p.badge.includes("Deal")?"#CC0C39":p.badge.includes("Choice")?"#c45500":"#232F3E",
                      color:"#fff",padding:"3px 8px",borderRadius:"3px",fontSize:"11px",fontWeight:"700"}}>
                      {p.badge}
                    </span>
                  )}
                  {p.originalPrice > p.price && (
                    <span style={{position:"absolute",top:"10px",right:"10px",background:"#CC0C39",color:"#fff",
                      padding:"3px 8px",borderRadius:"3px",fontSize:"11px",fontWeight:"700"}}>
                      -{discount(p.originalPrice,p.price)}%
                    </span>
                  )}
                </div>
                <div style={{padding:"14px",flex:1,display:"flex",flexDirection:"column",gap:"6px"}}>
                  <p style={{margin:0,fontSize:"14px",lineHeight:1.4,fontWeight:"500",color:"#0F1111",
                    display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"}}>
                    {p.name}
                  </p>
                  <div style={{display:"flex",alignItems:"center",gap:"6px"}}>
                    <Stars rating={p.rating}/>
                    <span style={{fontSize:"12px",color:"#0066C0"}}>{p.reviews.toLocaleString()}</span>
                  </div>
                  <div style={{marginTop:"auto"}}>
                    <span style={{fontSize:"18px",fontWeight:"700",color:"#0F1111"}}>${p.price.toFixed(2)}</span>
                    {p.originalPrice > p.price && (
                      <span style={{fontSize:"12px",color:"#565959",marginLeft:"8px"}}><s>${p.originalPrice.toFixed(2)}</s></span>
                    )}
                  </div>
                  <p style={{margin:0,color:"#067D62",fontSize:"12px",fontWeight:"600"}}>FREE delivery</p>
                  <button onClick={e=>{e.stopPropagation();addToCart(p);}}
                    style={{marginTop:"8px",background:addedId===p.id?"#e8c400":"#FFD814",border:"1px solid #FFA41C",
                      padding:"8px",borderRadius:"20px",fontSize:"13px",cursor:"pointer",fontWeight:"700",
                      transition:"background .2s",width:"100%"}}>
                    {addedId===p.id?"✓ Added to Cart":"Add to Cart"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{textAlign:"center",padding:"80px 0",color:"#666"}}>
              <div style={{fontSize:"64px",marginBottom:"16px"}}>🔍</div>
              <p style={{fontSize:"20px",margin:"0 0 8px"}}>No results found</p>
              <p style={{fontSize:"14px"}}>Try a different search or category</p>
            </div>
          )}
        </div>
      )}

      {/* FOOTER */}
      <footer style={{background:"#232F3E",color:"#ddd",marginTop:"40px",padding:"24px",textAlign:"center",fontSize:"13px"}}>
        <div style={{maxWidth:"1400px",margin:"0 auto"}}>
          <p style={{margin:"0 0 8px",color:"#FF9900",fontWeight:"700",fontSize:"18px"}}>amazon</p>
          <p style={{margin:0,color:"#999"}}>© 2024 Amazon Clone — Built for demo purposes only</p>
        </div>
      </footer>
    </div>
  );
}
