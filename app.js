const roles = [
  "住民",
  "鍵保管者",
  "町会長",
  "施設管理者",
  "避難所運営委員会総務班",
  "避難所運営委員会被災者管理班",
  "避難所運営委員会情報広報班",
  "避難所運営委員会施設管理班",
  "避難所運営委員会救護班",
  "避難所運営委員会食料物資班",
  "避難所運営委員会衛生班",
  "避難所運営委員会ボランティア班"
];

// startMin: 地震発生から何分後に始めるか
// endMin: 何分後までに終える目安か
// まずはサンプルです。実際の地域マニュアルに合わせて書き換えてください。
const tasks = [
  {
      id: "resident-001",
      role: "住民",
      startMin: 0,
      endMin: 2,
      title: "自分の身を守る",
      detail: "テーブルの下に入る、落下物から頭を守る、固定していない家具から離れる。調理中であれば台所から離れる。外にいるときは、かばんなどで頭を守る。",
      note: "揺れている最中に慌てて外へ出ない。まず自分の安全を最優先する。"
  },
  {
      id: "resident-002",
      role: "住民",
      startMin: 2,
      endMin: 5,
      title: "火の始末・出口の確保",
      detail: "揺れがおさまったら火の始末。出火していたら小さい火の内に消火。余震に備えて、ドアを開けるなど出口の確保。",
      note: "ガラスの破片などでけがをしないように靴を履く。"
  },
  {
      id: "resident-003",
      role: "住民",
      startMin: 5,
      endMin: 10,
      title: "我が家の安全確保",
      detail: "家族の安否確認。家屋の被害状況を点検し、余震等で被害拡大のおそれがあれば避難の準備。ラジオなどで情報収集。",
      note: "未確認情報だけで判断しない。"
  },
  {
      id: "resident-004",
      role: "住民",
      startMin: 10,
      endMin: 60,
      title: "町内で定めた集合場所に集まる",
      detail: "隣近所で生き埋めになっている人はいないか、火災が起きていないか、声を掛け合って確認。生き埋めやけが人がいないか確認しながら集合場所に集まる。",
      note: "安全な道を通り、町内で決められた集合場所に集合する。"
  },
  {
      id: "resident-005",
      role: "住民",
      startMin: 60,
      endMin: 720,
      title: "共助開始",
      detail: "隣近所で生き埋めになっている人はいないか、火災が起きていないか、声を掛け合って確認。生き埋めやけが人がいれば協力し合って救出救護。共助実施者以外の者は、学区の待機場所である植松公園に移動する。",
      note: "自分の身の安全を最優先として活動する。"
  },
  {
      id: "resident-006",
      role: "住民",
      startMin: 60,
      endMin: 120,
      title: "待機場所である植松公園から避難所（屋内運動場）に移動",
      detail: "自宅が危険な場合は、ためらわず避難する。ブロック塀、電線、倒壊家屋に注意し安全な道を通り、各町内ごとに定められた集合場所をへて学区の待機場所である植松公園で待機する。植松公園から町内ごとに避難所（屋内運動場）に移動する。避難するときには、水、薬、携帯、充電器、貴重品、靴、防寒着などを確認する。生活ルール、各種情報を確認する。",
      note: "避難所に入るときに町内ごとの人数の確認をしておく。体調の悪い人、けが人は救護室に誘導してもらう。"
  },
  {
      id: "resident-007",
      role: "住民",
      startMin:120,
      endMin: 4320,
      title: "自分で生活を守る",
      detail: "電気・水道などのライフラインをはじめ食料の流通が途絶えるため、3日間程度は自宅にある飲料水・食料などでしのぐ。隣近所で食料を持ち寄って炊き出しをする。",
      note: "最低3日間の備蓄が必要。"
  },
  {
      id: "resident-008",
      role: "住民",
      startMin: 4320,
      endMin: 10080,
      title: "健康に気を付け、生活のペースをつかむ",
      detail: "被害の状況なども把握できるようになるので、自分の健康に気を付け生活のペースをつかむ。",
      note: "災害関連死に気を付ける。"
  },
 
  {
      id: "key-001",
      role: "鍵保管者",
      startMin: 0,
      endMin: 2,
      title: "自分の身を守る",
      detail: "テーブルの下に入る、落下物から頭を守る、固定していない家具から離れる。調理中であれば台所から離れる。外にいるときは、かばんなどで頭を守る。",
      note: "揺れている最中に慌てて外へ出ない。まず自分の安全を最優先する。"
  },
  {
      id: "key-002",
      role: "鍵保管者",
      startMin: 2,
      endMin: 5,
      title: "火の始末・出口の確保",
      detail: "揺れがおさまったら火の始末。出火していたら小さい火の内に消火。余震に備えて、ドアを開けるなど出口の確保。",
      note: "ガラスの破片などでけがをしないように靴を履く。"
  },
  {
      id: "key-003",
      role: "鍵保管者",
      startMin: 5,
      endMin: 10,
      title: "我が家の安全確保",
      detail: "家族の安否確認。家屋の被害状況を点検し、鍵を持って駆け付けられるか判断する。",
      note: "鍵保管者は自主防災会で2人、庶務が1人さらにホテルの防災センターに保管されている。"
  },
  {
      id: "key-004",
      role: "鍵保管者",
      startMin: 10,
      endMin: 30,
      title: "自治会館入り口の鍵を持って駆け付ける",
      detail: "施設管理者（ホテル防災センター要員）及び避難所運営委員会施設管理班が避難所の安全確認のため駆け付けることとなっているので、自治会館入り口の鍵を開錠して準備する。",
      note: "避難所の安全確認を行う者が不在の場合は、鍵保管者が代行する。"
  },
  {
      id: "key-005",
      role: "鍵保管者",
      startMin: 30,
      endMin: 60,
      title: "避難所の安全確認のため各施設の開錠をする",
      detail: "サロン室、自治会館、屋内運動場、倉庫、防災倉庫を開錠する。",
      note: "避難所の安全確認を行う者が不在の場合は、鍵保管者が代行する。"
  },

  {
      id: "sisetukanri-001",
      role: "施設管理者",
      startMin: 0,
      endMin: 2,
      title: "自分の身を守る",
      detail: "テーブルの下に入る、落下物から頭を守る、固定していない什器から離れる。",
      note: "揺れている最中に慌てて外へ出ない。まず自分の安全を最優先する。"
  },
  {
      id: "sisetukanri-002",
      role: "施設管理者",
      startMin: 2,
      endMin: 5,
      title: "火の始末・出口の確保",
      detail: "揺れがおさまったら火の始末。出火していたら小さい火の内に消火。余震に備えて、ドアを開けるなど出口の確保。",
      note: "ガラスの破片などでけがをしないように靴を履く。"
  },
  {
      id: "sisetukanri-003",
      role: "施設管理者",
      startMin: 5,
      endMin: 10,
      title: "防災センターの安全確保",
      detail: "職員の安否確認。施設の被害状況を点検し、避難所に駆け付けられるか判断する。",
      note: "防災センター要員には複数人が定められている。"
  },
  {
      id: "sisetukanri-004",
      role: "施設管理者",
      startMin:10,
      endMin: 60,      
      title: "自治会館入り口の鍵を持って駆け付けて、安全確認をする",
      detail: "避難所の安全確認終了後、自治会館に入る。",
      note: "避難所は施設全体として植柳コミュニティーセンターと命名されている。各施設として自治会館、サロン室、屋内運動場、倉庫及び防災倉庫がある。"
  }, 
　{
    id: "sisetukanri-005",
    role: "施設管理者",
    startMin: 60,
    endMin: 120,
    title: "避難所の安全再確認",
    detail: "避難所内の水漏れ、ガラス窓の割れ、照明設備の落下、天井の落下等施設の安全を再確認する。異常が発見された場合は応急措置をする。",
    note: "避難所は新耐震基準で建築されているため、大きな被害は想定できないが、スプリンクラー設備の配管等の被害の報告は過去にある。"
},

  {
      id: "soumuhan-001",
      role: "避難所運営委員会総務班",
      startMin: 0,
      endMin: 2,
      title: "自分の身を守る",
      detail: "テーブルの下に入る、落下物から頭を守る、固定していない家具から離れる。調理中であれば台所から離れる。外にいるときは、かばんなどで頭を守る。",
      note: "揺れている最中に慌てて外へ出ない。まず自分の安全を最優先する。"
  },
  {
      id: "soumuhan-002",
      role: "避難所運営委員会総務班",
      startMin: 2,
      endMin: 5,
      title: "火の始末・出口の確保",
      detail: "揺れがおさまったら火の始末。出火していたら小さい火の内に消火。余震に備えて、ドアを開けるなど出口の確保。",
      note: "ガラスの破片などでけがをしないように靴を履く。"
  },
  {
      id: "soumuhan-003",
      role: "避難所運営委員会総務班",
      startMin: 5,
      endMin: 10,
      title: "我が家の安全確保",
      detail: "家族の安否確認。家屋の被害状況を点検し、避難所に駆け付けられるか判断する。",
      note: "班長と副班長が定められている。"
  },
  {
      id: "soumuhan-004",
      role: "避難所運営委員会総務班",
      startMin:10,
      endMin: 30,      
      title: "避難所へ駆け付ける",
      detail: "避難所の安全確認終了後、自治会館に入る。",
      note: "避難所は施設全体として植柳コミュニティーセンターと命名されている。各施設として自治会館、サロン室、屋内運動場、倉庫及び防災倉庫がある。"
  }, 
  {
      id: "soumuhan-005",
      role: "避難所運営委員会総務班",
      startMin:30,
      endMin: 60,      
      title: "避難所運営委員会のスペースを確保する",
      detail: "班長・副班長の参集状況を確認する。避難所運営委員会用机・椅子を配置する。防災無線、受令機の電源を入れ動作確認する。",
      note: "班長副班長ともに不在の場合、代替え担当を決める。"
  }, 
  {
      id: "soumuhan-006",
      role: "避難所運営委員会総務班",
      startMin:60,
      endMin: 180,      
      title: "各種掲示を行う",
      detail: "避難所開設掲示を掲げる。利用ルール等の掲示を行う。",
      note: "掲示用資料は予め作成しておく。"
  },  
  {
      id: "soumuhan-007",
      role: "避難所運営委員会総務班",
      startMin:120,
      endMin: 180,      
      title: "区災害対策本部に避難所開設報告",
      detail: "区災害対策本部に避難所開設の報告をする。",
      note: "防災無線で連絡する。"
  }, 
  {
      id: "soumuhan-008",
      role: "避難所運営委員会総務班",
      startMin:180,
      endMin: 10080,      
      title: "避難所運営委員会を適宜開催し避難者等からの要望等を把握する",
      detail: "避難者からの要望は多岐にわたるので十分留意する。また、区災害対策本部からの要請等に留意する。",
      note: "避難所全体の動きに留意する。"
  }, 

  {
      id: "sisetukanrihan-001",
      role: "避難所運営委員会施設管理班",
      startMin: 0,
      endMin: 2,
      title: "自分の身を守る",
      detail: "テーブルの下に入る、落下物から頭を守る、固定していない家具から離れる。調理中であれば台所から離れる。外にいるときは、かばんなどで頭を守る。",
      note: "揺れている最中に慌てて外へ出ない。まず自分の安全を最優先する。"
  },
  {
      id: "sisetukanrihan-002",
      role: "避難所運営委員会施設管理班",
      startMin: 2,
      endMin: 5,
      title: "火の始末・出口の確保",
      detail: "揺れがおさまったら火の始末。出火していたら小さい火の内に消火。余震に備えて、ドアを開けるなど出口の確保。",
      note: "ガラスの破片などでけがをしないように靴を履く。"
  },
  {
      id: "sisetukanrihan-003",
      role: "避難所運営委員会施設管理班",
      startMin: 5,
      endMin: 10,
      title: "我が家の安全確保",
      detail: "家族の安否確認。家屋の被害状況を点検し、避難所に駆け付けられるか判断する。",
      note: "班長と副班長が定められている。"
  },
  {
      id: "sisetukanrihan-004",
      role: "避難所運営委員会施設管理班",
      startMin: 10,
      endMin: 60,
      title: "自治会館入り口に駆け付けて、安全確認をする",
      detail: "避難所の安全確認を行う。",
      note: "避難所は、施設全体として植柳コミュニティーセンターと命名されている。各施設として、自治会館、サロン室、屋内運動場、倉庫及び防災倉庫がある。"
  },
　{
    id: "sisetukanrihan-005",
    role: "避難所運営委員会施設管理班",
    startMin: 60,
    endMin: 120,
    title: "避難所の安全再確認",
    detail: "避難所内の水漏れ、ガラス窓の割れ、照明設備の落下、天井の落下等施設の安全を再確認する。異常が発見された場合は、施設管理者に報告し応急措置をする。",
    note: "避難所は新耐震基準で建築されているため、大きな被害は想定できないが、スプリンクラー設備の配管等の被害の報告は過去にある。"
},
　{
    id: "sisetukanrihan-006",
    role: "避難所運営委員会施設管理班",
    startMin: 120,
    endMin: 360,
    title: "停電対策",
    detail: "外部電源が遮断されても自家発電設備が72時間稼働する。この場合一定の照明は確保され、コンセントにも一定の電力が供給される。完全停電に備えて、太陽パネル付き蓄電池設備を太陽の当たるところでパネルを展開しておく。携帯の充電に使用する。",
    note: "自家発電設備は公称72時間稼働とされているが、節電によって引き延ばすことが可能なので、電力の使用に配慮すること。"
},
　{
    id: "sisetukanrihan-007",
    role: "避難所運営委員会施設管理班",
    startMin: 360,
    endMin: 720,
    title: "ペット対策",
    detail: "ペットを連れての避難者のために、ペット避難所を植松公園に設置する。",
    note: "ペットは犬が一般的であるが、他の種類のペットの場合、植松公園での配置に配慮すること。"
},
　{
    id: "sisetukanrihan-008",
    role: "避難所運営委員会施設管理班",
    startMin: 720,
    endMin: 840,
    title: "トイレの断水対策",
    detail: "自家発電設備が稼働を停止すると、トイレの水洗ができなくなるため、そのための準備として防災井戸周辺にバケツを準備する。",
    note: "夜間停電時には、ランタンを合わせて準備しておく。水洗ができない場合の対応は、予めトイレ内及び避難所に説明書きを掲示しておく。"
},
　{
    id: "sisetukanrihan-009",
    role: "避難所運営委員会施設管理班",
    startMin: 840,
    endMin: 10080,
    title: "各種トイレの確保",
    detail: "トイレの水が流せなくなった場合に備え、マンホールトイレや簡易トイレを確保する。",
    note: "簡易トイレの数量の確認をしておく。"
},

  {
      id: "hisaisyakanrihani-001",
      role: "避難所運営委員会被災者管理班",
      startMin: 0,
      endMin: 2,
      title: "自分の身を守る",
      detail: "テーブルの下に入る、落下物から頭を守る、固定していない家具から離れる。調理中であれば台所から離れる。外にいるときは、かばんなどで頭を守る。",
      note: "揺れている最中に慌てて外へ出ない。まず自分の安全を最優先する。"
  },
  {
      id: "hisaisyakanrihani-002",
      role: "避難所運営委員会被災者管理班",
      startMin: 2,
      endMin: 5,
      title: "火の始末・出口の確保",
      detail: "揺れがおさまったら火の始末。出火していたら小さい火の内に消火。余震に備えて、ドアを開けるなど出口の確保。",
      note: "ガラスの破片などでけがをしないように靴を履く。"
  },
  {
      id: "hisaisyakanrihani-003",
      role: "避難所運営委員会被災者管理班",
      startMin: 5,
      endMin: 10,
      title: "我が家の安全確保",
      detail: "家族の安否確認。家屋の被害状況を点検し、避難所に駆け付けられるか判断する。",
      note: "班長と副班長が定められている。"
  },
  {
      id: "hisaisyakanrihan-004",
      role: "避難所運営委員会被災者管理班",
      startMin:10,
      endMin: 30,      
      title: "避難所に駆け付ける",
      detail: "避難所の安全確認終了後、自治会館に入る。",
      note: "避難所は施設全体として植柳コミュニティーセンターと命名されている。各施設として自治会館、サロン室、屋内運動場、倉庫及び防災倉庫がある。"
  }, 
  {
      id: "hisaisyakanrihan-005",
      role: "避難所運営委員会被災者管理班",
      startMin:30,
      endMin:360,      
      title: "避難者受付窓口開設・避難者登録",
      detail: "班長・副班長の参集状況を確認する。避難者の登録・解除（入所・退所）を行うため受付窓口を開設する。避難者名簿を作成し避難者数の把握する。",
      note: "班長副班長ともに不在の場合、代替え担当を決める。"
  }, 
  {
      id: "hisaisyakanrihan-006",
      role: "避難所運営委員会被災者管理班",
      startMin:60,
      endMin: 4320,      
      title: "避難者の問い合わせ等への対応",
      detail: "外部からの問い合わせや避難者の呼び出しに対応する。",
      note: "自治会館には、発信専用の非常用防災電話が設置されているので活用する。"
  },  
  {
      id: "hisaisyakanrihan-007",
      role: "避難所運営委員会被災者管理班",
      startMin:60,
      endMin: 4320,      
      title: "感染症防止対策",
      detail: "消毒液、マスク、体温計等の管理を行う。",
      note: "感染が疑われる場合は、区災害対策本部へ報告する。"
  }, 
  {
      id: "hisaisyakanrihan-008",
      role: "避難所運営委員会被災者管理班",
      startMin:4320,
      endMin: 10080,      
      title: "自宅避難所の把握",
      detail: "自宅での生活が可能な者は、自宅避難者として登録する。",
      note: "自宅避難者への物資、食料の配布に留意する。"
  }, 

  {
      id: "jyohokohohan-001",
      role: "避難所運営委員会情報広報班",
      startMin: 0,
      endMin: 2,
      title: "自分の身を守る",
      detail: "テーブルの下に入る、落下物から頭を守る、固定していない家具から離れる。調理中であれば台所から離れる。外にいるときは、かばんなどで頭を守る。",
      note: "揺れている最中に慌てて外へ出ない。まず自分の安全を最優先する。"
  },
  {
      id: "jyohokohohan-002",
      role: "避難所運営委員会情報広報班",
      startMin: 2,
      endMin: 5,
      title: "火の始末・出口の確保",
      detail: "揺れがおさまったら火の始末。出火していたら小さい火の内に消火。余震に備えて、ドアを開けるなど出口の確保。",
      note: "ガラスの破片などでけがをしないように靴を履く。"
  },
  {
      id: "jyohokohohan-003",
      role: "避難所運営委員会情報広報班",
      startMin: 5,
      endMin: 10,
      title: "我が家の安全確保",
      detail: "家族の安否確認。家屋の被害状況を点検し、避難所に駆け付けられるか判断する。",
      note: "班長と副班長が定められている。"
  },
  {
      id: "jyohokohohan-004",
      role: "避難所運営委員会情報広報班",
      startMin:10,
      endMin: 30,      
      title: "避難所に駆け付ける",
      detail: "避難所の安全確認終了後、自治会館に入る。",
      note: "避難所は施設全体として植柳コミュニティーセンターと命名されている。各施設として自治会館、サロン室、屋内運動場、倉庫及び防災倉庫がある。"
  }, 
  {
      id: "jyohokohohan-005",
      role: "避難所運営委員会情報広報班",
      startMin:30,
      endMin: 720,      
      title: "避難所内外での情報収集と広報",
      detail: "災害の規模・広がりをラジオ等で情報収集し、区域の置かれている状況を把握し広報する。避難所運営委員会での決定事項等を避難所内に掲示等で広報する。",
      note: "班長副班長ともに不在の場合、代替え担当を決める。"
  }, 
  {
      id: "jyohokohohan-006",
      role: "避難所運営委員会情報広報班",
      startMin:60,
      endMin: 10080,      
      title: "区役所等からの情報の把握",
      detail: "区役所からの同報無線の情報を把握し地域全体の災害の状況を把握する。",
      note: "自治会館には、同報無線が設置されているので活用する。"
  },  

  {
      id: "kyugohan-001",
      role: "避難所運営委員会救護班",
      startMin: 0,
      endMin: 2,
      title: "自分の身を守る",
      detail: "テーブルの下に入る、落下物から頭を守る、固定していない家具から離れる。調理中であれば台所から離れる。外にいるときは、かばんなどで頭を守る。",
      note: "揺れている最中に慌てて外へ出ない。まず自分の安全を最優先する。"
  },
  {
      id: "kyugohan-002",
      role: "避難所運営委員会救護班",
      startMin: 2,
      endMin: 5,
      title: "火の始末・出口の確保",
      detail: "揺れがおさまったら火の始末。出火していたら小さい火の内に消火。余震に備えて、ドアを開けるなど出口の確保。",
      note: "ガラスの破片などでけがをしないように靴を履く。"
  },
  {
      id: "kyugohan-003",
      role: "避難所運営委員会救護班",
      startMin: 5,
      endMin: 10,
      title: "我が家の安全確保",
      detail: "家族の安否確認。家屋の被害状況を点検し、避難所に駆け付けられるか判断する。",
      note: "班長と副班長が定められている。"
  },
  {
      id: "kyugohan-004",
      role: "避難所運営委員会救護班",
      startMin:10,
      endMin: 30,      
      title: "避難所に駆け付ける",
      detail: "避難所の安全確認終了後、自治会館に入る。",
      note: "避難所は施設全体として植柳コミュニティーセンターと命名されている。各施設として自治会館、サロン室、屋内運動場、倉庫及び防災倉庫がある。"
  }, 
  {
      id: "kyugohan-005",
      role: "避難所運営委員会救護班",
      startMin:30,
      endMin: 360,      
      title: "傷病者、体調不良者の把握",
      detail: "班長・副班長の参集状況を確認する。プライバシーに配慮しつつ避難所内の傷病者、体調不良者を把握する。",
      note: "班長副班長ともに不在の場合、代替え担当を決める。"
  }, 
  {
      id: "kyugohan-006",
      role: "避難所運営委員会救護班",
      startMin:60,
      endMin: 360,      
      title: "近隣の医療機関の開設状況を把握",
      detail: "近隣の医療機関の開設状況を把握し協力を依頼する。避難所内で医師や看護師など専門家を募る。",
      note: "備蓄の医薬品の種類と数量を把握しておく。"
  },  
  {
      id: "kyugohan-007",
      role: "避難所運営委員会救護班",
      startMin:180,
      endMin: 10080,      
      title: "要配慮者の支援",
      detail: "プライバシーに配慮しつつ避難所内の要配慮者を把握する。要配慮者については、本人や家族と相談のうえ福祉避難所などへの移転も検討する。",
      note: "福祉避難所への移転は区災害対策本部と調整する。対象者は障害度4及び5の者とされている。"
  }, 

  {
      id: "syokuryobussihan-001",
      role: "避難所運営委員会食料物資班",
      startMin: 0,
      endMin: 2,
      title: "自分の身を守る",
      detail: "テーブルの下に入る、落下物から頭を守る、固定していない家具から離れる。調理中であれば台所から離れる。外にいるときは、かばんなどで頭を守る。",
      note: "揺れている最中に慌てて外へ出ない。まず自分の安全を最優先する。"
  },
  {
      id: "syokuryobussihan-002",
      role: "避難所運営委員会食料物資班",
      startMin: 2,
      endMin: 5,
      title: "火の始末・出口の確保",
      detail: "揺れがおさまったら火の始末。出火していたら小さい火の内に消火。余震に備えて、ドアを開けるなど出口の確保。",
      note: "ガラスの破片などでけがをしないように靴を履く。"
  },
  {
      id: "syokuryobussihan-003",
      role: "避難所運営委員会食料物資班",
      startMin: 5,
      endMin: 10,
      title: "我が家の安全確保",
      detail: "家族の安否確認。家屋の被害状況を点検し、避難所に駆け付けられるか判断する。",
      note: "班長と副班長が定められている。"
  },
  {
      id: "syokuryobussihan-004",
      role: "避難所運営委員会食料物資班",
      startMin:10,
      endMin: 30,      
      title: "避難所に駆け付ける",
      detail: "避難所の安全確認終了後、自治会館に入る。",
      note: "避難所は施設全体として植柳コミュニティーセンターと命名されている。各施設として自治会館、サロン室、屋内運動場、倉庫及び防災倉庫がある。"
  }, 
  {
      id: "syokuryobussihan-005",
      role: "避難所運営委員会食料物資班",
      startMin:30,
      endMin: 180,      
      title: "備蓄物資、食料を確認する",
      detail: "避難者数を把握し、その日に必要な物資・食料を算定する。避難者の持ち寄った物資や食料の供出の依頼、周辺の商店等から必要な物資・食料の調達を行う。",
      note: "班長副班長ともに不在の場合、代替え担当を決める。"
  }, 
  {
      id: "syokuryobussihan-006",
      role: "避難所運営委員会食料物資班",
      startMin:60,
      endMin: 720,      
      title: "物資、食料の受入れ・配布",
      detail: "荷下ろし場所、保管場所等を用意する。配布ルールを定め実施する。避難者数に足りない場合は、お年寄り、子供、妖婦などを優先的に配布する。在宅避難者への物資、食料配布については被災者管理班と連携する。",
      note: "物資、食料の数量の把握は常に行う。"
  },  
  {
      id: "syokuryobussihan-007",
      role: "避難所運営委員会食料物資班",
      startMin:360,
      endMin:10080,      
      title: "炊き出しへの対応",
      detail: "炊き出しのための設備や人員を確保する。",
      note: "炊き出しはカセットコンロを用いる。場合によっては、植松公園のかまどベンチを活用する。"
  }, 

  {
      id: "eiseihan-001",
      role: "避難所運営委員会衛生班",
      startMin: 0,
      endMin: 2,
      title: "自分の身を守る",
      detail: "テーブルの下に入る、落下物から頭を守る、固定していない家具から離れる。調理中であれば台所から離れる。外にいるときは、かばんなどで頭を守る。",
      note: "揺れている最中に慌てて外へ出ない。まず自分の安全を最優先する。"
  },
  {
      id: "eiseihan-002",
      role: "避難所運営委員会衛生班",
      startMin: 2,
      endMin: 5,
      title: "火の始末・出口の確保",
      detail: "揺れがおさまったら火の始末。出火していたら小さい火の内に消火。余震に備えて、ドアを開けるなど出口の確保。",
      note: "ガラスの破片などでけがをしないように靴を履く。"
  },
  {
      id: "eiseihan-003",
      role: "避難所運営委員会衛生班",
      startMin: 5,
      endMin: 10,
      title: "我が家の安全確保",
      detail: "家族の安否確認。家屋の被害状況を点検し、避難所に駆け付けられるか判断する。",
      note: "班長と副班長が定められている。"
  },
  {
      id: "eiseihan-004",
      role: "避難所運営委員会衛生班",
      startMin:10,
      endMin: 30,      
      title: "避難所に駆け付ける",
      detail: "避難所の安全確認終了後、自治会館に入る。",
      note: "避難所は施設全体として植柳コミュニティーセンターと命名されている。各施設として自治会館、サロン室、屋内運動場、倉庫及び防災倉庫がある。"
  }, 
  {
      id: "eiseihan-005",
      role: "避難所運営委員会衛生班",
      startMin:30,
      endMin: 4320,      
      title: "トイレの確保",
      detail: "外部停電が無ければトイレは水洗で通常使用できる。外部停電し自家発電稼働時もトイレは水洗で通常使用できる。",
      note: "72時間の自家発電稼働時はトイレは通常使用できる。"
  }, 
  {
      id: "eiseihan-006",
      role: "避難所運営委員会衛生班",
      startMin:4320,
      endMin: 10080,      
      title: "自家発電停止後のトイレの確保",
      detail: "自家発電が停止すると、貯水槽からの水の汲み上げができないため、トイレの水洗は使えなくなるので、防災井戸から水を汲み上げてバケツでトイレに運ぶこととなる。マンホールトイレも設置しておく。",
      note: "防災井戸の傍にバケツの準備をしておく。"
  },  
  {
      id: "eiseihan-007",
      role: "避難所運営委員会衛生班",
      startMin:180,
      endMin: 4320,      
      title: "ごみ処理",
      detail: "ごみ集積場所、掃除のルール決定",
      note: "ごみの集積場所は、当面植松公園とする。"
  }, 
  {
      id: "eiseihan-008",
      role: "避難所運営委員会衛生班",
      startMin:210,
      endMin: 4320,      
      title: "ペット避難対策",
      detail: "ペットの避難先は植松公園とする",
      note: "植松公園にペット用のテントを設置する。"
  },

  {
      id: "boranthiahan-001",
      role: "避難所運営委員会ボランティア班",
      startMin: 0,
      endMin: 2,
      title: "自分の身を守る",
      detail: "テーブルの下に入る、落下物から頭を守る、固定していない家具から離れる。調理中であれば台所から離れる。外にいるときは、かばんなどで頭を守る。",
      note: "揺れている最中に慌てて外へ出ない。まず自分の安全を最優先する。"
  },
  {
      id: "boranthiahan-002",
      role: "避難所運営委員会ボランティア班",
      startMin: 2,
      endMin: 5,
      title: "火の始末・出口の確保",
      detail: "揺れがおさまったら火の始末。出火していたら小さい火の内に消火。余震に備えて、ドアを開けるなど出口の確保。",
      note: "ガラスの破片などでけがをしないように靴を履く。"
  },
  {
      id: "boranthiahan-003",
      role: "避難所運営委員会ボランティア班",
      startMin: 5,
      endMin: 10,
      title: "我が家の安全確保",
      detail: "家族の安否確認。家屋の被害状況を点検し、避難所に駆け付けられるか判断する。",
      note: "班長と副班長が定められている。"
  },
  {
      id: "boranthiahan-004",
      role: "避難所運営委員会ボランティア班",
      startMin:10,
      endMin: 30,      
      title: "避難所に駆け付ける",
      detail: "避難所の安全確認終了後、自治会館に入る。",
      note: "避難所は施設全体として植柳コミュニティーセンターと命名されている。各施設として自治会館、サロン室、屋内運動場、倉庫及び防災倉庫がある。"
  }, 
  {
      id: "boranthiahan-005",
      role: "避難所運営委員会ボランティア班",
      startMin:720,
      endMin: 10080,      
      title: "ボランティアの要望を整理",
      detail: "ボランティアが必要な項目を整理しておく。",
      note: "下京区災害ボランティアセンターと連絡調整をする。"
  }, 
  {
      id: "boranthiahan-006",
      role: "避難所運営委員会ボランティア班",
      startMin: 10080,
      endMin: 43200,      
      title: "ボランティアの作業調整",
      detail: "ボランティアセンターと具体的な作業調整。",
      note: "下京区災害ボランティアセンターと連絡調整をする。"
  }, 

  {
      id: "chair-001",
      role: "町会長",
      startMin: 0,
      endMin: 2,
      title: "自分の身を守る",
      detail: "テーブルの下に入る、落下物から頭を守る、固定していない家具から離れる。調理中であれば台所から離れる。外にいるときは、かばんなどで頭を守る。",
      note: "揺れている最中に慌てて外へ出ない。まず自分の安全を最優先する。"
  },
  {
      id: "chair-002",
      role: "町会長",
      startMin: 2,
      endMin: 5,
      title: "火の始末・出口の確保",
      detail: "揺れがおさまったら火の始末。出火していたら小さい火の内に消火。余震に備えて、ドアを開けるなど出口の確保。",
      note: "ガラスの破片などでけがをしないように靴を履く。"
  },
  {
      id: "chair-003",
      role: "町会長",
      startMin: 5,
      endMin: 10,
      title: "我が家の安全確保",
      detail: "家族の安否確認。家屋の被害状況を点検し、余震等で被害拡大のおそれがあれば避難の準備。ラジオなどで情報収集。",
      note: "未確認情報だけで判断しない。"
  },
  {
      id: "chair-004",
      role: "町会長",
      startMin: 10,
      endMin: 60,
      title: "町内の概況を把握するとともに町内で定めた集合場所に集まる",
      detail: "隣近所で生き埋めになっている人はいないか、火災が起きていないか、声を掛け合って確認。生き埋めやけが人がいれば協力し合って救出救護。共助実施者以外の者は、学区の待機場所である植松公園に移動する。",
      note: "安全な道を通り、町内で決められた集合場所に集合する。"
  },
  {
      id: "chair-005",
      role: "町会長",
      startMin: 60,
      endMin: 120,
      title: "植松公園から避難所（屋内運動場）に移動",
      detail: "ブロック塀、電線、倒壊家屋に注意し安全な道を通り、各町内ごとに避難所（屋内運動場）に集合する。避難するときには、水、薬、携帯、充電器、貴重品、靴、防寒着などを確認する。生活ルール、各種情報を確認する。",
      note: "避難所に入るときに町内ごとの人数の確認をしておく。体調の悪い人、けが人は救護室に誘導してもらうよう依頼する。"
  },
  {
      id: "chair-006",
      role: "町会長",
      startMin: 120,
      endMin: 720,
      title: "避難所で情報収集・情報提供を行う",
      detail: "避難者状況などを整理して伝えるとともに、町内の要望等をとりまとめ必要な支援を避難所運営委員会に伝える。",
      note: "情報は時刻付きで記録する。"
  },
  {
      id: "chair-007",
      role: "町会長",
      startMin:120,
      endMin: 4320,
      title: "自分で生活を守る",
      detail: "電気・水道などのライフラインをはじめ食料の流通が途絶えるため、3日間程度は自宅にある飲料水・食料などでしのぐ。隣近所で食料を持ち寄って炊き出しをする。",
      note: "最低3日間の備蓄が必要。"
  }、
{
    id: "chair-008",
    role: "町会長",
startMin: 4320,
endMin: 10080,
title: "健康に気を付け、生活のペースをつかむ",
detail: "被害の状況なども把握できるようになるので、自分の健康に気を付け生活のペースをつかむ。町会長として町内全体の状況の把握に努める。",
note: "災害関連死に気を付ける。"
}

];

const roleSelect = document.getElementById("roleSelect");
const quakeTimeInput = document.getElementById("quakeTimeInput");
const elapsedText = document.getElementById("elapsedText");
const summaryText = document.getElementById("summaryText");
const taskCount = document.getElementById("taskCount");
const taskList = document.getElementById("taskList");
const upcomingList = document.getElementById("upcomingList");
const timelineList = document.getElementById("timelineList");
const timelineScale = document.getElementById("timelineScale");
const timelineNow = document.getElementById("timelineNow");
const resetChecksButton = document.getElementById("resetChecksButton");

const STORAGE_PREFIX = "bousai-earthquake-v2";

function pad(n) {
    return String(n).padStart(2”0");
}

function toDatetimeLocalValue(date) {
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function formatElapsed(minutes) {
    if (minutes < 0) return "未来の時刻です";
    if (minutes < 60) return `${minutes}分経過`;
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    if (h < 24) return `${h}時間${m > 0 ? m + "分" : ""}経過`;
    const d = Math.floor(h / 24);
    const rh = h % 24;
    return `${d}日${rh > 0 ? rh + "時間" : ""}経過`;
}

function formatRange(start, end) {
    return `${formatTimePoint(start)}〜${formatTimePoint(end)}`;
}

function formatTimePoint(min) {
    if (min < 60) return `${min}分`;
    const h = Math.floor(min / 60);
    const m = min % 60;
    if (m === 0) return `${h}時間`;
    return `${h}時間${m}分`;
}

function getElapsedMinutes() {
    const value = quakeTimeInput.value;
    if (!value) return null;
    const quakeTime = new Date(value);
    if (Number.isNaN(quakeTime.getTime())) return null;
    return Math.floor((Date.now() - quakeTime.getTime()) / 60000);
}

function checksKey() {
    const role = roleSelect.value || "";
    const time = quakeTimeInput.value || "no-time";
    return `${STORAGE_PREFIX}:checks:${role}:${time}`;
}

function getChecks() {
    try {
        return JSON.parse(localStorage.getItem(checksKey()) || "{}");
    } catch {
        return {};
    }
}

function saveCheck(taskId, checked) {
    const checks = getChecks();
    checks[taskId] = checked;
    localStorage.setItem(checksKey(), JSON.stringify(checks));
}

function initRoleSelect() {
    roleSelect.innerHTML = roles.map(role => `<option value="${role}">${role}</option>`).join("");
    roleSelect.value = localStorage.getItem(`${STORAGE_PREFIX}:role`) || "町民";
}

function initQuakeTime() {
    const saved = localStorage.getItem(`${STORAGE_PREFIX}:quakeTime`);
    if (saved) {
        quakeTimeInput.value = saved;
    } else {
        const thirtyMinutesAgo = new Date(Date.now() - 30 * 60000);
        quakeTimeInput.value = toDatetimeLocalValue(thirtyMinutesAgo);
    }
}

function getRoleTasks() {
    return tasks
      .filter(task => task.role === roleSelect.value)
      .sort((a, b) => a.startMin - b.startMin || a.endMin - b.endMin);
}

function statusForTask(task, elapsed, checked) {
    if (checked) return { label: "完了", className: "done" };
    if (elapsed >= task.startMin && elapsed <= task.endMin) return { label: "今やる", className: "now" };
    if (elapsed > task.endMin) return { label: "要確認", className: "overdue" };
    return { label: "予定", className: "" };
}

function renderTasks(elapsed) {
    const checks = getChecks();
    const roleTasks = getRoleTasks();
    const dueTasks = roleTasks.filter(task => elapsed !== null && elapsed >= task.startMin);
    const upcomingTasks = roleTasks.filter(task => elapsed === null || elapsed < task.startMin);

    taskCount.textContent = `${dueTasks.length}件`;

    if (elapsed === null) {
        elapsedText.textContent = "発生時刻を入力してください。";
        summaryText.textContent = "発生時刻を入力すると、今までにやるべきことが表示されます。";
    } else if (elapsed < 0) {
        elapsedText.textContent = "発生時刻が未来になっています。入力を確認してください。";
        summaryText.textContent = "未来の時刻は計算できません。";
    } else {
        elapsedText.textContent = `地震発生から ${formatElapsed(elapsed)} です。`;
        const unchecked = dueTasks.filter(task => !checks[task.id]).length;
        summaryText.textContent = `${roleSelect.value}向けに、現時点までの対象作業を表示しています。未完了は ${unchecked}件 です。`;
    }

    if (elapsed === null || elapsed < 0) {
        taskList.innerHTML = `<div class="empty">発生時刻を正しく入力してください。</div>`;
    } else if (dueTasks.length === 0) {
        taskList.innerHTML = `<div class="empty">まだ表示対象の作業はありません。</div>`;
    } else {
        taskList.innerHTML = dueTasks.map(task => {
            const checked = !!checks[task.id];
            const status = statusForTask(task, elapsed, checked);
            return `
        <article class="task-item ${checked ? "completed" : ""}">
          <div class="task-head">
            <input class="task-check" type="checkbox" data-task-id="${task.id}" ${checked ? "checked" : ""} aria-label="${task.title}を完了" />
            <div>
              <h3 class="task-title">${task.title}</h3>
              <div class="task-meta">
                <span class="pill ${status.className}">${status.label}</span>
                <span class="pill">目安：${formatRange(task.startMin, task.endMin)}</span>
              </div>
              <p class="task-detail">${task.detail}</p>
              ${task.note ? `<p class="task-note">注意：${task.note}</p>` : ""}
            </div>
          </div>
        </article>
      `;
        }).join("");

        document.querySelectorAll(".task-check").forEach(input => {
            input.addEventListener("change", event => {
                saveCheck(event.target.dataset.taskId, event.target.checked);
                renderAll();
            });
        });
    }

    if (upcomingTasks.length === 0) {
        upcomingList.innerHTML = `<div class="empty">この後に予定されている作業はありません。</div>`;
    } else {
        upcomingList.innerHTML = upcomingTasks.slice(0, 8).map(task => `
      <div class="upcoming-item">
        <strong>${formatRange(task.startMin, task.endMin)}</strong>　${task.title}
      </div>
    `).join("");
    }
}

function getTimelineChartStartPx() {
    const styles = getComputedStyle(document.documentElement);
    const labelWidth = parseFloat(styles.getPropertyValue("--timeline-label-width")) || 150;
    const gap = parseFloat(styles.getPropertyValue("--timeline-gap")) || 10;
    // timeline-row には左右 padding 10px があるため、メーターの開始位置に合わせて足します。
    return labelWidth + gap + 10;
}

function setTimelineNowPosition(elapsed, maxMinutes) {
    if (elapsed === null || elapsed < 0) {
        timelineNow.style.display = "none";
        return;
    }
    timelineNow.style.display = "block";
    const chartStartPx = getTimelineChartStartPx();
    const contentWidth = Math.max(
      timelineList.scrollWidth || 0,
      timelineScale.scrollWidth + chartStartPx || 0,
      timelineWrapper.clientWidth || 0
    );
    const chartWidth = Math.max(1, contentWidth - chartStartPx - 10);
    const progress = Math.min(Math.max(elapsed / maxMinutes, 0), 1);
    const nowLeftPx = chartStartPx + chartWidth * progress;
    timelineNow.style.left = `${nowLeftPx}px`;
}

function renderTimeline(elapsed) {
    const checks = getChecks();
    const roleTasks = getRoleTasks();
    const maxTaskEnd = roleTasks.reduce((max, task) => Math.max(max, task.endMin), 360);
    const rawMax = Math.max(maxTaskEnd, elapsed || 0, 360);
    const maxMinutes = Math.min(Math.max(rawMax, 360), 1440); // 6時間〜24時間を表示

    const marks = [0, 30, 60, 180, 360, 720, 1440].filter(m => m <= maxMinutes);
    timelineScale.innerHTML = marks.map(min => {
        const left = (min / maxMinutes) * 100;
        return `<span class="scale-mark" style="left:${left}%">${formatTimePoint(min)}</span>`;
    }).join("");

    if (roleTasks.length === 0) {
        timelineList.innerHTML = `<div class="empty">この立場の作業データがまだありません。</div>`;
        setTimelineNowPosition(elapsed, maxMinutes);
        return;
    }

    timelineList.innerHTML = roleTasks.map(task => {
        const left = Math.max(0, Math.min(task.startMin, maxMinutes)) / maxMinutes * 100;
        const end = Math.max(task.startMin + 5, Math.min(task.endMin, maxMinutes));
        const width = Math.max(2, ((end - task.startMin) / maxMinutes) * 100);
        const checked = !!checks[task.id];
        const status = elapsed === null ? { className: "" } : statusForTask(task, elapsed, checked);
        return `
      <div class="timeline-row">
        <div class="timeline-label">${task.title}</div>
        <div class="timeline-track" title="${formatRange(task.startMin, task.endMin)}">
          <div class="timeline-bar ${status.className || ""}" style="left:${left}%; width:${width}%;"></div>
        </div>
      </div>
    `;
    }).join("");

    setTimelineNowPosition(elapsed, maxMinutes);
}

function renderAll() {
    localStorage.setItem(`${STORAGE_PREFIX}:role`, roleSelect.value);
    localStorage.setItem(`${STORAGE_PREFIX}:quakeTime`, quakeTimeInput.value);
    const elapsed = getElapsedMinutes();
    renderTasks(elapsed);
    renderTimeline(elapsed);
}

function setMinutesAgo(minutes) {
    const date = new Date(Date.now() - minutes * 60000);
    quakeTimeInput.value = toDatetimeLocalValue(date);
    renderAll();
}

initRoleSelect();
initQuakeTime();
renderAll();

roleSelect.addEventListener("change", renderAll);
quakeTimeInput.addEventListener("change", renderAll);
window.addEventListener("resize", renderAll);

resetChecksButton.addEventListener("click", () => {
    if (confirm("この立場・発生時刻のチェック状態をリセットしますか？")) {
        localStorage.removeItem(checksKey());
        renderAll();
    }
});

document.querySelectorAll(".small-button[data-minutes-ago]").forEach(button => {
    button.addEventListener("click", () => {
        setMinutesAgo(Number(button.dataset.minutesAgo));
    });
});

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    navigator.serviceWorker.register("service-worker.js").catch(() => {});
}
