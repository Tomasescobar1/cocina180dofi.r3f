import './App.css'
import { useEffect, useState, useRef } from 'react'
import { Canvas, useFrame, useLoader} from '@react-three/fiber'
import { FirstPersonControls, OrbitControls } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DirectionalLight, DirectionalLightHelper } from 'three'
import { useHelper } from '@react-three/drei'


function Model(prop) 
{
  const { rotate } = prop;

  var checkComp = 0

  const loadedGLB = useLoader(GLTFLoader, '/vantageGT3.glb')

  const modelRef = useRef()

  loadedGLB.scene.traverse(function(node) {
    if(node.isMesh)
    {
      node.castShadow = true
    }
  })

  useFrame(() => {
    modelRef.current.rotation.y += checkComp
  })

  if(rotate === true)
  {
    checkComp = 0.003
  }

  return (
    <>
      <primitive object={loadedGLB.scene} ref={modelRef} position={[0,0,0]} />
    </>
  )
}

function Model2(prop) 
{
  const { rotate } = prop;

  var checkComp = 0

  const loadedGLB = useLoader(GLTFLoader, '/porsche911GT3.glb')

  const modelRef = useRef()

  loadedGLB.scene.traverse(function(node) {
    if(node.isMesh)
    {
      node.castShadow = true
    }
  })

  useFrame(() => {
    modelRef.current.rotation.y += checkComp
  })

  if(rotate === true)
  {
    checkComp = 0.003
  }

  return (
    <>
      <primitive object={loadedGLB.scene} ref={modelRef} position={[0,0,0]}/>
    </>
  )
}

function Model3(prop) 
{
  const { rotate } = prop;

  var checkComp = 0

  const loadedGLB = useLoader(GLTFLoader, '/f22_raptor.glb')

  const modelRef = useRef()

  loadedGLB.scene.traverse(function(node) {
    if(node.isMesh)
    {
      node.castShadow = true
    }
  })

  useFrame(() => {
    modelRef.current.rotation.y += checkComp
  })

  if(rotate === true)
  {
    checkComp = 0.003
  }

  return (
    <>
      <primitive object={loadedGLB.scene} ref={modelRef} position={[0,1.5,0.7]} rotation={[0, Math.PI/12, 0]} />
    </>
  )
}

function FloorPlane()
{
  return (
      <mesh receiveShadow rotation={[-Math.PI/2,0,0]} >
        <planeGeometry args={[200, 200]} />
        <meshStandardMaterial color={'white'} />
      </mesh>
  ) 
}

function LightWithHelper()
{
  return (
    <directionalLight position={[5.5,5.5,5.5]} intensity={1.5}  castShadow/>
  )
}

function LightWithHelper2()
{

  const ref = useRef()
  useHelper(ref, DirectionalLightHelper)

  return (
    <directionalLight position={[-5.5,5.5,5.5]} intensity={1.6}  castShadow />
  )
}

function LightWithHelper3()
{

  const ref = useRef()
  useHelper(ref, DirectionalLightHelper)

  return (
    <directionalLight position={[5.5,5.5,-5.5]} intensity={1} />
  )
}

function Three()
{

  const [rotation, setRotation] = useState(false)

  return (
    <>
        <div className="CanvasAndButton" >

          <p className="explainatoryText"> Aquí estarían los modelos del minifix, las bisagras
              y los rieles
          </p>

          <section className="CanvasSection">
            <div className="CanvasContainer">
              <Canvas shadows className='R3FCanvas' camera={{position: [0, 2, -3.5]}}>
                <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI/2.2}/>
                {/*<Box />*/}
                <Model rotate={rotation} />
                <ambientLight color={'white'} intensity={1.2}/>
                <LightWithHelper />
                <FloorPlane />
              </Canvas>
            </div>
          </section>

          <section className="CanvasSection">
            <div className="CanvasContainer">
              <Canvas shadows className='R3FCanvas' camera={{position: [3.5, 2, 0]}}>
                <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI/2.2}/>
                {/*<Box />*/}
                <Model2 rotate={rotation} />
                <ambientLight color={'white'} intensity={1.2}/>
                <LightWithHelper3 />
                <LightWithHelper2 />
                <FloorPlane />
              </Canvas>
            </div>
          </section>  

          <section className="CanvasSection">
            <div className="CanvasContainer">
              <Canvas shadows className='R3FCanvas' camera={{position: [-14.5, 5.5, 0]}}>
                <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI/2.2}/>
                {/*<Box />*/}
                <Model3 rotate={rotation} />
                <ambientLight color={'white'} intensity={1.2}/>
                <LightWithHelper3 />
                <LightWithHelper2 />
                <FloorPlane />
              </Canvas>
            </div>
          </section>
          <button className='button1' onClick={() => setRotation(!rotation)} > Click Here! </button>

        </div>

        
    </>
  )
}

export {Three}