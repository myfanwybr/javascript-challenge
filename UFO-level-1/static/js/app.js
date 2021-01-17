// from data.js
var tableData = data;

var tbody= d3.select("tbody")

var button=d3.select(".btn")

var form=d3.select("#form")

button.on("click", runEnter);
form.on("submit", runEnter)


function runEnter(){

    d3.event.preventDefault();

    tbody.text("")


    var input =d3.select("#input-feild");

    //var inputValue = document.getElementById("input-feild").value
    var inputValue=input.property("value");

    var filteredData=tableData.filter(date=> date.datetime==inputValue)

    var map= tableData.map(date=> date.datetime==inputValue)

    //if map == false

    filteredData.forEach(function(aliens){
            var row=tbody.append("tr")
        
            //select objects using . Entries
            Object.entries(aliens).forEach(function([key, value]){
                var cell=row.append("td")
                cell.text(value)
            })
        })

   
}

    
    


// // append table
// var row= tbody.append("tr")
// var cell=row.append("td").text(filteredData)


// //loop through data 
// tableData.forEach(function(aliens){
//     var row=tbody.append("tr")

//     //select objects using . Entries
//     Object.entries(aliens).forEach(function([key, value]){
//         var cell=row.append("td")
//         cell.text(value)
//     })
// })

// create function to handle button if clicked

// button.on("click", function () {tableData.forEach(function(aliens){
//         var row=tbody.append("tr")

//         //select objects using . Entries
//         Object.entries(aliens).forEach(function([key, value]){
//             var cell=row.append("td")
//             cell.text(value)
//     })
// })
// })

//on click filter