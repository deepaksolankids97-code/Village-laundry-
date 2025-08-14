document.getElementById('laundry-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // ------- SABSE ZAROORI STEP -------
    // Yahan 91 ke saath apna 10 digit ka WhatsApp number daalein.
    const ownerPhoneNumber = '919511507051'; // <-- Apna WhatsApp Number Yahan Daalein

    // Form se data lein
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const shirts = document.getElementById('shirts').value;
    const pants = document.getElementById('pants').value;
    const others = document.getElementById('others').value;

    if (name === '' || address === '') {
        alert('Kripya apna naam aur pata zaroor bharein.');
        return;
    }
    
    // WhatsApp ke liye message banayein
    let message = `*--- Naya Laundry Order ---*\n\n`;
    message += `*Naam:* ${name}\n`;
    message += `*Pata:* ${address}\n\n`;
    message += `*Kapde:*\n`;
    if (shirts > 0) message += `- Shirts/Kurte: ${shirts}\n`;
    if (pants > 0) message += `- Pants/Pajame: ${pants}\n`;
    if (others > 0) message += `- Dusre Kapde: ${others}\n`;
    message += `\nKripya order confirm karein.`;

    // WhatsApp URL banayein
    const whatsappURL = `https://wa.me/${ownerPhoneNumber}?text=${encodeURIComponent(message)}`;

    // User ko WhatsApp par redirect karein
    window.location.href = whatsappURL;
});
