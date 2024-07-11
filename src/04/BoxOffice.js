import { useState, useEffect } from "react";

export default function BoxOffice() {
  //json data 저장변수
  const [tdata, setTdata] = useState([]);
  const [tags, setTags] = useState([]);
  const [selMv, setSelMv] = useState('');

  //영화가 선택되었을때
  const handleSelMv = (mv) => {
    console.log(mv)
    let tm = <> 
             <span className="mr-2">{mv.movieNm}</span>
             <span className="mr-2 text-white">개봉일 : {mv.openDt}</span>
             <span className="mr-2 text-white">
              누적관객수 : {parseInt(mv.audiAcc).toLocaleString()}
             </span>
             </>
    setSelMv(tm)
  }

  //컴포넌트 생성시
  useEffect(() => {
    let url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?';
    url = url + `key=${process.env.REACT_APP_MV}`;
    url = url + `&targetDt=20240708`;

    console.log(url);

    //fetch함수를 이용하여 오픈API 데이터 불러오기
    fetch(url)
      .then(resp => resp.json())
      .then(data => setTdata(data.boxOfficeResult.dailyBoxOfficeList))
      ;
  }, []);

  //tdata가 변경될때 실행
  useEffect(() => {
    if (tdata.length == 0) return;

    console.log(tdata)
    let tm = tdata.map(item => 
    <tr className="bg-white border-b hover:bg-gray-50 font-bold hover:cursor-pointer"
        onClick={() => handleSelMv(item)}
        key={item.movieCd}>
      <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {item.rank}
      </th>
      <td className="px-6 py-2">
        {item.movieNm}
      </td>
      <td className="px-6 py-2 text-right">
        {parseInt(item.salesAmt).toLocaleString()}
      </td>
      <td className="px-6 py-2  text-right">
        {parseInt(item.audiCnt).toLocaleString()}
      </td>
      <td className="px-6 py-2">
        {parseInt(item.rankInten) > 0 ? <span className="text-red-600">▲</span>
                            : parseInt(item.rankInten) < 0 ? <span className="text-blue-600">▼</span> : '-'}
        {parseInt(item.rankInten) !=0 && Math.abs(item.rankInten)}
      </td>
    </tr>);

    setTags(tm) ;  

  }, [tdata]);

  return (
    <div className="text-black w-10/12
                    relative overflow-x-auto shadow-md sm:rounded-lg
                    ">
      <form className="flex justify-end items-center
                      mb-2
                       text-lg">
        <label htmlFor="dt" className="text-sm mr-5 font-bold">
          날짜선택
        </label>
        <input type='date' id='dt' 
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5 "/>
      </form>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-lg text-gray-50 uppercase bg-black">
          <tr>
            <th scope="col" className="px-6 py-3">
              순위
            </th>
            <th scope="col" className="px-6 py-3">
              영화명
            </th>
            <th scope="col" className="px-6 py-3">
              매출액
            </th>
            <th scope="col" className="px-6 py-3">
              관객수
            </th>
            <th scope="col" className="px-6 py-3">
              증감
            </th>
          </tr>
        </thead>
        <tbody>
          {tags}
        </tbody>
      </table>
      <div className="flex justify-center items-center
                      px-6 py-2 font-bold
                      text-lg bg-black text-yellow-300">
        {selMv == '' ? '영화정보' : selMv}
      </div>

    </div>
  )
}
