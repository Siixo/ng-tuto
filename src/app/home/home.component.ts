import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router'; // ← Import manquant !
import * as THREE from 'three';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink], // ← Import manquant !
  template: `
    <div class="relative h-screen overflow-hidden">
      <!-- Canvas Three.js -->
      <canvas #threeCanvas class="absolute inset-0 w-full h-full"></canvas>

      <!-- Overlay TRÈS subtil (réduis l'opacité) -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/20"></div>

      <!-- Contenu par dessus -->
      <div class="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <!-- Badge -->
        <div
          class="inline-flex items-center bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-8 backdrop-blur-sm"
        >
          <span class="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
          <span class="text-green-400 font-medium text-sm uppercase tracking-wider"
            >Framework Moderne</span
          >
        </div>

        <!-- Titre principal -->
        <h1
          class="text-6xl md:text-7xl xl:text-8xl font-black text-white hover:text-green-400 transition-all duration-700 leading-none mb-6 drop-shadow-2xl"
        >
          ANGULAR
        </h1>

        <!-- Ligne décorative -->
        <div
          class="h-1 w-24 md:w-32 bg-gradient-to-r from-green-400 via-emerald-500 to-purple-600 rounded-full mb-8"
        ></div>

        <!-- Sous-titre -->
        <p
          class="text-xl md:text-2xl text-slate-200 font-light tracking-wide mb-4 max-w-2xl leading-relaxed drop-shadow-lg"
        >
          L'exo 2 (méteo API) ne marche pas
        </p>

        <!-- Description -->
        <p class="text-slate-300 mb-12 max-w-lg text-center leading-relaxed drop-shadow-md">
          PS: Tu te doûtes bien que l'accueil à été fait avec l'IA
        </p>

        <!-- Boutons d'action -->
        <div class="flex flex-col sm:flex-row gap-4 mb-8">
          <button
            routerLink="/exercice1"
            class="group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl font-semibold hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-green-500/50 backdrop-blur-sm"
          >
            <i
              class="fas fa-play mr-2 group-hover:translate-x-1 transition-transform duration-300"
            ></i>
            Exercices
          </button>
        </div>
      </div>
    </div>
  `,
})
export class HomeComponent implements OnInit {
  @ViewChild('threeCanvas', { static: true }) canvasRef!: ElementRef;

  ngOnInit() {
    this.createScene();
  }

  createScene() {
    const canvas = this.canvasRef.nativeElement;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true, // ← Améliore la qualité
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // ← Fond transparent

    // Particules améliorées
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const colors = [];

    for (let i = 0; i < 8000; i++) {
      // ← Plus de particules
      // Position plus proche
      vertices.push((Math.random() - 0.5) * 2000);
      vertices.push((Math.random() - 0.5) * 2000);
      vertices.push((Math.random() - 0.5) * 1500); // ← Plus proche

      // Couleurs variées
      const color = new THREE.Color();
      if (Math.random() > 0.8) {
        color.setHex(0x8b5cf6); // Violet
      } else {
        color.setHex(0x00ff88); // Vert
      }
      colors.push(color.r, color.g, color.b);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 3, // ← Plus grosses particules
      transparent: true,
      opacity: 0.9,
      vertexColors: true, // ← Utilise les couleurs des vertices
      blending: THREE.AdditiveBlending, // ← Effet glow
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Caméra plus proche
    camera.position.z = 800;

    const animate = () => {
      requestAnimationFrame(animate);

      // Rotation plus lente et visible
      particles.rotation.x += 0.001;
      particles.rotation.y += 0.002;

      renderer.render(scene, camera);
    };

    animate();

    // Responsive
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }
}
