import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import './D20Die.css';

const D20Die = ({ onRollComplete }) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const d20Ref = useRef(null);
  const animationRef = useRef(null);
  
  const [isRolling, setIsRolling] = useState(true);
  const [finalNumber, setFinalNumber] = useState(null);
  const [currentNumber, setCurrentNumber] = useState(1);
  
  useEffect(() => {
    if (!mountRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = null; // Transparent background
    sceneRef.current = scene;
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      300 / 300,
      0.1,
      1000
    );
    camera.position.set(0, 0, 4);
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(300, 300);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;
    
    // Add renderer to DOM
    mountRef.current.appendChild(renderer.domElement);
    
    // Create D20 geometry (icosahedron)
    const geometry = new THREE.IcosahedronGeometry(1, 0);
    
    // Create material with BG3 golden colors
    const material = new THREE.MeshPhongMaterial({
      color: 0xFBCEA0,
      shininess: 100,
      transparent: true,
      opacity: 0.95
    });
    
    // Create D20 mesh
    const d20 = new THREE.Mesh(geometry, material);
    d20.castShadow = true;
    d20.receiveShadow = true;
    scene.add(d20);
    d20Ref.current = d20;
    
    // Add lights
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);
    
    const pointLight = new THREE.PointLight(0xFFD700, 0.6, 100);
    pointLight.position.set(0, 0, 3);
    scene.add(pointLight);
    
    // Add wireframe for better D20 definition
    const wireframeGeometry = new THREE.IcosahedronGeometry(1.01, 0);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0xB78F6D,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });
    const wireframe = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    scene.add(wireframe);
    
    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      
      if (isRolling) {
        // Rolling animation
        d20.rotation.x += 0.05;
        d20.rotation.y += 0.03;
        d20.rotation.z += 0.02;
        wireframe.rotation.x += 0.05;
        wireframe.rotation.y += 0.03;
        wireframe.rotation.z += 0.02;
        
        // Change current number display
        setCurrentNumber(Math.floor(Math.random() * 20) + 1);
      } else {
        // Settled animation - gentle rotation
        d20.rotation.y += 0.005;
        wireframe.rotation.y += 0.005;
      }
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Rolling timer
    const rolledNumber = Math.floor(Math.random() * 20) + 1;
    
    const timer = setTimeout(() => {
      setFinalNumber(rolledNumber);
      setCurrentNumber(rolledNumber);
      setIsRolling(false);
      
      // Change material to golden when settled
      material.color.setHex(0xFFD700);
      material.emissive.setHex(0x332200);
      
      // Call completion callback
      setTimeout(() => {
        if (onRollComplete) onRollComplete(rolledNumber);
      }, 1000);
    }, 3000);
    
    // Cleanup function
    return () => {
      clearTimeout(timer);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, [onRollComplete, isRolling]);

  return (
    <div className="d20-container">
      <div className="d20-three-container">
        <div ref={mountRef} className="d20-mount" />
        <div className="d20-number-overlay">
          {currentNumber}
        </div>
      </div>
      
      {!isRolling && finalNumber && (
        <div className="roll-result">
          <div className="result-number">{finalNumber}</div>
          <div className="result-text">Rolled!</div>
        </div>
      )}
    </div>
  );
};

export default D20Die;