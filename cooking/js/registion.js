/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
    $("#subb").click(function(){
        var user=$("#user").val();
        var pass=$("#pass").val();
        $.ajax({
            type:"POST",
            url:"login.php?action=login",
            dataType:"json",
            data:{"user":user,"pass":pass},
            success:function(json){
                if (json.success===1){
                    $("#regis").empty();
                    var div="<div><p><strong>"+json.user+"</strong> succeed login</p></div>";
                    $("#regis").append(div);
                }
                else if (json.success===0){
                    $("#regis").append("<p>username or password uncorrect</p>");
                }
                else{
                    $("#regis").append("<p>username or password not found</p>");
                };
            }
        });
            
        });
});
