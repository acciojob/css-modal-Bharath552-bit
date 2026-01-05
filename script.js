//your JS code here. If required.
document.getElementById('openModal').onclick = function() {
    document.getElementById('modal').style.display = "block";
}

document.querySelector('.close-modal').onclick = function() {
    document.getElementById('modal').style.display = "none";
}

// Close the modal if the user clicks anywhere outside of it
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
