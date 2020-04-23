module.exports = {
  succeed,
  fail,
  repair
};

function succeed(item) {
  const newItem = {...item};
  newItem.enhancement < 20 ? newItem.enhancement += 1 : null;
  return newItem;
}

function fail(item) {
  const newItem = {...item};
  if(newItem.enhancement < 15) {
    newItem.durability -= 5
  } else if(newItem.enhancement < 17) {
    newItem.durability -= 10
  } else {
    newItem.durability -= 1
  }
  return newItem;
}

function repair(item) {
  const newItem = {...item}
  newItem.durability = 100;
  return newItem;
}