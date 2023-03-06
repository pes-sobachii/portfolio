import React from 'react';
import toDoImg from '../../../../assets/todoapp.jpg'
import quizImg from '../../../../assets/quiz.jpg'
import tabataImg from '../../../../assets/tabata.jpg'
import ghsearchImg from '../../../../assets/ghsearch.jpg'
import movieImg from '../../../../assets/movieapp.jpg'
import storeImg from '../../../../assets/bookstore.jpg'
import socialImg from '../../../../assets/social.jpg'
import portfolioImg from '../../../../assets/portfolio.jpg'
import Image from "next/image";
import styles from './Examples.module.scss'

const Examples = () => {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Experience</h2>
            <div>
                <div className={styles.row}>
                    <div className={styles.image}>
                        <Image src={toDoImg} alt='To Do App'/>
                    </div>
                    <div className={styles.info}>
                        <h3 className={styles.name}>To Do App</h3>
                        <p className={styles.stack}>Stack: HTML, CSS, JS</p>
                        <p className={styles.buttons}>
                            <a target='_blank' href="https://github.com/pes-sobachii/todo-list-pure-js">
                                <button
                                    className={styles.repo}>Repository
                                </button>
                            </a>
                            <a target='_blank' href="https://pes-sobachii.github.io/todo-list-pure-js/">
                                <button
                                    className={styles.deploy}>Deployment
                                </button>
                            </a>
                        </p>
                    </div>
                </div>
                <div className={styles.row + ' ' + styles.reversed}>
                    <div className={styles.image}>
                        <Image src={quizImg} alt='Quiz App'/>
                    </div>
                    <div className={styles.info}>
                        <h3 className={styles.name}>Quiz App</h3>
                        <p className={styles.stack}>Stack: HTML, CSS, JS</p>
                        <p className={styles.buttons}>
                            <a target='_blank' href="https://github.com/pes-sobachii/quiz-app-js">
                                <button
                                    className={styles.repo}>Repository
                                </button>
                            </a>
                            <a target='_blank' href="https://pes-sobachii.github.io/quiz-app-js/">
                                <button
                                    className={styles.deploy}>Deployment
                                </button>
                            </a>
                        </p>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.image}>
                        <Image src={tabataImg} alt='Tabata timer'/>
                    </div>
                    <div className={styles.info}>
                        <h3 className={styles.name}>Tabata timer</h3>
                        <p className={styles.stack}>Stack: HTML, CSS, JS</p>
                        <p className={styles.buttons}>
                            <a target='_blank' href="https://github.com/pes-sobachii/tabata-timer-js">
                                <button
                                    className={styles.repo}>Repository
                                </button>
                            </a>
                            <a target='_blank' href="https://pes-sobachii.github.io/tabata-timer-js/">
                                <button
                                    className={styles.deploy}>Deployment
                                </button>
                            </a>
                        </p>
                    </div>
                </div>
                <div className={styles.row + ' ' + styles.reversed}>
                    <div className={styles.image}>
                        <Image src={ghsearchImg} alt='GitHub Search'/>
                    </div>
                    <div className={styles.info}>
                        <h3 className={styles.name}>GitHub Search</h3>
                        <p className={styles.stack}>Stack: HTML, CSS, JS</p>
                        <p className={styles.buttons}>
                            <a target='_blank' href="https://github.com/pes-sobachii/ghsearch">
                                <button
                                    className={styles.repo}>Repository
                                </button>
                            </a>
                            <a target='_blank' href="https://pes-sobachii.github.io/ghsearch/">
                                <button
                                    className={styles.deploy}>Deployment
                                </button>
                            </a>
                        </p>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.image}>
                        <Image src={movieImg} alt='Movie App'/>
                    </div>
                    <div className={styles.info}>
                        <h3 className={styles.name}>Movie App</h3>
                        <p className={styles.stack}>Stack: React, Redux Toolkit, SCSS, TypeScript</p>
                        <p className={styles.buttons}>
                            <a target='_blank' href="https://github.com/pes-sobachii/movie-app-ts">
                                <button
                                    className={styles.repo}>Repository
                                </button>
                            </a>
                            <a target='_blank' href="https://pes-sobachii.github.io/movie-app-ts/">
                                <button
                                    className={styles.deploy}>Deployment
                                </button>
                            </a>
                        </p>
                    </div>
                </div>
                <div className={styles.row + ' ' + styles.reversed}>
                    <div className={styles.image}>
                        <Image src={storeImg} alt='Book Store App'/>
                    </div>
                    <div className={styles.info}>
                        <h3 className={styles.name}>Book Store App</h3>
                        <p className={styles.stack}>Stack: React, Redux Toolkit, Bootstrap, TypeScript</p>
                        <p className={styles.buttons}>
                            <a target='_blank' href="https://github.com/pes-sobachii/book-store-ts">
                                <button
                                    className={styles.repo}>Repository
                                </button>
                            </a>
                            <a target='_blank' href="https://pes-sobachii.github.io/book-store-ts/">
                                <button
                                    className={styles.deploy}>Deployment
                                </button>
                            </a>
                        </p>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.image}>
                        <Image src={socialImg} alt='Social Network'/>
                    </div>
                    <div className={styles.info}>
                        <h3 className={styles.name}>Social Network</h3>
                        <p className={styles.stack}>Stack: React, React-Query, TypeScript, SCSS, MaterialUI, Node.js, Express, MongoDB</p>
                        <p className={styles.buttons}>
                            <a target='_blank' href="https://github.com/pes-sobachii/social-media-frontend">
                                <button
                                    className={styles.repo}>Frontend Repo
                                </button>
                            </a>
                            <a target='_blank' href="https://github.com/pes-sobachii/social-media-backend">
                                <button
                                    className={styles.repo}>Backend Repo
                                </button>
                            </a>
                            <a target='_blank' href="https://main--illustrious-dieffenbachia-4ca573.netlify.app">
                                <button
                                    className={styles.deploy}>Deployment
                                </button>
                            </a>
                        </p>
                    </div>
                </div>
                <div className={styles.row + ' ' + styles.reversed}>
                    <div className={styles.image}>
                        <Image src={portfolioImg} alt='Portfolio'/>
                    </div>
                    <div className={styles.info}>
                        <h3 className={styles.name}>Portfolio (this page)</h3>
                        <p className={styles.stack}>Stack: Next.js, Tailwind, SCSS</p>
                        <p className={styles.buttons}>
                            <a target='_blank' href="https://github.com/pes-sobachii/portfolio">
                                <button
                                    className={styles.repo}>Repository
                                </button>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Examples;