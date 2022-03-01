export const Observer = () => {
  const encabezados = document.querySelectorAll(".encabezado");

  const observer = new IntersectionObserver(
    (entradas, observador) => {
      entradas.forEach((entrada) => {
        const id = entrada.target.getAttribute("id");
        const menulink = document.querySelector(`.nav-menu a[href="#${id}"]`);

        if (entrada.isIntersecting) {
          const idIntersecting = `#${entrada.target.getAttribute("id")} `;
          menulink.classList.add("active");
        } else {
          menulink.classList.remove("active");
        }
      });
    },
    {
      rootMargin: "-50% 0px -50% 0px",
    }
  );

  encabezados.forEach((encabezado) => {
    observer.observe(encabezado);
  });
};
