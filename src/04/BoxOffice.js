 

export default function BoxOffice() {
  let url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?' ;
  url = url + `key=${process.env.REACT_APP_MV}` ;
  url = url + `&targetDt=20240709` ;
  
  console.log(url) ;
  return (
    <div className="text-black">
      BoxOffice
    </div>
  )
}
