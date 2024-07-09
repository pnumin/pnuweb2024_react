import MyDiv3 from "./MyDiv3";
// function MyDiv2(probs) {
function MyDiv2({d1, d2, d3}) {
  return (
    <div className="flex flex-col justify-start items-center
                    w-4/5 h-4/5 bg-lime-700 
                    p-5
                    text-xl text-lime-50">
      <p className="w-full h-8 text-left p-2 mb-4">
        {/* {probs.d1} > {probs.d2} */}
        {d1} > {d2}
      </p>
      {/* <MyDiv3 dd1={probs.d1} dd2={probs.d2} dd3={probs.d3} /> */}
      <MyDiv3 dd1={d1} dd2={d2} dd3={d3} />
    </div>
  );
}

export default MyDiv2 ;