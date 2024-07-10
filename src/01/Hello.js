import './Hello.css';
import MyCom from './MyCom';

function Hello() {
  const name = 'PNU' ;
  return (
    // fragment tag
    <> 
      <div className="text-lime-900">
        {name}님 안녕하세요!!
      </div>
      <MyCom />
    </>
  );
}

export default Hello;