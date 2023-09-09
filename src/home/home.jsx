
import styles from './home.module.css'

 function Home() {
   return (
     <div className={styles.home}>
      <div className="feature-cards">
        <div className="feature-card">Box1</div>
        <div className="feature-card">Box2</div>
        <div className="feature-card">Box3</div>
      </div>
    </div>
   )
 }

 export default Home