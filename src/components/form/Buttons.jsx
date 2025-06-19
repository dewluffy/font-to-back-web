import { Loader } from 'lucide-react'

function Buttons({isSubmitting, label}) {
  return (
  <button 
    disabled={isSubmitting}
    className='bg-amber-300 p-2 rounded-md'>
    {isSubmitting ? 
    <div 
      className='flex gap-2'>
    <Loader 
      className="animate-spin"
    />
    <p>Loading</p>
    </div> : label}
  </button>
  )
}
export default Buttons