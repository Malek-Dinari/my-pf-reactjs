import React from 'react';
import './Projects.css';

const Projects = () => (
  <section className="projects">
    <h2>Projects</h2>
    <ul>
      <li>
        <strong>(Computer Vision) 3D Face Expression Recognition:</strong> Implemented geodesic distance-based techniques for robust mesh analysis.
      </li>
      <li>
        <strong>(Deep Computer Vision) Blur Classification:</strong> Developed a CNN model to classify and analyze blur types.
      </li>
      <li>
        <strong>Sentiment Analysis:</strong> Fine-tuned transformers with augmented retrieval and question answering (QA) capabilities.
      </li>
      <li>
        <strong>Image Segmentation (Deep Learning):</strong> Fine-tuned YoloV8 after running inference on a trained MobilenetV2 model using transfer learning for bone marrow smear cells detection.
      </li>
      <li>
        <strong>Mobile development:</strong> Created WeeFizz mobile for size recommendation.
      </li>
    </ul>
  </section>
);

export default Projects;
