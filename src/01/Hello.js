import './Hello.css';
import MyCom from './MyCom';

function Hello() {
  const name = 'PNU' ;
  return (
    // fragment tag
    <> 
      <div className="hellodiv">
        {name}님 안녕하세요!!
      </div>
      <MyCom />
    </>
  );
}

export default Hello;