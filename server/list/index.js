module.exports = {
	success: true,
	data: [
		{
			title: 'webpack性能优化之首页空白问题的处理',
			des: '今天面试被问到webpack，其中问道：很多情况下，webpack会将所有的 JS 代码打包成一个 JS 文件，但是如果这个 JS 文件过大，就会出现首屏加载时间过长的问题，出现白屏，怎么解决？首先，将 JS 代码打包成一个 JS 文件是有原因的，因为这样子可以减少了请求数，但是也同样带来了体积太大的问题。我想到的解决方案： 利用webpack的压缩插件进行代码压缩- 按需加载，按照模块打包成多个 JS 文件',
			type: 'webpack',
			id:'others/webpack'
		},
		{
			title: '缓存知识总结',
			des: '浏览器缓存基本认识分为强缓存和协商缓存: 1. 浏览器在加载资源时，先根据这个资源的一些 http header 判断它是否命中强缓存，强缓存如果命中，浏览器就不会发送请求到服务器，直接从他自己的缓存中读取资源。',
			type:'javascript',
			id: 'others/cache'
		},
		{
			title: '跨域问题的解决方案',
			des: '跨域(Cross-Origin)是指在浏览器的同源策略下,当前客户端无法访问与自身不同协议( protocol),不同域名(domain),不同端口号(port)的资源,三者出现其中一个不同,即跨域.',
			type: 'javascript',
			id: 'others/cors'
		},
		{
			title: '性能优化',
			des: '前端性能优化可以从客户端性能，网络，服务端来考虑',
			type: 'javascript',
			id: 'others/modify'
		},
		{
			title: '执行上下文（Execution Context）',
			des: '在执行JavaScript代码的时候，代码执行上下文是非常重要的，可以将可执行代码分为下面三种类型。全局代码——当代码第一次执行的所进入的默认环境函数代码——在函数体执行的时候 Eval代码——在eval函数中执行的时候',
			type: 'javascript',
			id: 'javascript/DeepInJSbasis'
		},
		{
			title: '继承（Inheritance）',
			des: '高程毕竟是高程，我第一次看高程里面继承部分的时候，简直一脸懵逼，时隔一年，第二次看了高程的继承部分之后，我把里面的知识点整理出来，渣渣，求勿喷：>',
			type: 'javascript',
			id: 'javascript/Inheritance'
		},
		{
			title: '八大排序',
			des: '常见的内部排序算法有：插入排序、希尔排序、选择排序、冒泡排序、归并排序、快速排序、堆排序、基数排序等。本文将依次介绍上述八大排序算法。',
			type: 'algorithm',
			id: 'lessonKnowledge/eightSort'
		},
		{
			title: 'Web Workers概述',
			des: 'HTML5提出的Web Workers使代码在浏览器的UI线程之外执行，不占用浏览器UI线程的时间，给Web应用带来潜在的巨大性能提升，因为每个新的Workers都在自己的线程中运行代码。这意味着Worker运行代码不仅不会影响浏览器UI，也不会影响其他Worker中运行的代码。',
			type: 'html',
			id: 'html/WebWorkers'
		},
		{
			title: 'cookie, sessionStorage, localStorage',
			des: 'Web Storage 就包含 sessionStorage 、localStorage 两种。sessionStorage 为每一个给定的源维持一个独立的存储区域，该存储区域在页面会话期间可用（即只要浏览器处于打开状态，包括页面重新加载和恢复）。localStorage 具有同样的功能，但是在浏览器关闭，然后重新打开后数据仍然存在。',
			type: 'html',
			id: 'html/StorageVsCookie'
		},
		{
			title: 'BFC(Block Formatting Context)',
			des: 'BFC(Block formatting context) 直译为"块级格式化上下文"。它是一个独立的渲染区域，只有 Block-level Box [块级元素]参与， 它规定了内部的 Block-level Box 如何布局，并且与这个区域外部毫不相干。',
			type: 'css',
			id: 'css/BFC'
		},
		{
			title: '清除浮动Clearing Floats',
			des: '之所以要清除浮动是因为它们会影响父元素的的表现，如果这个父元素里面装的全都是浮动的元素，那么这个父元素的高度就会变成 0',
			type: 'css',
			id: 'css/ClearingFloats'

		},
		{
			title: 'position属性',
			des: 'css API中 position 属性的相关定义：static：无特殊定位，对象遵循正常文档流。top，right，bottom，left等属性不会被应用relative：对象遵循正常文档流，但将依据top，right，bottom，left等属性在正常文档流中偏移位置。而其层叠通过z-index属性定义。',
			type: 'css',
			id: 'css/position'
		}
	]
}