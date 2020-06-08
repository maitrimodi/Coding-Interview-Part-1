
var data = document.getElementById("main-container");
var xhttp = new XMLHttpRequest();
xhttp.open("GET","http://sandbox.bittsdevelopment.com/code1/fetchemployees.php",true);
xhttp.send();
xhttp.onload = function(){
    var employees = JSON.parse(xhttp.responseText);
    var employee = Object.values(employees);
    console.log(Object.values(employee));
    let htmlString = "";
    for(var i=0; i<employee.length; i++)
    {
        var full_name = employee[i].employeefname + " " + employee[i].employeelname;
        var bio = employee[i].employeebio;
        htmlString += "<div class='container'>";
        if(employee[i].employeeisfeatured == 1){
            htmlString += "<div><img class='crown' src='crown.png'/></div>"
        }
        htmlString += "<img class='image' src='http://sandbox.bittsdevelopment.com/code1/employeepics/" + employee[i].employeeid + ".jpg'>";
        htmlString += "<p class='name'>" + full_name +"</p>";
        htmlString += "<div class='bio'>" + bio +"</div>";
        var roleLength = employee[i].roles.length;
        for(var j=0 ; j<roleLength ; j++)
        {
            htmlString += "<div class='role' style='background-color:"+employee[i].roles[j].rolecolor+";'>" + employee[i].roles[j].rolename + "</div>";
        }
        htmlString += "</div>";
    }
    data.innerHTML = htmlString;
};

