//destructuring is done by curli braces {}

const course={
    name:"js in hindi",
    price:"999",
    instructor:"atul"
}

const {name}=course
console.log(name); // this can also be written as log(course.name)

const {name:fullname}=course // we can use full name as a place of name 
console.log(fullname); 