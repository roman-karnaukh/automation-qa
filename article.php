<!DOCTYPE HTML>
<html>
	<head>
		<title>QA Automation Guide</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->
		<link rel="stylesheet" href="assets/css/main.css" />
		<link rel="stylesheet" href="assets/css/articles.css" />
		<noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
		<!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]-->
	</head>
	<!-- contextual advertising -->
		<div align="center">
			<div class="context">
				<p>Context!</p>
			</div>
		</div>
		<body onload="loadPage()">
		<!-- Wrapper-->
			<div id="wrapper">

				<!-- Nav -->
					<nav id="nav">
						<a href="index.php" class="icon"><img src="icons/home.png" alt="Home" width="50" height="50" border="0"><span>Home</span></a>
						<a href="#show" class="icon active"><img src="icons/document.png" width="50" height="50" border="0"></a>
						<a href="#contact" class="icon"><img src="icons/messages.png" alt="Contact" width="50" height="50" border="0"><span>Contact</span></a>
					</nav>
					
				<!-- Main -->
					<div id="main">
							
						<!-- Show -->
							<article id="work" class="panel">
								<a href="#show" class="jumplink pic"></a>
									<?php

										$article=$_GET['article'];
										echo $article;
										echo '<div align="center">';
										include "articles_ru/".$article."/".$article.".html";
										#work
										echo "</div>";
									?>
								
							</article>

						<!-- Contact -->
							<article id="contact" class="panel">
								<header>
									<h2>Contact Me</h2>
								</header>
								<form action="#" method="post">
									<div>
										<div class="row">
											<div class="6u 12u$(mobile)">
												<input type="text" name="name" placeholder="Name" />
											</div>
											<div class="6u$ 12u$(mobile)">
												<input type="text" name="email" placeholder="Email" />
											</div>
											<div class="12u$">
												<input type="text" name="subject" placeholder="Subject" />
											</div>
											<div class="12u$">
												<textarea name="message" placeholder="Message" rows="8"></textarea>
											</div>
											<div class="12u$">
												<input type="submit" value="Send Message" />
											</div>
										</div>
									</div>
								</form>
							</article>

					</div>

				<!-- Footer -->
					<div id="footer">
						<ul class="copyright">
							<li>&copy; QA Automation Guide.</li></li>
						</ul>
					</div>

			</div>

		<!-- Scripts -->
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/skel.min.js"></script>
			<script src="assets/js/skel-viewport.min.js"></script>
			<script src="assets/js/util.js"></script>
			<!--[if lte IE 8]><script src="assets/js/ie/respond.min.js"></script><![endif]-->
			<script src="assets/js/main.js"></script>
			<script>
   				function loadPage() {
   				 	// window.open("#work");
   				}
  			</script>

	</body>
</html>