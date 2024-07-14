import React, { useState } from 'react';
import './css/project.css';

const Projects = () => {
  const [visibleProject, setVisibleProject] = useState(null);

  const toggleProject = (index) => {
    setVisibleProject(visibleProject === index ? null : index);
  };

  return (
    <section className='projects'id="projects">
      <h2>My Projects</h2>
      {projectsData.map((project, index) => (
        <div key={index} >
          <h3 onClick={() => toggleProject(index)}>{project.title}</h3>
          {visibleProject === index && <p>{project.description}</p>}
        </div>
      ))}
    </section>
  );
};

const projectsData = [
  {
    title: 'Emo-Track',
    description: 'EmoTrack is a cutting-edge data pipeline that transforms Flipkart customer reviews for revolutionary customer sentiment analysis. By collecting and processing these reviews, it extracts sentiment-related data to categorize customer sentiments as positive, negative, or neutral towards specific products or services. This innovation enables valuable insights into customer experiences, aiding businesses in making data-driven decisions for improved customer satisfaction.'
  },
  {
    title: 'GLIS Stats on view',
    description: 'Leveraging YOLOv5, we can predict diseases in paddy crops by analyzing images. The model\'s object detection accurately identifies disease symptoms, enabling timely interventions and minimizing yield losses. This empowers farmers with early detection and efficient management in paddy cultivation.'
  },
  {
    title: 'Paddy Disease Prediction',
    description: 'Leveraging YOLOv5, we can predict diseases in paddy crops by analyzing images. The model\'s object detection accurately identifies disease symptoms, enabling timely interventions and minimizing yield losses. This empowers farmers with early detection and efficient management in paddy cultivation.'
  },
  {
    title: 'Fire Detection Using CCTV video',
    description: 'Leveraging YOLOv5, we can predict diseases in paddy crops by analyzing images. The model\'s object detection accurately identifies disease symptoms, enabling timely interventions and minimizing yield losses. This empowers farmers with early detection and efficient management in paddy cultivation.'
  }
];

export default Projects;
