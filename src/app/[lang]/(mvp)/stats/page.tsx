import { Locale } from '@/i18n.config';
import { auth } from '@/lib/auth';
import { NeedToLoggedIn } from '@shared';
import { Achievements, GameProgress, StatsSection } from './_components';

type Props = {
    params: {
        lang: Locale;
    };
};

const Page = async ({ params }: Props) => {
    const session = await auth();
    const { lang } = params;

    if (!session) return <NeedToLoggedIn />;

    return (
        <div>
            <div className='flex flex-col gap-0'>
                <StatsSection type='resources' lang={lang} color='primary' />
                <StatsSection type='gamesStats' lang={lang} color='secondary' />
            </div>
            <GameProgress />
            <Achievements lang={lang} />
        </div>
    );
};

export default Page;
