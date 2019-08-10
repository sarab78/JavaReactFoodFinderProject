
class Urls{

  urlTest(){

  return 'https://www.themealdb.com/api/json/v2/8673533/filter.php?i=chicken_breast,garlic'

  }

  getRecipeById(id){

  return 'https://www.themealdb.com/api/json/v2/8673533/lookup.php?i=' + id

  }
}

export default Urls;
