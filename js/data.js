/* ====== القائمة المحدثة باللغتين العربية والإنجليزية ====== */
const menuData = [
    { 
        section:"الكل", 
        sectionEn: "All",
        sectionImg: "logo-bg1.webp", 
        items:[] 
    },
    { 
        section:"الشوايه", 
        sectionEn: "Grilled Chicken",
        sectionImg: "sh01.webp", 
        items:[
            {id:"sh1", img:"sh01.webp", name:"حبة شواية", nameEn: "Whole Grilled Chicken", basePrice:46, availableIn: ['branch1','branch2', 'branch3'], options:[ 
                {name:"رز شعبي", nameEn: "Saudi Rice", price:0},
                {name:"رز بشاور", nameEn: "Peshawar Rice", price:4},
                {name:"رز مندي", nameEn: "Mandi Rice", price:4},
                {name:"رز مثلوثه", nameEn: "Mathloutha Rice", price:4}
            ]},
            {id:"sh2", img:"sh01.webp", name:"نص شواية بالرز", nameEn: "Half Grilled Chicken with Rice", basePrice:23, availableIn: ['branch1', 'branch2', 'branch3'], options:[
                {name:"رز شعبي", nameEn: "Saudi Rice", price:0},
                {name:"رز بشاور", nameEn: "Peshawar Rice", price:2},
                {name:"رز مندي", nameEn: "Mandi Rice", price:2},
                {name:"رز مثلوثه", nameEn: "Mathloutha Rice", price:2}
            ]},
            {id:"sh3", img:"sh10.webp", name:"ربع دجاج", nameEn: "Quarter Chicken", basePrice:15, availableIn: ['branch1', 'branch2', 'branch3'], options:[
               {name:"شوايه", nameEn: "Grilled", price:0},
               {name:"مندي", nameEn: "Mandi", price:0}  
            ]},
            {id:"sh4", img:"sh20.webp", name:"نصف دجاج (ساده)", nameEn: "Half Chicken (Plain)", basePrice:15, availableIn: ['branch1', 'branch2', 'branch3'], options:[
                    {name:"شوايه", nameEn: "Grilled", price:0},
                    {name:"مظبي", nameEn: "Madbi", price:0},
                    {name:"مندي", nameEn: "Mandi", price:0}
            ]}
        ]
    },
    { 
        section:"المظبي", 
        sectionEn: "Madbi",
        sectionImg: "md00.webp",
        items:[
            {id:"md1", img:"md00.webp", name:"حبة مظبي", nameEn: "Whole Madbi Chicken", basePrice:46, availableIn: ['branch1', 'branch2', 'branch3'], options:[
                {name:"رز شعبي", nameEn: "Saudi Rice", price:0},
                {name:"رز بشاور", nameEn: "Peshawar Rice", price:4},
                {name:"رز مندي", nameEn: "Mandi Rice", price:4},
                {name:"رز مثلوثه", nameEn: "Mathloutha Rice", price:4}
            ]},
            {id:"md2", img:"md00.webp", name:"نص مظبي", nameEn: "Half Madbi Chicken", basePrice:23, availableIn: ['branch1', 'branch2', 'branch3'], options:[
                {name:"رز شعبي", nameEn: "Saudi Rice", price:0},
                {name:"رز بشاور", nameEn: "Peshawar Rice", price:2},
                {name:"رز مندي", nameEn: "Mandi Rice", price:2},
                {name:"رز مثلوثه", nameEn: "Mathloutha Rice", price:2}
            ]}
        ]
    },
    { 
        section:"مندي", 
        sectionEn: "Mandi",
        sectionImg: "mn00.webp",
        items:[
            {id:"mn1", img:"mn00.webp", name:"حبه مندي", nameEn: "Whole Mandi Chicken", basePrice:46, availableIn: ['branch1','branch2', 'branch3'], options:[ 
                {name:"رز شعبي", nameEn: "Saudi Rice", price:0},
                {name:"رز بشاور", nameEn: "Peshawar Rice", price:4},
                {name:"رز مندي", nameEn: "Mandi Rice", price:4},
                {name:"رز مثلوثه", nameEn: "Mathloutha Rice", price:4}
            ]},
            {id:"mn2", img:"mn00.webp", name:"نص مندي", nameEn: "Half Mandi Chicken", basePrice:23, availableIn: ['branch1', 'branch2', 'branch3'], options:[
                {name:"رز شعبي", nameEn: "Saudi Rice", price:0},
                {name:"رز بشاور", nameEn: "Peshawar Rice", price:2},
                {name:"رز مندي", nameEn: "Mandi Rice", price:2},
                {name:"رز مثلوثه", nameEn: "Mathloutha Rice", price:2}
            ]}
        ]
    },
    { 
        section:"مدفون", 
        sectionEn: "Madfoon",
        sectionImg: "mf00.webp",
        items:[
            {id:"mdf1", img:"mf01.webp", name:"حبه مدفون", nameEn: "Whole Madfoon Chicken", basePrice:46, availableIn: ['branch1', 'branch2', 'branch3'], options:[
                {name:"رز شعبي", nameEn: "Saudi Rice", price:0},
                {name:"رز بشاور", nameEn: "Peshawar Rice", price:4},
                {name:"رز مندي", nameEn: "Mandi Rice", price:4},
                {name:"رز مثلوثه", nameEn: "Mathloutha Rice", price:4}
            ]},
            {id:"mdf2", img:"mf00.webp", name:"نص مدفون", nameEn: "Half Madfoon Chicken", basePrice:23, availableIn: ['branch1', 'branch2', 'branch3'], options:[
                {name:"رز شعبي", nameEn: "Saudi Rice", price:0},
                {name:"رز بشاور", nameEn: "Peshawar Rice", price:2},
                {name:"رز مندي", nameEn: "Mandi Rice", price:2},
                {name:"رز مثلوثه", nameEn: "Mathloutha Rice", price:2}
            ]}
        ]
    },
    { 
        section:"مقلوبه", 
        sectionEn: "Maqlooba",
        sectionImg: "mq00.webp",
        items:[
            {id:"mq1", img:"mq00.webp", name:"حبه مقلوبه", nameEn: "Whole Maqlooba Chicken", basePrice:50, availableIn: ['branch1', 'branch2', 'branch3'], options:[{name:"رز شعبي", nameEn: "Saudi Rice", price:0}]},
            {id:"mq2", img:"mq00.webp", name:"نص دجاج مقلوبه", nameEn: "Half Maqlooba Chicken", basePrice:25, availableIn: ['branch1', 'branch2', 'branch3'], options:[{name:"رز شعبي", nameEn: "Saudi Rice", price:0}]}
        ]
    },
    { 
        section:"مضغوط", 
        sectionEn: "Madghoot",
        sectionImg: "mg00.webp",
        items:[
            {id:"mg1", img:"mg00.webp", name:"حبه دجاج مضغوط", nameEn: "Whole Madghoot Chicken", basePrice:50, isBestSeller: true, availableIn: ['branch1', 'branch2', 'branch3'], options:[{name:"رز مضغوط", nameEn: "Madghoot Rice", price:0}]}, 
            {id:"mg2", img:"mg00.webp", name:"نص حبه مضغوط", nameEn: "Half Madghoot Chicken", basePrice:25, availableIn: ['branch1', 'branch2', 'branch3'], options:[{name:"رز مضغوط", nameEn: "Madghoot Rice", price:0}]}
        ]
    },
    { 
        section:"زربيان", 
        sectionEn: "Zurbian",
        sectionImg: "zb00.webp",
        items:[
            {id:"zb1", img:"zb00.webp", name:"دجاج زربيان حبه", nameEn: "Whole Zurbian Chicken", basePrice:50, availableIn: ['branch1', 'branch2', 'branch3'], options:[{name:"رز زربيان", nameEn: "Zurbian Rice", price:0}]},
            {id:"zb2", img:"/zb00.webp", name:"نص حبه زربيان", nameEn: "Half Zurbian Chicken", basePrice:25, availableIn: ['branch1', 'branch2', 'branch3'], options:[{name:"رز زربيان", nameEn: "Zurbian Rice", price:0}]}
        ]
    },
    { 
        section:"قسم اللحوم", 
        sectionEn: "Meat Selection",
        sectionImg: "me01.webp",
        items:[
            {id:"t1", img:"me01.webp", name:"تيس مندي كامل", nameEn: "Whole Mandi Goat", basePrice:1550, isAvailable: true, availableIn: ['branch1', 'branch2', 'branch3'], options:[ 
                {name:"رز شعبي", nameEn: "Saudi Rice", price:0},
                {name:"رز بشاور", nameEn: "Peshawar Rice", price:50},
                {name:"رز مندي", nameEn: "Mandi Rice", price:50}
            ]},
            {id:"t2", img:"me02.webp", name:"نص تيس مندي", nameEn: "Half Mandi Goat", basePrice:750, availableIn: ['branch1', 'branch2', 'branch3'], options:[
                {name:"رز شعبي", nameEn: "Saudi Rice", price:0},
                {name:"رز بشاور", nameEn: "Peshawar Rice", price:25},
                {name:"رز مندي", nameEn: "Mandi Rice", price:25}
            ]},
            {id:"t3", img:"me03.webp", name:"ربع تيس مندي", nameEn: "Quarter Mandi Goat", basePrice:375, availableIn: ['branch1', 'branch2', 'branch3'], options:[
                {name:"رز شعبي", nameEn: "Saudi Rice", price:0},
                {name:"رز بشاور", nameEn: "Peshawar Rice", price:13},
                {name:"رز مندي", nameEn: "Mandi Rice", price:13}
            ]},
            {id:"t4", img:"me04.webp", name:"نفر لحم مندي", nameEn: "Single Mandi Meat Portion", basePrice:100, availableIn: ['branch1', 'branch2', 'branch3'], options:[
                {name:"رز شعبي", nameEn: "Saudi Rice", price:0},
                {name:"رز بشاور", nameEn: "Peshawar Rice", price:0},
                {name:"رز مندي", nameEn: "Mandi Rice", price:0}
            ]},
            {id:"t5", img:"me05.webp", name:"نفر حاشي مكموت", nameEn: "Single Hashi Portion", basePrice:59, isBestSeller: true, branchDiscounts: {'branch1': 50, 'branch2': 50, 'branch3': 50}, availableIn: ['branch1', 'branch2', 'branch3'], options: [
                    {name: "رز شعبي", nameEn: "Saudi Rice", price: 0},
                    {name: "رز بشاور", nameEn: "Peshawar Rice", price: 3}, 
                    {name: "رز مندي", nameEn: "Mandi Rice", price: 3}
            ]},
            {id:"t6", img:"me06.webp", name:"نفر برمه لحم", nameEn: "Single Barma Meat Portion", basePrice:80, isBestSeller: true, branchDiscounts: {'branch1': 68, 'branch2': 68, 'branch3': 68}, availableIn: ['branch1', 'branch2', 'branch3'], options:[
                    {name: "رز شعبي", nameEn: "Saudi Rice", price: 0},
                    {name: "رز بشاور", nameEn: "Peshawar Rice", price: 0},
                    {name: "رز مندي", nameEn: "Mandi Rice", price: 0}
            ]}
        ]
    },
    { 
        section:"المشويات", 
        sectionEn: "Grilled Platters",
        sectionImg: "gr00.webp",
        sectionAvailableIn: ['branch1', 'branch2'], 
        items:[
            {id:"gr1", img:"gr01.webp", name:"كباب لحم", nameEn: "Meat Kebab", basePrice:0, availableIn:['branch1', 'branch2'], options:[
                    {name:"نفر", nameEn: "Portion", price:38},
                    {name:"نص كيلو", nameEn: "Half Kilo", price:76},
                    {name:"كيلو", nameEn: "Kilo", price:150}
            ]},
            {id:"gr2", img:"gr02.webp", name:"كباب دجاج", nameEn: "Chicken Kebab", basePrice:0, availableIn:['branch1', 'branch2'], options:[
                    {name:"نفر", nameEn: "Portion", price:30},
                    {name:"نص كيلو", nameEn: "Half Kilo", price:60},
                    {name:"كيلو", nameEn: "Kilo", price:120}
            ]},
            {id:"gr3", img:"gr03.webp", name:"اوصال لحم", nameEn: "Meat Awssal", basePrice:0, availableIn:['branch1', 'branch2'], options:[
                    {name:"نفر", nameEn: "Portion", price:45},
                    {name:"نص كيلو", nameEn: "Half Kilo", price:90},
                    {name:"كيلو", nameEn: "Kilo", price:180}
            ]},
            {id:"gr4", img:"gr04.webp", name:"شيش طاووق", nameEn: "Shish Tawook", basePrice:0, availableIn:['branch1', 'branch2'], options:[
                    {name:"نفر", nameEn: "Portion", price:30},
                    {name:"نص كيلو", nameEn: "Half Kilo", price:60},
                    {name:"كيلو", nameEn: "Kilo", price:120}
            ]},
            {id:"gr5", img:"gr07.jpg", name:"مشكل فاخر (32 سيخ)", nameEn: "Luxury Mixed Grill (32 Skewers)", basePrice:300, isBestSeller: true, availableIn:['branch1', 'branch2'], options:[{name:"تامين صحن", nameEn: "Tray Deposit", price:30}]},
            {id:"gr6", img:"gr05.webp", name:"مشكل مشاوي", nameEn: "Mixed Grill", basePrice:0, isBestSeller: true, availableIn:['branch1', 'branch2'], options:[
                    {name:"نفر", nameEn: "Portion", price:35},
                    {name:"نص كيلو", nameEn: "Half Kilo", price:70},
                    {name:"كيلو", nameEn: "Kilo", price:130}
            ]}
        ]
    },
    { 
        section:"الأطباق الجانبية", 
        sectionEn: "Side Dishes",
        sectionImg: "si00.webp",
        items:[
            {id:"side7", img:"si05.webp", name:"نفر رز شعبي", nameEn: "Single Saudi Rice", basePrice:10, availableIn: ['branch1', 'branch2', 'branch3'], options:[{name:"نفر", nameEn: "Portion", price:0}]},
            {id:"side8", img:"si06.webp", name:"نفر رز بشاور", nameEn: "Single Peshawar Rice", basePrice:10, availableIn: ['branch1', 'branch2', 'branch3'], options:[{name:"نفر", nameEn: "Portion", price:0}]},
            {id:"side9", img:"si07.webp", name:"نفر رز مندي", nameEn: "Single Mandi Rice", basePrice:10, availableIn: ['branch1', 'branch2', 'branch3'], options:[{name:"نفر", nameEn: "Portion", price:0}]}
        ]
    },
    { 
        section:"المشروبات", 
        sectionEn: "Beverages",
        sectionImg: "dr00.webp",
        items:[
            {id:"bev-p", img:"dr01.webp", name:"ببسي", nameEn: "Pepsi", basePrice:0, availableIn: ['branch1', 'branch2', 'branch3'], options:[
                {name:"صغير", nameEn: "Small", price:3},
                {name:"وسط", nameEn: "Medium", price:6},
                {name:"كبير", nameEn: "Large", price:9}
            ]},
            {id:"bev-h", img:"dr02.webp", name:"حمضيات", nameEn: "Citrus", basePrice:0, availableIn: ['branch1', 'branch2', 'branch3'], options:[
                {name:"صغير", nameEn: "Small", price:3},
                {name:"وسط", nameEn: "Medium", price:6},
                {name:"كبير", nameEn: "Large", price:9}
            ]},
            {id:"bev-m", img:"dr04.webp", name:"لبن المراعي", nameEn: "Almarai Laban", basePrice:0, availableIn: ['branch1', 'branch2', 'branch3'], options:[
                {name:"صغير", nameEn: "Small", price:2},
                {name:"وسط", nameEn: "Medium", price:7},
                {name:"كبير", nameEn: "Large", price:12.5}
            ]}
        ]
    },
    { 
        section:"الايدامات", 
        sectionEn: "Stews & Veggies",
        sectionImg: "ed00.webp",
        items:[
            {id:"eid1", img:"ed01.webp", name:"ملوخيه", nameEn: "Molokhia", basePrice:10, availableIn: ['branch1', 'branch2', 'branch3'], options:[{name:"صحن", nameEn: "Plate", price:0}]},
            {id:"eid2", img:"ed02.webp", name:"باميه", nameEn: "Okra Stew", basePrice:10, availableIn: ['branch1', 'branch2', 'branch3'], options:[{name:"صحن", nameEn: "Plate", price:0}]},
            {id:"eid3", img:"ed03.webp", name:"مشكل خضار", nameEn: "Mixed Vegetables", basePrice:10, availableIn: ['branch1', 'branch2', 'branch3'], options:[{name:"صحن", nameEn: "Plate", price:0}]},
            {id:"side1", img:"si01.webp", name:"جريش", nameEn: "Jareesh", basePrice:0, isBestSeller: true, availableIn: ['branch1', 'branch2', 'branch3'], options:[{name:"صغير", nameEn: "Small", price:5}, {name:"كبير", nameEn: "Large", price:10}]}
        ]
    },
    { 
        section:"المقبلات", 
        sectionEn: "Appetizers",
        sectionImg: "ap00.webp",
        items:[
            {id:"app-wrk", img:"ap09.webp", name:"ورق عنب", nameEn: "Grape Leaves", basePrice:0, availableIn: ['branch1', 'branch2', 'branch3'], options:[
                {name:"صغير", nameEn: "Small", price:7},
                {name:"كبير", nameEn: "Large", price:12}
            ]},
            {id:"app-homos", img:"ap03.webp", name:"حمص", nameEn: "Hummus", basePrice:0, availableIn: ['branch1', 'branch2', 'branch3'], options:[
                {name:"صغير", nameEn: "Small", price:7},
                {name:"وسط", nameEn: "Medium", price:13}
            ]},
            {id:"app-mshkl", img:"ap08.webp", name:"مشكل مقبلات", nameEn: "Mixed Appetizers", basePrice:13, availableIn: ['branch1', 'branch2', 'branch3'], options:[{name:"طبق", nameEn: "Plate", price:0}]}
        ]
    },
    { 
        section:"الكنافه", 
        sectionEn: "Kunafa",
        sectionImg: "kn00.webp",
        items:[
            {id:"kna1", img:"kn00.webp", name:"كنافه قشطه", nameEn: "Kunafa with Cream", basePrice:10, availableIn: ['branch1', 'branch2', 'branch3'], options:[{name:"", nameEn: "", price:0}]},
            {id:"kna2", img:"kn02.webp", name:"كنافه جلاكسي", nameEn: "Galaxy Kunafa", basePrice:12, availableIn: ['branch1', 'branch2', 'branch3'], options:[{name:"", nameEn: "", price:0}]}
        ]
    }
];
