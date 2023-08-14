const Footer = () => {
  return (
    <div className='footer'>
        <span>        
            Developed by : 
                <a 
                    href='https://github.com/surajDahal007' 
                    target='_blank'
                > Suraj Dahal</a>
        </span>

        <span>
            Source Code: 
                <a 
                    href='https://github.com/surajDahal007/onlineStore'
                    target='_blank'
                    >
                <img src='/github.png' width={50} height={25} alt='github link' />
            </a>
        </span>
    </div>
  )
}

export default Footer
