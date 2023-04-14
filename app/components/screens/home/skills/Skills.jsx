import React from 'react';
import styles from './Skills.module.scss'

const Skills = () => {
    return (
			<div className='py-10'>
				<h2 className='text-[42px] text-center mb-20'>Experience</h2>
				<div className='flex items-start gap-10 flex-wrap justify-center px-10 lg:px-0'>
					<div className={styles.item}>
						<h3>Fundamental Frontend Technologies</h3>
						<ul>
							<li>HTML</li>
							<li>CSS</li>
							<li>JavaScript</li>
							<li>TypeScript</li>
						</ul>
					</div>
					<div className={styles.item}>
						<h3>CSS tools</h3>
						<ul>
							<li>SASS/SCSS</li>
							<li>Bootstrap</li>
							<li>Tailwind</li>
							<li>MaterialUI</li>
							<li>Styled Components</li>
						</ul>
					</div>
					<div className={styles.item}>
						<h3>Framework and state-managers</h3>
						<ul>
							<li>React</li>
							<li>React-Query</li>
							<li>Redux Toolkit</li>
						</ul>
					</div>
					<div className={styles.item}>
						<h3>Backend Technologies</h3>
						<ul>
							<li>Node.js</li>
							<li>Express</li>
							<li>Nest</li>
							<li>MongoDB</li>
							<li>MySQL</li>
						</ul>
					</div>
					<div className={styles.item}>
						<h3>Other</h3>
						<ul>
							<li>Sequelize</li>
							<li>Photoshop</li>
							<li>MS Access</li>
							<li>Python</li>
						</ul>
					</div>
					<div className={styles.item}>
						<h3>Soft Skills</h3>
						<ul>
							<li>Adaptability</li>
							<li>Patience</li>
							<li>Problem solving</li>
							<li>Creativity</li>
						</ul>
					</div>
				</div>
			</div>
		)
};

export default Skills;