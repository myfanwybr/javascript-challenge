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

    var inputValue=input.property("value");

    var filteredData=tableData.filter(date=> new Date (date.datetime).toDateString()=== new Date(inputValue).toDateString());


    filteredData.forEach(function(aliens){
            var row=tbody.append("tr")
        
            //select objects using . Entries
            Object.entries(aliens).forEach(function([key, value]){
                var cell=row.append("td")
                cell.text(value)
            })
        })

   
}

    
