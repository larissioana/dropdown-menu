type NavLink = {
    name: string;
    sublinks: string[];
    id: number
  };
  
  type NavItem = {
    category: string;
    links: NavLink[];
  };
  

export const navItems: NavItem[] = [
    {
        category: "Women",
        links: [
            {
                id: 1,
                name: "New",
                sublinks: [
                    "See All",
                    "Autumn Pieces", 
                    "Dress it all", 
                    "Bags love"
                ]
            },
            {
                id: 2,
                name: "Clothing",
                sublinks: [
                   "Best sellers",
                   "Dresses",
                   "Jackets",
                   "Jumpsuits",
                   "T-shirts",
                   "Trousers",
                   "Jeans",
                   "Sweatshirts",
                   "Shirts & Blouses",
                   "Knitwear",
                   "Skirts & Shorts"
                ]
            },
            {
                id: 3,
                name: "Dresses",
                sublinks: []
            },
            {
                id: 4,
                name: "Bags",
                sublinks: [
                    "New",
                    "Bags",
                    "Backpacks",
                    "Bags for Phones",
                    "Crossbody Bags",
                    "Tote Bags",
                    "Handbags",
                    "Wallets",
                    "Leather Bags"
                ]
            },
            {
                id: 5,
                name: "Accessories",
                sublinks: [
                "Shoes",
                "Ponchos",
                "Scarves & Scarf",
                "Bags",
                "Jewellery",
                "Backpacks"
                ]
            },
            {
                id: 6,
                name: "Collaborations",
                sublinks: [
                "Desigual x M. Christian Lacroix",
                "Desigual x Mickey Mouse",
                "Desigual x Stella Jean"
                ]
            }
        ]
    },
    {
        category: "Men",
        links: [
            {
                id: 1,
                name: "New",
                sublinks: []
            },
            {
                id: 2,
                name: "Clothing",
                sublinks: [
                    "Shirts",
                    "T-shirts",
                    "Jumpers & Sweatshirts",
                    "Coats & Jackets",
                    "Jeans & Trousers",
                    "Accessories",
                    "Gift Card"
                ]
            }
        ] 
    },
    {
        category: "Kids",
        links: [
            {
                id: 1,
                name: "See All",
                sublinks: []
            },
            {
                id: 2,
                name: "New",
                sublinks: [
                    "Desigual x Mickey Mouse",
                    "Favorite Characters"
                ]
            },
            {
                id: 3,
                name: "Girl",
                sublinks: [
                    "Dresses",
                    "Jumpers & Sweatshirts",
                    "T-shirts & Shirts",
                    "Jackets & Coats",
                    "Leggings",
                    "Skirts & Trousers"
                ]
            },
            {
                id: 4,
                name: "Boy",
                sublinks: [
                    "Jumpers & Sweatshirts",
                    "T-shirts & Shirts",
                    "Coats & Jackets",
                    "Trousers & Jeans",
                    "Gift Card"
                ]
            }
        ]
    }
]