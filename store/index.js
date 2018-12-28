export const state = () => {
  return {
    shoppingCart: {},
    recipes: [
      {
        id: 5,
        name: 'pancakes',
        price: 1,
        time: 20,
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
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSki3EQvan9kwYW5nUp3oN1hJfghcy3ca7bngkhMlh_g1ByDdOklA'
      },
      {
        id: 6,
        name: 'Burger',
        price: 2,
        time: 20,
        ingredients: {
          eggs: {
            quantity: 1,
            unit: ''
          }
        },
        img:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHXfz-VYOcFF3kAmjKYTIiassMEnw9NXqVfwdair4SVEG4ocK1xw'
      },
      {
        id: 7,
        name: 'Burrito',
        price: 3,
        time: 365,
        ingredients: {},
        img:
          'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&h=350'
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
