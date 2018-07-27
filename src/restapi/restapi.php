<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$data = json_decode(file_get_contents("php://input"));

switch($data->id) {
  case "docs":
    $resp = file_get_contents($_SERVER['DOCUMENT_ROOT'] . '/docs.json');
    break;
  case "sveden":
    $resp = file_get_contents($_SERVER['DOCUMENT_ROOT'] . '/sveden.json');
    break;
  case "exam":
    $resp = file_get_contents($_SERVER['DOCUMENT_ROOT'] . '/exam.json');
    break;
  case "konkurs":
    $resp = file_get_contents($_SERVER['DOCUMENT_ROOT'] . '/konkurs/' . $data->filename);
    break;
  case "enrolled":
    $resp = file_get_contents($_SERVER['DOCUMENT_ROOT'] . '/enrolled/' . $data->filename);
    break;

  default: break;
}

echo $resp;
?>