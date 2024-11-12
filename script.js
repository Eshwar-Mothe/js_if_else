//Income tax Calculation

income = +prompt("Enter your income: ")

if(income > 0 && income <= 250000){
    console.log(`Total Payable tax on ${income} is: 0`)
}
else if(income > 250000 && income <= 500000){
    tax = income * (5/100)
    console.log(`Total Payable tax on ${income} is: ${tax + income}`)
}

else if(income > 500000 && income <= 1000000){
    tax = income * (20/100)
    console.log(`Total Payable tax on ${income} is: ${tax + income + 12500}`)
}

else if(income > 1000000){
    tax = income * (30/100)
    console.log(`Total Payable tax on ${income} is: ${tax + income + 112500}`)
}
else{
    console.log("Enter the proper income")
}

//Shipping Cost Calculator

weight = +prompt("Enter the weight in kgs: ")
destination = +prompt("choose the destination among 1(local), 2(national), 3(international) enter number only:  ")

if(weight <= 1){
    if(destination==1){
        console.log("The total Local shipping cost is : 5$")
    }
    else if(destination==2){
        console.log("The total National shipping cost is : 8$")
    }
    else if(destination==3){
        console.log("The total International shipping cost is : 5$")
    }
    else{
        console.log("Enter proper destination among choice only")
    }
}
else if(weight > 1 && weight <=5 ){
    if(destination==1){
        console.log("The total Local shipping cost is : 10$")
    }
    else if(destination==2){
        console.log("The total National shipping cost is : 15$")
    }
    else if(destination==3){
        console.log("The total International shipping cost is : 30$")
    }
    else{
        console.log("Enter proper destination among choice only")
    }
}
else if(weight > 5 && weight <=10 ){
    if(destination==1){
        console.log("The total Local shipping cost is : 20$")
    }
    else if(destination==2){
        console.log("The total National shipping cost is : 25$")
    }
    else if(destination==3){
        console.log("The total International shipping cost is : 50$")
    }
    else{
        console.log("Enter proper destination among choice only")
    }
}
else if(weight > 10 ){
    if(destination==1){
        console.log("The total Local shipping cost is : 30$")
    }
    else if(destination==2){
        console.log("The total National shipping cost is : 35$")
    }
    else if(destination==3){
        console.log("The total International shipping cost is : 70$")
    }
    else{
        console.log("Enter proper destination among choice only")
    }
}
else{
    console.log("Enter a proper weight of your package")
}

// Electricity  bill calculator

units = +prompt("Enter the number of units consumed: ")

if(units <= 100){
    console.log(`Total electricity bill: ${(units) * 1}$ `)
}
else if(units >= 100 && units <= 300){
    console.log(`Total electricity bill: ${((100*1)+(units-100) * 1.5)}$ `)
}
else if(units >300){
    console.log(`Total electricity bill: ${((100*1)+(units-100) * 1.5)+((units-300)*2)}$ `)
}