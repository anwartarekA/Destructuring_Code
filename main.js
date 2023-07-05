// let myNumbers = [1, 2, 3, 4, 5];

// let [a, , , , e] = myNumbers

// console.log(a * e); // 5


/////////////////////////////////////////////////////


// let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

// let [a , b , c , [d , e , [f , g]]] = mySkills

// console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// // My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel


/////////////////////////////////////////////////////

// let arr1 = ["Ahmed", "Sameh", "Sayed"];
// let arr2 = ["Mohamed", "Gamal", "Amir"];
// let arr3 = ["Haytham", "Shady", "Mahmoud"];

// let total_arrays = [...arr1 , ...arr2 , ...arr3];
// let sorted_reversed_total_arrays = total_arrays.sort().reverse();  //['Shady', 'Sayed', 'Sameh', 'Mohamed', 'Mahmoud', 'Haytham', 'Gamal', 'Amir', 'Ahmed']
// let [a , , , , b , , , , c ] = sorted_reversed_total_arrays
// console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// My Best Friends: Shady, Mahmoud, Ahmed


//////////////////////////////////////////////////////


// const member = {
//     age: 30,
//     working: false,
//     country: "Egypt",
//     hobbies: ["Reading", "Swimming", "Programming"],
//   };
  
// let {age:a , working:w , country:c , hobbies:[h1, , h3]}  = member
  
//   console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
//   // My Age Is 30 And Iam Not Working
  
//   console.log(`I Live in ${c}`);
//   // I Live in Egypt
  
//   console.log(`My Hobbies: ${h1} And ${h3}`);
//   // My Hobbies: Reading And Programming


////////////////////////////////////////////////////////////


const game = {
    title: "YS",
    developer: "Falcom",
    releases: {
      "Oath In Felghana": ["USA", "Japan"],
      "Ark Of Napishtim": {
        US: "20 USD",
        JAP: "10 USD",
      },
      Origin: "30 USD",
    },
  };
  // let {title:t , developer:d , releases} = game;
  // let [o , a] =Object.keys(releases);
  // let [[u,j],{US:u_price, JAP:j_price}, or] = Object.values(releases);
// another solution
// let {title:t, developer:d } = game;
//   console.log(`My Favourite Games Style Is ${t} Style`);
// //   // My Favourite Games Style Is YS Style
//   console.log(`And I Love ${d} Games`);
// //   // And I Love Falcom Games
// let {Origin:or} = game.releases

// let new_array = Object.keys(game.releases);
// let [o , a  ] = new_array;

// let [u , j ] = game.releases["Oath In Felghana"]
// let {US:u_price, JAP: j_price} = game.releases['Ark Of Napishtim'];

  console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
//   // My Best Release Is Oath In Felghana It Released in USA & Japan
  
  console.log(`Although I Love ${a}`);
//   // Although I Love Ark Of Napishtim
  
  console.log(`${a} Price in USA Is ${u_price}`);
//   // Ark Of Napishtim Price in USA Is 20 USD
  
  console.log(`${a} Price in Japan Is ${j_price}`);
//   // Ark Of Napishtim Price in Japan Is 10 USD

  console.log(`Origin Price Is ${or}`);
//   // Origin Price Is 30 USD

//////////////////////////////////////////////////////////////////////////////////


let chosen = 3;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];



if(chosen <= myFriends.length)
{
    let {title , age , available , skills:[ ,two]} = myFriends[chosen - 1]; 
    console.log(`${title} ${age} ${available ? "Available": "Not Available"} ${two}`);
}


// If chosen === 1

"Osama"
39
"Available"
"CSS"

// If chosen === 2

"Ahmed"
25
"Not Available"
"Django"

// If chosen === 3

"Sayed"
33
"Available"
"Laravel"