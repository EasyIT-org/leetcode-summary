# LeetCode Techniques Index

本项目包含一个静态统计页面，用于浏览题目与技巧的对应关系。

## 本地预览
```bash
python3 server.py
```
打开 `http://127.0.0.1:8000`。

## 构建 GitHub Pages 站点
```bash
./scripts/build_pages.sh
```
这会生成/更新 `docs/` 目录（包含 `index.html`、`app.js`、`styles.css`、`index.json`）。

## 发布到 GitHub Pages
1. 将仓库推送到 GitHub。
2. 打开 GitHub 仓库 Settings → Pages。
3. Source 选择 **Deploy from a branch**。
4. Branch 选择 `main`（或你的默认分支），目录选择 `/docs`，保存。

随后访问：
`https://<your-username>.github.io/<repo-name>/`

## 更新数据后的发布流程
1. 运行更新脚本（如 `scripts/update_index.py`）生成新的 `index.json`。
2. 运行 `./scripts/build_pages.sh` 同步到 `docs/`。
3. 提交并推送到 GitHub。
