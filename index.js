const farmAnimals = 'cow horse sheep pig chicken'

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

const muppet = {
  name: 'Kermit',
  color: 'green',
  song: 'The Rainbow Connection',
  job: 'Host of The Muppet Show',
  partner: 'Miss Piggy'
};

const k_muppet = {
  k_name: 'Kermit',
  k_color: 'green',
  k_album: {
    the_muppet_movie: {
      song_1: 'Rainbow Connection',
      song_2: 'Moving Right Along',
      song_3: 'Never Before, Never Again',
      song_4: 'I Hope That Something Better Comes Along',
    },
  },
  k_job: 'Host of The Muppet Show',
  k_partner: 'Miss Piggy'
};

//don't run npm audit fix or npm audit - Carla

//Declare a variable with a name (e.g. first or breed)
//Use that variable's name to point to an attribute in the Object whose name matches the name of the variable (e.g. doggie.breed or doggie.first)
//Assign the attribute's value to the created variable

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

const Animals = farmAnimals.split(' '); //split is used to split strings into arrays
const [moo, neigh, baa, oink, cluck] = Animals;

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them Bessie, Dolly, Babe, and Little.

const [Bessie, , Dolly, Babe, Little] = Animals; //you can also pick which to leave out

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of black_and_white, black, and pink.
const [black_and_white, , black, pink, ,] = Animals;
// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.
const [red,orange,yellow,green,blue,indigo,violet] = colors;
// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.
const [r,o,y,g,b, ,v] = colors;
// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 
const indg = colors[5]; 
// Objects

// 7. Use destructuring to assign all appropriate variables using the keys as the variable names
const {name,color,song,job,partner} = muppet; //JavaScript gives us the ability to perform to assign attributes to singular variables with one simple line of code.

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
const {song_2,song_4} = k_muppet.k_album.the_muppet_movie; //you stop at the parent attribute
const {k_job,k_partner} = k_muppet