//const is just another let 
//we declare a constant variable called mongoose
//we set it equal to the return value of require('mongoose'); 
const mongoose = require('mongoose'); 

//access the connect method of the mongoose object
//pass in the localhost test database
//and some options inside of another object
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});

//make another constant variable called db
//and we set it equal to the connection property of our mongoose object 
const db = mongoose.connection;

//but then we acces the on and once methods of our connection property from our mongoose object
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    //your tutorial and new code go here. 
    console.log("We're connected");

    /* schema  */
  
//This is the only schema for the collection. All data can be kept here if the ingredients are an array.
    const recipeSchema = new mongoose.Schema({
        name : String, 
        description: String,
        instructions: String,
        ingredients : []
    }); 


    /* model */ //this creates the model Recipe using the ercipe schema

    const Recipe = mongoose.model('Recipe', recipeSchema);  

    /* documents */ 
    //I have added 4 recipes of varying complexity. the Let statement creates the object and the final let stament creates the name stored in the document.
    let flourlessChocCakeObj = {
        name : "Flourless Chocolate Cake", 
        description: "Rich chocolate cake!",
        instructions: "Melt butter and chopped chocolate over low heat. Add lightly beat eggs in mixing bowl. Gently fold in chocolate mixture. Pour into springform pan and place pan in bain marie. Bake at 350 for 35 minutes or until toothpick comes out clean in center.",
        ingredients : [ 
            { name : "Egg",
            measurement: "Whole", 
            amount : 6 },
            
            { name : "70% Chocolate",
            measurement: "Ounce", 
            amount : 16 },

            { name : "Butter",
            measurement: "Stick", 
            amount : 1 
            }
        ]
    };

    let flourlessChocCake = new Recipe(flourlessChocCakeObj);

    let pBJObj = {
        name : "Peanut Butter & Jelly", 
        description: "The classic kids favorite",
        instructions: "Spread peanut butter evenly on one slice of bread, and jelly same on the other. Place the peanut butter slice on top of the jelly slice. Enjoy!",
        ingredients : [ 
            { name : "Bread slices of your choice",
            //measurement: "Cups", 
            amount : 2 },
            
            { name : "Peanut Butter",
            measurement: "Tablespoon", 
            amount : 2 },

            { name : "Jelly",
            measurement: "Tablespoon", 
            amount : 2 
            }

        ]
    };

    let pBJ = new Recipe(pBJObj);

    let pBHoneyObj = {
        name : "Peanut Butter & Honey", 
        description: "A delicious change of pace",
        instructions: "Spread peanut butter evenly on one slice of bread, and honey same on the other. Place the peanut butter slice on top of the honey slice. Enjoy!",
        ingredients : [ 

            { name : "Bread slices of your choice",
            //measurement: "Cups", 
            amount : 2 },
            
            { name : "Peanut Butter",
            measurement: "Tablespoon", 
            amount : 2 },

            { name : "Honey",
            measurement: "Tablespoon", 
            amount : 1 
            }
        ]
    };

    let pBHoney = new Recipe(pBHoneyObj);

    let crunchGranolaObj = {
        name : "Crunchy Granola", 
        description: "The best granola you have ever eaten",
        instructions: "Gently heat coconut oil to melt. Add in honey to the oil make it easily pourable. Place chopped almonds in a large mixing bowl. Add maple syrup, vanilla extract, then the oil & honey mixture to the almonds. Mix well. Add in oatmeal one cup at a time. Press into cookie sheet lined with parchment and cook for 35 minutes at 325.",
        ingredients : [ 

            { name : "Almonds, coarsely chopped",
            measurement: "Ounce", 
            amount : 11 },
            
            { name : "Coconut Oil",
            measurement: "Tablespoon", 
            amount : 6 },

            { name : "Honey",
            measurement: "Tablespoon", 
            amount : 6 
            },

            { name : "Maple Syrup",
            measurement: "Tablespoon", 
            amount : 6 
            },

            { name : "Vanilla Extract",
            measurement: "Teaspoon", 
            amount : 2 
            },

            { name : "Old Fashioned Oats",
            measurement: "Cups", 
            amount : 5 
            }   
        ]
    };

    let crunchGranola = new Recipe(crunchGranolaObj);
    console.log(pBJ);
   console.log(JSON.stringify(pBJ.ingredients, null, 4));

   //const docs =  ingredients.find({ name: 'Honey' });
   //docs.map(doc => doc.name).sort();


    
});


