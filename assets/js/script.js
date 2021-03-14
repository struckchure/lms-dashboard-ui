function set_active(item) {
    var all_sidebar_buttons = document.getElementsByClassName('sidebar-button active')[0]
    all_sidebar_buttons.classList.remove('active')

    var get_item = document.getElementById(item)
    get_item.classList.add('active')
}

function readfiles(files) {
    for (var i = 0; i < files.length; i++) {
        var file_name_html = document.getElementById('file_name')

        file_name_html.innerText = files[i].name

        reader = new FileReader();
        reader.onload = function(event) {
        document.getElementById('file_data').value = event.target.result;}
        reader.readAsDataURL(files[i]);
    }
}
var holder = document.getElementById('holder');
holder.ondragover = function () { this.className = 'hover'; return false; };
holder.ondragend = function () { this.className = ''; return false; };
holder.ondrop = function (e) {
    this.className = '';
    e.preventDefault();
    readfiles(e.dataTransfer.files)
}
