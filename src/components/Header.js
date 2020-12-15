import React from 'react'
import Iframe from 'react-iframe'
import logo from '../images/logofinal.png'

function Header() {
    return (
        <div class="w-full container mx-auto">
        <div class="w-full flex items-center justify-between">
          <a class="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
             <img 
                src={logo}
                width="100px"
                height="100px"
             />
           
             Pre-<span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 m-0.5">Registration Form</span>
          </a>
          <div class="flex w-1/2 justify-end content-center">
            <Iframe 
              src="https://free.timeanddate.com/countdown/i7l81l5x/n1238/cf100/cm0/cu4/ct0/cs0/ca0/cr0/ss0/cacfff/cpcfff/pct/tc66c/fs100/szw320/szh135/tac000/tpc000/matYear%20End%20Event%20Countdown/macfff/mptMerry%20Christmas!!!/mpcfff/iso2020-12-19T20:00:00" 
              allowTransparency="true" 
              frameborder="0" 
              width="320" 
              height="135"
              className="unclickable"
            />
          </div>
        </div>
      </div>
    );
  }
  
  export default Header;