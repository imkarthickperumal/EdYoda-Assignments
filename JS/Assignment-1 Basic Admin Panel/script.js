var url =
  "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D";
var table = document.getElementsByTagName("tbody")[0];
var searchbox = document.getElementById("search-box");
var infocontent = document.getElementById("info-content");
var content = document.createElement("div");

var xhttp = new XMLHttpRequest();
xhttp.open("GET", url, true);
xhttp.send();
xhttp.onreadystatechange = function () {
  if (xhttp.readyState == 4) {
    var resp = JSON.parse(xhttp.responseText);
    console.log(resp);
    for (var i = 0; i < resp.length; i++) {
      createrow(
        resp[i].id,
        resp[i].firstName,
        resp[i].lastName,
        resp[i].email,
        resp[i].phone
      );
    }
    var trows = document.getElementsByClassName("data-row");

    var details = document.querySelectorAll("#info-content > div");
    var prev;
    //adding styles in rows on click.
    for (var i = 0; i < trows.length; i++) {
      trows[i].addEventListener("click", function (e) {
        if (prev != undefined) {
          prev.classList.remove("active");
        }
        this.classList.add("active");
        infocontent.style.display = "block";
        prev = this;
        //program to displaying on right side
        for (var j = 0; j < resp.length; j++) {
          if (this.childNodes[0].innerHTML == resp[j].id) {
            var detname = document.getElementById("name");
            var state = document.getElementById("state");
            var zip = document.getElementById("zip");
            var address = document.getElementById("address");
            var city = document.getElementById("city");
            var desc = document.getElementById("desc");
            detname.innerText = resp[j].firstName + " " + resp[j].lastName;
            state.innerText = resp[j].address.state;
            zip.innerText = resp[j].address.zip;
            address.innerText = resp[j].address.streetAddress;
            city.innerText = resp[j].address.city;
            desc.innerText = resp[j].description;
            content.style.display = "block";
          }
        }
      });
    }
    //search box functionality
    searchbox.addEventListener("keyup", function () {
      console.log("keyup");
      for (var i = 0; i < trows.length; i++) {
        var fname = trows[i].childNodes[1].innerHTML.toUpperCase();
        if (fname.indexOf(searchbox.value.toUpperCase()) < 0) {
          trows[i].style.display = "none";
        } else {
          trows[i].style.display = "block";
        }
      }
    });
  }
};
//function for creating table
function createrow(tid, fname, lname, email, phone) {
  var row = document.createElement("tr");
  row.classList.add("data-row");
  var col1 = document.createElement("td");
  col1.classList.add("column1");
  col1.innerHTML = tid;
  row.appendChild(col1);
  var col2 = document.createElement("td");
  col2.classList.add("column2");
  col2.innerHTML = fname;
  row.appendChild(col2);
  var col3 = document.createElement("td");
  col3.classList.add("column3");
  col3.innerHTML = lname;
  row.appendChild(col3);
  var col4 = document.createElement("td");
  col4.classList.add("column4");
  col4.innerHTML = email;
  row.appendChild(col4);
  var col5 = document.createElement("td");
  col5.classList.add("column5");
  col5.innerHTML = phone;
  row.appendChild(col5);
  table.appendChild(row);
}
