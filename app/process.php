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
		
		$mail->From = 'from@example.com';
		$mail->FromName = 'Mailer';
		$mail->addAddress('joe@example.net', 'Joe User');     // Add a recipient
		$mail->Subject = 'Here is the subject';
		$mail->Body    = 'This is the HTML message body <b>in bold!</b>';
		$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

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