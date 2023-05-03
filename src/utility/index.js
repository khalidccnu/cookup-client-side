export const chefRecipes = async (id) => {
  let chef, recipes;

  await fetch(`https://cookup-server-side.vercel.app/chefs/${id}`)
    .then((response) => response.json())
    .then((result) => (chef = result));

  await fetch(`https://cookup-server-side.vercel.app/chef-recipes/${id}`)
    .then((response) => response.json())
    .then((result) => (recipes = result));

  return [chef, recipes];
};

export const addFavorite = (id) => {
  const favorite = getFavorite();

  favorite.push(id);
  localStorage.setItem("favorite", JSON.stringify(favorite));
};

export const getFavorite = (_) => {
  let favorite = [];
  const getFavorite = localStorage.getItem("favorite");

  if (getFavorite) favorite = JSON.parse(getFavorite);

  return favorite;
};
