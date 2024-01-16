import HowToContribute from '@/components/shared/howToContribute' ;
import { Locale as LocalType } from '@/i18n.config';
import { getDictionaryClient } from '@utils';

type Props = {
    params : {
        lang: LocalType;
    }
}

const Page = ({ params }: Props) => {

    const { lang } = params;

    const dict = getDictionaryClient(lang);

    const { howToContribute } = dict.shared;

    return (
            <HowToContribute 
                howToContribute = {howToContribute} 
            />

    );
};

export default Page;
