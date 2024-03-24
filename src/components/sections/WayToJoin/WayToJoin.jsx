import shapImg from '@/assets/waytojoin/Group 47354.png';
import qrCode from '@/assets/waytojoin/Frame 40075.png';
import Container from '../Container/Container';
import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';
import { useState } from 'react';

const WayToJoin = () => {
  const [copied, setCopied] = useState(false);

  // Copy the contact ID =============
  const copyLink = () => {
    if (!copied) {
      navigator.clipboard.writeText('KEBAB.sol').then(() => {
        toast.success('Address copied');
        setCopied(true);

        setTimeout(() => {
          setCopied(false);
        }, 1000);
      });
    }
  };

  return (
    <div className='py-16'>
      <Container>
        <div>
          <h1 className='text-white text-[58px] text-center font-normal'>Another Way to <span className='bg-clip-text text-transparent bg-gradient-to-l from-[#F4F914] to-[#19C5E2] font-semibold'>Join</span> the Presale</h1>

          <p className='text-[#a7a9ac] text-[18px] text-center font-normal w-[60%] xl:w-[56%] 2xl:max-w-[45%] mx-auto mt-10 mb-24'>Having trouble with the DApp or want a simpler method? Participate in the KEBAB presale by sending your chosen SOL amount directly to the address:</p>

          <div className='md:flex justify-between items-center'>
            <div className='md:w-1/2'>
              <div className='bg-[#08151e] border border-[#418077] rounded-[15px] p-9'>
                <div className='flex items-center'>
                  <img src={qrCode} alt="Image" />

                  <div className='ml-9'>
                    <p className='text-white text-[25px] font-bold'>Address</p>
                    <p className='text-[#32C84B] text-[18px] font-normal mt-3 mb-5'>KEBAB.sol</p>

                    <Button onClick={copyLink} className="border border-[#F3F813] bg-gradient-to-l from-[#5e6c1e] to-[#135a65] text-[16px] font-normal rounded-[5px] h-12">Copy Address</Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Shape */}
            <div>
              <img src={shapImg} alt="Image" className='' />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WayToJoin;