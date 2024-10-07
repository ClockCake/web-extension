<template>
  <div class="model-viewer" ref="rendererContainer"></div>
</template>

<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

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
      console.log('Initializing Three.js');
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0xcccccc);  // 添加背景色以便于看到模型

      this.camera = new THREE.PerspectiveCamera(
        75,
        this.$refs.rendererContainer.clientWidth / this.$refs.rendererContainer.clientHeight,
        0.1,
        1000
      );
      this.camera.position.z = 10;

      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setSize(
        this.$refs.rendererContainer.clientWidth,
        this.$refs.rendererContainer.clientHeight
      );
      this.$refs.rendererContainer.appendChild(this.renderer.domElement);

      const light = new THREE.AmbientLight(0xffffff, 0.5);
      this.scene.add(light);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
      directionalLight.position.set(0, 1, 0);
      this.scene.add(directionalLight);

      // 添加坐标轴辅助
      const axesHelper = new THREE.AxesHelper(5);
      this.scene.add(axesHelper);

      // 初始化 OrbitControls
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enableDamping = true;  // 启用阻尼（惯性），更自然的拖拽效果
      this.controls.dampingFactor = 0.25;  // 设置阻尼系数
      this.controls.screenSpacePanning = false;  // 禁用平面拖动
      this.controls.minDistance = 5;  // 设置最小缩放距离
      this.controls.maxDistance = 50;  // 设置最大缩放距离
    },
    loadModel() {
      console.log('Starting to load model');
      const loader = new GLTFLoader();
      
      loader.setPath('/assets/models/');
      loader.setResourcePath('/assets/models/');

      loader.load(
        'scene.gltf',
        (gltf) => {
          console.log('Model loaded successfully', gltf);
          this.model = gltf.scene;
          this.scene.add(this.model);

          // 自动调整相机位置以适应模型
          const box = new THREE.Box3().setFromObject(this.model);
          const center = box.getCenter(new THREE.Vector3());
          const size = box.getSize(new THREE.Vector3());

          const maxDim = Math.max(size.x, size.y, size.z);
          const fov = this.camera.fov * (Math.PI / 180);
          let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));

          cameraZ *= 1.5;  // 稍微拉远一点

          this.camera.position.z = cameraZ;
          this.camera.lookAt(center);

          // 更新控制器的目标点
          if (this.controls) {
            this.controls.target.copy(center);
            this.controls.update();
          }
        },
        (xhr) => {
          console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        (error) => {
          console.error('Error loading model', error);
        }
      );
    },
    animate() {
      requestAnimationFrame(this.animate);
      this.controls.update();  // 更新控制器
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
.model-viewer {
  width: 100%;
  height: 100vh; /* 使用视口高度单位，确保填满整个屏幕高度 */
  display: block; /* 确保div占据所有可用空间 */
}

/* 确保父元素也允许全高度显示 */
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  height: 100%;
}
</style>