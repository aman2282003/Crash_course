async function fetchUser() {
  try {
    const data = await fetch("https://dummyjson.com/users");
    const res = await data.json();
    const userList = document.getElementById("user-list");

    // Clear previous data
    userList.innerHTML = "";

    // Loop through users and display them
    res.users.forEach((user) => {
      const userItem = document.createElement("div");
      userItem.innerHTML = `
                <h3>${user.firstName} ${user.lastName}</h3>
                <p>Email: ${user.email}</p>
                <p>Age: ${user.age}</p>
                <p>Gender: ${user.gender}</p>
                <hr>
            `;
      userList.appendChild(userItem);
    });
  } catch (error) {
    console.log("Error fetching users:", error);
  }
}
