const p0 = document.querySelector(".p__0");
const p1 = document.querySelector(".p__1");
const p2 = document.querySelector(".p__2");
const mainInfo = document.querySelector(".main__info");


function clearFunction(){
    p1.innerHTML="";
    p2.innerText="";
    mainInfo.innerHTML="";
    window.location.reload();
}

var fruits = ["banana", "apple", "apricot", "avocado", "lime"];

//Shift
function shiftFunction(){
    p0.innerHTML= 'var fruits = ["banana", "apple", "apricot", "avocado", "lime"]'
    p1.innerHTML= '<p class="p__1" id="p__1">fruits.shift()</p>'
    p2.innerHTML='<p class="p__answer">fruits = "banana"</p>';
    mainInfo.innerHTML = 'Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.';
    console.log(fruits.shift());
}

//Unshift
function unshiftFunction(){
    p0.innerHTML= 'var fruits = ["banana", "apple", "apricot", "avocado", "lime"]'
    p1.innerHTML= '<p class="p__1" id="p__1">fruits.unshift("mango")</p>'
    p2.innerHTML='<p class="p__answer">fruits = ["mango", "banana, "apple", "apricot", "avocado", "lime"]</p>';
    mainInfo.innerHTML = 'Inserts new elements at the start of an array, and returns the new length of the array.';
    fruits.unshift("mango")
    console.log(fruits);
}


//Pop
function popFunction() {
         p0.innerHTML= 'var fruits = ["banana", "apple", "apricot", "avocado", "lime"]'
         p1.innerHTML= '<p class="p__1" id="p__1">fruits.pop()</p>'
         p2.innerHTML= '<p class="p__answer">fruits = "lime"</p>';
         mainInfo.innerHTML = 'Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.';
         console.log(fruits.pop());
}

//Push
function pushFunction() {
         p0.innerHTML= 'var fruits = ["banana", "apple", "apricot", "avocado", "lime"]'
         p1.innerHTML= '<p class="p__1" id="p__1">fruits.push("orange")</p>'
         p2.innerHTML= '<p class="p__answer">fruits = ["banana", "apple", "apricot", "avocado", "lime", "orange"]</p>';
         mainInfo.innerHTML = 'Appends new elements to the end of an array, and returns the new length of the array.';
         fruits.push("orange");
         console.log(fruits);
}

//Slice
function sliceFunction() {
        p0.innerHTML= 'var fruits = ["banana", "apple", "apricot", "avocado", "lime"]'
        p1.innerHTML= '<p class="p__1" id="p__1">var newArray = fruits.slice(1,4);</p>'
        p2.innerHTML= '<p class="p__answer">newArray= ["apple", "apricot", "avocado"]</p>';
        mainInfo.innerHTML = 'The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.';
        var newArray = fruits.slice(1,4);
        console.log(newArray);
}

//Join
function joinFunction() {
        p0.innerHTML= 'var fruits = ["banana", "apple", "apricot", "avocado", "lime"]'
        p1.innerHTML= '<p class="p__1" id="p__1">var newArray = fruits.join("-")</p>'
        p2.innerHTML= '<p class="p__answer">newArray= ["banana-apple-apricot-avocado-lime"]</p>';
        mainInfo.innerHTML = 'Adds all the elements of an array into a string, separated by the specified separator string.';
        var newArray = fruits.join("-");
        console.log(newArray);
}

//Indexof
function indexOfFunction() {
    p0.innerHTML= 'var fruits = ["banana", "apple", "apricot", "avocado", "lime"]'
    p1.innerHTML= '<p class="p__1" id="p__1">console.log(fruits.indexOf("lime"));</p>'
    p2.innerHTML= '<p class="p__answer">result = 4</p>';
    mainInfo.innerHTML = 'Returns the index of the first occurrence of a value in an array, or -1 if it is not present.';
    console.log(fruits.indexOf("lime"));
}

//LastIndexOf
function lastIndexOfFunction() {
    p0.innerHTML= 'var fruits = ["lime", "banana", "apple", "apricot", "avocado", "lime"]'
    p1.innerHTML= '<p class="p__1" id="p__1">console.log(fruits.lastIndexOf("lime"));</p>'
    p2.innerHTML= '<p class="p__answer">result = 5</p>';
    mainInfo.innerHTML = 'Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.';
    fruits = ["lime","banana", "apple", "apricot", "avocado", "lime"];
    console.log(fruits.lastIndexOf("lime"));
}

//Map
function mapFunction() {
    p0.innerHTML= 'var fruits = ["lime", "banana", "apple", "apricot", "avocado"]'
    p1.innerHTML= '<p class="p__1" id="p__1">var newArray = fruits.map(fruit => fruit + " is" + " healthy");</p>'
    p2.innerHTML= "<p class='p__answer'> newArray = ['lime is healthy', 'banana is healthy', 'apple is healthy', 'apricot is healthy', 'avocado is healthy']</p>";
    mainInfo.innerHTML = 'The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.';
    fruits = ["lime","banana", "apple", "apricot", "avocado"];
    var newArray = fruits.map(fruit => fruit + " is" + " healthy");
    console.log(newArray)
}

//Reverse
function reverseFunction() {
    p0.innerHTML= 'var fruits = ["lime", "banana", "apple", "apricot", "avocado"]'
    p1.innerHTML= '<p class="p__1" id="p__1">console.log(fruits.reverse());</p>'
    p2.innerHTML= '<p class="p__answer">["avocado", "apricot", "apple", "banana", "lime"]</p>';
    mainInfo.innerHTML = 'Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.';
    fruits = ["lime","banana", "apple", "apricot", "avocado"];
    console.log(fruits.reverse());
}

//Sort
function sortFunction() {
    p0.innerHTML= 'var fruits = ["lime", "banana", "apple", "apricot", "avocado"]'
    p1  .innerHTML= '<p class="p__1" id="p__1">console.log(fruits.sort());</p>'
    p2.innerHTML= '<p class="p__answer">["apple", "apricot", "avocado", "banana", "lime"]</p>';
    mainInfo.innerHTML = 'Sorts an array in place. This method mutates the array and returns a reference to the same array.';
    fruits = ["lime","banana", "apple", "apricot", "avocado"];
    console.log(fruits.sort());
}

//Splice
function spliceFunction() {
    p0.innerHTML= 'var fruits = ["lime", "banana", "apple", "apricot", "avocado"]'
    p1.innerHTML= '<p class="p__1" id="p__1"> fruits.splice(1,0,"coconut");</p>'
    p2.innerHTML= '<p class="p__answer">["lime", "coconut", "banana", "apple", "apricot", "avocado"]</p>';
    mainInfo.innerHTML = 'Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements. First parameter is the start removing elements.Second parameter is the number of elements to remove. Third parameter is the element to insert into the array.';
    fruits = ["lime","banana", "apple", "apricot", "avocado"];
    fruits.splice(1,0,"coconut");
    console.log(fruits);
}

//Some
function someFunction() {
    p0.innerHTML= 'var fruits = ["lime", "banana", "apple", "apricot", "avocado"]'
    p1.innerHTML= '<p class="p__1" id="p__1">console.log(fruits.some(fruit => fruit ==="lime"));<br>console.log(fruits.some(fruit => fruit ==="orange"));</p>'
    p2.innerHTML= '<p class="p__answer">true<br>false</p>';
    mainInfo.innerHTML = 'The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It does not modify the array.';
    fruits = ["lime","banana", "apple", "apricot", "avocado"];
    console.log(fruits.some(fruit => fruit ==="lime"));
    console.log(fruits.some(fruit => fruit ==="orange"));
}

//Filter
function filterFunction() {
    p0.innerHTML= 'var fruits = ["lime", "banana", "apple", "apricot", "avocado"]'
    p1.innerHTML= '<p class="p__1" id="p__1">console.log(fruits.filter(fruit => fruit.length > 6));</p>'
    p2.innerHTML= '<p class="p__answer">["apricot", "avocado"]</p>';
    mainInfo.innerHTML = 'The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.';
    fruits = ["lime","banana", "apple", "apricot", "avocado"];
    console.log(fruits.filter(fruit => fruit.length > 6));
}

//Every
function everyFunction() {
    p0.innerHTML= 'var fruits = ["lime", "banana", "apple", "apricot", "avocado"]'
    p1.innerHTML= '<p class="p__1" id="p__1">console.log(fruits.every(fruit => fruit.length > 3));<br>console.log(fruits.every(fruit => fruit.length > 6));</p>'
    p2.innerHTML= '<p class="p__answer">true<br>false   </p>';
    mainInfo.innerHTML = 'Determines whether all the members of an array satisfy the specified test.';
    fruits = ["lime","banana", "apple", "apricot", "avocado"];
    console.log(fruits.every(fruit => fruit.length > 3));
    console.log(fruits.every(fruit => fruit.length > 6));
}









