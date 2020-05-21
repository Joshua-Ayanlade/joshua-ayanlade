<?php

    $name= $_POST["fullname"];
    $email= $_POST["email"];
    $tel= $_POST["tel"];
    $message= $_POST["message"];


    $email_from= "joshua-ayanlade.github.io/joshua-ayanlade";

    $email_subject= "New Form Submission";

    $email_body= "Full Name: $name.\n".
                    "Email: $email.\n".
                        "Tel: $tel.\n".
                            "Message: $message.\n";


    $to= "ayanladeiyanu@gmail.com";

    $headers= "From: $email_from\r\n";

    $headers.= "Reply-To: $email\r\n";

    mail($to,$email_subject,$email_body, $headers);

    header("Location: index.html");


?>