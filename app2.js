// Q.3

for (var i=0; i<=10; i++) {
    document.write(i+"<br>")
}

// Q.4

var tableno=+prompt("Enter No to generate table")
var tablelength=+prompt("Enter table length")
document.write("<br><br> Multiplication table of ",tableno+"<br>")
document.write("Length ",tablelength+"<br>")
for (i=1; i<=tablelength; i++){

    document.write(tableno+" X "+i+" = "+tableno*i+"<br>")

}

// Q.5

var fruits=["apple","banana","mango","orange","strawberry"]
document.write("<br><br>")
for (i=0; i <fruits.length; i++) {
    document.write (fruits[i]+"<br>")
}

for (i=0; i <fruits.length; i++) {
    document.write ("Elements at index ",i +" is "+ fruits[i]+"<br>")
}


// Q.6 -a

document.write("<br><br>Counting : <br>")
for (var i=1; i<=15; i++) {
    document.write(i+",")
}

// Q.6 -b

document.write("<br>Reverse Counting :<br>")
for (var i=10; i>=1; i--) {
    document.write(i+",")
}

// Q.6 -c

document.write("<br>Even :<br>")
for (var i=0; i<=20; i=i+2) {
    document.write(i+",")
}

// Q.6 -d

document.write("<br>Odd : <br>")
for (var i=1; i<=20; i=i+2) {
    document.write(i+",")
}
// Q.6 -e

document.write("<br>Series : <br>")
for (var i=1; i<=20; i=i+2) {
    document.write(i+"K, ")
}

// Q.7

var item=["cake","apple pie","cookie","chips","patties"];
var orderinput=prompt("Welcome to ABC Bakery. What do you want order sir/madam");
for (var i=0; i<=item.length; i++){
    console.log(i)
           if (orderinput === item[i]) {
        document.write("<br><br>"+item[i]+" is available at index "+i+" in our bakery.");
        break
    } else if (i === item.length) {
    document.write("<br><br>"+" We are Sorry. "+orderinput+" is not available in our bakery.");
    }
}

// Q.8

var numbers=[24,53,78,91,12];
var num1=numbers[0];
document.write("<br><br>"+" Array Items : ",numbers);
for (var i=1; i<=numbers.length; ++i){
    console.log(i)
           if (numbers[i] >= num1 ) {
                num1=numbers[i];
    } else { document.write("<br>"+" The Largest No is : ",num1)
    break
}
   
};
// document.write("<br><br>"+" The Largest No is : ",num1);

// Q.9
document.write("<br><br>")
for (var i=5; i<=100; i=i+5){
     
   document.write(i+", ")
}
