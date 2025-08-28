window.addEventListener("mousemove", function(details){
    var rect = document.querySelector("#rect");

    var xval = gsap.utils.mapRange(
        0, window.innerWidth,
        100 + rect.getBoundingClientRect().width / 2,
        window.innerWidth - (100 + rect.getBoundingClientRect().width / 2),
        details.clientX
    );

    var yval = gsap.utils.mapRange(
        0, window.innerHeight,
        100 + rect.getBoundingClientRect().height / 2,
        window.innerHeight - (100 + rect.getBoundingClientRect().height / 2),
        details.clientY
    );

    var rotateX = gsap.utils.mapRange(0, window.innerHeight, 15, -15, details.clientY);
    var rotateY = gsap.utils.mapRange(0, window.innerWidth, -15, 15, details.clientX);

    gsap.to('#rect', {
        left: xval,
        top: yval,
        rotateX: rotateX,
        rotateY: rotateY,
        ease: "power3.out",
        duration: 0.5
    });
});
