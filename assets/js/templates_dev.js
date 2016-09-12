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

function numberList(items) {
	return compile('<ol><% items.forEach(function(item) { %><li><%=item%></li><% }); %></ol>', {items : items});
}

function Link(href, title) {
	return compile('<a href=<%-href%> > <%-title%> </a>', { href : href, title : title});
}

function Code(code, buttonId) {
	return compile('<br><div width=100% class="textarea" id='+buttonId+'><%=textarea%></div>\
					<div align="right"><button class="btn-clipboard" data-clipboard-target="#'+buttonId+'">Скопировать в буфер обмена</button>\
					</div>\
					<script>\
					new Clipboard(".btn-clipboard");\
					</script>', 
				{ textarea : code });
}

function Image(src) {
	return compile('<img src=<%-src%> alt="image" />', { src : src });
}

/***********************************************/

function Article(title, document){
	Write('<!DOCTYPE HTML>\
		<html>\
	<head>\
		<title>'+title+'</title>\
		<meta charset="utf-8" />\
		<meta name="viewport" content="width=device-width, initial-scale=1" />\
		<!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->\
		<link rel="stylesheet" href="assets/css/main.css" />\
		<link rel="stylesheet" href="assets/css/articles.css" />\
		<noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>\
		<!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]-->\
	</head>\
	<!-- contextual advertising -->\
		<div align="center">\
			<div class="context">\
				<p>Context!</p>\
			</div>\
		</div>\
		<body>\
		<!-- Wrapper-->\
			<div id="wrapper">\
\
				<!-- Nav -->\
					<nav id="nav">\
						<a href="/index.php" class="icon"><img src="icons/home.png" alt="Home" width="50" height="50" border="0"><span>Home</span></a>\
						<a href="#work" class="icon active"><img src="icons/page.png" width="50" height="50" border="0"></a>\
						<a href="#contact" class="icon"><img src="icons/messages.png" alt="Contact" width="50" height="50" border="0"><span>Contact</span></a>\
					</nav>\
					\
				<!-- Main -->\
					<div id="main">\
							\
						<!-- Show -->\
							<article id="work" class="panel">\
								<a href="#work" class="jumplink pic"></a><br clear="all"/>\
									<div align="left">\
										'+document+'\
							\
										</div>\
							</article>\
\
						<!-- Contact -->\
							<article id="contact" class="panel">\
								<header>\
									<h2>Contact Me</h2>\
								</header>\
								<form action="#" method="post">\
									<div>\
										<div class="row">\
											<div class="6u 12u$(mobile)">\
												<input type="text" name="name" placeholder="Name" />\
											</div>\
											<div class="6u$ 12u$(mobile)">\
												<input type="text" name="email" placeholder="Email" />\
											</div>\
											<div class="12u$">\
												<input type="text" name="subject" placeholder="Subject" />\
											</div>\
											<div class="12u$">\
												<textarea name="message" placeholder="Message" rows="8"></textarea>\
											</div>\
											<div class="12u$">\
												<input type="submit" value="Send Message" />\
											</div>\
										</div>\
									</div>\
								</form>\
							</article>\
\
					</div>\
\
				<!-- Footer -->\
					<div id="footer">\
						<ul class="copyright">\
							<li>&copy; QA Automation Guide.</li></li>\
						</ul>\
					</div>\
\
			</div>\
\
		<!-- Scripts -->\
			<script src="assets/js/jquery.min.js"></script>\
			<script src="assets/js/skel.min.js"></script>\
			<script src="assets/js/skel-viewport.min.js"></script>\
			<script src="assets/js/util.js"></script>\
			<!--[if lte IE 8]><script src="assets/js/ie/respond.min.js"></script><![endif]-->\
			<script src="assets/js/main.js"></script>\
			<script src="https://cdn.rawgit.com/zenorocha/clipboard.js/master/dist/clipboard.min.js"></script>\
	</body>\
</html>');
}