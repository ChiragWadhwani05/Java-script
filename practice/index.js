// var number = "hueh";
// console.log(number);
// var a=4;
// var b= 4;
// console.log(`kuch bhi likha hai : ${a != b}`);
// // 5+20
// // console.log(5+20);
// document.writeln("Hello \"world\"")
// var c= 22/7;
// document.writeln(parseInt(c));

// function sum(x,y){
//     var total= x+y;
//     // 
//     return total;
// }

// document.write(sum("chirag",'wadhwani'));
// var cars = ["Honda","nissan","ford"];
// cars.push("maruti");
// cars.push(45);
// // cars.pop();
// // cars.pop();
// cars.sort();
// for (var i = 0; i < 4; i++) {
    
//     document.write("<h1>"+cars[i]+"</h1>")
// }
// function changeImage(){
//     let displayImage =document.getElementById('image1')
//     if(displayImage.src.match('/images/markus-spiske-1LLh8k2_YFk-unsplash.jpg')){
//         displayImage.src='/images/muha-ajjan-sL2BRR1cuvM-unsplash.jpg'
//     }else{
//         displayImage.src='/images/markus-spiske-1LLh8k2_YFk-unsplash.jpg'

//     }
// }
// function changeImage1(){
//     document.getElementById('image').src='/images/image1.jpg'
// }
// function changeImage2(){
//     document.getElementById('image').src='/images/image2.jpg'
    
// }
// function changeImage3(){
//     document.getElementById('image').src='/images/image3.jpg'
    
// }
// function changeImage4(){
//     document.getElementById('image').src='/images/image4.jpg'

// }
// var arg =[1,2,3];
// var arr =() => arg[2];
// arr();
// function foo(n) {
// var f =() => arg[0] +n;
// return f();
// }
// console.log(foo(3));

// var a=10;
// function foo() {
//     var a=20;
//     console.log(a);
//     // console.log(window.a);
// }
// console.log(a);
// // window.foo();
// console.log(foo());
// console.log(a);
// let people = function (person, age){
//      console.log(this);
//     this.person = person;
//     this.age = age;
//     console.log(this);
//     }
// //  let person1 = new 
//  people("chirag",22);
// console.log(this);
// var a = (function() {
//     return typeof arguments;
// })();
// console.log(a);
let date = new Date();
console.log(date.getHours());