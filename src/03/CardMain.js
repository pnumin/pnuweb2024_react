import Card from "./Card";
import CData from "./CardData.json" ;

export default function CardMain() {
  console.log(CData);
  const tags = CData.map(item => <Card imgSrc={item.imgUrl} 
                                    title={item.title} 
                                    content={item.content} />
  ) ;
  
  return (
    <div className="w-10/12 grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* <Card imgSrc={imgSrc} 
            title={title} 
            content={content} />  */}

      {tags}
    </div>
  )
}
