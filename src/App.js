import { CameraIcon, VideoCameraIcon } from '@heroicons/react/24/outline'

// Bir "BoxButton" bileşeni oluşturun ve farklı içerik iletmek için children prop'unu kullanın
function BoxButton({ children }) {
  return (
    <button className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
      {children}
    </button>
  )
}

export default function App() {
  const options = [
    {
      id: 0,
      text: 'Yeni bir resim ekleyin',
      icon: <CameraIcon />,
    },
    {
      id: 1,
      text: 'Yeni bir video oluşturun',
      icon: <VideoCameraIcon />,
    },
  ]

  return (
    <div className="space-y-4 p-8 max-w-sm mx-auto">
      {options.map((option) => {
        return (
          <BoxButton key={option.id}>
            <div className="mx-auto h-12 w-12 text-gray-400">{option.icon}</div>
            <span className="mt-2 block text-sm font-semibold text-gray-900">
              {option.text}
            </span>
          </BoxButton>
        )
      })}

      {/* <button
        type="button"
        className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <CameraIcon className="mx-auto h-12 w-12 text-gray-400" />
        <span className="mt-2 block text-sm font-semibold text-gray-900">
          Yeni bir resim ekleyin
        </span>
      </button>
      <button
        type="button"
        className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <VideoCameraIcon className="mx-auto h-12 w-12 text-gray-400" />
        <span className="mt-2 block text-sm font-semibold text-gray-900">
          Yeni bir video oluşturun
        </span>
      </button> */}
    </div>
  )
}
