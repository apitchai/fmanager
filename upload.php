<?php

$currentDir = getcwd();
$uploadDirectory = "/uploads/";

$fileObj = $_FILES['fileupload'];
$tmpName = $fileObj['tmp_name'];
$fileName= $fileObj['name'];
$fileName=rand(11245,5687).$fileName;

$uploadPath = $currentDir . $uploadDirectory . basename($fileName);

$res=move_uploaded_file($tmpName, $uploadPath);
if($res) {
	$msg='Uploaded successfully';
}
else {
	$msg='Error';
}
echo $msg;
?>
