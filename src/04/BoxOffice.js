import { useState, useEffect } from "react";

export default function BoxOffice() {
  //json data 저장변수
  const [tdata, setTdata] = useState([]);
  const [tags, setTags] = useState([]);

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
    <tr className="bg-white border-b hover:bg-gray-50 font-bold"
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


    </div>
  )
}
