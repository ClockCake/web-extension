<template>
  <div ref="rendererContainer"></div>
</template>

<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default {
  name: 'ModelViewer',
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      model: null,
    };
  },
  mounted() {
    this.initThree();
    this.loadModel();
    this.animate();
    window.addEventListener('resize', this.onWindowResize, false);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onWindowResize, false);
  },
  methods: {
    initThree() {
      // 创建场景
      this.scene = new THREE.Scene();

      // 设置相机
      this.camera = new THREE.PerspectiveCamera(
        75,
        this.$refs.rendererContainer.clientWidth / this.$refs.rendererContainer.clientHeight,
        0.1,
        1000
      );
      this.camera.position.z = 5;

      // 设置渲染器
      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setSize(
        this.$refs.rendererContainer.clientWidth,
        this.$refs.rendererContainer.clientHeight
      );
      this.$refs.rendererContainer.appendChild(this.renderer.domElement);

      // 添加光源
      const light = new THREE.AmbientLight(0xffffff);
      this.scene.add(light);
    },
    loadModel() {
      const loader = new GLTFLoader();
      
      // 更新这两行
      loader.setPath('/assets/models/');
      loader.setResourcePath('/assets/models/');

      loader.load(
        'scene.gltf',  // 直接使用文件名，因为已经设置了基础路径
        (gltf) => {
          this.model = gltf.scene;
          this.scene.add(this.model);
        },
        undefined,
        (error) => {
          console.error('模型加载出错', error);
        }
      );
    },
    animate() {
      requestAnimationFrame(this.animate);
      if (this.model) {
        this.model.rotation.y += 0.01;
      }
      this.renderer.render(this.scene, this.camera);
    },
    onWindowResize() {
      this.camera.aspect =
        this.$refs.rendererContainer.clientWidth /
        this.$refs.rendererContainer.clientHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(
        this.$refs.rendererContainer.clientWidth,
        this.$refs.rendererContainer.clientHeight
      );
    },
  },
};
</script>

<style scoped>
div {
  width: 100%;
  height: 100%;
}
</style>