export default function CategoryButtons() {
  const categories = ['Smart', 'Safe', 'Secure', 'Comfort']
  
  return (
    <div className="flex gap-4 md:gap-6 flex-wrap">
      {categories.map((category) => (
        <button
          key={category}
          className="px-4 md:px-6 py-2 md:py-3 rounded-full text-white text-sm md:text-base font-medium transition-all duration-200 hover:bg-gray-700 hover:scale-105"
          style={{ backgroundColor: '#636363' }}
        >
          {category}
        </button>
      ))}
    </div>
  )
}