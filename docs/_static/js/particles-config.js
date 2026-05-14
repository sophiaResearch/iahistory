document.addEventListener("DOMContentLoaded", function () {
    function initParticles(containerId) {
        particlesJS(containerId, {
            particles: {
                number: { value: 80 },
                color: { value: "#00d9ff" },
                shape: { type: "circle" },
                opacity: { value: 0.5 },
                size: { value: 3 },
                line_linked: {
                    enable: true,
                    distance: 110,
                    color: "#00d9ff",
                    opacity: 0.4,
                    width: 1
                },
                move: { enable: true, speed: 2 }
            },
            interactivity: {
                events: {
                    onhover: { enable: true, mode: "grab" }
                }
            },
            retina_detect: true
        });
    }

    function addParticlesToTitles() {
        document.querySelectorAll(".wy-nav-content h1").forEach(function(h1, index) {
            // Creamos un ID único para cada bloque de partículas
            let id = "particles-js-" + index;
            if (!h1.querySelector("#" + id)) {
                let particlesDiv = document.createElement("div");
                particlesDiv.id = id;
                h1.prepend(particlesDiv);
                initParticles(id);
            }
        });
    }

    // Ejecutar al cargar
    addParticlesToTitles();

    // Re-ejecutar cuando cambias de sección en el menú
    document.addEventListener("click", function(e) {
        if (e.target.closest(".wy-menu-vertical a")) {
            setTimeout(addParticlesToTitles, 300);
        }
    });
});
