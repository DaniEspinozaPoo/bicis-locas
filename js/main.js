function validateForm(){

	function validateNombre(){

		valor = document.getElementById('name').value;
		if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
			alert ("El campo " + 'nombre' + " está vacio y es OBLIGATORIO");
			return false;
		}else if(!letrasnormales.test(valor)){
			alert("ingrese solo letras");
			return  true;
		}else if (valor.charAt(0) != valor.charAt(0).toUpperCase()){
			alert('nombre solo con mayusculas');
		}
	}
	validateNombre();

	


	function validateApellido(){

		valor = document.getElementById('lastname').value;
		if( valor == null || valor.length == 0 || /^\s+$/.test(valor)){
			alert ("El campo " + 'Apellido' + " está vacio y es OBLIGATORIO");
			return false;
		}else if(!letrasnormales.test(valor)){
			alert("ingrese solo letras");    
			return true;
		} else if (valor.charAt(0) != valor.charAt(0).toUpperCase()) {
			alert('nombre solo con mayusculas');    
		}

	}
	
	validateApellido();


	  function validarEmail(){
       caracteres = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
       valor = document.getElementById('input-email').value;
       if(valor === null || valor.length === 0){
           alert("El campo " + 'Email' + " está vacio y es OBLIGATORIO");
           return false;
       }else if(caracteres.test(valor)){
           return true;
       }
   }

	validarEmail();



	function  CheckPassword(){ 
		  
       valor = document.getElementById('input-password').value;
       if(valor == null || valor.length === 0){
           alert('la contraseña debe tener al menos 6 caracteres');
           return false;
       }else if (valor.length < 6){
           alert("incorrecto ...! ");
           return false;
       }
   }
   CheckPassword();

   function VariasBicis(){
       valor = document.getElementsByTagName('select')[0];
       var tipo = select.value;

       return tipo == 'urbana' || tipo == 'trekking' || tipo == 'electrica' || tipo == 'estatica';
   }
   VariasBicis();

}
validateForm();/* Escribe tú código aquí */
