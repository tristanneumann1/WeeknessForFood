class Recipe {
  constructor(id, dish) {
    Object.assign(this, dish);
    this.id = id;
  }
}

/* ******************************************************************** */

const pancake = new Recipe(0, {
  id: 0,
  name: 'GreatPancakes',
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
  tags: ['Breakfast', 'Vegan', 'Tasty'],
  instructions: `Step1: Mix the ingredients\nStep2: cook the mixture\nStep3: eat the food`
});

const burger = new Recipe(1, {
  id: 1,
  name: 'Carpaccio de saint-jacques et truffe',
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
  tags: ['Fast-food', 'Meat', 'Tasty', 'American'],
  instructions: `Step1: Mix the ingredients\nStep2: cook the mixture\nStep3: eat the food`
});

const burrito = new Recipe(2, {
  id: 2,
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
  tags: ['Meat', 'Dinner', 'Mexican'],
  instructions: `Step1: Mix the ingredients\nStep2: cook the mixture\nStep3: eat the food`
});

export { Recipe, pancake, burger, burrito };
