# GPUPhysBench project page

该页面与 `projects/lfm/` 一样作为独立静态页面随个人主页发布。

发布地址：<https://yuchen-sun-cg.github.io/projects/gpuphysbench/>

## 本地预览

在仓库根目录运行：

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

访问 <http://localhost:8000/projects/gpuphysbench/>。这个命令只预览静态项目页；个人主页的 Markdown、Liquid 和布局仍需通过现有 Jekyll 构建查看。

## 维护与部署

- `index.html`：论文内容、作者、表格、引用和分享元数据。顶部按作者要求仅放一个 arXiv 按钮。
- `styles.css`、`script.js`：排版和复制引用功能。
- `assets/`：从论文导出的图片、总览 PDF 和分类性能 SVG。
- `../../_pages/about.md`：主页 Research 列表中的论文入口。

编辑后随个人主页仓库的现有发布流程提交、推送即可，不需要新建仓库或更改 Pages 发布源。项目页面无 YAML front matter，和 LFM 页面一样保留自己的完整 HTML 布局。不要为了此项目在仓库根目录添加 `.nojekyll`，个人主页仍依赖 Jekyll。

原始素材来自本机 `D:/research/project/gpu_sim_bench/GPUPhysBench_arxiv/`。需要从论文重新导出图片时，可使用 `D:/research/project/gpu_sim_bench/website/tools/export_assets.py`，再将生成的 `website/assets/` 同步到本目录。部署后的页面内容以本目录为准。
