<?php

  // クロスオリジンを許可する
  header( "Access-Control-Allow-Origin:*" );
  // ヘッダーにコンテンツの種類を設定する
  header( "Content-Type:application/json" );

  $products = [
    "course" => [
      [
        "title" => "ITパスポート",
        "description" => "ITパスポートとはを載せたいサンプルテキスト。サンプルテキスト。サンプルテキスト。",
        "month" => "5",
        "contents" => "企業と法務/経営戦略/システム戦略開発技術/プロジェクトマネジメントサービスマネジメント/基礎理論 など"
      ],
      [
        "title" => "CCNA",
        "description" => "CCNAとはを載せたいサンプルテキスト。サンプルテキスト。サンプルテキスト。",
        "month" => "5.5",
        "contents" => "ネットワークの基礎/TCPIPプロトコルの仕組み/Ciscoルーターの基本LANの基礎/LANスイッチング など"
      ],
      [
        "title" => "LinuC",
        "description" => "ITパスポートとはを載せたいサンプルテキスト。サンプルテキスト。サンプルテキスト。",
        "month" => "6.5",
        "contents" => "Linuxのインストールと仮想マシン・コンテナの利用/ファイル・ディレクトリの操作と管理 など"
      ],
    ],
    "style" => [
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
    ],
    "user" => [
      [
        "course" => "ITパスポート",
        "headline" => "利用者の声",
        "text" => "ITパスポートとはを載せたいサンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。"
      ],
      [
        "course" => "CCNA",
        "headline" => "利用者の声",
        "text" => "CCNAを載せたいサンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。"
      ],
    ],
    "faq" => [
      [
        "question" => "サンプルテキスト？",
        "answer" => "サンプルテキストです！サンプルテキストです！サンプルテキストです！",
      ],
      [
        "question" => "サンプルテキスト？",
        "answer" => "サンプルテキストです！サンプルテキストです！サンプルテキストです！",
      ],
    ]
  ];

  print json_encode($products);