$(document).ready(function(){

    var nameValid = false
    var emailValid = false;
    var pwValid = false;
    var cpwValid = false;
    var phoneValid = false; 
    var idValid = false;
    var cardValid = false;
    var expireValid = false;


    var loginEmailValid = false;



    function emailValidation(email) {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    }

    function phoneValidation(phone) {
        var regex = /04[\d]{8}/g;
        return regex.test(phone);
      }

      function cardValidation(card) {
        var regex = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
        return regex.test(card);
    }  

    function checkValid(){
        if(nameValid == true && emailValid == true && pwValid == true && cpwValid == true && phoneValid == true && idValid == true && cardValid == true && expireValid == true){
        $("#reg-btn").removeAttr("disabled");
        }
        else{
        $("#reg-btn").attr("disabled", true);
        }
    }

    function checkValidLogin(){
        if(loginEmailValid == true){
            $("#log-btn").removeAttr("disabled");
        }
        else{
            $("#log-btn").attr("disabled", true);
        }
    }

    $('input[name="email-log"]').keyup(function(){
        if(!emailValidation($('input[name="email-log"]').val())){
            $('#error-warn-email-log').slideDown();
            loginEmailValid = false;
            checkValidLogin();
            return false;
          }
          else{
            $('#error-warn-email-log').slideUp();
            loginEmailValid = true;
            checkValidLogin();
            return false;
          }
      });

    $('.registration-form').on('submit', function(){
      alert("You have registered successfully");
    });

    $('input[name="name"]').keyup(function(){
    if($('input[name="name"]').val() == ""){
        $('#error-warn-name').slideDown();
        nameValid = false;
        checkValid();
        return false;
      }
      else{
        $('#error-warn-name').slideUp();
        nameValid = true;
        checkValid();
        return false;
      }
    });

  $('input[name="email-reg"]').keyup(function(){
    if(!emailValidation($('input[name="email-reg"]').val())){
        $('#error-warn-email').slideDown();
        emailValid = false;
        checkValid();
        return false;
      }
      else{
        $('#error-warn-email').slideUp();
        emailValid = true;
        checkValid();
        return false;
      }
  });

  $('input[name="password"]').keyup(function(){
    let pwVal = $(this).val();

    if(!pwVal.match(/[a-z]/)){
        $('#error-warn-password0').slideDown();
        pwValid = false;
      }
    else{
        $('#error-warn-password0').slideUp();
        pwValid = true;
    }

    if(pwVal.length < 7){
        $('#error-warn-password1').slideDown();
        pwValid = false;
      }
    else{
        $('#error-warn-password1').slideUp();
        pwValid = true;
    }

    if(!pwVal.match(/[A-Z]/)){
        $('#error-warn-password2').slideDown();
        pwValid = false;
      }
    else{
        $('#error-warn-password2').slideUp();
        pwValid = true;
    }

    if(!pwVal.match(/[0-9]/)){
        $('#error-warn-password3').slideDown();
        pwValid = false;
      }
    else{
        $('#error-warn-password3').slideUp();
        pwValid = true;
    }

    if(!pwVal.match(/[!@#$%^&*]/)){
        $('#error-warn-password4').slideDown();
        pwValid = false;
      }
    else{
        $('#error-warn-password4').slideUp();
        pwValid = true;
    }

    checkValid();
    return false;
  });

  $('input[name="cpassword"]').keyup(function(){
    let cpwVal = $(this).val();
    let pwVal = $('input[name="password"]').val();

    if(cpwVal != pwVal){
        $('#error-warn-password5').slideDown();
        cpwValid = false;
        checkValid();
        return false;
      }
      else{
        $('#error-warn-password5').slideUp();
       cpwValid = true;
       checkValid();
        return false;
      }
  });

  $('input[name="phone"]').keyup(function(){
    if(!phoneValidation($('input[name="phone"]').val())){
        $('#error-warn-phone').slideDown();
        phoneValid = false;
        checkValid();
        return false;
      }
      else{
        $('#error-warn-phone').slideUp();
        phoneValid = true;
        checkValid();
        return false;
      }
  });

  $('input[name="sid"]').keyup(function(){
    if($('input[name="sid"]').val().length > 6){
        $('#error-warn-id').slideDown();
        idValid = false;
        checkValid();
        return false;
      }
      else{
        $('#error-warn-id').slideUp();
        idValid = true;
        checkValid();
        return false;
      }
  });

  $('input[name="ccard"]').keyup(function(){
    if(!cardValidation($('input[name="ccard"]').val())){
        $('#error-warn-card').slideDown();
        cardValid = false;
        checkValid();
        return false;
      }
      else{
        $('#error-warn-card').slideUp();
        cardValid = true;
        checkValid();
        return false;
      }
  });

  $('input[name="edate"]').change(function(){
    var currentTime = new Date();

    var endYear = parseInt($('input[name="edate"]').val().substr(0,4));
    var endMonth = parseInt($('input[name="edate"]').val().substr(5,2));

    var currentYear = currentTime.getFullYear();
    var currentMonth = currentTime.getMonth();
    
    if(endYear - currentYear == 0){
      if(endMonth - currentMonth >= 1){
        $('#error-warn-ed').slideUp();
        expireValid = true;
        checkValid();
        return false;
      }
      else{
        $('#error-warn-ed').slideDown();
        expireValid = false;
        checkValid();
        return false;
      }  
    }
    else if(endYear - currentYear > 0){
      $('#error-warn-ed').slideUp();
        expireValid = true;
        checkValid();
        return false;
    }
    else if(endYear - currentYear < 0){
      $('#error-warn-ed').slideDown();
        expireValid = false;
        checkValid();
        return false;
    }
  });

  });