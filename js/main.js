function validateForm(){
	valor = document.getElementById('name').value;
	if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
		alert ("El campo " + 'nombre' + " está vacio y es OBLIGATORIO");
		return false;
        }
		//else (valorNombre.charAt(0).toUpperCase() !== valorNombre.charAt(0)){
		//alert('Nombre no válido, primera letra mayúscula')
		//return false;
	//}

	


	function validateApellido(){

		valor = document.getElementById('lastname').value;
		if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
			alert ("El campo " + 'Apellido' + " está vacio y es OBLIGATORIO");
			return false;

		}
	}
	validateApellido();
	function validarEmail(){
		valor = document.getElementById('input-email').value;
		if (!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor))){
			alert ("El campo " + 'Email' + " está vacio y es OBLIGATORIO");
			return false;
		}
	}

	validarEmail();



	function  CheckPassword (){ 
		valor = document.getElementById('input-password').value;  
		var  valor = / ^ [A-Za-z] \ w {7,14} $ /;  
		if (inputtxt.value.match(valor))   
		{   
			alert ( 'correcta, pruebe con otro ...' )  
			return true ;   
		}  
		else  
		{   
			alert ("incorrecto ...! ")  
			return false ;    
		}
		CheckPassword();
	}

	var caracteres = " abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

}/* Escribe tú código aquí */
