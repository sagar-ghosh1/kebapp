import React from 'react';
import Container from '../Container/Container';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const Faq = () => {
  return (
    <div>
      <Container>
        <h1 className='text-white text-[58px] text-center font-semibold capitalize'>Frequently Asked <span className='bg-clip-text text-transparent bg-gradient-to-l from-[#F4F914] to-[#19C5E2] font-semibold'>Questions</span></h1>

        <div className='text-white mt-20'>
          <Accordion type="single" defaultValue="item-1" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is KEBAB Heaven?</AccordionTrigger>
              <AccordionContent className="xl:w-[76%]">
                KEBAB Heaven is a decentralized finance (DeFi) platform built on the Binance Smart Chain (BSC). It offers a variety of DeFi services, including yield farming, liquidity provision, and token swaps, all centered around our native token, KEBAB.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>How do I participate in KEBAB Heaven?</AccordionTrigger>
              <AccordionContent className="xl:w-[72%]">
                To participate in KEBAB Heaven, you'll need to connect your BSC-compatible wallet, such as MetaMask or Trust Wallet, to our platform. From there, you can engage in various DeFi activities like farming, staking, and swapping tokens.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>What is KEBAB Token?</AccordionTrigger>
              <AccordionContent className="xl:w-[60%]">
                KEBAB Token is our platform's native cryptocurrency. It serves multiple purposes within the KEBAB Heaven ecosystem, including governance, yield farming rewards, and liquidity incentives.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>How can I acquire KEBAB Tokens?</AccordionTrigger>
              <AccordionContent className="xl:w-[69%]">
                You can acquire KEBAB Tokens by swapping other cryptocurrencies for KEBAB on decentralized exchanges (DEXs) like PancakeSwap. Make sure to have Binance Coin (BNB) or another supported token to trade for KEBAB.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>What are the benefits of holding KEBAB Tokens?</AccordionTrigger>
              <AccordionContent className="xl:w-[64%]">
                Holding KEBAB Tokens provides several benefits, including voting rights in governance decisions, earning rewards through yield farming, and participating in community events and initiatives.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Container>
    </div>
  );
};

export default Faq;
