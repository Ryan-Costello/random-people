const url = 'https://randomuser.me/api?results=20';
let data;

fetch(url)
    .then(function(response) {
        console.log("This is the response: ", response);
        return response.json();
    })
    .then(function(myJson) {
        data = myJson;
        console.log("This is the JSON: ", myJson);
        for (let i = 0; i < data.results.length; i++) {
            let card = document.createElement("div");
            card.className = "card";
        
            let image = document.createElement("img");
            image.src = data.results[i].picture.large;
        
            let userName = document.createElement("p");
            userName.className = "user-name";
            userName.innerText = `${data.results[i].name.first} ${data.results[i].name.last}`;

            let gender = document.createElement("p");
            gender.className = "gender";
            gender.innerText = `gender: ${data.results[i].gender}`;
        
            let email = document.createElement("p");
            email.className = "email";
            email.innerHTML = `email: <a href=mailto:${data.results[i].email}>${data.results[i].email}</a>`; 
        
            let address = document.createElement("p");
            address.className = "address";
            address.innerText = `address: ${data.results[i].location.street.number} ${data.results[i].location.street.name}`;
            
            let phone = document.createElement("p");
            phone.className = "phone-number";
            phone.innerText = `phone number: ${data.results[i].phone}`;
        
            card.appendChild(image);
            card.appendChild(userName);
            card.appendChild(gender);
            card.appendChild(email);
            card.appendChild(address);
            card.appendChild(phone);
            document.body.appendChild(card);
        }
    });