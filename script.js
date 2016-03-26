$(document).ready(function(){

/*$('#search_box').keypress(function(e){
     var code = (e.keyCode ? e.keyCode : e.which);
      if(code == 13) {
        search()
      }});         */
$("#refresh").prop("style","visibility:hidden");
function wikiSearch() {
  var search_input =  document.getElementById("search_box").value.toString();
  if (search_input !== ""){
  var url = "https://en.wikipedia.org/w/api.php";
  $.ajax({
      url: url,
    dataType:"jsonp",
        data: {
        action: "opensearch",
        search: search_input,
        limit: 10,
        format: "json",
            }
     })
    .done(function(data) {
   $("#searched").html(data[0]);
   $("#random").prop("style","visibility:hidden;");
        $("#refresh").prop("style","visibility:visible");
   $("#search_button").html("Search Again");    
   $("#search").prop("style","padding-top:0%");    
   for (var i=0;i<data[1].length;i++){
    $("#result"+i).prop("style", "background-color:white; border-radius:5px; margin-top:1%; padding-bottom:1%;");
    $("#"+"r"+i+"1").html(data[1][i]);
    $("#"+"r"+i+"1").prop("style", ("font-weight:bold; font-size:24px; padding-top:4px;"));
    $("#"+"r"+i+"2").html(data[2][i]);
    $("#"+"r"+i+"2").prop("style", "font-size:14px; padding-left:4%; padding-right:4%"); 
    $("#"+"r"+i+"3").html(data[3][i]); $("#"+"r"+i+"3").prop("href",data[3][i]);}
    }
    )
  
    .fail(function(err) {
      console.log(err);
    })
 }};
$('#search_button').on("click",wikiSearch);
function clear(){
  for (var j=0; j<10; j++){
    $("#"+"r"+j+"1").html("");
    $("#result"+j).prop("style","background-color:rgb(100,200,153);");
    $("#"+"r"+j+"2").html("");
    $("#"+"r"+j+"3").html("");  
  }
$("#searched").html("");
$("#search").prop("style","padding-top:20%");
$("#refresh").prop("style","visibility:hidden");
$("#random").prop("style","visibility:visible;");
}
$("#refresh").on("click",clear); 
  
});
