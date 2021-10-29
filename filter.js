function Filter(id, array) {
  return array.filter((e) => e.id === id);
}

//Example

const array = [
  {
    id: "watermelon",
  },
  {
    id: "lemon",
  },
  {
    id: "banana",
  },
];

console.log(Filter("watermelon", array));
