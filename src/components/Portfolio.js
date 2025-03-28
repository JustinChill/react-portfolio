import React from 'react';
import '../index.css';

const Portfolio = () => {
  const projects = [
	{ title: 'Must ReadMe', image: 'https://thumbs.dreamstime.com/b/must-read-text-emblem-vector-hand-drawn-quote-stylized-lettering-illustration-165963451.jpg', deploy: 'https://github.com/JustinChill/must-readme', github: 'https://github.com/JustinChill/must-readme' },
	{ title: 'Vehicle Builder', image: 'https://png.pngtree.com/png-clipart/20230103/original/pngtree-car-illustration-png-image_8862888.png', deploy: 'https://github.com/JustinChill/vehicle-builder', github: 'https://github.com/JustinChill/vehicle-builder' },
	{ title: 'Employee Tracker', image: 'https://static.vecteezy.com/system/resources/previews/010/925/565/large_2x/work-performance-on-schedule-staff-discipline-time-and-attendance-tracking-system-office-time-tracking-illustration-vector.jpg', deploy: 'https://github.com/JustinChill/employee-tracker', github: 'https://github.com/JustinChill/employee-tracker' },	
	{ title: 'Personal blog', image: 'https://www.digitalvidya.com/blog/wp-content/uploads/2019/03/personal-blog-1024x538.jpg', deploy: 'https://justinchill.com', github: 'https://github.com/JustinChill/JustinChill.github.io' },	
	// Add more projects here
  ];

  return (
	<section>
	  <h2>Portfolio</h2>
	  <div className="projects">
		{projects.map((project, index) => (
		  <div key={index} className="project">
			<h3>{project.title}</h3>
			<img src={project.image} alt={project.title} class="h-96 w-full rounded-lg object-cover object-center" />
			<a href={project.deploy} target="_blank" rel="noopener noreferrer">Deployed App</a>
			<a href={project.github} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
		  </div>
		))}
	  </div>
	</section>
  );
};

export default Portfolio;
