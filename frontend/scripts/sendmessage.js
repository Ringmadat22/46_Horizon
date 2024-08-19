function sendToWhatsApp() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const phone = document.getElementById("phone").value;
    const guests = document.getElementById("guests").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const movie = document.getElementById("movie").value;
    const includeFood = document.getElementById("includeFood").checked ? "Yes" : "No";
    const details = document.getElementById("details").value;

    const message = `Hello, I would like to book a reservation.\n
    Name: ${firstName} ${lastName}\n
    Phone: ${phone}\n
    Number of Guests: ${guests}\n
    Preferred Date: ${date}\n
    Preferred Time: ${time}\n
    Preferred Movie: ${movie}\n
    Include Food & Beverages: ${includeFood}\n
    Additional Details: ${details}`;

    const whatsappURL = `https://api.whatsapp.com/send?phone=+251989173582&text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
}