<?php

  // クロスオリジンを許可する
  header( "Access-Control-Allow-Origin:*" );
  // ヘッダーにコンテンツの種類を設定する
  header( "Content-Type:application/json" );

  $style = [
    [
      "title" => "eラーニング",
      "en" => "e learning"
    ],
    [
      "title" => "オンライン授業",
      "en" => "online"
    ],
    [
      "title" => "対面授業",
      "en" => "Face-to-face"
    ],
		[
      "title" => "動画配信",
      "en" => "Video distribution"
    ],
  ];

  print json_encode($style);