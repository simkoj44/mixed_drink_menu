const drink_directory = {
    'Alexander' : {
        'Base Spirit': 'Brandy',
        'Required Ingredients': ['Brandy', 'Creme de Cacao', 'Milk/Cream'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['Ground Nutmeg'],
        'Instructions': 'Pour 1oz brandy, creme de cacao, and milk/cream into a shaker and mix with ice. Shake and strain into glass. Sprinkle ground nutmeg on top.',
        'Approximate Amount of Alcohol': 1.0,
        'Traditional Glass': 'Cocktail Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Amaretto Sour': {
        'Base Spirit': 'Specialty',
        'Required Ingredients': ['Amaretto', 'Bitters', 'Lemon Juice'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['Lemon Slice', 'Cherry', 'Egg White'],
        'Instructions': 'Mix 2oz Amaretto and 1oz lemon juice in shaker along with 1 dash of bitters. Shake and strain into glass with ice and garnish with lemon slice. Optionally add 1 egg white before mixing and perform an additional dry shake without ice.',
        'Approximate Amount of Alcohol': 0.8,
        'Traditional Glass': 'Rocks Glass',
        'IBA Official Cocktail': 'No'
    },
    'Americano': {
        'Base Spirit': 'Specialty',
        'Required Ingredients': ['Bitter Orange Aperitif', 'Sweet Vermouth', 'Carbonated Water'],
        'Required Tools': ['None'],
        'Optional Items': ['Orange Slice'],
        'Instructions': 'Mix 1oz bitter orange aperitif and 1oz sweet vermouth directly in a glass with ice. Top with carbonated water and garnish with orange slice.',
        'Approximate Amount of Alcohol': 0.67,
        'Traditional Glass': 'Rocks Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Angel Face': {
        'Base Spirit': 'Combination',
        'Required Ingredients': ['Gin', 'Apricot Brandy', 'Applejack'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['None'],
        'Instructions': 'Pour 1oz gin, 1oz apricot brandy, and 1oz applejack in a shaker with ice. Shake and strain into glass.',
        'Approximate Amount of Alcohol': 2.0,
        'Traditional Glass': 'Cocktail Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Aviation': {
        'Base Spirit': 'Gin',
        'Required Ingredients': ['Gin', 'Lemon Juice', 'Maraschino Liqueur', 'Creme de Violette'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['None'],
        'Instructions': 'Add 1.5oz gin, 0.5oz maraschino liqueur, 0.5oz lemon juice, and 1 bar spoon of creme de violette in a shaker with ice. Shake and strain into glass.',
        'Approximate Amount of Alcohol': 1.3,
        'Traditional Glass': 'Cocktail Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Baby Guinness': {
        'Base Spirit': 'Specialty',
        'Required Ingredients': ['Irish Cream', 'Coffee Liqueur'],
        'Required Tools': ['None'],
        'Optional Items': ['None'],
        'Instructions': 'Layer 1oz coffee liqueur followed by 0.5oz irish cream in a shot glass.',
        'Approximate Amount of Alcohol': 0.48,
        'Traditional Glass': 'Shot Glass',
        'IBA Official Cocktail': 'No'
    },
    'Barracuda': {
        'Base Spirit': 'Rum',
        'Required Ingredients': ['Gold Rum', 'Galliano Liqueur', 'Pineapple Juice', 'Lime Juice', 'Sparkling Wine'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['None'],
        'Instructions': 'Add 1.5oz gold rum, 0.5oz Galliano liqueur, 2oz pineapple juice, and 1 dash of lime juice in a shaker with ice. Shake and strain into glass filled with ice. Top up with sparkling wine.',
        'Approximate Amount of Alcohol': 1.5,
        'Traditional Glass': 'Highball Glass',
        'IBA Official Cocktail': 'Yes'
    },
    "Bee's Knees": {
        'Base Spirit': 'Gin',
        'Required Ingredients': ['Gin', 'Honey Syrup', 'Lemon Juice', 'Lime Juice'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['None'],
        'Instructions': 'Stir 2tsp honey syrup with 0.75 oz lemon juice and 0.75oz orange juice in a shaker until it dissolves. Add 1.75oz gin and shake with ice. Strain into glass.',
        'Approximate Amount of Alcohol': 1.17,
        'Traditional Glass': 'Cocktail Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Bellini': {
        'Base Spirit': 'Specialty',
        'Required Ingredients': ['Sparkling Wine', 'Peach Puree'],
        'Required Tools': ['None'],
        'Optional Items': ['None'],
        'Instructions': 'Pour 1.75oz peach puree in a mixing glass with ice. Add 3.5oz sparkling wine. Stir gently and pour into serving glass.',
        'Approximate Amount of Alcohol': 0.67,
        'Traditional Glass': 'Champagne Flute',
        'IBA Official Cocktail': 'Yes'
    },
    'Between the Sheets': {
        'Base Spirit': 'Combination',
        'Required Ingredients': ['White Rum', 'Brandy', 'Triple Sec', 'Lemon Juice'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['None'],
        'Instructions': 'Add 1oz white rum, brandy, and triple sec along with 0.5oz lemon juice in a shaker with ice. Shake and strain into glass.',
        'Approximate Amount of Alcohol': 1.65,
        'Traditional Glass': 'Cocktail Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Black Russian': {
        'Base Spirit': 'Vodka',
        'Required Ingredients': ['Vodka', 'Coffee Liqueur'],
        'Required Tools': ['None'],
        'Optional Items': ['None'],
        'Instructions': 'Pour 2oz vodka and 1oz coffee liqueur in a glass filled with ice cubes. Stir gently.',
        'Approximate Amount of Alcohol': 1.67,
        'Traditional Glass': 'Rocks Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Bloody Mary': {
        'Base Spirit': 'Vodka',
        'Required Ingredients': ['Vodka', 'Salt', 'Tomato Juice', 'Worcestershire Sauce', 'Hot Sauce', 'Pepper', 'Lemon Juice'],
        'Required Tools': ['None'],
        'Optional Items': ['Celery'],
        'Instructions': 'Add 1.5oz vodka, 3/4 cup tomato juice, 0.5oz lemon juice, 2 dashes of Worcestershire sauce, 1 dash of hot sauce, a pinch of salt and pepper in a mixing glass with ice. Mix and pour into serving glass with a stalk of celery and any additional food on top - literally an entire meal if you want.',
        'Approximate Amount of Alcohol': 1.0,
        'Traditional Glass': 'Highball Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Boulevardier': {
        'Base Spirit': 'Whiskey',
        'Required Ingredients': ['Bourbon Whiskey', 'Bitter Orange Aperitif', 'Sweet Vermouth'],
        'Required Tools': ['Strainer'],
        'Optional Items': ['None'],
        'Instructions': 'Add 1.5oz bourbon whiskey, 1oz sweet vermouth, and 1oz bitter orange aperitif into a mixing glass with ice. Mix and strain into glass.',
        'Approximate Amount of Alcohol': 1.75,
        'Traditional Glass': 'Cocktail Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Bramble': {
        'Base Spirit': 'Gin',
        'Required Ingredients': ['Gin', 'Lemon Juice', 'Simple Syrup', 'Blackberry Liqueur'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['Blackberries'],
        'Instructions': 'Pour 1.5oz gin, 0.75oz lemon juice, and 0.5oz simple syrup into a shaker with ice. Shake and strain into glass filled with crushed ice. Top with 0.5oz blackberry liqueur and garnish with 3 blackberries. ',
        'Approximate Amount of Alcohol': 1.18,
        'Traditional Glass': 'Rocks Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Brandy Crusta': {
        'Base Spirit': 'Brandy',
        'Required Ingredients': ['Brandy', 'Maraschino Liqueur', 'Orange Curacao', 'Lemon Juice', 'Simple Syrup', 'Bitters'],
        'Required Tools': ['Strainer'],
        'Optional Items': ['Orange Slice', 'Sugar'],
        'Instructions': 'Rub a slice of orange (or lemon) around the rim of the glass and dip it in sugar so the sugar will adhere to the edge of the glass. Add 1.75oz brandy, 0.25oz maraschino liqueur, 0.5oz lemon juice, 1tsp orange curacao, 1tsp simple syrup, and 2 dashes of bitters to a mixing glass with ice. Mix and strain into serving glass.',
        'Approximate Amount of Alcohol': 1.3,
        'Traditional Glass': 'Cocktail Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Brass Monkey': {
        'Base Spirit': 'Combination',
        'Required Ingredients': ['Rum', 'Vodka', 'Orange Juice'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['None'],
        'Instructions': 'Mix 0.5oz rum, 0.5oz vodka, and 4oz orange juice together in a shaker. Shake well and strain into glass over ice.',
        'Approximate Amount of Alcohol': 0.67,
        'Traditional Glass': 'Highball or Tom Collins Glass',
        'IBA Official Cocktail': 'No'
    },
    'Bushwacker': {
        'Base Spirit': 'Rum',
        'Required Ingredients': ['Dark Rum', 'Coffee Liqueur', 'Dark Creme de Cacao', 'Milk', 'Cream of Coconut'],
        'Required Tools': ['Blender'],
        'Optional Items': ['None'],
        'Instructions': 'Mix 2oz dark rum, 1oz coffee liqueur, 1oz dark creme de cacao, 2oz whole milk, 1oz cream of coconut, and ice or ice cream in blender. Pour into serving glass.',
        'Approximate Amount of Alcohol': 2.67,
        'Traditional Glass': 'Hurricane Glass',
        'IBA Official Cocktail': 'No'
    },
    'Caipirinha': {
        'Base Spirit': 'Specialty',
        'Required Ingredients': ['Cachaca', 'Lime', 'Sugar'],
        'Required Tools': ['None'],
        'Optional Items': ['None'],
        'Instructions': 'Put half a lime, cut into wedges, and 2tsp of sugar in a glass and muddle gently. Add 2oz cachaca and cracked ice. Stir gently.',
        'Approximate Amount of Alcohol': 1.33,
        'Traditional Glass': 'Rocks Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Canchanchara': {
        'Base Spirit': 'Rum',
        'Required Ingredients': ['Cuban Aguardiente', 'Lime Juice', 'Honey'],
        'Required Tools': ['None'],
        'Optional Items': ['Lime Wedge'],
        'Instructions': 'Mix 0.5oz lime juice, 0.5oz raw honey, and 1.75oz water in a serving glass and spread the mixture on the bottom and sides of the glass. Add cracked ice followed by 2oz Cuban aguardiente. End by energetically stirring from bottom to top.',
        'Approximate Amount of Alcohol': 1.33,
        'Traditional Glass': 'Rocks Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Casino': {
        'Base Spirit': 'Gin',
        'Required Ingredients': ['Gin', 'Maraschino Liqueur', 'Lemon Juice', 'Orange Bitters'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['None'],
        'Instructions': 'Add 1.4oz gin, 2tsp maraschino liqueur, 2tsp lemon juice, and 2 dashes of orange bitters to a shaker with ice. Shake and strain into glass.',
        'Approximate Amount of Alcohol': 1.0,
        'Traditional Glass': 'Rocks Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Champagne Cocktail': {
        'Base Spirit': 'Specialty',
        'Required Ingredients': ['Sparkling Wine', 'Brandy', 'Bitters', 'Sugar Cube'],
        'Required Tools': ['None'],
        'Optional Items': ['None'],
        'Instructions': 'Place a sugar cube and 2 dashes of bitters in a large champagne glass. Add 0.35oz brandy and pour in 3oz sparkling wine (preferably champagne). ',
        'Approximate Amount of Alcohol': 0.83,
        'Traditional Glass': 'Champagne Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Clover Club': {
        'Base Spirit': 'Gin',
        'Required Ingredients': ['Gin', 'Raspberry Syrup', 'Lemon Juice', 'Egg White'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['None'],
        'Instructions': 'Add 1.5oz gin, 0.5oz raspberry syrup, 0.5oz lemon juice, and 1 egg white in a shaker with ice. Shake and strain into glass',
        'Approximate Amount of Alcohol': 1.0,
        'Traditional Glass': 'Cocktail Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Corpse Reviver #2': {
        'Base Spirit': 'Gin',
        'Required Ingredients': ['Gin', 'Triple Sec', 'Lemon Juice', 'Absinthe', 'Lillet Blanc'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['Orange Slice', 'Lemon Slice'],
        'Instructions': 'Add 0.75oz of gin, triple sec, Littet Blanc, and lemon juice in a shaker with ice and 2 dashes of Absinthe. Shake and fine strain into glass. Garnish with orange or lemon slice.',
        'Approximate Amount of Alcohol': 1.0,
        'Traditional Glass': 'Cocktail Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Cosmopolitan': {
        'Base Spirit': 'Vodka',
        'Required Ingredients': ['Vodka', 'Triple Sec', 'Lime Juice', 'Cranberry Juice'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['Lemon Vodka', 'Lemon Slice'],
        'Instructions': 'Pour 1.5oz vodka, 0.5oz triple sec and lime juice, and 1oz cranberry juice into shaker. Shake with ice and strain into glass. Garnish with lemon twist. Optionally use lemon vodka.',
        'Approximate Amount of Alcohol': 1.17,
        'Traditional Glass': 'Cocktail Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Cuba Libre (Rum and Coke)': {
        'Base Spirit': 'Rum',
        'Required Ingredients': ['Rum', 'Cola', 'Lime Juice'],
        'Required Tools': ['None'],
        'Optional Items': ['Lime Wedge'],
        'Instructions': 'Add 1.5oz rum, 3.5oz cola, and 0.30oz lime juice in a glass with ice. Garnish with lime wedge',
        'Approximate Amount of Alcohol': 1.0,
        'Traditional Glass': 'Highball Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Daiquiri': {
        'Base Spirit': 'Rum',
        'Required Ingredients': ['White Rum', 'Simple Syrup', 'Lime Juice'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['None'],
        'Instructions': 'In a cocktail shaker with ice add 1.5oz rum, 0.5oz simple syrup, and 1oz lime juice. Shake and strain into cocktail glass.',
        'Approximate Amount of Alcohol': 1.0,
        'Traditional Glass': 'Cocktail Glass',
        'IBA Official Cocktail': 'Yes'
    },
    "Dark 'n Stormy": {
        'Base Spirit': 'Rum',
        'Required Ingredients': ['Dark Rum', 'Ginger Beer'],
        'Required Tools': ['None'],
        'Optional Items': ['Lime Slice'],
        'Instructions': 'In glass with ice pour 4oz ginger beer and top with a float of 2oz dark rum. Garnish with lime slice.',
        'Approximate Amount of Alcohol': 1.33,
        'Traditional Glass': 'Highball Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Dirty Shirley': {
        'Base Spirit': 'Vodka',
        'Required Ingredients': ['Vodka', 'Grenadine', 'Sprite'],
        'Required Tools': ['None'],
        'Optional Items': ['Maraschino Cherry'],
        'Instructions': 'Mix 2oz vodka, 1oz grenadine, and 4oz Sprite in serving glass. Add a maraschino cherry garnish. Cara Variant - 3oz vodka. Sarah Variant - 5oz Sprite.',
        'Approximate Amount of Alcohol': 1.33,
        'Traditional Glass': 'Pint or Tom Collins Glass',
        'IBA Official Cocktail': 'No'
    },
    'Dry Martini': {
        'Base Spirit': 'Gin',
        'Required Ingredients': ['Gin', 'Dry Vermouth'],
        'Required Tools': ['Strainer'],
        'Optional Items': ['Olives'],
        'Instructions': 'Add 2.5oz gin and 0.5oz dry vermouth to a mixing glass with ice. Mix and strain into glass. Garnish with skewered olives.',
        'Approximate Amount of Alcohol': 1.83,
        'Traditional Glass': 'Cocktail Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Espresso Martini': {
        'Base Spirit': 'Vodka',
        'Required Ingredients': ['Vodka', 'Coffee Liqueur', 'Espresso', 'Simple Syrup'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['None'],
        'Instructions': 'Pour 2oz vodka, 1oz coffee liqueur, 1oz espresso, and 0.5oz simple syrup into shaker with ice. Shake and strain into glass.',
        'Approximate Amount of Alcohol': 1.67,
        'Traditional Glass': 'Cocktail Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Fernandito': {
        'Base Spirit': 'Specialty',
        'Required Ingredients': ['Fernet-Branca', 'Cola'],
        'Required Tools': ['None'],
        'Optional Items': ['None'],
        'Instructions': 'Pour 2oz Fernet-Branca into a glass with ice. Add 6oz cola and gently stir.',
        'Approximate Amount of Alcohol': 1.35,
        'Traditional Glass': 'Highball Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'French 75': {
        'Base Spirit': 'Gin',
        'Required Ingredients': ['Gin', 'Lemon Juice', 'Simple Syrup', 'Sparkling Wine'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['None'],
        'Instructions': 'Add 2oz gin, 0.5oz lemon juice, and 0.25oz simple syrup to a shaker with ice. Shake and pour into glass. Top with 5oz sparkling wine. ',
        'Approximate Amount of Alcohol': 2.33,
        'Traditional Glass': 'Champagne Flute',
        'IBA Official Cocktail': 'Yes'
    },
    'French Connection': {
        'Base Spirit': 'Specialty',
        'Required Ingredients': ['Amaretto', 'Brandy'],
        'Required Tools': ['None'],
        'Optional Items': ['None'],
        'Instructions': 'Pour 1oz of Amaretto and 1oz brandy into glass filled with ice cubes.',
        'Approximate Amount of Alcohol': 1.08,
        'Traditional Glass': 'Rocks Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'French Martini': {
        'Base Spirit': 'Vodka',
        'Required Ingredients': ['Vodka', 'Raspberry Liqueur', 'Pineapple Juice'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['None'],
        'Instructions': 'Pour 2oz vodka, 0.5oz raspberry liqueur, and 1.5oz pineapple juice into shaker with ice. Shake and strain into glass.',
        'Approximate Amount of Alcohol': 1.5,
        'Traditional Glass': 'Cocktail Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Gimlet': {
        'Base Spirit': 'Gin',
        'Required Ingredients': ['Gin', 'Lime Juice', 'Simple Syrup'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['Lime Wheel'],
        'Instructions': 'Pour 1.5oz gin, 1oz lime juice, and 0.25oz simple syrup in a shaker with ice. Shake and strain into glass. Garnish with lime wheel.',
        'Approximate Amount of Alcohol': 1.0,
        'Traditional Glass': 'Cocktail Glass',
        'IBA Official Cocktail': 'No'
    },
    'Gin and Tonic': {
        'Base Spirit': 'Gin',
        'Required Ingredients': ['Gin', 'Tonic Water'],
        'Required Tools': ['None'],
        'Optional Items': ['Lime Slice'],
        'Instructions': 'Pour 2oz gin and 5oz tonic water over ice in a glass and stir gently. Garnish with lime slice.',
        'Approximate Amount of Alcohol': 1.33,
        'Traditional Glass': 'Highball Glass',
        'IBA Official Cocktail': 'No'
    },
    'Gin Fizz': {
        'Base Spirit': 'Gin',
        'Required Ingredients': ['Gin', 'Lemon Juice', 'Simple Syrup', 'Carbonated Water'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['Lemon Slice'],
        'Instructions': 'Mix 1.5oz gin, 1oz lemon juice, and 2tsp simple syrup in a shaker with ice. Strain into glass and top with a splash of carbonated water.',
        'Approximate Amount of Alcohol': 1.0,
        'Traditional Glass': 'Highball Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Golden Dream': {
        'Base Spirit': 'Specialty',
        'Required Ingredients': ['Galliano Liqueur', 'Triple Sec', 'Orange Juice', 'Milk/Cream'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['None'],
        'Instructions': 'Add 1oz Galliano liqueur, 1oz triple sec, 1oz orange juice, and 0.5oz milk/cream into a shaker with ice. Shake and strain into glass.',
        'Approximate Amount of Alcohol': 1.37,
        'Traditional Glass': 'Cocktail Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Grasshopper': {
        'Base Spirit': 'Specialty',
        'Required Ingredients': ['Creme de Cacao', 'Creme de Menthe', 'Milk/Cream'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['Mint Sprig'],
        'Instructions': 'Add 1oz creme de cacao, creme de menthe along, and milk/cream in a shaker with ice. Shake and strain into glass. Garnish with mint sprig.',
        'Approximate Amount of Alcohol': 1.33,
        'Traditional Glass': 'Cocktail Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Hanky Panky': {
        'Base Spirit': 'Gin',
        'Required Ingredients': ['Gin', 'Sweet Vermouth', 'Fernet-Branca'],
        'Required Tools': ['Strainer'],
        'Optional Items': ['Orange Twist'],
        'Instructions': 'Add 1.5oz gin, 1.5oz sweet vermouth, and 0.25oz Fernet-Branca in a mixing glass with ice. Mix and strain into glass.',
        'Approximate Amount of Alcohol': 1.4,
        'Traditional Glass': 'Cocktail Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Harrison Ford': {
        'Base Spirit': 'Vodka',
        'Required Ingredients': ['Vodka', 'Coffee Liqueur', 'Irish Cream'],
        'Required Tools': ['None'],
        'Optional Items': ['None'],
        'Instructions': 'Pour 2.25oz vodka, 3oz irish cream, and 1.5oz coffee liqueur over ice in glass. Stir and serve.',
        'Approximate Amount of Alcohol': 2.85,
        'Traditional Glass': 'Highball Glass',
        'IBA Official Cocktail': 'No'
    },
    'Hemingway Special': {
        'Base Spirit': 'Rum',
        'Required Ingredients': ['Rum', 'Grapefruit Juice', 'Maraschino Liqueur', 'Lime Juice'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['None'],
        'Instructions': 'Add 2oz rum, 1.4oz grapefruit juice, 0.5oz maraschino liqueur, and 0.75oz lime juice in a shaker with ice. Shake and strain into glass.',
        'Approximate Amount of Alcohol': 1.73,
        'Traditional Glass': 'Cocktail Glass',
        'IBA Official Cocktail': 'Yes'
    },
    "Horse's Neck": {
        'Base Spirit': 'Brandy',
        'Required Ingredients': ['Brandy', 'Ginger Ale'],
        'Required Tools': ['None'],
        'Optional Items': ['Lemon Spiral', 'Bourbon Whiskey'],
        'Instructions': 'Place 1.5oz brandy and 4.5oz ginger ale in a glass with ice cubes and stir gently. Garnish with lemon twist. Optionally, use bourbon instead of brandy.',
        'Approximate Amount of Alcohol': 1.0,
        'Traditional Glass': 'Highball Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Hot Sex': {
        'Base Spirit': 'Specialty',
        'Required Ingredients': ['Triple Sec', 'Orange Juice', 'Grenadine'],
        'Required Tools': ['None'],
        'Optional Items': ['Maraschino Cherry'],
        'Instructions': 'Mix 2.5oz triple sec, 4oz OJ, and 1 dash of grenadine in a glass with ice. Garnish with maraschino cherries.',
        'Approximate Amount of Alcohol': 1.25,
        'Traditional Glass': 'Rocks Glass',
        'IBA Official Cocktail': 'No'
    },
    'Illegal': {
        'Base Spirit': 'Combination',
        'Required Ingredients': ['Espadin Mezcal', 'White Rum', 'Falernum', 'Maraschino Liqueur', 'Lime Juice', 'Simple Syrup'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['None'],
        'Instructions': 'Add 1oz Espadin Mezcal, 0.5oz white rum, 0.5oz falernum, 0.5oz simple syrup, 0.75oz lime juice, and 1tsp maraschino liqueur to a shaker with ice. Shake vigorously and strain into serving vessel.',
        'Approximate Amount of Alcohol': 1.1,
        'Traditional Glass': 'Traditional Terracotta Mug or Cocktail Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Irish Car Bomb': {
        'Base Spirit': 'Specialty',
        'Required Ingredients': ['Guinness', 'Irish Cream', 'Irish Whiskey'],
        'Required Tools': ['None'],
        'Optional Items': ['None'],
        'Instructions': 'Mix equal parts Irish cream and Irish whiskey in a shot glass. Drop into a glass containing 8oz of Guinness and chug!',
        'Approximate Amount of Alcohol': 1.3,
        'Traditional Glass': 'Shot Glass in Pint Glass',
        'IBA Official Cocktail': 'No'
    },
    'Irish Coffee': {
        'Base Spirit': 'Whiskey',
        'Required Ingredients': ['Irish Whiskey', 'Coffee', 'Cream'],
        'Required Tools': ['None'],
        'Optional Items': ['None'],
        'Instructions': 'Put 4oz warm black coffee into a preheated glass. Add 1.5oz Irish whiskey and 1 tsp sugar. Stir until dissolved. Pour chilled cream carefully over the back of a spoon held just above the surface of the coffee to create a layer of cream on top.',
        'Approximate Amount of Alcohol': 1.0,
        'Traditional Glass': 'Irish Coffee Mug',
        'IBA Official Cocktail': 'Yes'
    },
    'John Collins': {
        'Base Spirit': 'Gin',
        'Required Ingredients': ['Gin', 'Lemon Juice', 'Simple Syrup', 'Carbonated Water'],
        'Required Tools': ['None'],
        'Optional Items': ['Lemon Slice'],
        'Instructions': 'Combine 1.5oz gin, 1oz lemon juice, 0.5oz simple syrup, and 2oz carbonated water in glass with ice. Stir gently. Garnish with lemon slice. Use Old Tom gin to make it a Tom Collins.',
        'Approximate Amount of Alcohol': 1.0,
        'Traditional Glass': 'Collins Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Kamikaze': {
        'Base Spirit': 'Vodka',
        'Required Ingredients': ['Vodka', 'Lime Juice', 'Triple Sec'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['Lime Wheel'],
        'Instructions': 'Mix 1oz vodka, triple sec, and lime juice in a shaker with ice. Shake and strain into glass and garnish with lime wheel.',
        'Approximate Amount of Alcohol': 1.0,
        'Traditional Glass': 'Cocktail Glass',
        'IBA Official Cocktail': 'No'
    },
    'KIR': {
        'Base Spirit': 'Specialty',
        'Required Ingredients': ['White Wine', 'Creme de Cassis'],
        'Required Tools': ['None'],
        'Optional Items': ['None'],
        'Instructions': 'Add 0.5oz creme de cassis in a glass and top with 4.5oz dry white wine.',
        'Approximate Amount of Alcohol': 0.92,
        'Traditional Glass': 'Champagne Flute',
        'IBA Official Cocktail': 'Yes'
    },
    'Last Word': {
        'Base Spirit': 'Gin',
        'Required Ingredients': ['Gin', 'Green Chartreuse', 'Maraschino Liqueur', 'Lime Juice'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['None'],
        'Instructions': 'Add 0.75oz of gin, green chartreuse, maraschino liqueur, and lime juice to a shaker with ice. Shake and strain into glass.',
        'Approximate Amount of Alcohol': 1.59,
        'Traditional Glass': 'Cocktail Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Lemon Drop Martini': {
        'Base Spirit': 'Vodka',
        'Required Ingredients': ['Lemon Vodka', 'Triple Sec', 'Lemon Juice'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['Sugar'],
        'Instructions': 'Mix 1oz lemon vodka, 0.7oz triple sec, and 0.5oz lemon juice in a shaker with ice. Shake and strain into glass and garnish with sugar rim.',
        'Approximate Amount of Alcohol': 0.9,
        'Traditional Glass': 'Cocktail Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Long Island Iced Tea': {
        'Base Spirit': 'Combination',
        'Required Ingredients': ['Vodka', 'Tequila', 'White Rum', 'Gin', 'Triple Sec', 'Lemon Juice', 'Simple Syrup', 'Cola'],
        'Required Tools': ['None'],
        'Optional Items': ['None'],
        'Instructions': 'Add 0.75oz of all ingredients to a glass with ice and top with cola. Stir gently.',
        'Approximate Amount of Alcohol': 2.25,
        'Traditional Glass': 'Highball Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Mai Tai': {
        'Base Spirit': 'Rum',
        'Required Ingredients': ['Rum', 'Orange Curacao', 'Orgeat Syrup', 'Simple Syrup', 'Lime Juice'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['Mint Leaves', 'Pineapple Slices', 'Lime Peel'],
        'Instructions': 'Pour 2oz rum, 0.5oz orange curacao, 0.75oz lime juice, 0.3oz orgeat syrup, and 0.25oz simple syrup in shaker with ice. Shake and strain into glass filled with crushed ice. Garnish with lime peel, pineapple spear, and mint leaves.',
        'Approximate Amount of Alcohol': 1.5,
        'Traditional Glass': 'Rocks or Highball Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Manhattan': {  
        'Base Spirit': 'Whiskey',
        'Required Ingredients': ['Rye Whiskey', 'Sweet Vermouth', 'Bitters'],
        'Required Tools': ['Strainer'],
        'Optional Items': ['Maraschino Cherry'],
        'Instructions': 'Mix 2oz rye whiskey, 1oz  sweet vermouth, and 2 dashes of bitters in a mixing glass with ice. Stir until well-chilled and strain into glass. Garnish with cherry.',
        'Approximate Amount of Alcohol': 1.62,
        'Traditional Glass': 'Cocktail Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Margarita': {
        'Base Spirit': 'Tequila',
        'Required Ingredients': ['Tequila', 'Triple Sec', 'Lime Juice', 'Agave Syrup'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['Lime Slice'],
        'Instructions': 'Add 2oz tequila, 0.5oz triple sec, 1oz lime juice, and 0.5oz agave syrup to shaker with ice. Shake and strain into glass.',
        'Approximate Amount of Alcohol': 1.5,
        'Traditional Glass': 'Cocktail Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Martinez': {
        'Base Spirit': 'Gin',
        'Required Ingredients': ['Gin', 'Sweet Vermouth', 'Maraschino Liqueur', 'Bitters'],
        'Required Tools': ['Strainer'],
        'Optional Items': ['None'],
        'Instructions': 'Add 1.5oz gin, 1.5oz sweet vermouth, 1tsp maraschino liqueur, and 2 dashes of bitters to a mixing glass with ice. Mix and strain into glass.',
        'Approximate Amount of Alcohol': 1.45,
        'Traditional Glass': 'Cocktail Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Mary Pickford': {
        'Base Spirit': 'Rum',
        'Required Ingredients': ['White Rum', 'Pineapple Juice', 'Maraschino Liqueur', 'Grenadine'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['None'],
        'Instructions': 'Add 1.5oz white rum, 1.5oz pineapple juice, 0.25oz maraschino liqueur, and 1tsp grenadine to a shaker with ice. Shake and strain into glass.',
        'Approximate Amount of Alcohol': 1.13,
        'Traditional Glass': 'Cocktail Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Mimosa': {
        'Base Spirit': 'Specialty',
        'Required Ingredients': ['Sparkling Wine', 'Orange Juice'],
        'Required Tools': ['None'],
        'Optional Items': ['None'],
        'Instructions': 'Pour 2.5oz of orange juice in a glass and add sparkling wine on top. Stir gently.',
        'Approximate Amount of Alcohol': 0.5,
        'Traditional Glass': 'Champagne Flute',
        'IBA Official Cocktail': 'Yes'
    },
    'Mint Julep': {
        'Base Spirit': 'Whiskey',
        'Required Ingredients': ['Bourbon Whiskey', 'Mint', 'Sugar'],
        'Required Tools': ['None'],
        'Optional Items': ['None'],
        'Instructions': 'In serving vessel, gently muddle 4 sprigs of mint with 1tsp of sugar and 2tsp of water. Fill the vessel with cracked ice and add 2oz bourbon. Stir well until vessel frosts.',
        'Approximate Amount of Alcohol': 1.33,
        'Traditional Glass': 'Julep Stainless Steel Cup',
        'IBA Official Cocktail': 'Yes'
    },
    'Mojito': {
        'Base Spirit': 'Rum',
        'Required Ingredients': ['White Rum', 'Lime Juice', 'Mint', 'Sugar', 'Carbonated Water'],
        'Required Tools': ['None'],
        'Optional Items': ['Lime Slice'],
        'Instructions': 'Mix 10 mint leaves with 2tsp of sugar and 1oz lime juice. Add a splash of carbonated water and fill the glass with ice. Pour in 1.5oz white rum and top with 1/2 cup of carbonated water (or as needed). Garnish with lime slice',
        'Approximate Amount of Alcohol': 1.0,
        'Traditional Glass': 'Highball Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Monkey Gland': {
        'Base Spirit': 'Gin',
        'Required Ingredients': ['Gin', 'Absinthe', 'Grenadine', 'Orange Juice'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['None'],
        'Instructions': 'Swirl 1tsp of Absinthe around a chilled glass to coat it, then discard any excess liqueur. Pour 1.5oz gin, 1.5oz orange juice, and 1tsp grenadine into a shaker with ice. Shake and strain into serving glass.',
        'Approximate Amount of Alcohol': 1.0,
        'Traditional Glass': 'Cocktail Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Moscow Mule': {
        'Base Spirit': 'Vodka',
        'Required Ingredients': ['Vodka', 'Lime Juice', 'Ginger Beer'],
        'Required Tools': ['None'],
        'Optional Items': ['Lime Wedge'],
        'Instructions': 'Pour 1.5oz vodka, 0.5oz lime juice, and 1/2 cup ginger beer in a mule mug with ice. Garnish with a lime wedge.',
        'Approximate Amount of Alcohol': 1.0,
        'Traditional Glass': 'Mule Mug',
        'IBA Official Cocktail': 'Yes'
    },
    'Naked and Famous': {
        'Base Spirit': 'Specialty',
        'Required Ingredients': ['Espadin Mezcal', 'Yellow Chartreuse', 'Aperol', 'Lime Juice'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['None'],
        'Instructions': 'Pour 0.75oz of espadin mezcal, yellow chartreuse, aperol, and lime juice into a shaker with ice. Shake and strain into glass.',
        'Approximate Amount of Alcohol': 1.15,
        'Traditional Glass': 'Cocktail Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Negroni': {
        'Base Spirit': 'Gin',
        'Required Ingredients': ['Gin', 'Bitter Orange Aperitif', 'Sweet Vermouth'],
        'Required Tools': ['None'],
        'Optional Items': ['Orange Slice'],
        'Instructions': 'Pour 1oz of gin, bitter orange aperitif, and sweet vermouth into a glass with ice and stir. Garnish with orange slice.',
        'Approximate Amount of Alcohol': 1.4,
        'Traditional Glass': 'Rocks Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'New York Sour': {
        'Base Spirit': 'Whiskey',
        'Required Ingredients': ['Rye Whiskey', 'Simple Syrup', 'Lemon Juice', 'Egg White', 'Red Wine'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['None'],
        'Instructions': 'Pour 2oz rye whiskey (or bourbon), 0.75oz simple syrup, 1oz lemon juice, and 1 egg white into a shaker with ice. Shake and strain into glass filled with ice. Float 0.5oz red wine on top.',
        'Approximate Amount of Alcohol': 1.53,
        'Traditional Glass': 'Rocks Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Old Cuban': {
        'Base Spirit': 'Rum',
        'Required Ingredients': ['Rum', 'Mint', 'Lime Juice', 'Simple Syrup', 'Bitters', 'Sparkling Wine'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['Mint Sprigs'],
        'Instructions': 'Pour 1.5oz rum, 6 mint leaves, 0.75oz lime juice, 1oz simple syrup, and 2 dashes of bitters into a shaker with ice. Shake well and strain into glass. Top with 2oz of sparkling wine and garnish with mint sprigs.',
        'Approximate Amount of Alcohol': 1.4,
        'Traditional Glass': 'Cocktail Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Old Fashioned': {
        'Base Spirit': 'Whiskey',
        'Required Ingredients': ['Bourbon Whiskey', 'Simple Syrup', 'Bitters', 'Orange'],
        'Required Tools': ['None'],
        'Optional Items': ['None'],
        'Instructions': 'Muddle an orange slice in a glass. Add ice and along with 1.5oz bourbon whiskey, 0.75oz simple syrup, and 2 dashes of bitters. Stir and garnish with an orange peel.',
        'Approximate Amount of Alcohol': 1.0,
        'Traditional Glass': 'Rocks Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Painkiller': {
        'Base Spirit': 'Rum',
        'Required Ingredients': ['Dark Rum', 'Pineapple Juice', 'Orange Juice', 'Cream of Coconut'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['Ground Nutmeg', 'Pineapple Wedge'],
        'Instructions': 'Add 2oz dark rum, 4oz pineapple juice, 1oz orange juice, and 1oz cream of coconut to a shaker with ice. Shake and strain into glass over ice. Garnish with ground nutmeg and a pineapple wedge.',
        'Approximate Amount of Alcohol': 1.33,
        'Traditional Glass': 'Highball Glass',
        'IBA Official Cocktail': 'No'
    },
    'Paloma': {
        'Base Spirit': 'Tequila',
        'Required Ingredients': ['Tequila', 'Lime Juice', 'Agave Syrup', 'Grapefruit Soda', 'Salt'],
        'Required Tools': ['None'],
        'Optional Items': ['Lime Slice'],
        'Instructions': 'Add 1.5oz tequila, 0.5oz lime juice, and 0.25oz agave syrup into glass with ice. Add a pinch of salt and top off with 3oz grapefruit soda.',
        'Approximate Amount of Alcohol': 1.0,
        'Traditional Glass': 'Collins Glass or Highball Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Paper Plane': {
        'Base Spirit': 'Whiskey',
        'Required Ingredients': ['Bourbon Whiskey', 'Aperol', 'Lemon Juice', 'Amaro Nonino'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['None'],
        'Instructions': 'Mix 1oz of bourbon whiskey, aperol, lemon juice, and Amaro Nonino in a shaker with ice. Shake and strain into glass.',
        'Approximate Amount of Alcohol': 1.43,
        'Traditional Glass': 'Cocktail Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Paradise': {
        'Base Spirit': 'Combination',
        'Required Ingredients': ['Gin', 'Apricot Brandy', 'Orange Juice'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['None'],
        'Instructions': 'Add 1.5oz gin, 1oz apricot brandy, and 0.75oz orange juice to a shaker with ice. Shake and strain into glass.',
        'Approximate Amount of Alcohol': 1.67,
        'Traditional Glass': 'Cocktail Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Penicillin': {
        'Base Spirit': 'Whiskey',
        'Required Ingredients': ['Blended Scotch Whiskey', 'Lemon Juice', 'Honey Syrup', 'Single Malt Scotch Whiskey', 'Ginger'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['Candied Ginger'],
        'Instructions': 'Muddle 2-3 quarter size fresh ginger in a shaker and add 2oz blended scotch, 0.75oz lemon juice, 0.75oz honey syrup, and ice. Shake and double strain into glass. Float 0.25oz single malt scotch whiskey on top.',
        'Approximate Amount of Alcohol': 1.5,
        'Traditional Glass': 'Rocks Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Pina Colada': {
        'Base Spirit': 'Rum',
        'Required Ingredients': ['White Rum', 'Cream of Coconut', 'Pineapple Juice'],
        'Required Tools': ['Blender'],
        'Optional Items': ['Pineapple Wedge'],
        'Instructions': 'Mix 1oz white rum, 1oz cream of coconut, and 3oz pineapple juice in a blender with ice. Pour into a large glass or coconut and garnish with pineapple wedge.',
        'Approximate Amount of Alcohol': 0.67,
        'Traditional Glass': 'Coconut',
        'IBA Official Cocktail': 'Yes'
    },
    'Pink Polar Bear': {
        'Base Spirit': 'Vodka',
        'Required Ingredients': ['Vodka', 'Grenadine', 'Coffee Liqueur', 'Milk'],
        'Required Tools': ['Cocktail Shaker'],
        'Optional Items': ['None'],
        'Instructions': 'Add 1oz of vodka, grenadine, and coffee liqueur with 4oz milk to a shaker over ice. Shake, pour, and drink.',
        'Approximate Amount of Alcohol': 1.0,
        'Traditional Glass': 'Highball Glass',
        'IBA Official Cocktail': 'No'
    },
    'Pisco Sour': {
        'Base Spirit': 'Brandy',
        'Required Ingredients': ['Pisco Brandy', 'Lemon Juice', 'Simple Syrup', 'Egg White'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['None'],
        'Instructions': 'Add 2oz Pisco, 1oz lemon juice, 0.5oz simple syrup, and 1 raw egg white in a shaker with ice. Shake and strain into glass.',
        'Approximate Amount of Alcohol': 1.33,
        'Traditional Glass': 'Goblet Glass',
        'IBA Official Cocktail': 'Yes'
    },
    "Planter's Punch": {
        'Base Spirit': 'Rum',
        'Required Ingredients': ['Dark Rum', 'Lime Juice', 'Simple Syrup', 'Grenadine', 'Bitters', 'Carbonated Water'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['Mint Sprig'],
        'Instructions': 'Add 3oz dark rum, 1oz simple syrup, 0.75oz lime juice, 1tsp grenadine, and 3 dashes of bitters to a shaker with ice. Shake and strain into serving vessel filled with crushed ice. Top with carbonated water and garnish with mint sprig.',
        'Approximate Amount of Alcohol': 2.0,
        'Traditional Glass': 'Traditional Terracotta Mug or Collins Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Porto Flip': {
        'Base Spirit': 'Brandy',
        'Required Ingredients': ['Brandy', 'Egg Yolk', 'Port Wine'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['Ground Nutmeg'],
        'Instructions': 'Add 0.5oz brandy, 1.5oz port wine, and 1 egg yolk to a shaker with ice. Shake and strain into glass. Garnish with a sprinkle of ground nutmeg.',
        'Approximate Amount of Alcohol': 0.78,
        'Traditional Glass': 'Cocktail Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Ramos Fizz': {
        'Base Spirit': 'Gin',
        'Required Ingredients': ['Gin', 'Lime Juice', 'Lemon Juice', 'Simple Syrup', 'Milk/Cream', 'Egg White', 'Orange Flower Water', 'Carbonated Water'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['Vanilla Extract'],
        'Instructions': 'Add 1.5oz gin, 0.5oz lime juice, 0.5oz lemon juice, 1oz simple syrup, 2oz milk/cream, 1 egg white, 3 dashes of orange flower water, and (optionally) 2 dashes of vanilla extract into a shaker with ice. Double strain into glass, then pour the drink back into the shaker without ice and shake again. Strain into serving glass and top up with carbonated water.',
        'Approximate Amount of Alcohol': 1.0,
        'Traditional Glass': 'Highball Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Rumple Juice': {
        'Base Spirit': 'Rum',
        'Required Ingredients': ['Rum', 'Apple Juice'],
        'Required Tools': ['None'],
        'Optional Items': ['None'],
        'Instructions': 'Add 3oz rum in a glass with a few ice cubes. Top off with a considerable amount of apple juice, to taste.',
        'Approximate Amount of Alcohol': 2.0,
        'Traditional Glass': 'Rocks Glass',
        'IBA Official Cocktail': 'No'
    },
    'Russian Spring Punch': {
        'Base Spirit': 'Vodka',
        'Required Ingredients': ['Vodka', 'Lemon Juice', 'Creme de Cassis', 'Simple Syrup', 'Sparkling Wine'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['Blackberries'],
        'Instructions': 'Add 0.75oz vodka, 0.75oz lemon juice, 0.5oz creme de cassis, and 0.25oz simple syrup to a shaker with ice. Shake and strain into glass. Top with sparkling wine and garnish with blackberries.',
        'Approximate Amount of Alcohol': 0.70,
        'Traditional Glass': 'Highball Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Rusty Nail': {
        'Base Spirit': 'Whiskey',
        'Required Ingredients': ['Blended Scotch Whiskey', 'Drambuie'],
        'Required Tools': ['None'],
        'Optional Items': ['None'],
        'Instructions': 'Pour 1.5oz scotch whiskey and 0.75oz Drambuie liqueur into a glass filled with ice. Stir gently.',
        'Approximate Amount of Alcohol': 1.5,
        'Traditional Glass': 'Rocks Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Sangria': {
        'Base Spirit': 'Specialty',
        'Required Ingredients': ['Red Wine', 'Sugar', 'Lemon', 'Orange', 'Carbonated Water'],
        'Required Tools': ['None'],
        'Optional Items': ['None'],
        'Instructions': 'Mix 1 bottle of red wine with 1 sliced lemon, 1 sliced orange, 1 cup of sugar, and 12oz of carbonated water in a pitcher with ice. Pour into individual serving glasses. ',
        'Approximate Amount of Alcohol': 1.0,
        'Traditional Glass': 'Wine Glass',
        'IBA Official Cocktail': 'No'
    },
    'Sazerac': {
        'Base Spirit': 'Whiskey',
        'Required Ingredients': ["Rye Whiskey", "Sugar Cube", "Peychaud's Bitters"],
        'Required Tools': ['Strainer'],
        'Optional Items': ["Lemon Slice"],
        'Instructions': "Mix 2oz rye whiskey, 3 dashes of Perchaud's Bitters, and a sugar cube in a mixing glass. Mix and strain into glass. Garnish with lemon slice.",
        'Approximate Amount of Alcohol': 1.33,
        'Traditional Glass': 'Rocks Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Screwdriver': {
        'Base Spirit': 'Vodka',
        'Required Ingredients': ['Vodka', 'Orange Juice'],
        'Required Tools': ['None'],
        'Optional Items': ['None'],
        'Instructions': 'Pour 1.5oz vodka and 3oz orange juice in a glass with ice.',
        'Approximate Amount of Alcohol': 1.0,
        'Traditional Glass': 'Highball Glass',
        'IBA Official Cocktail': 'No'
    },
    'Sea Breeze': {
        'Base Spirit': 'Vodka',
        'Required Ingredients': ['Vodka', 'Cranberry Juice', 'Grapefruit Juice'],
        'Required Tools': ['None'],
        'Optional Items': ['Orange Zest', 'Cherry'],
        'Instructions': 'Pour 1.5oz vodka, 1.5oz grapefruit juice, and 3oz cranberry juice into a glass filled with ice. Stir and garnish with an orange zest and cherry.',
        'Approximate Amount of Alcohol': 1.0,
        'Traditional Glass': 'Highball Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Sex on the Beach': {
        'Base Spirit': 'Vodka',
        'Required Ingredients': ['Vodka', 'Peach Schnapps', 'Orange Juice', 'Cranberry Juice'],
        'Required Tools': ['None'],
        'Optional Items': ['Orange Slice'],
        'Instructions': 'Pour 1.5oz vodka, 0.75oz peach schnapps, 1.5oz orange juice, and 1.5oz cranberry juice in a glass filled with ice. Garnish with orance slice.',
        'Approximate Amount of Alcohol': 1.25,
        'Traditional Glass': 'Highball Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Sidecar': {
        'Base Spirit': 'Brandy',
        'Required Ingredients': ['Brandy', 'Triple Sec', 'Lemon Juice'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['None'],
        'Instructions': 'Add 1.5oz brandy, 0.75oz triple sec, and 0.75oz lemon juice to a shaker with ice. Shake and strain into glass.',
        'Approximate Amount of Alcohol': 1.25,
        'Traditional Glass': 'Cocktail Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Singapore Sling': {
        'Base Spirit': 'Gin',
        'Required Ingredients': ['Gin', 'Cherry Liqueur', 'Triple Sec', 'Pineapple Juice', 'Lime Juice', 'Grenadine', 'Bitters', 'Benedictine'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['Pineapple Slice', 'Cherry'],
        'Instructions': 'Add 1oz gin, 0.5oz cherry liqueur, 0.25oz triple sec, 0.25oz benedictine, 4oz pineapple juice, 0.5oz lime juice, 2tsp of grenadine, and a dash of bitters to a shaker with ice. Shake and strain into glass. Garnish with pineapple slice and cherry.',
        'Approximate Amount of Alcohol': 1.0,
        'Traditional Glass': 'Hurricane Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Southside': {
        'Base Spirit': 'Gin',
        'Required Ingredients': ['Gin', 'Lemon Juice', 'Simple Syrup', 'Mint'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['Mint Sprigs'],
        'Instructions': 'Add 2oz gin, 1oz lemon juice, 0.5oz simple syrup, and 5 mint leaves to a shaker with ice. Shake and double strain into glass. Garnish with mint sprigs.',
        'Approximate Amount of Alcohol': 1.33,
        'Traditional Glass': 'Cocktail Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Spicy Fifty': {
        'Base Spirit': 'Vodka',
        'Required Ingredients': ['Vodka', 'Elderflower Cordial', 'Lime Juice', 'Honey Syrup'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['Red Chili Pepper'],
        'Instructions': 'Add 1.5oz vodka, 0.5oz elderflower cordial, 0.5oz lime juice, and 2tsp honey syrup to a shaker with ice. Shake and double strain into glass and garnish with red chili pepper.',
        'Approximate Amount of Alcohol': 1.0,
        'Traditional Glass': 'Cocktail Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Spritz': {
        'Base Spirit': 'Specialty',
        'Required Ingredients': ['Sparkling Wine', 'Carbonated Water', 'Aperol'],
        'Required Tools': ['None'],
        'Optional Items': ['Orange Slice'],
        'Instructions': 'Pour 3oz sparkling wine, 2oz Aperol, and 1oz carbonated water over ice into a glass. Garnish with orange slice',
        'Approximate Amount of Alcohol': 0.97,
        'Traditional Glass': 'Wine Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Stinger': {
        'Base Spirit': 'Brandy',
        'Required Ingredients': ['Brandy', 'Creme de Menthe'],
        'Required Tools': ['Strainer'],
        'Optional Items': ['None'],
        'Instructions': 'Add 1.75oz brandy and 0.70oz creme de menthe to a mixing glass with ice. Stir well and strain into serving glass. ',
        'Approximate Amount of Alcohol': 1.4,
        'Traditional Glass': 'Cocktail Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Suffering Bastard': {
        'Base Spirit': 'Combination',
        'Required Ingredients': ['Brandy', 'Gin', 'Lime Juice', 'Bitters', 'Ginger Beer'],
        'Required Tools': ['Cocktail Shaker'],
        'Optional Items': ['Mint Sprigs'],
        'Instructions': 'Pour 1oz brandy, 1oz gin, 0.5oz lime juice, and 2 dashes of bitters in a shaker with ice. Shake well and pour unstrained into your drinking vessel. Top up with ginger beer and garnish with mint sprigs.',
        'Approximate Amount of Alcohol': 1.33,
        'Traditional Glass': 'Suffering Bastard Mug',
        'IBA Official Cocktail': 'Yes'
    },
    'Tequila Sunrise': {
        'Base Spirit': 'Tequila',
        'Required Ingredients': ['Tequila', 'Orange Juice', 'Grenadine'],
        'Required Tools': ['None'],
        'Optional Items': ['Orange Slice'],
        'Instructions': 'Pour 1.5oz tequila and 3oz orange juice into glass with ice. Add 0.5oz grenadine slowly on top to create chromatic effect. Do not stir. Garnish with orange slice.',
        'Approximate Amount of Alcohol': 1.0,
        'Traditional Glass': 'Highball Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Tipperary': {
        'Base Spirit': 'Whiskey',
        'Required Ingredients': ['Irish Whiskey', 'Sweet Vermouth', 'Green Chartreuse', 'Bitters'],
        'Required Tools': ['Strainer'],
        'Optional Items': ['Orange Slice'],
        'Instructions': 'Add 1.75oz Irish whiskey, 1oz sweet vermouth, 0.5oz green chartreuse, and 2 dashes of bitters to a mixing glass with ice. Mix and strain into glass. Garnish with orange slice.',
        'Approximate Amount of Alcohol': 1.9,
        'Traditional Glass': 'Cocktail Glass',
        'IBA Official Cocktail': 'Yes'
    },
    "Tommy's Margarita": {
        'Base Spirit': 'Tequila',
        'Required Ingredients': ['Reposado Tequila', 'Lime Juice', 'Agave Syrup'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['Lime Slice'],
        'Instructions': 'Mix 1.5oz tequila, 0.75oz lime juice, and 0.75oz agave syrup in a shaker with ice. Shake and strain into glass. Garnish with lime slice.',
        'Approximate Amount of Alcohol': 1.0,
        'Traditional Glass': 'Rocks Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Trinidad Sour': {
        'Base Spirit': 'Specialty',
        'Required Ingredients': ['Bitters', 'Orgeat Syrup', 'Lemon Juice', 'Rye Whiskey'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['None'],
        'Instructions': 'Mix 1.5oz bitters, 1oz orgeat syrup, 0.75oz lemon juice, and 0.5oz rye whiskey in a shaker with ice. Shake and strain into glass.',
        'Approximate Amount of Alcohol': 1.45,
        'Traditional Glass': 'Cocktail Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Tuxedo': {
        'Base Spirit': 'Gin',
        'Required Ingredients': ['Gin', 'Dry Vermouth', 'Maraschino Liqueur', 'Absinthe', 'Orange Bitters'],
        'Required Tools': ['Strainer'],
        'Optional Items': ['Cherry', 'Lemon Twist'],
        'Instructions': 'Mix 1oz gin, 1oz dry vermouth, 0.5tsp maraschino liqueur, 0.25tsp absinthe, and 3 dashes of orange bitters in a mixing glass with ice. Mix and strain into glass. Garnish with a lemon twist and cherry.',
        'Approximate Amount of Alcohol': 1.0,
        'Traditional Glass': 'Cocktail Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'VE.N.TO': {
        'Base Spirit': 'Specialty',
        'Required Ingredients': ['Grappa', 'Lemon Juice' ,'Chamomile Cordial', 'Honey Syrup'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['White Grapes'],
        'Instructions': 'Add 1.5oz grappa, 0.75oz lemon juice, 0.5oz honey syrup, and 0.5oz chamomile cordial to a shaker with ice. Shake and strain into glass. Garnish with white grapes.',
        'Approximate Amount of Alcohol': 1.0,
        'Traditional Glass': 'Tumbler Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Vesper': {
        'Base Spirit': 'Combination',
        'Required Ingredients': ['Gin', 'Vodka', 'Lillet Blanc'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['Lemon Twist'],
        'Instructions': 'Pour 1.5oz gin, 0.5oz vodka, and 0.25oz Lillet Blanc into a shaker with ice. Shake and strain into glass. Garnish with lemon twist.',
        'Approximate Amount of Alcohol': 1.40,
        'Traditional Glass': 'Cocktail Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Vieux Carrè': {
        'Base Spirit': 'Combination',
        'Required Ingredients': ['Rye Whiskey', 'Brandy', 'Sweet Vermouth', "Peychaud's Bitters", 'Benedictine'],
        'Required Tools': ['Strainer'],
        'Optional Items': ['None'],
        'Instructions': 'Add 1oz rye whiskey, 1oz brandy, 1oz sweet vermouth, 1 bar spoon of Benedictine, and 2 dashes of bitters in a mixing glass with ice. Mix and strain into glass.',
        'Approximate Amount of Alcohol': 1.6,
        'Traditional Glass': 'Cocktail Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Vodka Martini': {
        'Base Spirit': 'Vodka',
        'Required Ingredients': ['Vodka', 'Dry Vermouth'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['Olives'],
        'Instructions': 'Mix 3oz vodka and 1oz dry vermouth in a shaker with ice. Strain into glass and garnish with 3 olives on a toothpick.',
        'Approximate Amount of Alcohol': 2.28,
        'Traditional Glass': 'Cocktail Glass',
        'IBA Official Cocktail': 'No'
    },
    'Whiskey Sour': {
        'Base Spirit': 'Whiskey',
        'Required Ingredients': ['Bourbon Whiskey', 'Lemon Juice', 'Simple Syrup'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['Maraschino Cherry', 'Orange Slice'],
        'Instructions': 'Mix 1.5oz whiskey, 1oz lemon juice, and 0.5oz simple syrup in serving glass with ice. Garnish with maraschino cherry and orange slice.',
        'Approximate Amount of Alcohol': 1.0,
        'Traditional Glass': 'Rocks or Cobbler Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'White Lady': {
        'Base Spirit': 'Gin',
        'Required Ingredients': ['Gin', 'Triple Sec', 'Lemon Juice'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['None'],
        'Instructions': 'Add 1.4oz gin, 1oz triple sec, and 0.7oz lemon juice to a shaker with ice. Shake and strain into glass.',
        'Approximate Amount of Alcohol': 1.27,
        'Traditional Glass': 'Cocktail Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'White Russian': {
        'Base Spirit': 'Vodka',
        'Required Ingredients': ['Vodka', 'Milk/Cream', 'Coffee Liqueur'],
        'Required Tools': ['None'],
        'Optional Items': ['None'],
        'Instructions': 'Pour 1.5oz coffee liqueur and 1.5oz vodka into a glass filled with ice. Float 3oz fresh cream or milk on top and stir slowly. Matthew Variant: 6oz milk and 3oz kahlua (serve in pint glass)',
        'Approximate Amount of Alcohol': 1.5,
        'Traditional Glass': 'Rocks or Highball Glass',
        'IBA Official Cocktail': 'No'
    },
    'The Wobbuffet' : {
        'Base Spirit': 'Combination',
        'Required Ingredients': ['Vodka', 'Rum', 'Tequila', 'Gin', 'Blue Curacao', 'Simple Syrup', 'Lime Juice', 'Sprite'],
        'Required Tools': ['None'],
        'Optional Items': ['Lemon Slice', 'Cherry'],
        'Instructions': 'Add 0.5oz of vodka, rum, tequila, gin, and blue curacao along with 1oz of simple syrup and lime juice in a glass with ice. Top off with Sprite and garnish with a lemon slice and cherry.',
        'Approximate Amount of Alcohol': 1.5,
        'Traditional Glass': 'Highball Glass',
        'IBA Official Cocktail': 'No'
    },
    'Yellow Bird': {
        'Base Spirit': 'Rum',
        'Required Ingredients': ['White Rum', 'Galliano Liqueur', 'Triple Sec', 'Lime Juice'],
        'Required Tools': ['Cocktail Shaker', 'Strainer'],
        'Optional Items': ['None'],
        'Instructions': 'Add 1oz white rum, 0.5oz galliano liqueur, 0.5oz triple sec, and 0.5oz lime juice to a shaker with ice. Shake and strain into glass.',
        'Approximate Amount of Alcohol': 1.19,
        'Traditional Glass': 'Cocktail Glass',
        'IBA Official Cocktail': 'Yes'
    },
    'Zombie': {
        'Base Spirit': 'Rum',
        'Required Ingredients': ['Dark Rum', 'Gold Rum', 'Lime Juice', 'Falernum', 'Yellow Grapefruit', 'Cinnamon Syrup', 'Bitters', 'Grenadine', 'Anise Liqueur'],
        'Required Tools': ['Blender'],
        'Optional Items': ['Mint Leaves'],
        'Instructions': 'Add 3oz dark rum, 1.5oz gold rum, 0.75oz lime juice, 0.5oz falernum, 2tsp yellow grapefruit, 1tsp cinnamon syrup, 1 dash of bitters, 1tsp grenadine, and 6 drops of anise liqueur in a blender with 170 grams of cracked ice. Blend for a few seconds on pulse mode. Garnish with mint leaves.',
        'Approximate Amount of Alcohol': 3.0,
        'Traditional Glass': 'Highball Glass',
        'IBA Official Cocktail': 'Yes'
    }
}

export default drink_directory;