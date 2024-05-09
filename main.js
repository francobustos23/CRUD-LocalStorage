    //VIDEO URL: https://www.youtube.com/watch?v=gQZbQD31RnM
    
    function ValidarDatos() {
        let email = document.getElementById('InputEmail').value;
        let name = document.getElementById('InputName').value;
        let telefono = document.getElementById('InputTel').value;
        let password = document.getElementById('InputPassword').value;

        if (email === '') {
            alert('El campo email es obligatorio');
            return false;
        } else if (!email.includes('@')) {
            alert('El email no es valido');
            return false;
        } 
        if (name === '') {
            alert('El campo nombre es obligatorio');
            return false;
        }
        if (telefono === '') {
            alert('El campo telefono es obligatorio');
            return false;
        }
        if (password === '') {
            alert('El campo password es obligatorio');
            return false;
        }

        return true;
    }

    function ReadData() {
        let listPeople;

        if (localStorage.getItem('listPeople') === null) {
            listPeople = [];
        } else {
            listPeople = JSON.parse(localStorage.getItem('listPeople'));
        }
        
        let html = '';

        listPeople.forEach((element, index) => {
            html += "<tr>";
            html += "<td>" + element.email + "</td>";
            html += "<td>" + element.name + "</td>";
            html += "<td>" + element.telefono + "</td>";
            html += "<td>" + element.password + "</td>";
            html += '<td><button onclick="deleteData('+ index +')" class="btn btn-danger">Eliminar Data</button></td>';
            html += '<td><button onclick="editData('+ index +')" class="btn btn-warning">Editar Data</button></td>';
            html += "</tr>";

        });

        document.querySelector('#tableData').innerHTML = html;
    }

    document.onload = ReadData();

   function AddData() {
    if(ValidarDatos() === true){
    const email = document.getElementById('InputEmail').value;
    const name = document.getElementById('InputName').value;
    const telefono = document.getElementById('InputTel').value;
    const password = document.getElementById('InputPassword').value;

    let listPeople;

    if (localStorage.getItem('listPeople') === null) {
        listPeople = [];
    } else {
        listPeople = JSON.parse(localStorage.getItem('listPeople'));
    }

    listPeople.push({
         email: email,
         name: name,
         telefono: telefono,
         password: password
        });
    localStorage.setItem('listPeople', JSON.stringify(listPeople));

    ReadData();

    document.getElementById('InputEmail').value = '';
    document.getElementById('InputName').value = '';
    document.getElementById('InputTel').value = '';
    document.getElementById('InputPassword').value = '';
    }
   }

    function deleteData(index) {
        let listPeople;
        if (localStorage.getItem('listPeople') === null) {
            listPeople = [];
        } else {
            listPeople = JSON.parse(localStorage.getItem('listPeople'));
        }
        listPeople.splice(index, 1);
        localStorage.setItem('listPeople', JSON.stringify(listPeople));
        ReadData();
    }

    function editData(index) {
        document.getElementById('btnAdd').style.display = 'none';
        document.getElementById('btnUpdate').style.display = 'block'

        let listPeople;
        if (localStorage.getItem('listPeople') === null) {
            listPeople = [];
        } else {
            listPeople = JSON.parse(localStorage.getItem('listPeople'));
        }

        document.getElementById('InputEmail').value = listPeople[index].email;
        document.getElementById('InputName').value = listPeople[index].name;
        document.getElementById('InputTel').value = listPeople[index].telefono;
        document.getElementById('InputPassword').value = listPeople[index].password;

        document.querySelector('#btnUpdate').onclick = function() {
            if(ValidarDatos() === true){
            listPeople[index].email = document.getElementById('InputEmail').value;
            listPeople[index].name = document.getElementById('InputName').value;
            listPeople[index].telefono = document.getElementById('InputTel').value;
            listPeople[index].password = document.getElementById('InputPassword').value;
        
            localStorage.setItem('listPeople', JSON.stringify(listPeople));
            ReadData();

            document.getElementById('InputEmail').value = "";
            document.getElementById('InputName').value = "";
            document.getElementById('InputTel').value = "";
            document.getElementById('InputPassword').value = "";

            document.getElementById('btnAdd').style.display = 'block';
            document.getElementById('btnUpdate').style.display = 'none';
        }
        }
    }