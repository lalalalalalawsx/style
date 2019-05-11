(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{208:function(s,t,e){"use strict";e.r(t);var a=e(0),n=Object(a.a)({},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"content"},[s._m(0),s._v(" "),s._m(1),s._v(" "),s._m(2),s._v(" "),e("p",[s._v("如果你只是想随便用下 VuePress，你可以在全局安装它：")]),s._v(" "),s._m(3),s._m(4),s._v(" "),e("p",[s._v("如果你想要在一个已有项目中维护文档，就应该将 VuePress 安装为本地依赖。此设置还允许你使用 CI 或 Netlify 服务，在推送时自动部署。")]),s._v(" "),s._m(5),e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[s._v("警告")]),s._v(" "),e("p",[s._v("当将 VuePress 安装到以 webpack 3.x 作为依赖项的已有项目中时，推荐使用"),e("a",{attrs:{href:"https://yarnpkg.com/en/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Yarn"),e("OutboundLink")],1),s._v(" 而不是 npm。因为在这种情况下，Npm 无法生成正确的依赖关系树。")])]),s._v(" "),s._m(6),s._v(" "),s._m(7),e("p",[s._v("你现在就可以开始编写文档了：")]),s._v(" "),s._m(8),e("p",[s._v("要生成静态资源，请运行：")]),s._v(" "),s._m(9),e("p",[s._v("默认情况下，构建的文件会位于 "),e("code",[s._v(".vuepress/dist")]),s._v(" 中，该文件可以通过 "),e("code",[s._v(".vuepress/config.js")]),s._v(" 中的 "),e("code",[s._v("dest")]),s._v(" 字段进行配置。构建的文件可以部署到任何静态文件服务器。关于如何部署到一些常用服务，请参考 "),e("router-link",{attrs:{to:"./deploy.html"}},[s._v("部署指南")]),s._v("。")],1)])},[function(){var s=this.$createElement,t=this._self._c||s;return t("h1",{attrs:{id:"起步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#起步","aria-hidden":"true"}},[this._v("#")]),this._v(" 起步")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("兼容性注意事项")]),this._v(" "),t("p",[this._v("VuePress 要求 Node.js >= 8。")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"全局安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全局安装","aria-hidden":"true"}},[this._v("#")]),this._v(" 全局安装")])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 全局安装")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" global "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" vuepress "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或 npm install -g vuepress")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建一个 markdown 文件")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'# Hello VuePress'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" README.md\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开始编写文档")]),s._v("\nvuepress dev\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 构建")]),s._v("\nvuepress build\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"在已有项目中安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在已有项目中安装","aria-hidden":"true"}},[this._v("#")]),this._v(" 在已有项目中安装")])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装为本地依赖项")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -D vuepress "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或 npm install -D vuepress")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建一个 docs 目录")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" docs\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建一个 markdown 文件")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'# Hello VuePress'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" docs/README.md\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("然后，给 "),t("code",[this._v("package.json")]),this._v(" 添加一些 scripts 脚本：")])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:dev"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress dev docs"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:build"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build docs"')]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[this._v("yarn")]),this._v(" docs:dev "),t("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# 或 npm run docs:dev")]),this._v("\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[this._v("yarn")]),this._v(" docs:build "),t("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# 或 npm run docs:build")]),this._v("\n")])])])}],!1,null,null,null);t.default=n.exports}}]);