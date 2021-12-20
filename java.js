
const txt = '{"id": "123","photoUrl": "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200", "name": "Jhon Doe", "email": "jhon.doe@glovoapp.com", "firstDayGlovo": "21/12/2020", "phone": "+34655656565","vehicle": "Bike", "city": "Barcelona", "totalOrders": 190, "totalKms": 1000, "reassigmentsPerc": 4, "cancellationsPerc": 3, "avgSpeed": 55, "avgDeliveryTimeWeek": [20, 21, 19, 25, 21, 17, 30]}'
const obj = JSON.parse(txt);


// Name
document.getElementById("hello").innerHTML = "Hello, " + obj.name + "!";

// Personal Info
document.getElementById("name").innerHTML = obj.name ;
document.getElementById("email").innerHTML = obj.email ;
document.getElementById("date").innerHTML = obj.firstDayGlovo ;
document.getElementById("phone").innerHTML = obj.phone ;
document.getElementById("vehicle").innerHTML = obj.vehicle ;
document.getElementById("city").innerHTML = obj.city ;
document.getElementById("orders").innerHTML = obj.totalOrders ;
document.getElementById("kms").innerHTML = obj.totalKms ;
document.getElementById("cancellations").innerHTML = obj.cancellationsPerc + "%";
document.getElementById("reassigments").innerHTML = obj.reassigmentsPerc + "%" ;
document.getElementById("speed").innerHTML = obj.avgSpeed + " km/h" ;




