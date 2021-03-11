
import './App.css';
import Header from './components/Header'
import Layout from './components/Layout'
import Footer from './components/Footer'
import comp from './assets/bg1.jpg'
import comp1 from './assets/bg3.jpg'

function App() {
  return (
    <div>
    <Header/>
    <Layout title ='привет'
    descr="как дела" urlBg={comp} colorBg />
    <Layout title ='привет'
    descr="как дела" colorBg ="red" />
    <Layout title ='привет'
    descr="как дела" urlBg={comp1} colorBg />
    <Footer/>
    </div>
  );
}

export default App;
