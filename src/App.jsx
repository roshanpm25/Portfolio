import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Footer } from "./components/Footer/Footer";
import { Skills } from "./components/Skills/Skills";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import {Form} from "./components/Form/Form"
function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      {/* <Form /> */}
      <Footer/>
    </div>
  );
}

export default App;
