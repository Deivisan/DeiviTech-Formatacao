// Este componente pode ser usado para renderizar cards de produto individuais

export default function ProductCard({ product, onBuy }) {
  return (
    <div className="glass-card overflow-hidden">
      <div className="bg-gradient-to-r from-deivi-primary to-deivi-secondary p-6 text-white">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-2xl font-bold">{product.model}</h3>
            <p className="text-gray-200">{product.capacity} GB</p>
          </div>
          <span className="text-4xl">💾</span>
        </div>
      </div>
      
      <div className="p-6">
        {/* Status SMART */}
        <div className="mb-6">
          <h4 className="font-bold text-deivi-primary mb-3 flex items-center gap-2">
            <span>🏥</span> Status SMART
          </h4>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">✅</span>
              <span className="font-bold text-green-700">APROVADO</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>Saúde: <span className="font-bold">{product.health}%</span></div>
              <div>Temp: <span className="font-bold">{product.temp}°C</span></div>
            </div>
          </div>
        </div>

        {/* Performance */}
        <div className="mb-6">
          <h4 className="font-bold text-deivi-primary mb-3 flex items-center gap-2">
            <span>⚡</span> Performance
          </h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-deivi-accent">{product.speed}</div>
              <div className="text-sm text-gray-500">MB/s Leitura</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-deivi-accent">~70</div>
              <div className="text-sm text-gray-500">MB/s Escrita</div>
            </div>
          </div>
        </div>

        {/* Detalhes Técnicos */}
        <div className="mb-6">
          <h4 className="font-bold text-deivi-primary mb-3 flex items-center gap-2">
            <span>🔬</span> Detalhes Técnicos
          </h4>
          <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Modelo:</span>
              <span className="font-mono">{product.model}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Serial:</span>
              <span className="font-mono">{product.serial}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Capacidade:</span>
              <span>{product.capacity} GB</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Horas de Uso:</span>
              <span>{product.hours}h</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Setores Ruins:</span>
              <span className="text-green-600 font-bold">{product.sectors}</span>
            </div>
          </div>
        </div>

        {/* Preço e Compra */}
        <div className="flex items-center justify-between pt-4 border-t">
          <div>
            <span className="text-3xl font-bold text-deivi-primary">R$ {product.price}</span>
            <span className="text-gray-400 line-through ml-2">R$ {Math.floor(product.price * 2)}</span>
          </div>
          <button 
            onClick={() => onBuy(product)}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center gap-2"
          >
            <span>🛒</span>
            Comprar
          </button>
        </div>
      </div>
    </div>
  )
}
