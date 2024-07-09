export default function Card({ imgSrc, title, content }) {
  return (
    <div className="flex justify-center items-top
                    w-full h-50 border border-slate-300
                    p-3">
      <div className="w-1/3 h-50 flex 
                      justify-center items-start">
        <img src={imgSrc} />
      </div>
      <div className="w-2/3 h-full flex flex-col
                      justify-between items-start">
        <p className="text-2xl font-bold text-blue-900">
          {title}
          <p className="text-sm text-slate-600">
            {content}
          </p>
        </p>
        <p className="text-sm text-slate-900">
          ❤️ 좋아요 0
        </p>
      </div>
    </div>
  )
}
