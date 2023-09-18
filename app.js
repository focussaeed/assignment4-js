// Q.1
document.write(" Q.1 <br>");
for (var i=1; i<=10; i++) {
    document.write(i," Wel come to Web & Mobile app. Development Programm. <br>")
}

// Q.2
document.write("<br> Q.2 <br>");
for (var i=1; i<=12; i++) {
    document.write(i,"<br>");
};

// Q.3
document.write("<br> Q.3 <br>");

document.write("Correct statement (var i=0; i<=4; i++);")

// Q.4
document.write("<br><br> Q.4 <br>");
for (var x=1; x<=100; x++) {
    document.write(x,", ")
};

// Q.5
document.write("<br><br> Q.5 <br>");
for (var i=10; i>1; i=i-3) {
    document.write(i,", ");
};

// Q.6
document.write("<br><br> Q.6 <br>");

document.write("Statement to assign number of elements in array is  x=arrayname.length;");

// Q.7
document.write("<br><br> Q.7 <br>");
document.write("flag=true;");

// Q.8
document.write("<br><br> Q.8 <br>");
document.write("for (var i=1; i<=pets.length; i++)");

// Q.9
document.write("<br><br> Q.9 <br>");
for (var i=0; i<=10; i++) {
    if (i === 2){
    document.write("It Should be 1 ");
    break
    }
};

// Q.10
document.write("<br><br> Q.10 <br>");
var userName=["saeed","nafees","waheed","khalil","raees"];
var inputuser=prompt("Enter User Name :");
for (var i=0; i<=userName.length; i++){
           if (inputuser === userName[i]) {
        alert("Enter");
        break
    } else if (i === userName.length) {
    document.write("<br> Please write the correct user name.");
    }
}

// Q.11
document.write("<br><br> Q.11 <br>");
var list=["saeed","nafees","waheed","khalil","raees"];
var userinput=prompt("Enter User Name :");
var matchFound=false;
for (var i=0; i<=list.length; i++){
           if (inputuser === list[i]) {
        alert("Match Found");
        matchFound=true;
        break
    } else if (matchFound=false) {
    document.write("<br> Match not found");
    }
}

// Q.12
document.write("<br><br> Q.12 <br>");
var firstarr=["a","b","c","d","e","f"];
var secondarr=["1","2","3","4","5","6"];

for (var i=0; i<firstarr.length; i++) {
    
    document.write("<br>");
    for (var x=0; x<secondarr.length; x++) {
        document.write(firstarr[i],secondarr[x],", ");

    }
}