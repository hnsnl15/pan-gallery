const gallery = document.querySelector(".main_container");

window.onmousemove = (e) => {
  const mouseX = e.clientX,
    mouseY = e.clientY;

  const xDecimal = mouseX / window.innerWidth,
    yDecimal = mouseY / window.innerHeight;

  const maxX = gallery.offsetWidth - window.innerWidth,
    maxY = gallery.offsetHeight - window.innerHeight;

  const panX = maxX * xDecimal * -1,
    panY = maxY * yDecimal * -1;

  console.log("pan x = ", panX);
  console.log("pan y = ", panY);

  gallery.animate(
    {
      transform: `translate(${panX}px, ${panY}px)`,
    },
    {
      duration: 4000,
      fill: "forwards",
      easing: "ease",
    }
  );
};
