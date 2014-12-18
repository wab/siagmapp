<?php

$errors         = array();  	// array to hold validation errors
$data 			= array(); 		// array to pass back data

// validate the variables ======================================================
	if (empty($_POST['name'])):
		$errors['name'] = 'param name vide';
	else: 
		$data['name'] = $_POST['name'];
	endif;

	if (empty($_POST['email'])):
		$errors['email'] = 'param email vide';
	else: 
		$data['email'] = $_POST['email'];
	endif;

	if (empty($_POST['contenu'])):
		$errors['contenu'] = 'param contenu vide';
	else: 
		$data['contenu'] = $_POST['contenu'];
	endif;

// return a response ===========================================================

	// response if there are errors
	if ( !empty($errors)) {

		// if there are items in our errors array, return those errors
		$data['success'] = false;
		$data['errors']  = $errors;
	} else {

		require('class.phpmailer.php');

		$mail = new PHPMailer;
		
		$mail->From = $_POST['email'];
		$mail->FromName = $_POST['name'];
		$mail->addAddress('wab2com@gmail.com', 'contact siagm');     // Add a recipient
		$mail->Subject = 'SiagmApp [formulaire de contact]';
		$mail->Body    = $_POST['contenu'];
		$mail->AltBody = $_POST['contenu'];

		if(!$mail->send()) {
			
			$data['success'] = true;
			$data['message'] = $mail->ErrorInfo;

		} else {
		   // if there are no errors, return a message
			$data['success'] = true;
			$data['message'] = 'Votre message a été transmis !';
		}
		
	}

	// return all our data to an AJAX call
	echo json_encode($data);