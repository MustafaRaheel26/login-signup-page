document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;
    var storedUser = localStorage.getItem(username);
    if (storedUser && JSON.parse(storedUser).password === password) {
      alert("Login successful!");
    } else {
      alert("Invalid username or password");
    }
  });
  
  document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("signup-username").value;
    var password = document.getElementById("signup-password").value;
    var user = { username: username, password: password };
    localStorage.setItem(username, JSON.stringify(user));
    alert("Signup successful!");
  });
  