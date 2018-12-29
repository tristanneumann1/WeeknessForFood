export const state = () => {
  return {
    shoppingCart: {},
    recipes: [
      {
        id: 5,
        name: 'Pancakes',
        price: 1,
        over1H: true,
        ingredients: {
          eggs: {
            name: 'eggs',
            quantity: 4,
            unit: ''
          },
          flour: {
            name: 'flour',
            quantity: 200,
            unit: 'g'
          },
          milk: {
            name: 'milk',
            quantity: 300,
            unit: 'ml'
          }
        },
        img:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSki3EQvan9kwYW5nUp3oN1hJfghcy3ca7bngkhMlh_g1ByDdOklA',
        author: 'MilkMan',
        tags: ['Breakfast', 'Vegan', 'Tasty']
      },
      {
        id: 6,
        name: 'Burger',
        price: 2,
        over1H: false,
        ingredients: {
          eggs: {
            quantity: 1,
            unit: ''
          }
        },
        img:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHXfz-VYOcFF3kAmjKYTIiassMEnw9NXqVfwdair4SVEG4ocK1xw',
        author: 'Mr Mac Donald',
        tags: ['Fast-food', 'Meat', 'Tasty', 'American']
      },
      {
        id: 7,
        name: 'Burrito',
        price: 3,
        over1H: true,
        ingredients: {},
        img:
          'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&h=350',
        author: 'Consuela',
        tags: ['Meat', 'Dinner', 'Mexican']
      }
    ]
  };
};

export const mutations = {
  addToCart(state, ingredient) {
    if (state.shoppingCart[ingredient.name]) {
      state.shoppingCart[ingredient.name].quantity += ingredient.quantity;
      console.log(state.shoppingCart);
    } else {
      state.shoppingCart[ingredient.name] = ingredient;
    }
  }
};
