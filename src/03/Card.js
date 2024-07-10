export default function Card({ imgSrc, title, content }) {
 
  return (
    <div className="flex justify-center items-top
                    w-full h-50 border border-slate-300
                    p-3">
      <div className="w-1/3 h-50 flex 
                      justify-center items-start">
        <img src={imgSrc} />
      </div>
      <div className="w-2/3 h-50 flex flex-col
                      ml-5
                      justify-between items-start">
        <p className="text-2xl font-bold text-blue-900">
          {title}
        </p>
        <p className="text-sm text-slate-600">
            {content}
        </p>
        <p className="w-full text-sm text-slate-900 text-right">
          ❤️ 좋아요 0
        </p>
      </div>
    </div>
  )
}
