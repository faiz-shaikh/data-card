import './index.css'
import Data from './data/data.json'
import Chart from './components/chart'

function getPercentageChange(oldNumber, newNumber) {
  let decreaseValue = newNumber - oldNumber
  return ((decreaseValue / oldNumber) * 100).toFixed(2)
}

function App() {
  return (
    <div className="bg-gray-200">
      <div className="container  mx-auto ">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 p-4">
          Company Performance
        </h1>
        <div className="flex flex-wrap ">
          {Data.map((card, index) => {
            return (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4 flex items-stretch "
              >
                <div className="c-card  flex flex-col bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                  <div className="relative pb-2 overflow-hidden">
                    <Chart info={card.chart.map(element => element.y)} />
                  </div>
                  <div className="p-4 grow">
                    {getPercentageChange(
                      card.chart[0].y,
                      card.chart[card.chart.length - 1].y,
                    ) > 0 ? (
                      <span className="inline-block px-2 py-1 leading-none bg-green-800 text-white rounded-full font-semibold uppercase tracking-wide text-xs float-right">
                        {getPercentageChange(
                          card.chart[0].y,
                          card.chart[card.chart.length - 1].y,
                        )}
                        %
                      </span>
                    ) : (
                      <span className="inline-block px-2 py-1 leading-none bg-red-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs float-right">
                        {getPercentageChange(
                          card.chart[0].y,
                          card.chart[card.chart.length - 1].y,
                        )}
                        %
                      </span>
                    )}
                    <h2 className="mt-2 mb-2 text-2xl font-bold">
                      {card.title}
                    </h2>
                    <p className="text-md font-semibold">{card.subTitle}</p>
                    <p className="text-sm">{card.description}</p>
                  </div>
                  <div className="p-4 border-t border-b text-sm text-gray-700 flex justify-between">
                    <a
                      href={card.url}
                      className="flex items-center mb-1 font-bold text-blue-700"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {' '}
                      {card.url}
                    </a>
                    <span className="flex items-center">{card.date}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
