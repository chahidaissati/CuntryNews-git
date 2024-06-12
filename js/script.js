document.addEventListener('DOMContentLoaded', (event) => {
    const houseButton = document.getElementById('house-button');
    houseButton.addEventListener('click', () => {
        document.body.classList.toggle('dark');
    });
});

console.log("COWBOYS vs ALIENS");
