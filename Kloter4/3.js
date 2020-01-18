function hitung(){
    var banyak_kata = document.getElementById('cerita').value
    banyak_kata = banyak_kata.split(" ")
    document.getElementById('total').value = banyak_kata.length
}