import Home from './components/page/Home';
import About from './components/page/About';
import Contact from './components/page/Contact';
import FilmDetail from './components/page/FilmDetail';
import Films from './components/page/Films';
import SearchFilm from './components/page/SearchFilm';

const routes = [
    {title:"Home", path:"/", element:Home, isNav:true, isFooter:false},
    {title:"About", path:"about", element:About, isNav:true, isFooter:true},
    {title:"Contact", path:"contact", element:Contact, isNav:true, isFooter:true},
    {title:"Films", path:"films", element:Films, isNav:true, isFooter:true},
    {title:"FilmDetail", path:"films/:filmId", element:FilmDetail, isNav:false, isFooter:false},
    {title:"Search Film", path:"search-film", element:SearchFilm, isNav:false, isFooter:false}
]

export default routes;