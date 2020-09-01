// Add your code here
<<<<<<< HEAD
function submitData(name, email) {
    let formData = {
        name: name,
        email: email
    };

    let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
          return response.json();
        })
        .then(function(object) {
            let h2 = document.createElement('h2');
            h2.innerHTML = object.id;
            document.body.appendChild(h2);
            console.log(object);
        })
        .catch(function(error) {
            let h3 = document.createElement('h3');
            h3.innerHTML = error.message;
            document.body.appendChild(h3);
            console.log(error.message);
        });
=======
function submitData(username, email){
 let formData = {
    name: username,
    email: email
  };
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };
  
    fetch('http://localhost:3000/users', configObj)
      .then(function(response) {
       return response.json();
      })
      .then(function(object) {
        let h2 = document.createElement('h2');
            h2.innerText = object.id;
            document.body.appendChild(h2);
            console.log(object);
      })
      .catch(function(error) {
          let error =  error.message;
          let message = document.createElement('h2');
          message.innerText = error
          document.appendChild(message)
      });
      
    
>>>>>>> 6f35c8c45121e88bf6b6a8248f4402461bdc7a51
}