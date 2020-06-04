/*

sphereVolume()will calculate the volume 
of a sphere given a radius
coneVolume() will calculate the volume of a cone 
given a radius and a height
prismVolume() will calculate the volume of a prism 
given a height, a width, and a depth

totalVolume(), will receive an array containing 
the different shapes that make up a single attraction. 
The totalVolume function should use the previous
three functions to calculate the total volume 
of an attraction.

Implement the functions one by one. 
The example inputs and outputs below 
will help you check that each function is correct.

*/

// Use the value below whenever you need the value of Pi
const PI = 3.14159 ;

const sphereVolume = function (radius) {
  return (4 / 3) * PI * (Math.pow(radius, 3));
}
//TEST:
console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  return PI * (Math.pow(radius, 2)) * (height / 3);
}
//TEST:
console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  return height * width * depth; 
}
//TEST:
console.log(prismVolume(3, 4, 5) === 60);



const totalVolume = function (solids) {
  let volumesAdded = 0;
// solids is an array of objects 
//Remember for of loops for when you don't need the iterator variable!!!!!! 
  for (solid of solids) {
    if (solid.type === "sphere") {
      volumesAdded = volumesAdded + sphereVolume(solid.radius);
    } else if (solid.type === "cone") {
      volumesAdded = volumesAdded + coneVolume(solid.radius, solid.height);
    } else if (solid.type === "prism") {
        volumesAdded = volumesAdded + prismVolume(solid.heigth, solid.width, solid.depth);
      }
  }
  return volumesAdded; 
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);

/*
Expected Output: 
true
true
true
true
*/
