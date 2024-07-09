// function MyDiv3(probs) {
function MyDiv3({dd1, dd2, dd3}) {
  return (
    <div className="flex flex-col justify-start items-center
                    w-4/5 h-4/5 bg-lime-500 
                    p-5
                    text-xl text-lime-50">
      <p className="w-full h-8 text-left p-2 mb-4">
      {/* {probs.dd1} > {probs.dd2} > {probs.dd3} */}
      {dd1} > {dd2} > {dd3}
      </p>
    </div>
  );
}

export default MyDiv3 ;