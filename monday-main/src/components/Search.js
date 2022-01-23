import React from 'react'

 const search = () => {
 /*const [text, setText] = useState =('')*/
 const handleSubmit = (e) => {
  e.preventDefualt()
 }
 

  return <div>
      
   <form onSubmit={handleSubmit}>
     <input type='text' placeholder='You can search engin here'
      className='py-1 px-2 rounded-l-lg border-success bg-light' onChange={(e) => (e.target.value)}/>
     <button type='submit' className='bg-green-400 py-1 px-1 rounded-r-lg text-white'>Search</button>
   


   </form>

   



  </div>;
}

export default search;
