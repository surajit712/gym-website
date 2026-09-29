document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const plan = document.getElementById("plan").value;
            const message = document.getElementById("message").value.trim();

            if (!name || !phone) {
                formMessage.textContent =
                    "Please enter your name and phone number.";
                return;
            }

            const gymNumber = "919876543210";

            let whatsappMessage =
                "Hi IRONCORE FITNESS,%0A%0A" +
                "Name: " + encodeURIComponent(name) + "%0A" +
                "Phone: " + encodeURIComponent(phone) + "%0A";

            if (plan) {
                whatsappMessage +=
                    "Membership: " + encodeURIComponent(plan) + "%0A";
            }

            if (message) {
                whatsappMessage +=
                    "Message: " + encodeURIComponent(message) + "%0A";
            }

            whatsappMessage +=
                "%0AI would like to know more about the membership.";

            const whatsappURL =
                "https://wa.me/" +
                gymNumber +
                "?text=" +
                whatsappMessage;

            window.open(whatsappURL, "_blank");

            formMessage.textContent =
                "Opening WhatsApp...";

            contactForm.reset();
        });
    }


    /* Smooth scrolling for navigation links */

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });

});