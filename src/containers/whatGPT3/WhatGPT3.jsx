import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is Kids" text="Workplace skills: problem solving, working in a team, communication, and presentation skills.Build social skills and collaboration with other kids" />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="Workplace skills:
problem solving, working in a team,
communication, and presentation skills." />
      <Feature title="Knowledgebase" text="Learn about science,
engineering, and how
things work" />
      <Feature title="Education" text="Learn about science,
engineering, and how
things work" />
    </div>
  </div>
);

export default WhatGPT3;