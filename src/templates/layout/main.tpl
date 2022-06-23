<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>{{ title | title }}</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- build:css styles/vendor.min.css -->

	<link rel="stylesheet" href="libs/bootstrap/bootstrap-grid.css">
	<link rel="stylesheet" href="libs/select/select2.min.css"

	<!-- endbuild -->

	<!-- build:css styles/main.css -->
	<link rel="stylesheet" href="styles/main.css">
	<!-- endbuild -->

</head>
<body>
	<div class="site-wrapper">
        {% block content %} {% endblock %}
	</div>

    	<script src="./libs/chart/chart.min.js"></script>
    <!-- endbuild -->
	
    <!-- build:js scripts/bootstrap.min.js -->
    <!-- endbuild -->

		<!-- build:js scripts/jquery.min.js -->
    <script src="libs/jquery.min.js"></script>
		<script src="./libs/select/select2.min.js"></script>
	<!-- build:js scripts/vendor.min.js -->


	<!-- build:js scripts/main.js -->
	<script src="scripts/main.js"></script>
	<!-- endbuild -->
</body>
</html>