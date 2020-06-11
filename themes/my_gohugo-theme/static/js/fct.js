<script type="text/javascript">
   function Hide() {
   var valueButton = document.getElementById("archivedeventsbutton").value
       if(valueButton == "Display Past Events")
       {
           document.getElementById("archivedeventsbutton").value = "Hide Past Events";
           document.getElementById("archivedevents").style.display = 'block';
       }
       else
       {
           document.getElementById("archivedeventsbutton").value = "Display Past Events";
           document.getElementById("archivedevents").style.display = 'none';
       }
   }
</script>