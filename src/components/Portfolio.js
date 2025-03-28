import React from 'react';

const Portfolio = () => {
  const projects = [
	{ title: 'Must ReadMe', image: 'https://thumbs.dreamstime.com/b/must-read-text-emblem-vector-hand-drawn-quote-stylized-lettering-illustration-165963451.jpg', deploy: 'https://deployed-project1.com', github: 'https://github.com/JustinChill/must-readme' },
	{ title: 'Vehicle Builder', image: 'https://png.pngtree.com/png-clipart/20230103/original/pngtree-car-illustration-png-image_8862888.png', deploy: 'https://deployed-project1.com', github: 'https://github.com/JustinChill/vehicle-builder' },
	{ title: 'Employee Tracker', image: 'https://static.vecteezy.com/system/resources/previews/010/925/565/large_2x/work-performance-on-schedule-staff-discipline-time-and-attendance-tracking-system-office-time-tracking-illustration-vector.jpg', deploy: 'https://deployed-project1.com', github: 'https://github.com/JustinChill/employee-tracker' },	
	// Add more projects here
  ];

  return (
	<section>
	  <h2>Portfolio</h2>
	  <div className="projects">
		{projects.map((project, index) => (
		  <div key={index} className="project">
			<h3>{project.title}</h3>
			<img src={project.image} alt={project.title} />
			<a href={project.deploy} target="_blank" rel="noopener noreferrer">Deployed App</a>
			<a href={project.github} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
		  </div>
		))}
	  </div>
	</section>
  );
};

export default Portfolio;
