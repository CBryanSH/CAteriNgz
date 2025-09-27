// Products

const menu=[
    {
        id: 1,
        title: "Japanese Meal Plan",
        category: "cuisine",
        price: 2500000,
        img: "./../BlueJack/food/Japan.jpg",
        desc: 'Enjoy the delicate flavors and balanced nutrition of traditional Japanese cuisine, including sushi, sashimi, miso soup, and grilled fish.',
    },
    {
        id: 2,
        title: "Maternity Meal Plan",
        category: "special",
        price: 3000000,
        img: "./../BlueJack/food/Maternity.jpg",
        desc: 'Specially crafted meals to support the nutritional needs of expectant and nursing mothers, packed with essential vitamins, minerals, and nutrients.'
    },
    {
        id: 3,
        title: "Bulking Meal Plan",
        category: "diet",
        price: 3500000,
        img: "./../BlueJack/food/Bulking.jpg",
        desc: 'Designed for individuals looking to gain muscle mass and strength, this plan offers high-protein, calorie-dense meals to fuel your workouts and recovery.'
    },
    {
        id: 4,
        title: "Baby Meal Plan",
        category: "special",
        price: 1800000,
        img: "./../BlueJack/food/Baby.jpg",
        desc: 'Nutritious and easy-to-digest meals tailored for babies and toddlers, introducing them to a variety of flavors and textures.'
    },
    {
        id: 5,
        title: "Korean Meal Plan",
        category: "cuisine",
        price: 2800000,
        img: "./../BlueJack/food/Korea.jpg",
        desc: 'Experience the bold and spicy flavors of Korean cuisine, with dishes like bibimbap, kimchi, and bulgogi, all balanced for optimal nutrition.'
    },
    {
        id: 6,
        title: "Chinese Meal Plan",
        category: "cuisine",
        price: 2500000,
        img: "./../BlueJack/food/Chinese.jpg",
        desc: 'Indulge in the diverse and savory dishes of Chinese cuisine, featuring stir-fries, dumplings, and steamed delicacies, perfect for sharing with family and friends.'
    },
    {
        id: 7,
        title: "Weight Loss Meal Plan",
        category: "diet",
        price: 3200000,
        img: "./../BlueJack/food/Weight.jpg",
        desc: 'Carefully crafted meals designed to support healthy weight loss goals, with portion-controlled servings and balanced macros to promote sustainable progress.'
    },
    {
        id: 8,
        title: "Diabetic Meal Plan",
        category: "special",
        price: 3500000,
        img: "./../BlueJack/food/Diabetic.jpg",
        desc: 'Manage blood sugar levels with delicious and wholesome meals tailored for individuals with diabetes, focusing on low glycemic index foods and controlled carbohydrate intake.'
    },
    {
        id: 9,
        title: "Indian Meal Plan",
        category: "cuisine",
        price: 2600000,
        img: "./../BlueJack/food/Indian.jpg",
        desc: 'Delight in the aromatic spices and rich flavors of Indian cuisine, featuring curries, dals, and tandoori dishes, all prepared with fresh ingredients and balanced nutrition.'
    },
    {
        id: 10,
        title: "Italian Meal Plan",
        category: "cuisine",
        price: 2700000,
        img: "./../BlueJack/food/Italian.jpg",
        desc: 'Experience the rustic charm and comforting flavors of Italian cuisine, with pasta dishes, wood-fired pizzas, and antipasti, all made with authentic ingredients and culinary craftsmanship.'
    },
    {
        id: 11,
        title: "Indonesian Meal Plan",
        category: "cuisine",
        price: 2300000,
        img: "./../BlueJack/food/Indonesian.jpg",
        desc: 'Celebrate the diversity of Indonesian flavors with traditional dishes from across the archipelago, highlighting local ingredients and culinary traditions.'
    },
    {
        id: 12,
        title: "Athletic Meal Plan",
        category: "diet",
        price: 3800000,
        img: "./../BlueJack/food/Athletic.jpg",
        desc: 'Fuel your athletic performance with nutrient-rich meals tailored to your training regimen, providing the energy and recovery support you need to excel in your sport.'
    }
]

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function (){
    displayMenuItems(menu);
    displayMenuButtons();
});

function displayMenuItems(menuItems){

    let displayMenu = menuItems.map(function(item){
        return `<article class="menu-item">
                <img src= ${item.img} class="photo" alt=${item.title} />
                <div class="item-info">
                <header>
                    <h4>${item.title}</h4>
                    <h4 class="price">IDR ${item.price}/month</h4>
                </header>
                <p class="item-text">
                    ${item.desc}
                </p>
                </div>
                </article>
        `;
    });
    displayMenu = displayMenu.join('')
    sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons(){
    const categories = menu.reduce(function(values, item){
        if(!values.includes(item.category)){
            values.push(item.category)
        }
        return values;
    }, 
    ['all']
    );

    const categoryBtns = categories.map(function(category){
        return     `<button class="filter-btn" type="button" data-id=${category}>
                        ${category}
                    </button>`
    }).join("");

    container.innerHTML = categoryBtns;

    const filterBtns = container.querySelectorAll('.filter-btn');

    filterBtns.forEach(function (btn){
        btn.addEventListener("click", function(e){
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function(menuItem){
                if (menuItem.category === category){
                    return menuItem;
                }
            });

            if (category === "all"){
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategory);
            }
        });
    });

}


function validateAll(){
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const address = document.getElementById("address");
    const genderRadios = document.querySelectorAll("input[name='gender']");
    const dob = document.getElementById("dob");
    const pw = document.getElementById("pw");
    const pw2 = document.getElementById("pw2");
    const regForm = document.getElementById("register-form");
    const submitBtn = document.getElementById("submitBtn");
        
    if (!name || !email || !address || !gender || !dob) {
        alert('Please fill in all fields.');
    }
}
