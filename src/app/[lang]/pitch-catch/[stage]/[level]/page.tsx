"use client"

import { useState, useEffect } from 'react';
import NoteStep from '@/components/shared/noteStep';
import { MemoTheMeloGame } from '@/types';
import memoTheMeloMockData from '@/mockData/memoTheMelo';


type Props = {
    params: {
        stage: number;
        level: number;
    }
}
const getLevelData = (stage: number, level: number, levelsData: MemoTheMeloGame) => {
    console.log(stage, level, levelsData)
    return levelsData[stage - 1][level - 1]
}

const Page = ({ params }: Props) => {
    const [currentNote, setCurrentNote] = useState(2)
    const { stage, level } = params;
    const currentLevel = getLevelData(Number(stage), Number(level), memoTheMeloMockData)
    const { melody, notesAmount } = currentLevel
    return (
        <>
            <div className='flex flex-row gap-2'>
                {melody.map((_, index) => {
                    const notePosition = currentNote - (index + 1)
                    if (notePosition < 0) return <NoteStep state="NotPlayed" key={index} />
                    if (notePosition === 0) return <NoteStep state="Current" key={index} />
                    if (notePosition > 0) return <NoteStep state="Played" key={index} />
                })}

            </div>
        </>

    )

};

export default Page;