export const Footer = () => {
    return (
        <div className="flex justify-center justify-items-center bg-sky-50 w-screen sticky flex-row mt-4 ">
            <button>
                <a target="blank" href='https://github.com/marco5x'>    
                   <img src={'https://raw.githubusercontent.com/seasonfif/github/master/icon/icon_192.png'} alt="GitHub" width='40px' />
                </a>
            </button>
            <button>
                <a target="blank" href='https://www.linkedin.com/in/marcos-cruz-dev/' >                
                    <img src={'https://freepngimg.com/thumb/social_media/74290-icons-media-wallpaper-linkedin-desktop-computer-social.png'} alt="Linkedin" width='70px' />
                </a>
            </button>
        </div>
    )
}