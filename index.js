
/* WRITE THE CODE FOR THE FOLLOWING FUNCTIONS */

// Input: a (number), b (number)
// Action: Add both numbers together
// Output: The result (number)
function add( a , b) {
    // write your code here
    return a+b
  }

  // Input: number
  // Action: Check if the number given is even or not
  // Output: The result (boolean)
  function isEven(a) {
    // write your code here
    if (a % 2 === 0) return true
    else return false;
  }
//   console.log ()
  
  // Input: name (string)
  // Action: Greet the user by name
  // Output: The greeting (string)
  let names=[ "Eva", "Tida", "Mandi",]
  function greet() {
    // write your code here
    for ( let name of names){
        let greeting = `Hello, + ${name}`
        console.log(`Hello,  ${name}`)
    }
    
  }
  greet()
  
  // Input: age (number)
  // Action: Check if the age is 18 or over
  // Output: The result (boolean)
  function isAnAdult(age) {
    // write your code here
    if (age >=18)
    return true
    else return false
  } 

  
  
  // Input: age (number)
  // Action: Check how many years are left until adulthood (18)
  // Output: The result (number)
  function yearsToAdulthood(age) {
    // write your code here
    return 18-age
  }
  
  // Input: person ({ age: number, name: string })
  // Action:
  //   - check if a person is an adult
  //   - if they are, greet them
  //   - if they are not, tell them to come back in X years (when they are)
  // Output: The result (string)
  function admit(age, name) {
    // write your code here
    // use greet, isAnAdult and yearsToAdulthood to help you!
    if (isAnAdult(age) ){
    return greet (name)  // ignore it
     }
      else {
        return `Go Home and come back after ${yearsToAdulthood(age)} years!!!`
      }
  }
  
