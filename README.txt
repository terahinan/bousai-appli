防災行動ナビ v14

主な変更点:
- 「対応Q&A」の分類を開閉式に変更しました。
- 初期表示では分類名と件数だけを表示します。
- 分類名を押すと、その分類に含まれる質問一覧が開きます。
- 質問を押すと暫定回答が開き、もう一度押すと閉じます。
- 選択した「自分の立場」に関係する分類・質問だけを表示する機能は継続しています。
- 画面上部の「最新版に更新」機能は継続しています。
- service-worker.js のキャッシュ名を bousai-earthquake-v14 に更新しました。

Q&Aを修正する場合:
app.js 内の const qandaItems = [...] を編集してください。

主な項目:
- category: 分類名
- roles: 表示対象となる立場
- question: 質問
- answer: 暫定回答または確定回答

GitHub Pagesへ反映する場合:
zipを解凍し、以下のファイルをリポジトリ直下に上書きアップロードしてください。

index.html
style.css
app.js
manifest.json
service-worker.js
icon.svg
README.txt

反映後:
インターネットへ接続した状態で、アプリ画面上部の「最新版に更新」を押してください。
古い表示が残る場合は、SafariまたはChromeで再読み込みしてください。


v15 変更点
- 「最新版に更新」の処理を安定化。Service Workerを登録解除せず更新確認し、古いアプリキャッシュを削除して再読込する方式に変更。
- iPhoneでスクロール時にresizeが発生してもQ&A全体を再描画しないよう修正。
- Q&Aを再描画する場合でも、開いている分類・質問を維持。
- Q&A回答部の「暫定回答」Status表示を削除。
- Service Workerキャッシュ名をbousai-earthquake-v15へ更新。
