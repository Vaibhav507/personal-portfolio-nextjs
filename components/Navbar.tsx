import { menuLinks, socialLinks } from '@/constants';
import { useRef, useEffect, useState } from 'react';
import { RiGithubLine, RiLinkedinLine, RiMailLine } from '@remixicon/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Navbar = () => {
  const pathName = usePathname();
  const [menuState, setMenuState] = useState('closed');
  
  
  const menuOpenTimeline = useRef<gsap.core.Timeline | null>(null); 

  useGSAP(() => {
    menuOpenTimeline.current = gsap.timeline({ paused: true })

      menuOpenTimeline.current.to('.menu', {
        transform: 'translateY(0%)',
        duration: 1,
      })

      menuOpenTimeline.current.to('.pages p', {
          opacity: 1,
          y: 0,
          display: 'block',
          ease: 'circ',
        },1)

      menuOpenTimeline.current.to('.icons', {
          opacity: 1,
          y: 0,
          visibility: 'visible',
          ease: 'circ',
        },1);

  }); 

  useGSAP(()=>{
      const setupIconAnimation = (iconSelector: string, animationTarget: string): void => {
      const icon = document.querySelector<HTMLElement>(iconSelector);
      const tl = gsap.timeline({ paused: true });
    
      tl.from(animationTarget, {
        opacity: 0,
        x: 20,
      }, 0);
    
      icon?.addEventListener("mouseenter", () => tl.play());
      icon?.addEventListener("mouseleave", () => tl.reverse());
    };
    
    setupIconAnimation(".githubIcon", ".github");
    setupIconAnimation(".linkedinIcon", ".linkedin");
    setupIconAnimation(".mailIcon", ".mail");
    
  })
 
  function toggleMenu() {
    if (menuState === 'closed') {
      setMenuState('open');
      menuOpenTimeline.current?.play(); 
    } else {
      setMenuState('closed');
      menuOpenTimeline.current?.reverse();
    }
  }

  const socialIcons = [<RiGithubLine />, <RiLinkedinLine />, <RiMailLine />];

  return (
    <>
      <nav className='flex justify-between items-center fixed z-50 w-full px-8 py-8 lg:px-16'>
        <Link href='/'>
          <div className="bg-white rounded-full w-5 h-5"></div>
        </Link>
        <p onClick={toggleMenu}>menu-icon</p>
      </nav>

      <div className="menu z-20 overflow-y-hidden fixed top-0 min-h-screen w-full bg-black flex justify-end gap-20 items-start flex-col sm:justify-between sm:items-end sm:flex-row sm:pb-32 pb-12 px-8 lg:px-16 transform translate-y-full">
        <div className="flex flex-col gap-10 pages">
          {menuLinks.map((link) => {
            const isActive = pathName === link.route || pathName.startsWith(`${link.route}/`);

            return (
              <Link href={link.route} key={link.label} className={isActive ? 'text-[#fff]' : 'text-[#282828]'}>
                <p className="text-4xl leading-tight lg:text-5xl xl:text-7xl md:text-5xl lg:leading-tight md:leading-tight cursor:pointer opacity-0 translate-y-12 hidden" onClick={toggleMenu}>
                  {link.label}
                </p>
              </Link>
            );
          })}
        </div>

        <div className="socials flex sm:flex-col gap-10">
          {socialLinks.map((link) => {
            return (
              <div key={link.i} className="flex justify-end items-center gap-4 social-1">
                <p className={`social-name bg-white text-black rounded-full social-1 px-5 py-2 hidden sm:block ${link.className}`}>{link.name}</p>
                <a href={link.href} target="_blank">
                  <div className={`icons flex justify-center items-center w-[50px] h-[50px] bg-[#222] rounded-full opacity-0 translate-y-12 hover:bg-white hover:text-[#111] hover:scale-110 ${link.classIcon} p-3`}>
                    {socialIcons[link.i]}
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
