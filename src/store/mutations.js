export function setSearchedMeals(state, meals) {
  state.searchedMeals = meals || []
}
export function setMealsByLetter(state, meals) {
  state.mealsByLetter = meals || []
}
export function setMealsByIngredients(state, meals) {
  state.mealsByIngredient = meals || []
}
export function setIngredient(state, ingredient) {
  state.ingredient = ingredient
}