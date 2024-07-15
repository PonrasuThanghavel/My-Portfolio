import React, { useState } from 'react';
import './css/project.css';

const Projects = () => {
  const [visibleProject, setVisibleProject] = useState(null);

  const toggleProject = (index) => {
    setVisibleProject(visibleProject === index ? null : index);
  };

  return (
    <section className='projects' id="projects">
      <h2>My Projects</h2>
      {projectsData.map((project, index) => (
        <div key={index} className="project-item">
          <h3 onClick={() => toggleProject(index)}>{project.title}</h3>
          {visibleProject === index && (
            <div className="project-details">
              <p><strong>Description:</strong> {project.description}</p>
              <p><strong>Role:</strong> {project.role}</p>
              <p><strong>Responsibilities:</strong> {project.responsibilities}</p>
              <p><strong>Duration:</strong> {project.duration}</p>
              <p><strong>Features:</strong></p>
              <ul>
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

const projectsData = [
  {
    title: 'Emo-Track',
    description: 'EmoTrack is a cutting-edge data pipeline that transforms Flipkart customer reviews for revolutionary customer sentiment analysis. By collecting and processing these reviews, it extracts sentiment-related data to categorize customer sentiments as positive, negative, or neutral towards specific products or services. This innovation enables valuable insights into customer experiences, aiding businesses in making data-driven decisions for improved customer satisfaction.',
    role: 'Data Engineer',
    responsibilities: 'Data collection, processing, and sentiment analysis',
    duration: '3 months',
    features: [
      'Sentiment categorization',
      'Real-time data processing',
      'Comprehensive customer insights'
    ]
  },
  {
    title: 'Stats on view',
    description: 'Stats on View is a comprehensive web application designed to streamline the agricultural market by connecting farmers directly with shop owners. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js), this platform enables efficient management and visualization of agricultural data.',
    role: 'Web Developer',
    responsibilities: ' Web  development and deployment,Data Collection',
    duration: '2 months',
    features: [
      'Seller Markets Database',
      'Farmer Data Entry',
      'Farmer Profiles',
      'Shop Owner Access'
    ]
  },
  {
    title: 'Paddy Disease Prediction',
    description: 'Leveraging YOLOv5, we can predict diseases in paddy crops by analyzing images. The model\'s object detection accurately identifies disease symptoms, enabling timely interventions and minimizing yield losses. This empowers farmers with early detection and efficient management in paddy cultivation.',
    role: 'Researcher',
    responsibilities: 'Research and model training',
    duration: '5 months',
    features: [
      'High accuracy detection',
      'Farmer empowerment',
      'Efficient management'
    ]
  },
  {
    title: 'Fire Detection Using CCTV video',
    description: 'Fire Detection Using CCTV Video, where I utilized machine learning techniques to develop a system capable of detecting fire incidents through video analysis. This project underscores my ability to integrate machine learning models with real-time applications, enhancing safety and security measures.',
    role: 'Developer',
    responsibilities: 'Model training',
    duration: '2 months',
    features: [
      'Real-time fire detection',
      'Enhanced safety measures'
    ]
  }
];

export default Projects;
