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
      id: 0,
      name: 'eggs',
      quantity: 4,
      unit: ''
    },
    {
      id: 1,
      name: 'flour',
      quantity: 200,
      unit: 'g'
    },
    {
      id: 2,
      name: 'milk',
      quantity: 300,
      unit: 'ml'
    }
  ],
  img:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSki3EQvan9kwYW5nUp3oN1hJfghcy3ca7bngkhMlh_g1ByDdOklA',
  author: 'MilkMan',
  tags: ['Breakfast', 'Vegan', 'Tasty'],
  instructions: `Step1: Mix the ingredients\nStep2: cook the mixture\nStep3: eat the food`,
  chefsNote: 'Pancakes are not breakfast, they are a way of life'
});

const burger = new Recipe(1, {
  id: 1,
  name: 'Burger Mac',
  people: 2,
  over1H: false,
  ingredients: [
    {
      id: 0,
      name: 'eggs',
      quantity: 4,
      unit: ''
    },
    {
      id: 3,
      name: 'beef',
      quantity: 200,
      unit: 'g'
    },
    {
      id: 4,
      name: 'burger buns',
      quantity: 4,
      unit: ''
    }
  ],
  img:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHXfz-VYOcFF3kAmjKYTIiassMEnw9NXqVfwdair4SVEG4ocK1xw',
  author: 'Mr Mac Donald',
  tags: ['Fast-food', 'Meat', 'Tasty', 'American'],
  instructions: `Step1: Mix the ingredients\nStep2: cook the mixture\nStep3: eat the food`,
  chefsNote: 'The Burger King will cry himself to sleep'
});

const burrito = new Recipe(2, {
  id: 2,
  name: 'Burrito',
  people: 3,
  over1H: true,
  ingredients: [
    {
      id: 3,
      name: 'beef',
      quantity: 400,
      unit: 'g'
    },
    {
      id: 5,
      name: 'tortilla',
      quantity: 4,
      unit: ''
    },
    {
      id: 0,
      name: 'eggs',
      quantity: 1,
      unit: ''
    }
  ],
  img:
    'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&h=350',
  author: 'Consuela',
  tags: ['Meat', 'Dinner', 'Mexican'],
  instructions: `Step1: Mix the ingredients\nStep2: cook the mixture\nStep3: eat the food`,
  chefsNote: 'tastes great with cranberry bagels'
});

export { Recipe, pancake, burger, burrito };
