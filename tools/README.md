# tools/ — Python 脚本目录

本目录用于存放与 webProject H5 项目相关的 **Python 脚本**（数据处理、构建辅助、本地预览服务等），与前端页面代码分离。

## 约定
- 仅放 `.py` 脚本；脚本若依赖第三方库，请在脚本顶部注释写明依赖与安装命令（如 `pip install xxx`）。
- 脚本路径引用资源时，以本项目的根目录（即 `webProject/`）为基准，避免硬编码绝对路径。
- 与页面直接运行无关的构建/工具脚本都放这里，不要混进 `js/`、`css/`、`assets/`。

## 示例
```python
# tools/hello.py
print("webProject 工具脚本")
```
