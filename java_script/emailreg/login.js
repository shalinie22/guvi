function allnumeric(input,a)
   {
      var phnumber= /^[0-9]{10,10}$/;
      var password=/^([a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{7,7})*([!@#\$%\^\&*\)\(+=._-]{1,1})+$/g;
      var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if((input.value.match(phnumber) || input.value.match(email)) && a.value.match(password))
      {
      alert('success');
      document.form1.text1.focus();
      document.form1.Password.focus();
      return true;
      }
      else
      {
      alert(' invalid email and password');
      document.form1.text1.focus();
      document.form1.Password.focus();
      return false;
      }
   } 
