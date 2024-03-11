const { sortHeroesByHealth } = require('../src/index.js');

test('Должно сортировать героев по здоровью в порядке убывания', () => {
  const heroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 }
  ];

  const sortedHeroes = sortHeroesByHealth(heroes);

  expect(sortedHeroes).toEqual([
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 }
  ]);
});


const mockHeroes = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 }
];
sortHeroesByHealth(mockHeroes);