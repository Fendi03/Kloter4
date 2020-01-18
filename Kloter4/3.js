<textarea id="cerita"></textarea><br>
<input type="button" value="Hitung Banyak Kata" onClick="hitung()"> <input type="text" id="total" readonly>

<script type="text/javascript">
function hitung(){
    var banyak_kata = document.getElementById('cerita').value
    banyak_kata = banyak_kata.split(" ")
    document.getElementById('total').value = banyak_kata.length
}
</script>
