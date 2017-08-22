<script>
  doucument.onclick = function(){
    const ajax = new XMLHttpRequest;
    ajax.open('get','/user')
    ajax.send()
    ajax.onload = function(){
      console.log(ajax.responseText)
    }
  }
</script>
