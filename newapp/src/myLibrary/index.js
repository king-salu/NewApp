import '../home/index.css';
import Header from '../header';
import Libraries from './libraries';
import Footer from '../footer';

export default function MyLibrary(){

    return(
        <div id="site-content">
            <Header/>
            <Libraries/>
            <Footer/>
        </div>
    );
}