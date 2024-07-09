import Card from "./Card";
export default function CardMain() {
  const imgSrc = './img/js.png' ;
  const title = 'HTML' ;
  const content = 'HTML(HyperText Markup Language)은 웹을 이루는 가장 기초적인 구성 요소로, 웹 콘텐츠의 의미와 구조를 정의할 때 사용' ;
  return (
    <div className="w-full">
      <Card imgSrc={imgSrc} 
            title={title} 
            content={content} />
    </div>
  )
}
