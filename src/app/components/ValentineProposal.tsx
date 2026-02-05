import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';

type Stage = 'initial' | 'valentine' | 'hug' | 'kiss' | 'kissDuration' | 'completed';

export function ValentineProposal() {
    const [stage, setStage] = useState<Stage>('initial');
    const [noPos, setNoPos] = useState({ x: 0, y: 0 });
    const [noText, setNoText] = useState('No 😐');
    const [textIndex, setTextIndex] = useState(0);
    const [kissDuration, setKissDuration] = useState(10); // in minutes

    const containerRef = useRef<HTMLDivElement>(null);
    const yesRef = useRef<HTMLButtonElement>(null);

    const valentineNoTexts = [
        'Nooo 😢 Please…',
        'Hehe, I want you to click YES 🥺💕',
        'Pilu, please don’t be sad 😽💌',
        'No… not yet, I want you 😳💖',
        'Eeep! Please, try again 😝💘',
        'Nyaa~ I really want you to say YES 🐾💞',
        'Hehe, I’m being shy… click YES 🥰',
        'Nooo… I like you too much 😻💖',
        'Please don’t chase me 😽💌',
        'Ahh! Not this one, I want you 😳💕',
        'Pilu… I really want you to click YES 😝💘',
        'Ehehe, almost! I want your YES 😽💞',
        'Nooo… my heart wants you 🥺💖',
        'Pleaseeee 😢… you know you want YES too 💌',
        'Hehe, don’t click me… click YES 😻💘',
        'Nooo~ I’m begging you 🥰💕',
        'I want you, not me 😝💖',
        'Ahh! Not this button, please 😳💌'
    ];


    // Get random position for NO button that **does not cover YES button**
    const getRandomPosition = () => {
        if (!containerRef.current || !yesRef.current) return { x: 0, y: 0 };

        const rect = containerRef.current.getBoundingClientRect();
        const yesRect = yesRef.current.getBoundingClientRect();

        const buttonWidth = 160;
        const buttonHeight = 60;
        const padding = 20;

        const maxX = rect.width / 2 - buttonWidth - padding;
        const maxY = rect.height / 2 - buttonHeight - padding;

        // YES button center relative to container center
        const yesX = yesRect.left + yesRect.width / 2 - rect.left - rect.width / 2;
        const yesY = yesRect.top + yesRect.height / 2 - rect.top - rect.height / 2;

        // Extreme positions (corners, edges, sides, top/bottom)
        const extremePositions: { x: number; y: number }[] = [
            { x: -maxX, y: -maxY }, { x: 0, y: -maxY }, { x: maxX, y: -maxY },
            { x: -maxX, y: 0 },                     { x: maxX, y: 0 },
            { x: -maxX, y: maxY },  { x: 0, y: maxY },  { x: maxX, y: maxY },
            { x: -maxX / 2, y: -maxY }, { x: maxX / 2, y: -maxY },
            { x: -maxX / 2, y: maxY },  { x: maxX / 2, y: maxY },
            { x: -maxX, y: -maxY / 2 }, { x: maxX, y: -maxY / 2 },
            { x: -maxX, y: maxY / 2 },  { x: maxX, y: maxY / 2 },
            { x: -maxX / 3, y: -maxY }, { x: maxX / 3, y: -maxY },
            { x: -maxX / 3, y: maxY },  { x: maxX / 3, y: maxY },
            { x: -maxX, y: -maxY / 3 }, { x: maxX, y: -maxY / 3 },
            { x: -maxX, y: maxY / 3 },  { x: maxX, y: maxY / 3 },
            { x: -maxX / 2, y: 0 },     { x: maxX / 2, y: 0 },
            { x: 0, y: -maxY / 2 },     { x: 0, y: maxY / 2 },
            { x: -maxX / 3, y: 0 },     { x: maxX / 3, y: 0 },
        ];

        // Filter out any position too close to YES button
        const safePositions = extremePositions.filter(pos => {
            const minDistance = 140;
            return Math.abs(pos.x - yesX) >= minDistance || Math.abs(pos.y - yesY) >= minDistance;
        });

        // Pick a random safe position
        const chosenPos = safePositions[Math.floor(Math.random() * safePositions.length)];

        return chosenPos || { x: 0, y: 0 };
    };



    const handleNoHover = () => {
        const newPos = getRandomPosition();
        setNoPos(newPos);

        const texts =  valentineNoTexts;
        const next = (textIndex + 1) % texts.length;
        setTextIndex(next);
        setNoText(texts[next]);
    };

    const handleYesClick = () => {
        if (stage === 'initial') setStage('valentine');
        else if (stage === 'valentine') setStage('hug');
        else if (stage === 'hug') setStage('kiss');
        else if (stage === 'kiss') setStage('kissDuration');
        else if (stage === 'kissDuration') setKissDuration(kissDuration + 10);

        // Reset NO button to side-by-side for next question
        setNoPos({ x: 0, y: 0 });
        setNoText('No 😐');
        setTextIndex(0);
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-200 via-pink-100 to-rose-200 px-6 overflow-hidden">
            <div className="max-w-full w-full text-center">
                <AnimatePresence mode="wait">
                    {stage === 'initial' && (
                        <motion.div
                            key="initial"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="space-y-8"
                        >
                            <div className="text-9xl">💝</div>
                            <h2 className="text-5xl text-red-600">
                                This Valentine’s Day, Aaryu…
                            </h2>
                            <p className="text-2xl text-gray-700">
                                I have something special to ask you 💕
                            </p>

                            <motion.button
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleYesClick}
                                className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-14 py-6 rounded-full text-3xl shadow-xl"
                            >
                                Click to Open My Heart 💖
                            </motion.button>
                        </motion.div>
                    )}

                    {['valentine','hug','kiss','kissDuration'].includes(stage) && (
                        <motion.div
                            key={stage}
                            initial={{ opacity: 0, scale: 0.6 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ type: 'spring', bounce: 0.3 }}
                            className="space-y-8"
                        >
                            <div className="text-9xl">
                                {stage === 'valentine' ? '💖' : stage === 'hug' ? '🤗' : '😘'}
                            </div>

                            <h2 className="text-5xl md:text-6xl text-red-600">
                                {stage === 'valentine' && 'Will you be my Valentine this year, Aaryu? 💖'}
                                {stage === 'hug' && 'Will you hug me, Pilu? 🤗'}
                                {stage === 'kiss' && 'Will you kiss me, Pilu? 😘'}
                                {stage === 'kissDuration' && `How long will you kiss me? 💋 (${kissDuration} min)` }
                            </h2>

                            <p className="text-2xl text-gray-700">
                                You mean the world to me 💕
                            </p>

                            {/* Buttons container */}
                            <div
                                ref={containerRef}
                                className="relative flex justify-center items-center min-h-[360px] w-full gap-6"
                            >
                                {/* YES Button */}
                                <motion.button
                                    ref={yesRef}
                                    whileHover={{ scale: 1.08 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleYesClick}
                                    className="bg-gradient-to-r from-red-500 via-pink-500 to-rose-500 text-white px-16 py-6 rounded-full text-3xl shadow-2xl z-10"
                                >
                                    YES 💕
                                </motion.button>

                                {/* NO Button */}
                                <motion.div
                                    onMouseEnter={handleNoHover}
                                    animate={{
                                        x: noPos.x,
                                        y: noPos.y,
                                    }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 500,
                                        damping: 20,
                                    }}
                                    className={`bg-gradient-to-r from-red-500 via-pink-500 to-rose-500 text-white px-16 py-6 rounded-full text-3xl shadow-2xl cursor-pointer select-none
                    ${noPos.x !== 0 || noPos.y !== 0 ? 'absolute z-10' : ''}`}
                                >
                                    {noText}
                                </motion.div>
                            </div>

                            <div className="flex justify-center gap-2 text-gray-600 italic">
                                <Sparkles className="w-5 h-5 text-red-500" />
                                Aaryu forever 💕
                                <Sparkles className="w-5 h-5 text-red-500" />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
