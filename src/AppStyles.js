import { StyleSheet, Dimensions } from 'react-native';

// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const recipeNumColums = 2;
// item size
const RECIPE_ITEM_HEIGHT = 150;
const RECIPE_ITEM_MARGIN = 20;

// 2 photos per width
export const RecipeCard = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: RECIPE_ITEM_MARGIN,
    marginTop: 20,
    width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    height: RECIPE_ITEM_HEIGHT + 75,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 15
  },
  photo: {
    width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    height: RECIPE_ITEM_HEIGHT,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#444444',
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
  },
  category: {
    marginTop: 5,
    marginBottom: 5
  }
});


export const Landing = StyleSheet.create({
  b1: {
    borderColor: '#00A1DE',
    borderWidth: 5,
    borderRadius: 55,
    marginRight: 10,
    marginLeft: 10,
  },
  b2: {
    borderColor: '#20603D',
    borderWidth: 5,
    borderRadius: 50,
  },
  b3: {
    borderColor: '#FAD201',
    borderWidth: 5,
    borderRadius: 45,
    // justifyContent: 'center',
    // alignItems: 'center',
    height: height - 100,
  title: {
    textAlign: 'center',
    marginBottom: 20
  },
  logo: {
    width: 200,
    height: 200,
  },
  sec: {
    flexDirection: 'row',
    flex: 1
  },
  secSub1: {
    flex: 6
  },
  secSub2: {
    flex: 6
  },
  }
});

