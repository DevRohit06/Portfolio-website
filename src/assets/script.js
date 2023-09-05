const cursor = document.querySelector(".cursor");
document.body.addEventListener("mousemove", ({ clientX, clientY }) => {
  cursor.style.transform = `translate(${clientX+10}px, ${clientY + 10}px)`;
});