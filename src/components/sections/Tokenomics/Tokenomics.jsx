import React from 'react';
import Container from '../Container/Container';
import { Progress } from "@/components/ui/progress"
import tokenomImg from '@/assets/tokenomics/Group 1000003526.png'


const Tokenomics = () => {
  return (
    <div className='pb-20'>
      <Container>
        <div className='mb-[141px]'>
          {/* token title  */}
          <p className='text-[#FFF] text-[58px] font-bold leading-[75.4px] text-center mb-[22px]'>Tokenomics</p>
          <p className='text-[#FFF] text-[18px] leading-[28.4px] text-center mb-20'>Berlin Meme Coin’s tokenomics is a well-balanced structure that ensures sustainability <br /> and growth. Our total token supply is currently divided into various segments</p>
        </div>

        {/* tokenomics contain  */}
        <div className='flex'>
          {/* card 1 */}
          <div className='xl:w-1/2'>
            <div className='mb-[32px] flex justify-between space-x-14'>
              <div>
                <p className='text-[24px] font-semibold leading-[33.6px]'><span className='bg-clip-text text-transparent bg-gradient-to-l from-[#f2f817] to-[#1bc5df]'>Seed Round:</span></p>
                <p className='text-[#F4F4F4] text-[14px] leading-[22.4px]'>50,000,000 tokens, providing a strong foundation for our project’s early development.</p>
              </div>
              <Progress value={60} className="z-40" clsName="bg-[#F1F715]" />
            </div>
          </div>

          {/* token image */}
          <div className='xl:w-1/2'>
            <img className=' 2xl:bottom-[-90px] xl:right-[-90px]' src={tokenomImg} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Tokenomics;