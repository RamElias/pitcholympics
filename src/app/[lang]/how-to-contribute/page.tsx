import {PageFiller} from '@/components/shared/pageFiller';
import { Locale } from '@/i18n.config';
import HowToContribute from '@/components/shared/howToContribute' ;

const Page = async () => {
    return (
        <div className='flex flex-col w-full items-center'>
            <PageFiller />
            <div className='flex flex-col gap-16'>
               <HowToContribute {lang:Locale} =/>
            </div>
        </div>
    );
};

export default Page;
