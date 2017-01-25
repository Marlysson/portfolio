email = document.querySelector('.email-action');
	email_text = document.querySelector('.email-text');

	next_section = document.querySelector('.next-section');

	email.addEventListener('click',function(event){

		event.preventDefault();

		email_text.style.opacity = '1';
	});

	/*
	var details = document.querySelectorAll('.overlay-job');

	details.forEach(function(detail){

		detail.addEventListener('mousemove',function(event){
			console.log(event.offsetX+","+event.offsetY);
		})
	});
	*/

	/* ======================== */

	function obj(args, selector) {
		return args.querySelector(selector);
	}

	var jobs = document.querySelectorAll('.item-job, .item-job .getpos');
	var jobs_ = document.querySelectorAll('.item-job');
	var activated = true;

	jobs.forEach(function(job){

		job.addEventListener('mousemove',function(e) {

			if (e.target.getAttribute('name') == 'top' && activated) {

				var ob = obj(job, '.overlay-job-1').style;
				ob.top = "0";
				ob.transition = "0.6s";
				activated = false;

			} else if (e.target.getAttribute('name') == 'left' && activated) {

				var ob = obj(job, '.overlay-job-2').style;
				ob.left = "0";
				ob.transition = "0.6s";
				activated = false;

			} else if (e.target.getAttribute('name') == 'right' && activated) {

				var ob = obj(job, '.overlay-job-3').style;
				ob.left = "0";
				ob.transition = "0.6s";
				activated = false;

			} else if (e.target.getAttribute('name') == 'bottom' && activated) {

				var ob = obj(job, '.overlay-job-4').style;
				ob.top = "0";
				ob.transition = "0.6s";
				activated = false;
			}

		});
	});

	/* jobs reset all  */

	jobs_ .forEach(function(job){

		job.addEventListener('mouseleave',function(e) {

			var ob = null;

			ob = obj(job, '.overlay-job-1').style;
			ob.top = "-100%";
			ob.transition = "0.6s";
			ob = obj(job, '.overlay-job-2').style;
			ob.left = "-100%";
			ob.transition = "0.6s";
			ob = obj(job, '.overlay-job-3').style;
			ob.left = "100%";
			ob.transition = "0.6s";
			ob = obj(job, '.overlay-job-4').style;
			ob.top = "100%";
			ob.transition = "0.6s";

			activated = true;
		});
	});

(function(){

	var born_in = 1996;
	var place = document.querySelector('.age');

	var today = new Date();
	var month = today.getMonth();
	var age = today.getFullYear() - born_in;

	if (month < 4){
		age = age - 1;
	}

	place.textContent = age;

})()