function change(color) {
    const noteInput = document.getElementById('noteInput');
    noteInput.style.color = color;
}
function deleteNotes(){
    const noteInput = document.getElementById('noteInput');
    noteInput.value = '';
}