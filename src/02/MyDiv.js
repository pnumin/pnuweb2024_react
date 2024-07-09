import MyDiv2 from "./MyDiv2";
function MyDiv() {
  const n1 = 'MyDiv1' ;
  const n2 = 'MyDiv2' ;
  const n3 = 'MyDiv3' ;

  return (
    <div className="flex flex-col justify-start items-center
                    w-2/3 h-2/3 bg-lime-900 
                    p-2 
                    text-xl text-lime-50">
      <p className="w-full h-8 text-left p-2 mb-4">
        {n1}
      </p>
      <MyDiv2 d1={n1} d2={n2} d3={n3} />
    </div>
  )
}
export default MyDiv ;