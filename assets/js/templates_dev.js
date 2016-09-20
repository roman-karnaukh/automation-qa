function compile(template, expression) {
	var tmpl = _.template(template);
	return tmpl(expression);
}

function Write(template){
		document.write( template );
}



function P(to_type) {
	return compile('<p ><%=text%></p>', {text : to_type});
}

function B(to_type) {
	return compile('<b><%=text%></b>', {text : to_type});
}

function Header(title, date) {
	var header = "<div class='header'><div class = 'title'><%-header%></div><div class = 'date'>Дата: <%-date%></div></div>";
	return compile(header, {header : title, date : date});
}

function Subtitle(subtitle) {
	return compile('<div class="subtitle" ><%-subtitle%></div>', {subtitle : subtitle});
}

function List(items) {
	return compile('<ul><% items.forEach(function(item) { %><li><%=item%></li><% }); %></ul>', {items : items});
}

function NumberList(items) {
	return compile('<ol><% items.forEach(function(item) { %><li><%=item%></li><% }); %></ol>', {items : items});
}

function Link(title, href) {
	return compile('<a href=<%-href%> > <%-title%> </a>', { href : href, title : title});
}

function Code(code, buttonId) {
	return compile('<br><div width=100% class="textarea" id='+buttonId+'><%=textarea%></div>\
					<div align="right"><button class="btn-clipboard" data-clipboard-target="#'+buttonId+'">\
					Скопировать в буфер обмена</button>\
					</div>\
					<script>\
					new Clipboard(".btn-clipboard");\
					</script>', 
				{ textarea : code });
}

function BlackCode(code, buttonId) {
	return compile('<br><div width=100% class="textarea black" id='+buttonId+'><%=textarea%></div>\
					<div align="right"><button class="btn-clipboard" data-clipboard-target="#'+buttonId+'">Скопировать в буфер обмена</button>\
					</div>\
					<script>\
					new Clipboard(".btn-clipboard");\
					</script>',
		{ textarea : code });
}

function GrayCode(code) {
	return compile('<div width=100% class="textarea gray"><%=textarea%></div>',
		{ textarea : code });
}

function Image(src) {
	return compile('<div class="article image"><img src=<%-src%> alt="image" /></div>', { src : src });
}


/***********************************************/

function Article(title, body){
	var template = '<head>\n\t<title>'+title+'</title>\n\t\t<meta charset="utf-8" />\n\t\t<meta name="viewport" content="width=device-width, initial-scale=1" />\n\t\t<!--[if lte IE 8]>\n<script src="assets/js/ie/html5shiv.js"></script><![endif]-->\n\t\t<link rel="stylesheet" href="assets/css/main.css" />\n\t\t<link rel="stylesheet" href="assets/css/articles.css" />\n\t\t<noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>\n\t\t<!--[if lte IE 8]>\n<link rel="stylesheet" href="assets/css/ie8.css"/><![endif]-->\n\t\t<script type="text/javascript" src="https://cdn.emailjs.com/dist/email.min.js"></script>\n\t\t<script type="text/javascript">\n\t\t(function(){\n\t\t\temailjs.init("user_hTubNAZvrnnXeZQXf6VKp");\n\t\t})();\n</script>\n\t</head>\n\t<!-- contextual advertising -->\n\t<div align="center">\n\t\t<div class="context">\n\t\t<p>Context!</p>\n\t</div>\n\t</div>\n\n\t<!-- Wrapper-->\n\t<div id="wrapper">\n\n\t\t<!-- Nav -->\n\t\t<nav id="nav"><div class="navigation">\n\t\t<a href="/index.php" class="icon"><img src="icons/home.png" alt="Home" width="50" height="50" border="0"><span>Home</span></a>\n\t\t<a href="#work" class="icon active"><img src="icons/page.png" width="50" height="50" border="0"></a>\n\t\t<a href="#contact" class="icon"><img src="icons/messages.png" alt="Contact" width="50" height="50" border="0"><span>Contact</span></a>\n\t\t</div></nav>\n\n\t\t<!-- Main -->\n\t\t<div id="main">\n\n\t\t<!-- Show -->\n\t\t<article id="work" class="panel">\n\t\t<a href="#work" class="jumplink pic"></a><br clear="all"/>\n\t\t<div align="left">\n\t\t'+body+'\n\n\t\t</div>\n\t\t</article>\n\n\t\t<!-- Contact -->\n\t\t<article id="contact" class="panel">\n\t\t<header>\n\t\t<h2>Contact Me</h2>\n\t</header>\n\t<form action="#" method="post" onsubmit=\'emailjs.sendForm("gmail","template_gtoWQ7YQ",this); alert("message sended")\'>\n\t\t<div>\n\t\t<div class="row">\n\t\t<div class="6u 12u$(mobile)">\n\t\t<input type="text" name="from_name" placeholder="Name" />\n\t\t</div>\n\t\t<div class="6u$ 12u$(mobile)">\n\t\t<input type="text" name="reply_to" placeholder="Email" />\n\t\t</div>\n\t\t<div class="12u$">\n\t\t<input type="text" name="to_name" placeholder="Subject" />\n\t\t</div>\n\t\t<div class="12u$">\n\t\t<textarea name="message_html" placeholder="Message" rows="8"></textarea>\n\t\t</div>\n\t\t<div class="12u$">\n\t\t<input type="submit" value="Send Message" />\n\t\t</div>\n\t\t</div>\n\t\t</div>\n\t\t</form>\n\t\t</article>\n\n\t\t</div>\n\n\t\t<!-- Footer -->\n\t\t<div id="footer">\n\t\t<ul class="copyright">\n\t\t<li>&copy; QA Automation Guide.</li></li>\n\t</ul>\n\t</div>\n\n\t</div>\n\n\t<!-- Scripts -->\n\t<script src="assets/js/jquery.min.js"></script>\n\t\t<script src="assets/js/skel.min.js"></script>\n\t\t<script src="assets/js/skel-viewport.min.js"></script>\n\t\t<script src="assets/js/util.js"></script>\n\t\t<!--[if lte IE 8]>\n<script src="assets/js/ie/respond.min.js"></script><![endif]-->\n\t\t<script src="assets/js/main.js"></script>\n\t\t<script src="https://cdn.rawgit.com/zenorocha/clipboard.js/master/dist/clipboard.min.js"></script>\n\t\t';
	Write(template);
}