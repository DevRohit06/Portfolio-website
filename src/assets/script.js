const cursor = document.querySelector(".cursor");
document.body.addEventListener("mousemove", ({ clientX, clientY }) => {
  cursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
});