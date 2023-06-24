

let formData = document.getElementById('scheduleForm');

formData.addEventListener("submit", (e) => {
    e.preventDefault();
    var src = document.getElementById("source").value;
    var dest = document.getElementById("destination").value;
    if(src=='bbs' && dest=='mum'){
        document.getElementById('board').innerHTML="Bhubaneswar";
        document.getElementById('dest').innerHTML="Mumbai";
    }
    else if(src=='bbs' && dest=='blr'){
        document.getElementById('board').innerHTML="Bhubaneswar";
        document.getElementById('dest').innerHTML="Bengaluru";
    }
    else if(src=='kol' && dest=='mum'){
        document.getElementById('board').innerHTML="Kolkata";
        document.getElementById('dest').innerHTML="Mumbai";
    }
    else if(src=='kol' && dest=='blr'){
        document.getElementById('board').innerHTML="Kolkata";
        document.getElementById('dest').innerHTML="Bengaluru";
    }

    document.getElementById('doBoard').innerHTML=document.getElementById('date').value;
    fetch('./flight-data.json').then(response => {
        return response.json();
    }).then(data => {
        console.log(data.flight[0].from);
        for (var i = 0; i < data.flight.length; i++) {
            if (data.flight[i].from == src && data.flight[i].to == dest) {
                addElement(data.flight[i].name, data.flight[i].tod, data.flight[i].toa);
            }
        }
        // window.location.href = './schedule.html';
    })

});



function addElement(name, tod, toa) {

    var tableRef = document.getElementById('flightTable');

    // console.log(tableRef)
    var newRow = tableRef.insertRow(-1);

    let newCell1 = newRow.insertCell(0);
    let newCell2 = newRow.insertCell(1);
    let newCell3 = newRow.insertCell(2);

    let newText1 = document.createTextNode(name);
    newCell1.appendChild(newText1);

    let newText2 = document.createTextNode(tod);
    newCell2.appendChild(newText2);

    let newText3 = document.createTextNode(toa);
    newCell3.appendChild(newText3);
    
}