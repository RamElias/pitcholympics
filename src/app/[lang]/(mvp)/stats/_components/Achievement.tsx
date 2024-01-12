'use client';

import { achievements, users } from '@mocks';
import { AchievementCard } from './AchievementCard';

export const Achievements = () => {
    const user = users[0]; // TODO: get user from context
    const userAchievements = user.achievements;

    return (
        <>
            <h1 className='mt-2 p-2 text-center text-xl font-inter font-bold text-light-background-onDefault dark:text-dark-background-onDefault'>
                Achievements
            </h1>
            {Object.keys(userAchievements).map(achievementId => {
                const achievement = achievements.find(
                    achievement => achievement.id === achievementId,
                );
                if (!achievement) {
                    // prevent crash if achievement is not found
                    return null;
                }

                return (
                    <AchievementCard
                        key={achievementId}
                        user={user}
                        achievement={achievement}
                    />
                );
            })}
        </>
    );
};
