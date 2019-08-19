
class Urls{

  urlTest(){

  return 'https://www.themealdb.com/api/json/v2/8673533/filter.php?i=chicken_breast,garlic'

  }

  urlIngredients(){
    return 'https://www.themealdb.com/api/json/v2/8673533/filter.php?i='
  }

  getRecipeById(id){

  return 'https://www.themealdb.com/api/json/v2/8673533/lookup.php?i=' + id

  }

  urlTestRestaurant(){
    return 'https://developers.zomato.com/api/v2.1/search?entity_id=77&entity_type=city&count=20&cuisines=22%2C133&apikey=57d965e80aa4daf08b992fdc63f2c7bc'
  }

    urlRestaurantCusine(){
      return 'https://developers.zomato.com/api/v2.1/search?entity_id=77&entity_type=city&count=20&apikey=57d965e80aa4daf08b992fdc63f2c7bc&cuisines='
    }

    urlRestaurantById(id){
      return 'https://developers.zomato.com/api/v2.1/restaurant?apikey=57d965e80aa4daf08b992fdc63f2c7bc&res_id=' + id
    }

    getRecipeRandom(){
      return 'https://www.themealdb.com/api/json/v1/1/random.php'
    }

}



export default Urls;
