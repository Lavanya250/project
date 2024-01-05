
import{BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import './nav.css'
import First from './home';
import Start from './login';
import End from './register';
import Content from './content';
import About from './about';
function Navbar(){
    return(
        <BrowserRouter>
            <nav>
                <ul>
                
                    <li className='active'>
                        <Link to='/' className='Link'>Home</Link>
                    </li>
                    <li className='actives'>
                        <Link to='/login' className='Link'>Login</Link>
                    </li>
                    <li className='activess'>
                        <Link to='/register' className='Link'>Sign up</Link>
                    </li>
                    <li className='activess'>
                        <Link to='/content' className='Link'>BookCorner</Link>
                    </li>
                    <li className='act'>
                        <Link to='/about' className='Link'>About us</Link>
                    </li>
                    
            

                </ul>
            </nav>
            <Routes>
                <Route exact path='/' element={<First/>}/>
                <Route exact path='/login' element={<Start/>}/>
                <Route exact path='/register' element={<End/>}/>
                <Route exact path='/content' element={<Content/>}/>
                <Route exact path='/about' element={<About/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Navbar;