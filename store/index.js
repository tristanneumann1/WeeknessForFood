export const state = () => {
  return {
    shoppingCart: [],
    recipes: [
      {
        id: 5,
        name: 'Pancakes',
        people: 1,
        over1H: true,
        ingredients: [
          {
            name: 'eggs',
            quantity: 4,
            unit: ''
          },
          {
            name: 'flour',
            quantity: 200,
            unit: 'g'
          },
          {
            name: 'milk',
            quantity: 300,
            unit: 'ml'
          }
        ],
        img:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSki3EQvan9kwYW5nUp3oN1hJfghcy3ca7bngkhMlh_g1ByDdOklA',
        author: 'MilkMan',
        tags: ['Breakfast', 'Vegan', 'Tasty']
      },
      {
        id: 6,
        name: 'Burger',
        people: 2,
        over1H: false,
        ingredients: [
          {
            name: 'eggs',
            quantity: 4,
            unit: ''
          },
          {
            name: 'beef',
            quantity: 200,
            unit: 'g'
          },
          {
            name: 'burger buns',
            quantity: 4,
            unit: ''
          }
        ],
        img:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHXfz-VYOcFF3kAmjKYTIiassMEnw9NXqVfwdair4SVEG4ocK1xw',
        author: 'Mr Mac Donald',
        tags: ['Fast-food', 'Meat', 'Tasty', 'American']
      },
      {
        id: 7,
        name: 'Burrito',
        people: 3,
        over1H: true,
        ingredients: [
          {
            name: 'beef',
            quantity: 400,
            unit: 'g'
          },
          {
            name: 'tortilla',
            quantity: 4,
            unit: ''
          },
          {
            name: 'eggs',
            quantity: 1,
            unit: ''
          }
        ],
        img:
          'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&h=350',
        author: 'Consuela',
        tags: ['Meat', 'Dinner', 'Mexican']
      }
    ]
  };
};

export const mutations = {
  addToCart(state, recipe) {
    //Do person multiplication here
    state.shoppingCart.push(recipe);
  }
};
