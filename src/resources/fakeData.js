const fakeData = [
  {
    title: "Bagel and Cream Cheese",
    _id: 1,
    image: "https://i.ibb.co/p45dSfz/breakfast1.png",
    price: 6.99,
    type: "breakfast",
    phrase: "Love what you eat",
    description: `“The secret of success in life is to eat what you like and let the food fight it out ins_ide.” 
        -Mark Twain`,
  },
  {
    title: "Breakfast Sandwitch",
    _id: 2,
    image: "https://i.ibb.co/dc4Zq3q/breakfast2.png",
    price: 9.99,
    type: "breakfast",
    phrase: "Love what you eat",
    description: `“The secret of success in life is to eat what you like and let the food fight it out ins_ide.” 
        -Mark Twain`,
  },
  {
    title: "Baked Chicken",
    _id: 3,
    image: "https://i.ibb.co/D1M1gK9/breakfast3.png",
    price: 10.99,
    type: "breakfast",
    phrase: "Love what you eat",
    description: `“The secret of success in life is to eat what you like and let the food fight it out ins_ide.” 
        -Mark Twain`,
  },
  {
    title: "Egg Benedict",
    _id: 4,
    image: "https://i.ibb.co/VM0GVyx/breakfast4.png",
    price: 8.99,
    type: "breakfast",
    phrase: "Love what you eat",
    description: `“The secret of success in life is to eat what you like and let the food fight it out ins_ide.” 
        -Mark Twain`,
  },
  {
    title: "Toast Corrisant Fried Egg",
    _id: 5,
    image: "https://i.ibb.co/wdy2zZW/breakfast5.png",
    price: 19.99,
    type: "breakfast",
    phrase: "Love what you eat",
    description: `“The secret of success in life is to eat what you like and let the food fight it out ins_ide.” 
        -Mark Twain`,
  },
  {
    title: "Full Breakfast Fried Eggs",
    _id: 6,
    image: "https://i.ibb.co/SyR3g93/breakfast6.png",
    price: 15.99,
    type: "breakfast",
    phrase: "Love what you eat",
    description: `“The secret of success in life is to eat what you like and let the food fight it out ins_ide.” 
        -Mark Twain`,
  },
  {
    title: "Healty Meal Combo",
    _id: 7,
    image: "https://i.ibb.co/RhXGNjh/lunch1.png",
    price: 23.99,
    type: "lunch",
    phrase: "Love what you eat",
    description: `“The secret of success in life is to eat what you like and let the food fight it out ins_ide.” 
        -Mark Twain`,
  },
  {
    title: "Fried Chicken Bento",
    _id: 8,
    image: "https://i.ibb.co/HqV5cz0/lunch2.png",
    price: 9.99,
    type: "lunch",
    phrase: "Love what you eat",
    description: `“The secret of success in life is to eat what you like and let the food fight it out ins_ide.” 
        -Mark Twain`,
  },
  {
    title: "Tarragon Rubbed Salmon",
    _id: 9,
    image: "https://i.ibb.co/x7KkPPF/lunch3.png",
    price: 6.99,
    type: "lunch",
    phrase: "Love what you eat",
    description: `“The secret of success in life is to eat what you like and let the food fight it out ins_ide.” 
        -Mark Twain`,
  },
  {
    title: "Indian Lunch",
    _id: 10,
    image: "https://i.ibb.co/GM2BDRc/lunch4.png",
    price: 8.99,
    type: "lunch",
    phrase: "Love what you eat",
    description: `“The secret of success in life is to eat what you like and let the food fight it out ins_ide.” 
        -Mark Twain`,
  },
  {
    title: "Beef Steak",
    _id: 15,
    image: "https://i.ibb.co/2v5qjPF/lunch5.png",
    price: 15.99,
    type: "lunch",
    phrase: "Love what you eat",
    description: `“The secret of success in life is to eat what you like and let the food fight it out ins_ide.” 
        -Mark Twain`,
  },
  {
    title: "Salmon with Peppers",
    _id: 155,
    image: "https://i.ibb.co/4SzqPxr/lunch6.png",
    price: 7.99,
    type: "lunch",
    phrase: "Love what you eat",
    description: `“The secret of success in life is to eat what you like and let the food fight it out ins_ide.” 
        -Mark Twain`,
  },
  {
    title: "Salmon with Lentil Salad",
    _id: 150,
    image: "https://i.ibb.co/XF0DCQX/dinner1.png",
    price: 9.99,
    type: "dinner",
    phrase: "Love what you eat",
    description: `“The secret of success in life is to eat what you like and let the food fight it out ins_ide.” 
        -Mark Twain`,
  },
  {
    title: "Lemony Salmon Piccata",
    _id: 152,
    image: "https://i.ibb.co/YQpbKJn/dinner2.png",
    price: 10.99,
    type: "dinner",
    phrase: "Love what you eat",
    description: `“The secret of success in life is to eat what you like and let the food fight it out ins_ide.” 
        -Mark Twain`,
  },
  {
    title: "Lamb Tenderloin",
    _id: 152,
    image: "https://i.ibb.co/wMqWtFQ/dinner3.png",
    price: 12.99,
    type: "dinner",
    phrase: "Love what you eat",
    description: `“The secret of success in life is to eat what you like and let the food fight it out ins_ide.” 
        -Mark Twain`,
  },
  {
    title: "French Fries with Cheese",
    _id: 17,
    image: "https://i.ibb.co/dQptxqj/dinner4.png",
    price: 8.99,
    type: "dinner",
    phrase: "Love what you eat",
    description: `“The secret of success in life is to eat what you like and let the food fight it out ins_ide.” 
        -Mark Twain`,
  },
  {
    title: "Garlic Butter Baked Salmon",
    __id: 100,
    image: "https://i.ibb.co/rMSfr47/dinner6.png",
    price: 6.99,
    type: "dinner",
    phrase: "Love what you eat",
    description: `“The secret of success in life is to eat what you like and let the food fight it out ins_ide.” 
        -Mark Twain`,
  },
  {
    title: "Baked Chicken",
    _id: 111,
    image: "https://i.ibb.co/MpZp9Jj/dinner5.png",
    price: 9.99,
    type: "dinner",
    phrase: "Love what you eat",
    description: `“The secret of success in life is to eat what you like and let the food fight it out ins_ide.” 
        -Mark Twain`,
  },
];

export default fakeData;
