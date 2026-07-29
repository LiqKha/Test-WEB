function showMessage(){

    const messages = [

        "Selamat belajar HTML!",

        "CSS sedang berfungsi!",

        "JavaScript berjaya dijalankan!",

        "Tahniah! Anda sedang belajar Web Development.",

        "Website anda berjaya!"

    ];

    let random = Math.floor(Math.random() * messages.length);

    document.getElementById("message").innerHTML = messages[random];

}