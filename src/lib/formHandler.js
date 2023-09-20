

const submitButton = document.getElementById("sendButton");
submitButton.addEventListener("click", async() => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const toastElement = document.getElementsByClassName("toast");

  if (!message || !email || !name) {
    alert("invalid data");
  }

  try {
    await fetch("https://formsubmit.co/ajax/technicalrohit06@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        message: message,
        email: email,
      }),
    }).then((response) => {
      if (response.status === 200) {
         document.getElementsByClassName("toast").innerHTML += `
          <div class="absolute w-full z-30"><div class="flex justify-center"> <div class="fixed animate-toast"><h1 class="bg-white p-3 rounded-xl text-center">Message has been sent successfully 🎉</h1></div></div></div>`
        
      }
    });
  } catch {
    alert("Something went wrong");
  }
})