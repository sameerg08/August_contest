
        var id = 0;
        function addStudentDetails() {

            var table = document.getElementById("table");
            var row = table.insertRow(table.length);
            var cell0 = row.insertCell(0);
            var cell1 = row.insertCell(1);
            var cell2 = row.insertCell(2);
            var cell3 = row.insertCell(3);
            var cell4 = row.insertCell(4);
            var cell5 = row.insertCell(5);
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var gpa = document.getElementById("gpa").value;
            var age = document.getElementById("age").value;
            var degree = document.getElementById("degree").value;


            cell0.innerHTML = id++;
            cell1.innerHTML = name;
            cell2.innerHTML = email;
            cell3.innerHTML = gpa;
            cell4.innerHTML = age;
            cell5.innerHTML = degree;

        }
