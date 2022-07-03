export function paralaxCard(layersSelector) {
    document.addEventListener("mousemove", parallax);
    function parallax(e) {
        this.querySelectorAll(layersSelector).forEach(layer => {
            const speed = layer.getAttribute('data-paralax-speed');
            const x = (window.innerWidth - e.pageX*speed)  / 100;
            const y = (window.innerHeight - e.pageY*speed) / 100;

            layer.style.transform = `translate(${x}px) translateY(${y}px)`;
        })
    }
}