$(document).ready(function(){
    $('.btn5').on('click',(event) =>{
        var username = $("#txt_uname").val().trim();
        var password = $("#txt_pwd").val().trim();
        var fname = $("#fname").val().trim();
        var lname = $("#lname").val().trim();
       // var address = $("#address").val().trim();
       // var pincode = $("#pin").val().trim();

        var dob = $("#date").val().trim();

        var obj ={ 
                    username: username,
                    password: password,
                    fname:fname,
                    lname:lname,
                   // address:address,
                    //pincode:pincode,
                    date:dob      
        };
        console.log(obj)
$.ajax({
                url:"http://localhost:3000/data",
                type:"POST",
                //dataType:"json",
                data:obj,
                success:function(x){
                    alert(" Register successfully" +x);
                    console.log(x);
            },

error:function(){
                alert("error in adding");

            }
        })
event.preventDefault();
})


//User login page
$('.btn').on('click',function() {
   // alert('Enter')
  var uname=$("#username").val()

  var pwd=$("#password").val()
  if(username==''&& password==''){
      alert('username or password is not entered')}
      else{
    $.ajax({
        type: "GET",
        url: 'http://localhost:3000/data',
        data: {
            username: uname,
            password: pwd
        },

       
        success:(data)=>{
        sessionStorage.setItem("key",uname)
    alert(uname+" welcome")
             console.log(data)
             window.location.replace('../html/req_appts.html')

            },
           
            
        
    
    })}

})
//Doctor login page
$('.doc').on('click',function() {
    // alert('Enter')
   var uname=$("#username").val()
 
   var pwd=$("#password").val()
   if(username==''&& password==''){
       alert('username or password is not entered')}
       else{
     $.ajax({
         type: "GET",
         url: 'http://localhost:3000/doctor',
         data: {
             username: uname,
             password: pwd
         },
 
        
         success:(data)=>{
         localStorage.setItem(username,uname)
     alert(uname+" welcome")
              console.log(data)
              window.location.replace('../html/appointmentlist.html')
 
             },
            
             
         
     
     })}
 
 })
//Appointment requestttt
    $('#mybtn').on('click',(event) =>{
        console.log("hell0")
        var name1 = $("#name").val().trim()
        var mobno1 = $("#mobno").val().trim()
        var symptom1= $("#symptom").val().trim()
        var dob = $("#date").val().trim();
        var time= $("#time").val().trim();
        var doctor =  $("#doctor").val().trim();

        var obj ={ 
                    name: name1,
                    mobno:mobno1,
                    dt:dob ,
                    tm:time,
                    symptom:symptom1,
                    doctor:doctor

        };
        console.log(obj)
        if(name1 =='' && mobno1 =='' && symptom1 == '' && dob =='' && time ==' ' && doctor == ''){
            alert('Fields are Mandatory to fill')}
            else{
$.ajax({
                url:"http://localhost:3000/appts",
                type:"POST",
                //dataType:"json",
                data:obj,

                success:function(x){
                    alert(" Register successfully" +x);
                    console.log(x);
            },

error:function(){
                alert("error in adding");

            }
        })}
})
//edit appointment 
// $('#editme').on('click',(event) =>{

// //var x=localStorage.getItem("username");
// console.log(x);

// $('#nam').val().innerhtml=data.name;
// })

//$('#mybtn2').on('click',function() {
    //alert('Enter')
//    var uname=$("#username").val()
// var uname ="saurbha"
 //  var pwd=$("#password").val()
//    if(username==''&& password==''){
//        alert('username or password is not entered')}
//        else{
  // 
  $('#form1').submit(function(e){
  
    var name1 = $("#name").val().trim()
    var dob = $("#date").val().trim();
    var time= $("#time").val().trim();
    var doctor =  $("#doctor").val().trim();


  alert(mydate)
    var mytime=$('#timeapp').val()
    
     $.ajax({
         type: "GET",
         url: 'http://localhost:3000/appts',
         data: {
             name: uname,
            // password: pwd
         },
 
        
         success:(data)=>{
        // localStorage.setItem(username,uname)
     alert(uname+" welcome")
    // console.log(data.name)
     console.log(name)
    $('.#nam').html(name1);
     //$('#status').val().innerhtml=data.status;
//    mydate.html(dt);
//     mytime.html(tm);
              console.log(data)
             // window.location.replace('../html/req_appts.html')
 
             
            
             
            }
     
     })
    
})
 //Delete an appointment
$('.del').on('click',()=>{
   var patient_appt= sessionStorage.getItem('key');
   let id ='7';
   alert(patient_appt)
   alert("Enter in delete function")
    $.ajax({
        type:"DELETE",
        url: 'http://localhost:3000/appts',
        // data:{
        //     name:patient_appt
        // }
    }).done(function(){
        alert("Deleted Successfully")
        alert(patient_appt)
    })
})

 })

    
