<!DOCTYPE HTML>
<html>
	<head>
		<title>QA Automation Guide</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->
		<link rel="stylesheet" href="assets/css/main.css" />
		<noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
		<!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]-->
		<script type="text/javascript" src="https://cdn.emailjs.com/dist/email.min.js"></script>
             <script type="text/javascript">
             (function(){
        			emailjs.init("user_hTubNAZvrnnXeZQXf6VKp");
             })();
             </script>
	</head>
	<!-- contextual advertising -->
		<div align="center">
			<div class="context">
				<p>Context!</p>
			</div>
		</div>
	<body>
		
		<!-- Wrapper-->
			<div id="wrapper">

				<!-- Nav -->
				<nav id="nav">
					<div>
						<a href="#me" class="icon active"><img src="icons/home.png" alt="Home" width="50" height="50" border="0"><span>Home</span></a>
						<a href="#work" class="icon"><img src="icons/document.png" alt="Espresso" width="50" height="50" border="0"><span>Espresso</span></a>
						<a href="#contact" class="icon"><img src="icons/messages.png" alt="Contact" width="50" height="50" border="0"><span>Contact</span></a>
					
					</div>
				</nav>
				<!-- Main -->
					<div id="main">

						<!-- Me -->
						<a name="me"></a>
							<article id="me" class="panel">

								<header>
									<h1>QA Automation Guide</h1>
								</header>
								<body>
									<p>В данном ресурсе собранны материалы для QA Automation специалистов. Материал будет полезен всем кто хочет или уже изучает(автоматизирует) выполнение тестовых скриптов на своем проекте.</p><br>
									
									<p>Начиная автоматизировать приложения (в отдельные периоды Android и Web) автор столкнулся с множеством проблем стопорящим процесс и практически полное отсутвие инструкций по работе с некоторыми инструментами в рунете. Здесь будут собраны по крупинке все необходимые материалы, а главное - на понятном языке. Задать вопрос/сделать замечание/предложение вы всегда сможете во вкладке 
									<a href="#contact" class="jumplink">Связаться с автором</a>. Желаем терпения и успехов! </p>
								
								
									<a href="#work" class="jumplink pic">
										<span class="arrow icon fa-chevron-right"><span>Espresso Android</span></span>
									</a>
								
								</body>
							</article>
							
						<!-- Work -->
							<article id="work" class="panel">
								<header>
									<h2>Espresso Android</h2>
								</header>
								<p>
									Данный раздел посвящен основным аспектам работы с инструментом автоматизации тестов на платформе Android - Espresso Android, разработанный компанией Google
								</p>
								<section>
									<div class="row">
										<div class="4u 12u$(mobile)">
											<a href="articles_ru/espresso_introduce" class="image fit">Ознакомление с инструментом Espresso Android</a><br>
											<p>Введение в приминение фреймворка Espresso для тестирования android-пpиложений</p>
										</div>
										<div class="4u 12u$(mobile)">
											<a href="articles_ru/install" class="image fit">Необходимое окружение для написанния UI Espresso автотестов </a><br>
											<p>В данной статье описан процесс установки Java, Android Studio под различные системы</p>
										</div>
										<div class="4u$ 12u$(mobile)">
											<a href="articles_ru/espresso_cheat_sheet" class="image fit">Рассмотрим Espresso cheat sheet</a><br>
                                            <p>Коротко о главном - описание методов инстурмента Espresso</p>
                                        </div>
										<div class="4u 12u$(mobile)">
                                            <a href="articles_ru/custom_view_matchers" class="image fit">Создание кастомных ViewMatchers</a><br>
                                            <p>Описан процесс создания кастомного "матчера" для использования с инстурментом Espresso</p>
										</div>
										<div class="4u 12u$(mobile)">
											<a href="articles_ru/custom_view_actions" class="image fit">Создание кастомных ViewActions</a><br>
                                            <p>Описан процесс создания кастомного "екшена" для использования с инстурментом Espresso</p>
                                         </div>
										<div class="4u$ 12u$(mobile)">
											<a href="articles_ru/custom_view_assertions" class="image fit">Создание кастомных ViewAssertions</a><br>
                                            <p>Описан процесс создания кастомного "ассерта" для использования с инстурментом Espresso</p>
										</div>
                                        <div class="4u 12u$(mobile)">
											<a href="articles_ru/first_tests" class="image fit">Пишем первые UI автотесты</a><br>
											<p>Рассмотривается написание ui автотеста с помощью Espresso используя тестовое приложение</p>
										</div>
										<div class="4u 12u$(mobile)">
											<a href="articles_ru/ui_automator_viewer" class="image fit">Использование UIAutomatorViewer</a><br>
											<p>Использование UIAutomatorViewer для просмотра иерархии виджетов и получения id ресурса</p>
										</div>
										<div class="4u$ 12u$(mobile)">
											<a href="articles_ru/recycler_view" class="image fit">Работаем с RecyclerView</a><br>
                                            <p>Описание основных аспектов тестирования приложения, использующего в качестве контейнера RecyclerView</p>
                                        </div>
                                        <div class="4u 12u$(mobile)">
											<a href="articles_ru/on_data" class="image fit">Работа с ListView</a><br>
											<p>Примеры использования onData и матчеров, базирующихся на модели данных</p>
										</div>
										<div class="4u 12u$(mobile)">
											<a href="articles_ru/espresso_blackbox" class="image fit">Espresso BlackBox метод</a><br>
											<p>Два спопоба запуска автотестов имея только apk - файл</p>
										</div>
										<div class="4u$ 12u$(mobile)">
											<a href="articles_ru/get_resources" class="image fit">Получаем ресурсы с apk</a><br>
                                            <p>О том, как получить id ресурсов имя только apk-файл</p>
                                        </div>
									</div>
								</section>
							</article>

						<!-- Contact -->
                        		<article id="contact" class="panel">
                        			<header>
                        				<h2>Contact Me</h2>
                        			</header>
                        			<form action="#" method="post" onsubmit="emailjs.sendForm('gmail', 'template_gtoWQ7YQ', this); alert('message sended')">
                        				<div>
                        					<div class="row">
                        						<div class="6u 12u$(mobile)">
                        							<input type="text" name="from_name" placeholder="Name" />
                        						</div>
                        						<div class="6u$ 12u$(mobile)">
                        							<input type="text" name="reply_to" placeholder="Email" />
                        						</div>
                        						<div class="12u$">
                        							<input type="text" name="to_name" placeholder="Subject" />
                        						</div>
                        						<div class="12u$">
                        							<textarea name="message_html" placeholder="Message" rows="8"></textarea>
                        						</div>
                        						<div class="12u$">
                        							<input type="submit" value="Send Message"/>
                        						</div>
                        					</div>
                        				</div>
                        			</form>
                        		</article>

					</div>

				<!-- Footer -->
					<div id="footer">
						<ul class="copyright">
							<li>&copy; QA Automation Guide.</li>
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

	</body>
</html>