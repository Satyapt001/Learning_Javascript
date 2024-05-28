//COMMENTS IN JAVAScript

var num = 5;//this is a singleline comments 

var num = 55;/*this is a multiline comment
hello again this is a multi line comment*/

//DATA TYPES  & varialble 
/* datatypes : 7 types in javascript
1.undefined  => variable without anything
2.null       =>means nothing
3.boolean    =>true or false
4.string     =>
5.symbol     =>immutable primitive value that is unique
6.number     =>1,2,3,4,5......
7.object     => it can store different key value pairs
*/

// *********Declaring a variable*******//
//three ways to declare  a varriable
//can be acessed through out the program
var myName = "satya";// var(keyword) variable_name =  values;
myName = "nishikant";

//only be accessed where it's been declared
let ourname = "imperial";

//used to declare a constant value,donot change after declaration
const pi = 3.14;

/****************ASSIGNING a variable ******************/
var a;
var b = 21;
console.log(a);
a = 7;
b = a;

console.log(b);

//another ex initializing variable
var z;//declaration
var z = 9;// initialisation

//example
var p = 5;
var q = 10;
var r = 'iam at home';

//Donot change code below this line
p = p + 1;
q = q + 5;
r = r + 'bargarh';
console.log(p, q, r);

//variable name and function name is case sensitive
//DECLARATION
/* 1.  var StuDyaTHoME;  */
//decalred name must be same at time of assignment otherwise it won't work.=>it can be done as follows
var StudyAtHome;
var prOpeRLearninG;
var LookAttime;

//ASSIGNMENT
/* 1.  studyathome = 'good';  */
//not the same,won't get assigned value properly ,=>it can be done as follows
StudyAtHome = 10;
properlearnig = 100;
lookattime = false;

console.log(StudyAtHome);

/************* ARITHMETIC OPERATION *****************/

//Adding two numbers
var add = 10 + 10;
console.log(add);

//subtracting two numbers
var sub = 10 - 5;
console.log(sub);

//multiplication of two numbers
var mult = 10 * 3;
console.log(mult);

//division of two numbers 
var div = 10 / 2;
console.log(div)

//incrementing numbers
//for ex:
var incre = 87;
incre = 87 + 1;
console.log("increment", incre);
// => quicker way 
incre++;
console.log("increment", incre);

//decrementing numbers
//for ex: (decrement --> D)
var D = 10;
D = 10 - 1;
console.log("Decrement", D);
// => quicker way 
D--;
console.log("Decrement", D);

//Decimal numbers
var DeciNum = 5.8;

//Multipling FPN
var product = 5.8 * 2.0;
console.log("multipn", product);

//Division FPN
var divi = 5.8 / 2;
console.log("Quotient", divi);

//Finding Remainder
var remainder = 5 % 2;
console.log("Remainder", remainder);
// => Remainder operator is often used to find out if a number is even or odd

// ***** (assignment operators) ****** //
/*
1.Addition +=
2.subtraction -=
3.multiplication *=
4.divisin /= 
*/
var aa = 3;
var bb = 14;
var cc = 13;

//new values,compound Assignment with augmented addition 
// a = a + 9; can be written as: 
aa += 9; //3 + 9 = 12
bb += 4; //4 + 14 = 18
cc += 2; //2 + 13 = 15
console.log("augmented addition", aa, bb, cc);

//new values,compound Assignment with augmented subtraction
//a = a-9; can be written as:
aa -= 5; // => 12-5 = 7
bb -= 1; // => 18-1 = 17
cc -= 3; // => 15-3 = 12
console.log("augmented subtraction", aa, bb, cc);

//new values,compound Assignment with augmented multiplication
//a = a*9; can be written as:
aa *= 2; // => 7*2 = 14 
bb *= 3; // => 17*3 = 51
cc *= 4; // => 12*4 = 48
console.log("augmented multiplication", aa, bb, cc);

//new values,compound Assignment with augmented Division
//a = a/9; can be written as:
aa /= 2; // => 14/2 = 7
bb /= 3; // => 51/3 = 17
cc /= 2; // => 48/2 = 24    
console.log("augmented division", aa, bb, cc);

//Declaring string variable
var firstName = "Satyapriya";
var lastaName = "Tripathy";

//escaping literal quotes in strings
/* ( var Mystr = "I am a "double quoted"string inside " double quotes"; ) 
it shows error that the whole string is not included To fix this we can use a escape character like:\           */
var myStr = "iam a \"double quoted \"string inside\" double quotes";
console.log(myStr);

var myStr = '<a href = "http://www.example.com" target = "_blank"></a>';//single quotes

//****Escape sequences in strings*****//
/*
CODE  OUTPUT
\'    single quote
\"    double quote
\\    backslash
\n    newline
\r    carriage return 
\t    tab
\b    backspace
\f    form feed

*/
//for example
var myStr = "FirstLine\n\t\\secondline\nThirdLine";
console.log(myStr);

/******concatenating Strings with plus operator******/
//for example
var OurStr = "i come first." + "i come second";
//another example
var myStr = "hey" + " how's the day!"
console.log(myStr);

//**** Concatinating Strings with Plus Equals Operator****//
var ourStr1 = "i come first";
var ourStr2 = " i come second";

var concatenate = ourStr1 + ourStr2;
console.log(concatenate);
//quicker way 
var Str = "i come first";
Str += " i come second";

console.log(Str);

//****Constructing Strings with variables****//
//for example
var name01 = "satyapriya";
var str01 = "hello,iam " + name01 + ",How are you?";
console.log(str01);

/***Appending Variables to Strings***/
//for example
var anAdjective = " awesome";
var ourStr = "freeCodeCamp";
ourStr += anAdjective;
//adjective is appended at the end of the string 'ourStr' and saved inside it

console.log(ourStr);

/*****Find Length of String*****/
var namelength = 0;
var firstName = "satya";
namelength = firstName.length;
//'.length' will return the no of character inside firstname

console.log(namelength);

//DT:19:03:2024 
/****Bracket Notation to Find First Character in String****/
//for example
var firstLetterOfFirstName = "";
var firstName = "satya";
// we can get a particular character from particular index,usually the indexing start form 0
firstLetterOfFirstName = firstName[0];
console.log(firstLetterOfFirstName);

/** String Immutability**/
//setup
var str02 = "yelloworld!";

//the above code can be changed using the indexing method
//=> str02[0] = "h"; 
/*if we think y is replaced with h in the variable str02 it won't happen,Inorder to change the 
first letter of the word we can do*/
str02 = "Helloworld!";
console.log(str02);

/**Bracket Notation to Find Nth Character in String**/
//Example 
var name1 = "satya";
var secondLetterOfFirstName = name1[1];
/*similarly we can get any letter from name1 using the index to access character of the string
name1 contains 5 letters so the indexing start with 0 and ends with 4 
    s a t y a
 => 0 1 2 3 4
 we can access all letters simply by defining index like
 firstname[2]....[4]! 
*/
console.log(secondLetterOfFirstName);

/**Bracket Notation to Find Last Character in string **/
//using the name1 variable we can access the last letter of the word
var lastLetterOfFirstName = name1[name1.length - 1];
console.log(lastLetterOfFirstName);

/** Bracket Notation to Find Nth-to-Last Character in String**/
var nth_to_last = name1[name1.length - 2];
console.log(nth_to_last);

/**Word Blanks**/
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    //your code below this line
    var result = "";
    result += "the " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;
    //your code above this line
    return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));

/** store multiple values with Arrays **/
//arrays allows us to store element of similar datatypes,for example 
var ourArray = ["john", 123];

//only change code below this line
var myArray = ["rottwiler", 1];

/** Nested Arrays **/
var ourArray1 = [["the universe", 42], ["everything", 101010]];

//only change code below this line
var myArray1 = [["yellow", 123], ["waterbottle", 34]];

/**Access Array Data with Indexes**/

var myArray = [50, 60, 70];
var myData = myArray[0];
console.log(myData);

/**Modify Array Data With Indexes**/
var myArray = [18, 64, 99];
myArray[0] = 45;
console.log(myArray);

/**Accessing multi-Dimensional Arrays With Indexes**/
//setup
var array000 = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];
//only change code below this line
var mydata = array000[0][0];

console.log(mydata);

//MANIPULATION OF ARRAYS//

/** Manipulate Array with push()function**/
var arry001 = ["semester", "4", "is comming"];
arry001.push(["dont", "worry"]);
console.log(arry001);

/**Manipulate array with pop()**/
var arr1y001 = [1, 2, 3];
var removedFromOurArray = arr1y001.pop();//removedFromOurArray = 3
//removedFromOurArray now equals 3, and ourArray now equals [1,2]
console.log(arr1y001);
//pop () function bascially removes the last elements from the last in the array

/**Manipulate Arrays with shift()function**/
var arr2y002 = ["satya", "s", ["dog"]];
var removedFromOurArra1y = arr2y002.shift();//removedFromOurArra1y = satya
console.log(arr2y002);
/*shift() function bascially removes the first elements from the array and stored 
it in the variable assigned*/

/**Manipulate Arrays with unshift()**/
var unshiftArray = ["satya", "s", "Dog"];
unshiftArray.shift();
console.log(unshiftArray);
unshiftArray.unshift("learning");
console.log(unshiftArray);
/**unshift() function is similar to push() function it adds elements in the end
of the array,the unshift() function adds in the begnning of the array**/

/**SHOPPING LIST**/
var myList = [["cereals", 3], ["milk", 2], ["fruits", 3], ["juice", 2], ["soyabeans", 3]];
//array of arrays
console.log(myList);

/**Write reuseable code with Functions**/
//Example
function reuseableFunction1(data) {
    temp = data;
    console.log("shopping list has been created");
    console.log(temp);
}
reuseableFunction1(10);

/**Passing Values to Functions With Arguments**/
function reuseableFunction2(a, b) {
    sub = a + b;
    console.log("another function been created");
    console.log(sub);
}
reuseableFunction2(20, 10);

/**Global Scope and Functions**/
//Declare your variable here
var myGlobal = 10;
function fun1() {
    //Assign 5 to oopsGlobal here
    oopsGlobal = 5;
    //if we add var keyword to the identifer here ,than it cannot be accessed outside this function
}

//Only change code above this line 
function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal:" + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal:" + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();

//typeof operator
var yolo = 10;
console.log(typeof (yolo));//we can use type of operator to know the datatype of the variable 


/**lOCAl SCOPE & FUNCTION**/
function myLocalScope() {
    var myVar = 5;
    console.log("InsideFunction ", myVar);
}
myLocalScope();
//console.log(myVar);//it will show error as myvar cannot be accessed as it is present inside "myLocalScope()"

/**Global vs local scope in Functions**/

var outwear = "T-shirt";

function myOutfit() {
    outwear = "sweatShirt";
    return outwear;
}
console.log(outwear);
console.log(myOutfit());

/**Return a value from a function with return**/
function minusSeven(num) {
    return num - 7;//it bascially subtract the num value with 7
}
console.log(minusSeven(10));

/**Understanding undefined value Returned from a Function**/
var sun = 0;
function addThree() {
    sum = sum + 3;

}
//without using the return keyword the output will be not defined
function addFive() {
    sum += 5;

}

//console.log(addThree(3),addFive(5));

/**Assignment with a Returned Value**/

var changed = 0;

function change(num) {
    return (num + 5) / 3;
}

changed = change(10);

var processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

processed = processArg(7);

//**Stand in Line**//

function nextInline(arr, item) {
    //your code here
    arr.push(item);
    return arr.shift();

}
var testArray = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArray));
console.log(nextInline(testArray, 6));
console.log("After: " + JSON.stringify(testArray));

//**Boolean Values**//
function welcomeToBooleans() {
    return false;//it will return false as an output
}

//**Use Conditional Logic With If Statements**//
function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "yes it's True !";
    }
    return "no, it's false";

}

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "yes, that was true";

    }
    return "no, that was false";
}
console.log(trueOrFalse(true));

/*
Equality Operator-> ==
Strict Equality Operator-> ===
*/
/**Comparison with the Equality Operator**/
function testEqual(val) {
    if (val == 12) {
        /*if val is equal to 12(true statement)than it will execute the code in the next line otherwise it 
        will skip the block and move to the next block*/
        return "Equal";
    }
    //it will execute if the condition is not true
    return "Not Equal";
}

//change this value to test
console.log(testEqual(12))

/**Comparison with the Strict Equality Operator**/
function testEqual1(val) {
    if (val === 12) {
        /*if val is equal to 12(true statement)than it will execute the code in the next line otherwise it 
        will skip the block and move to the next block*/
        return "Equal";
    }
    //it will execute if the condition is not true
    return "Not Equal";
}
var y = 12;
//change this value to test
console.log(testEqual(y))/*3 === 3(Ture),3==='3'(False)*/


/**Pratice comparing Different Values**/

function compareEquality(a, b) {
    if (a == b) {
        return "Equal";
    }
    return "Not Equal";
}
//change this value to test
console.log(compareEquality(10, "10"));

//if we try and use the strict equality operator it will return not equal
function compareEquality1(a, b) {
    if (a === b) {
        return "Equal";
    }
    return "Not Equal";
}
//change this value to test
console.log(compareEquality1(10, "10"));
/*
inequality operator !=
equality operator !==
*/
/**Comparison with The Inequlaity Operator**/
function testNotEqual(val) {
    if (val != 12) {
        //it acts opposite to the equality operator if it is not equal than it will return true block
        return "not Equal";
    }
    return "Equal";
}
//change this value to test
console.log(testNotEqual(10));

/**Comparison with the Strict Inequality Operator**/
function testNotEqual1(val1) {
    if (val1 !== 50) {
        return "Not Equal";
    }
    return "Equal";
}
//change this value to test
console.log(testNotEqual1(59));

//window.alert(message)!!
//window.alert("jago Grahak Jago"); 

/**comparisons with greater than operator**/
function testGreaterThan(val2) {
    if (val2 > 100) {
        return "Over 100";//if the value passed greater than 100 it will return this!
    }
    if (val2 > 10) {
        return "over 10";//if the value passed greater than 10 it will return this!
    }
    return "10 or under";
}
//change this value to test
console.log(testGreaterThan(10));

/**Comparison with the Greater Than Or Equal To Operator**/
function testGreaterOrEqual(val3) {
    if (val3 >= 20) {
        return "20 or over";//if the value is greater than or equal to 20 it will return this
    }
    if (val3 >= 10) {
        return "10 or Over";//if the value is greater than or equal to 10 it will return this
    }

    return "less than 10";
}
console.log(testGreaterOrEqual(10));

/**comparison with the Less than operator**/
function testLessThan(val4) {
    if (val4 < 10) {
        return "it is under 10";//if the argument passed is lesser than 10 than it'll return this!
    }
    if (val4 < 130) {
        return " it is under 130";//if the argument passed is lesser than 130 than it'll rerturn this!
    }
    return "130 or over";//if the argument passed is greater than 130 it will return this!
}
//change the code accordingly
console.log(testLessThan(555));

/**Comparison with the Less Than Or Equal To Operator**/
function testLessOrEqual(val5) {
    if (val5 <= 12) {
        return "Smaller Than or Equal to 12";
    }
    if (val5 <= 24) {
        return "Smaller Than or Equal to 24";
    }
    return "more than 24"
}
console.log(testLessOrEqual(300));

/**Comparisons with the Logical And Operator**/
function testLogicalAnd(val6) {
    if (val6 <= 50 && val6 >= 25)//if both of the condition satisfied than it will return yes 
    {
        return "yes";
    }
    return "no";
}
console.log(testLogicalAnd(10));

/**Comparisons with the Logical Or Operator**/
function testLogicalOr(val7) {
    if (val7 < 10 || val7 > 20)//if the value doesn't lies in between  10 to 20 than it will return outside ! 
    {
        return "Outside";
    }
    return "Inside";//if the value lies between 10 to 20 than it will return inside !
}
console.log(testLogicalOr(100));

/**Else Statements**/
function testElse(val8) {
    var result = "";

    if (val8 > 5) //True block of code
    {
        result = " Bigger than 5";
    } else // false block of code
    {
        result = " 5 or smaller";
    }
    return result;
}
console.log(testElse(10));

/**Else IF Statements**/
function testElseif(val9) {
    if (val9 > 10) {//if the val9 is greater than 10 than it will return the below code
        return "Greater than 10 ";
    } else if (val9 < 5) { //if the vale9 lesser than 5 than it will return the below code
        return "smaller than 5";
    } else {//if the value9 lies between 
        return "between 5 and 10";
    }
}
//change the code to test
console.log(testElseif(11));

/**Chaining IF Else statement**/
/*
Write chained if/else if statements to fulfill the following conditions:
vnum < 5 - return "Tiny"
num < 10 - return "small"
num < 15 - return "Medium"
num < 20 - return "Large"
num >= 20 - return "Huge"
*/
//so it bascially checks the number and return the message according to the condition given
function testSize(val10) {
    if (num < 5) {
        return "Tiny";
    }
    else if (num < 10) {
        return "small";
    }
    else if (num < 15) {
        return "Medium";
    }
    else if (num < 20) {
        return "Large";
    } else {
        return "Huge";
    }
}

console.log(testSize(70));

/**Golf Code**/
var names = ["hole-in-one!", "Eagle", "Birdie", "par", "bogey", "Double Bogey", "Go home"];
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes == par - 1) {
        return names[2];
    } else if (strokes <= par) {
        return names[3];
    } else if (strokes <= par + 1) {
        return names[4];
    } else if (strokes <= par + 2) {
        return names[5];
    } else if (strokes <= par + 3) {
        return names[6];
    }
}
//change these values to test
console.log(golfScore(5, 8));

/**Switch Statement**/
function caseInSwitch(val11) {
    var answer = "";
    switch (val11) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    return answer;
}
console.log(caseInSwitch(4));

/**Default Option in Switch Statements**/
function caseInSwitch_1(val12) {
    var answer1 = "";
    switch (val12) {
        case "a":
            answer1 = "apple";
            break;
        case "b":
            answer1 = "ball";
            break;
        case "c":
            answer1 = "cat";
            break;
        case "d":
            answer1 = "dog";
            break;
        default:
            answer1 = "out of bound";
    }
    return answer1;
}
console.log(caseInSwitch_1("1"));

/**Multiple Identical Options in Switch Statements**/
function sequentialSizes(val13) {
    var answer = "";
    switch (val13) {
        case 1:
        case 2:
        case 3:
            answer = "low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    return answer;
}
//change this value to test
console.log(sequentialSizes(9))

/**Replacing if else chains with switch**/
function chainToswitch(val) {
    var answ = "";
    //only change code below this line

    if (val == "bob") {
        answ = "marley";
    } else if (val === 42) {
        answ = "the answer";
    } else if (val === 1) {
        answ = "there is no #1";
    } else if (val === 99) {
        answ = "missed me by this much !";
    } else if (val === 7) {
        answ = "Ate Nine";
    }
    return answ;
    x = chainToswitch(90);
    console.log(x);
}

//** Returning Boolean values from Functions **/
function isLess(a, b) {

    return a < b; //it bascially checks the value passed into the function if it is true retun it 
    //if it is false also return it as output
}

var result = isLess(10, 15);
console.log(result);

/** Returning Early pattern from Functions **/
//setup
function abTest(a, b) {
    //only code below this line
    if (a < 0 || b < 0) {
        return undefined;
    }
    //only code above this line
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(-2, 2));

/**counting card **/

var count = 0;
function countingCard(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "A":
        case "A":
            count--;
            break;
    }
    var holdbet = 'Hold';
    if (count > 0) {
        holdbet = 'Bet'
    }
    return count + " " + holdbet;
}
result = countingCard(10);
console.log(result);

/**Build javascript Objects **/

//example
var ourDog = {
    //objects are like arrays that stores data but unlike arrays objects are accessed using properties
    "name": "camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everingthing!"]
};

var streetDog = {
    "name": "bhootlu",
    "legs": 4,
    "tails": 1,
    "friends": "iam"
};
console.log(streetDog);

/**Accessing Object properties with Dot notation**/
//we can use "." to access the values given with respect to properties

var testObj = {
    "hat": "classic",
    "shirt": "max",
    "shoes": "Asian"
};
var hatvalue = testObj.hat;
console.log(hatvalue);


//**Accessing Object Properties with Bracket Notation**/
var testobj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};
//only change code below this code
var enterValue = testobj["an entree"];
var drinkValue = testObj["my side"];
console.log(enterValue, drinkValue);

/**Accessing object properties with variables**/
var testobj1 = {
    12: "rudra",
    16: "Rajesh",
    19: "Shyma"
};

//only change code below this line
var playerName = 16;
var playerNumber = [12, 16, 19];//accessing objects using array
var player = testobj1[playerNumber[2]];
console.log(player, playerName);

/**Accessing the object properties**/
var testobj2 = {
    "a": "rudra",
    16: "rajesh",
    19: "suresh"
};

//only change code below this line
//  var rename = ["a",16,19];
//  testobj2[rename[0]]="satya";
//  var resultObj = testobj2["a"] ;
//the whole above code can be replaced by 
testobj2.a = "satya";
console.log(testobj2["a"]);

/**Add new properties to an object*/
var testobj3 = {
    "a": "rudra",
    "b": "rajesh",
    "c": "suresh"
};

testobj3.d = "ropesh";
//OR
testobj3['e'] = "roshan",
    console.log(testobj3["d", "e"]);

/**Delete properties From an object**/
var ourDog = {
    "name": "gurdian",
    "legs": 4,
    "tail": 1,
    "friends": "no friends",
    "bark": "woof wooof!"
};
delete ourDog.bark;
console.log(ourDog);

/**Using Objects for lookups**/
function phoneticlookup(val) {
    var result = "";

    //only change code below this line
    var lookup = {
        "alpha": "Adams",
        "bravo": "boston",
        "charlie": "chicago",
        "delta": "denvar",
        "echo": "easy"
    };
    result = lookup[val];
    return result;
}
console.log(phoneticlookup("charlie"));

/**Testing Objects for Properties **/
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};//here we have define an object with properties
function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {//here a function is passed with a variable 
        return myObj[checkProp];//it returns the value for the particular properties if found inside the object
    } else {
        return "Not found";//if it is not found than it simply returns not found
    }
}
console.log(checkObj("pet"));


/**Manipulating Complex Objects**/
var mymusic = [
    {
        "artist": "billy joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "Beau Carnes",
        "title": "cereal Man",
        "release_year": 2003,
        "formats": [
            "youtube video"
        ]
    }
];

/**Accessing Nested Objects**/
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];//change this line
var yolo = myStorage.car.inside["passenger seat"];
console.log(gloveBoxContents);
console.log(yolo);

/**Accessing Nested Arrays**/
var myPlants = [{
    type: "flowers",
    list: [
        "rose",
        "tulip",
        "dandelion"
    ]
},
{
    type: "trees",
    list: [
        "fir",
        "pine",
        "birch"
    ]
}
];

var secondTree = myPlants[1].list[1];
console.log(secondTree);

/**record collection**/
var collection = {
    "2458": {
        "album": "slippery when Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "you give love a bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "prince",
        "tracks": [
            "1999",
            "little Red corvette"
        ]
    },
    "1245": {
        "artist": "Robert palmer",
        "tracks": [
        ]
    },
    "5439": {
        "album": "Ae Dil hai muskil"
    }

};
//it's a way in Javascript to make a copy of the object
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
    if (value === "") {
        delete collection[id][prop]
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || []
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }
    return collection;
}
console.log(updateRecords(2468, "tracks", "test"));
console.log(updateRecords(5439, "artist", "arijit"));

/**Iterate with While loops**/
var myArray = [];//empty array
var i = 0; //provided a value for i variable
while (i < 5) { //checks if the value of i is less than 5 than go to the next line of code and execute it
    myArray.push(i);//it simply means if the condition is satisfy than it will push the value inside the array created
    i++;//after the condition satisfies and the value is pushed the value of i is incremented 
}
/*the above while loop will continue until the condition satisfied after that it comes out of the loop and execute the next line of code*/
console.log(myArray);//display the output[0,1,2,3,4]

/**iterate with FOR loop**/
var ourArray = [];
for (var i = 0; i < 5; i++) {
    ourArray.push(i);
}
//setup
var myArray2 = [];
for (var i = 1; i < 6; i++) {// the FOR loop contain three main component i.e(initial_value;condition;update) ,if the value is less than 6 than it will push the value into the loop if the value is not less than 6 than it will move to next line of code
    myArray2.push(i);//if the condition satisfies the code here is executed it add the value to the array if the condition satisfies
}
console.log(myArray2);//display the output [1,2,3,4,5]


/** Iterating Odd Numbers with a Loop **/
var ourArray3 = [];//it holds all the numbers or integer
for (var i = 0; i < 10; i += 2) //here ,the for loop is initialize with 0 and ther's a condition if the condition satisfies the it will increase the value of "i" twice the original number present inside the variable and if the condition doesn't satisfies it iterate to the nextline of code
{
    ourArray3.push(i);//push the value of i inside the array if the condition satisfies
}

console.log(ourArray3);

//Printing the odd numbers
var myArray4 = [];
for (var i = 1; i < 10; i += 2)//here,in this loop the value of i is initialized to 1 if the provided condition satisfies the value is incremented by adding "2" with the original value  i.e if i = 1 than after updating i becomes i = i+2 = 1 + 2 = 3 
{
    myArray4.push(i);//if the condition is satisfies it add the value inside the array
}
console.log(myArray4);

/**count backwards with a For loop**/
var ourArray5 = [];
for (var i = 10; i > 0; i -= 2)//here,in this loop the value of i is initialized to 10 if the condition satisfies which is in favour for this case than it will decreament the value from 10 to 10-2 =8 and the vlaue is stored inside the array  
{
    ourArray5.push(i);
}

console.log(ourArray5);

/**Iterate Through an Array with a for loop**/
var ourArr = [9, 10, 11, 12];
var ourTotal = 0;
for (var i = 0; i < ourArr.length; i++) //in this case the for loop checks that if the length of the array declared before is greater than i or i is smaller than the length of the array if it's yes than it will execute the code below this line after that increament the value of i++ = i+1 
{
    ourTotal += ourArr[i];//after the condition satisfies than the recent value of i is added and stored inside the varible ourTotal 
}

console.log(ourTotal);//print the total value after iterating the loop

/**Nesting for Loops**/
function multiplyAll(arr) {
    var product = 1;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}
var product = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

console.log(product);

/**Iterate with do while Loops**/
var myArray = [];//an empty loop is declared
var i = 10;//a variable with value 10 is initialized

do {
    myArray.push(i);    //this block of code says the put the value of i and increament the value of i 
    i++;
} while (i < 5) //if i is less than 5

console.log(i, myArray);//it will show the out after one iteration and if the condition doesn't satisfies it will not execute the codefurther

/**profile Lookup**/
var contacts = [
    {
        "firstName": "Akire",
        "lastname": "Laine",
        "number": "987865899",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastname": "Potter",
        "number": "9878654389",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastname": "Holmess",
        "number": "9878654559",
        "likes": ["Intriguing cases", "violin"]
    },
    {
        "firstName": "sudhanshu",
        "lastname": "Vos",
        "number": "unknown",
        "likes": ["javascript", "Gaming", "Foxes"]
    },
    {
        "firstName": "surendra",
        "lastname": "Panda",
        "number": "9978654389",
        "likes": ["Sambalpur", "Lecturer", "Gamer"]
    }

];

function lookUpProfile(name, prop) {
    /**create a function that will return the value of properties when the name and key is given as a parameter if there is no such properties found inside the list than it will return nothing**/

    //solution
    /*_iterate to each element in the contact list if the content is found execute the next block of code if not found retrn "no such contact"
       >> the block of code contains an if condition that returns the value of the the parameter passed inside the function as an argument.
    */
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            return contacts[i][prop] || "no such properties";
        }
    }
    return "no such contact"
}
//change these values to check
var data = lookUpProfile("Harry", "likes");
console.log(data);

/**Generate Random Fraction**/ //AND// /**Generating Random wholeNumber**/
function randomFraction() {
    return Math.random();//this function is bascially generating a value between 0 and 1 but not exactly one
}
console.log(randomFraction())

var randomNumberBetween0and19 = Math.floor(Math.random() * 20)
/**The above line of code contains =>
 _floor() function : which bascially helps in getting whole numbers rounds the fractional number to the nearest whole number.
 _random() function : it generates a number between 0 and 1 not exactly 0 or 1

 the fraction number generated by random() functin is multiplied by 20 and than round off to a whole number 
 **/
function randomWholeNumber() {

    return Math.floor(Math.random() * 10);
}
console.log(randomWholeNumber());
console.log(randomNumberBetween0and19);

/**Generate Random Whole Number within a Range**/
function ourRandomRange(ourMin, ourMax) {
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}
/**
    the above function contain
    _parameters ourMin,ourmax
    _random() function & floo() fuction
    the function will return the value by evaluating the operation  for ex 
    ourMin = 11 ourMax =20 after evaluating 
    the value = (0.9*(20-11+1))+1
    =8.2+11=19.2 floor t0 20
 **/
console.log(ourRandomRange(11, 20));
//the vlaue generated by this number is betn 11 &20 

/**Use the parseInt Function**/
function convertToInteger(str) {
    return parseInt(str);
    /**
      the above code convert the string value entered as a parameter and convert the string into a intger number
     **/
}

console.log("parseInt Function application " + convertToInteger("56"));

/**use the parseInt Function with a Radix**/
//the radix specifies the base of the number in a string
function convertToInteger_2(str) {
    return parseInt(str, 2);//this line includes parameter and the base of the parameter passed while the function is called
}
console.log(convertToInteger_2("10011"));

/**use of the conditional Terenary Operator**/
//the terinary operator can be written as__ (condition ? statement-if-true : statement-if-false;)
function checkEqual(a, b) {
    // if(a===b){
    //     return true;
    // }
    // else{
    //     return false;
    // }

    //the above code can be converted into ternary operator
    return a === b ? true : false;
}
console.log(checkEqual(1, 1));
/**Using multiple Conditional (Ternary) Operators**/
function checkSign(num) {
    //we can use multiple terenary operator in a nested arrangement.
    return num > 0 ? "positive" : num < 0 ? "Negative" : "Zero"
    //description of the above line is the it will check for a certain conditon firstly if it doesn't satisfies it will check another condition if the condition is true will return first part if false return second part
}
console.log(checkSign(10));


/**Difference between the var and let keywords**/
let catName = "Quincy";
let quote;
catName = "rubin";

function catTalk() {
    "use strict";//it enables strict mode which catches common coding mistakes such if you create variable and don't declare it with keyword var

    catName = "oliver"
    quote = catName + " says Meow!";
    return quote;
}
console.log(catTalk());
//Another difference of VAR vs LET is "var" is declared globally or locally while the "let" is limited to the block area where it's declared.
function checkScope() {
    "use strict";
    let i = "function scope";//declaration of a variable
    if (true || false)//check for a condition
    {
        let i = "block scope"; //the value for i now is different
        console.log("Block scope i is:", i);
        //print the message,which says the operating area of the i var is inside the if block

    }
    console.log("Function scope i is:", i);
    //print the message,which says the operating area of the meassage outside the if block
    return i;
}
/**
    the output will generate block scope as it is declared using the var keyword while we can see the difference in the output by changing the code only by removing the "var" and replacing it with "let"
 ***/
console.log(checkScope());


/**Declare a Read-Only Variable with the const Keyword**/
//const keyword is used to declare a variable whose value cannot be reassigned but it's funciton in read only

function printManyTimes(str) {
    "use strict";

    const SENTENCE = str + " is cool";
    //while we declare a constant variable remember to name it in uppercase letters
    for (let i = 0; i < str.length; i++)//it is a good pratice to use let instead of var keyword
    {
        console.log(SENTENCE);
    }
}
printManyTimes("chatrapatti sivaji");

/**Mutate an Array Declared with const*/
const s = [5, 7, 2];
function editInPlace() {
    "use strict";
    s[0] = 2;
    s[1] = 5;
    s[2] = 7; /**It simply reassign the value of the predefined array which **/
}
editInPlace();
console.log(s);


/**prevent object Mutation**/
//as seen earlier after declaring the object with const keyword it was not able to prevent it from changing the value. we can use object.freeze() to prevent data from mutation
function freezeObj() {
    "use strict";
    /**this is an object**/
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS);//after calling the object as a parameter this method don't let the you further change the value of the declared constant
    try {
        MATH_CONSTANTS.PI = 99; //first this will be executed if any error occurs than it will execute the next block of code
    } catch (ex) {
        console.log(ex);//after an error is encountered this block of code is executed
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(PI);//99 without object.freeze() and an error occur after the object is called

/**Use Arrow Functions to Write Concise Anonymous Functions**/
/*  it is called ananomous function because it doesn't have a name 
    var magic = function(){
        return new Date();
    }
*///to make the function write faster we can remove keyword "funciton" also the curly braces and the return keyword as well and adding an arrow symbol to it

var magic = () => new Date();
// consider this case which is a function calling inside a function with an ananomous name we can remove the funciton name and use a arrow mark to use the funcitonality
console.log(magic);

/**Write Arrow Functions with Parameters**/
// var myConcat = funciton(arr1,arr2){
//     return arr1.concat(arr2);
// };
/*the above function can be converted into arrow function by removing the function keyword also the curly braces and the return keyword as well  we can rewrite the above function as follows*/
var myConcat = (arr1, arr2) => arr1.concat(arr2);
//this function have two arguments as parameters using the concat funciton arr1 is concatenated with arr2 
console.log(myConcat([1, 2], [3, 4, 5]));

/**Write Higher Order Arrow Functions**/
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
//whenever one function takes another function as an argument it is good to use an arrow function,below in the block of code we want to calculate the square of positive integer in the array, to perform that we can use the math funciton and filter function
const squareList = (arr) => {

    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);//this line of code consist of two arrow function one is used to filter out the integers and the map funciton is used to get the square value of that filtered funciton
    return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray); //this line is calling the function and storing the function inside the constant.
console.log(squaredIntegers);

/**Write Higher Order Arrow Funcitons**/
const increment = (() => {//this is an ananomous function which returns the increament value of a provided set of numbers
    return function increment(number, value = 1) {//this function takes the two argument number and value to perform increment if only the number is provided for increment it takes default value 1 for increamentation.
        return number + value; //returns the value of the number after incrementation
    };
})();
console.log(increment(5, 2));
console.log(increment(5));


/**Use the Rest Operator with Function Parameters**/
const sum = (() => {

    /* in this function rest operator allows us to create a function that takes variable number of arguments 
   */

    /*
     return function sum(x, y, z) {
         const args = [x, y, z];//firstly it is converted into an array.
         return args.reduce((a, b) => a + b, 0);//the array is than reduced by summing them all and returning the value
     };
     */

    // so the above line of code can be shortned by using the dot operator
    //here,the dot operator convert the parameter into array which was ealier required another line of code to do so. 
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0);//here,the value is summed and reduced
    };

})();
console.log("sum of the number are " + sum(1, 2, 3, 4));

/**Use of spread Operator to Evaluate Arrays In-place**/
const arr1 = ['JAN','FEB','MAR','APR','MAY'];
let arr2;
( () => {
    arr2 = arr1;//the arr2 variable is intialized the vlaue with arr1 that means it can access the content of arr1
    arr1[0] ='potato'//the value of index number 0 is changed to 'potato'
})();

/*
(()=>{
    //block of code
    {
        //nested funciton
    };
})();
*/

console.log(arr2);























