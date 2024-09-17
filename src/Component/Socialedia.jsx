import facebook from '../assets/facebook.png'
import instragram from '../assets/instagram.webp'
import twitter from '../assets/twitter-x.png'
import linkedin from '../assets/linkedin.png'
import telegram from '../assets/Telegram.webp'
import youtube from '../assets/Youtube.png'

export default function Socialmedia(){
     const Socialinfo=[
        {
            title:"instragram",
            url:instragram,
 

    },
        {
        title:"Facebook",
        url:facebook,
    
    },
    
    {
        title:"X",
        url:twitter,
      
    },
    {
        title:"Youtube",
        url:youtube,
  
    },
    {
        title:"Telegram",
        url:telegram,
        
    },
    {
        title:"Linkedin",
        url:linkedin,
       
    },
    ];

    return (
        <>
        <div className='mt-10'>
        <div>
            <p className='mx-5 text-[2.5rem] mx:text-[1.5rem] font-semibold  '>Social Media Task</p>
        </div>
            <div className='mt-2 border-4  mx-5 rounded-lg'>
                
                <div className='w-[78%] m-auto grid gap-[3.5rem]  grid-cols-3 mx:gap-3'>

                    {
                        Socialinfo.map((el)=>{

                            return <div  className='rounded-lg flex flex-col items-center py-[15px] mx:p-[15px] border-2 shadow-md mb-5 mt-5 hover:shadow-red-500/50 cursor-pointer'>
                                        <img src={el.url} className='w-[8rem]'></img>
                                        <p className='text-[1.8rem] mx:text-[0.7rem] font-semibold pt-[15px] mx:pt-[5px] '>{el.title}</p>
                                    </div>
                        })
                    }
                </div>
            </div>
        </div>

        </>
    )
}