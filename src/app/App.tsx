import { Toaster } from 'sonner';
import { FloatingHearts } from '@/app/components/FloatingHearts';
import { ValentineHero } from '@/app/components/ValentineHero';
import { ValentineWeekTimeline } from '@/app/components/ValentineWeekTimeline';
import { CuteGallery } from '@/app/components/CuteGallery';
import { ValentineProposal } from '@/app/components/ValentineProposal';
import { LoveCounter } from '@/app/components/LoveCounter';
import { BouncingEmojis } from '@/app/components/BouncingEmojis';
import { ClickableHearts } from '@/app/components/ClickableHearts';
import { CuteMascot } from '@/app/components/CuteMascot';
import { LoveLetterPopup } from '@/app/components/LoveLetterPopup';

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Toaster position="top-center" />
      <FloatingHearts />
      <ClickableHearts />
      <LoveCounter />
      <BouncingEmojis />
      {/*<CuteMascot />*/}
      <LoveLetterPopup />
      
      <ValentineHero />
      
      <ValentineWeekTimeline />
      
      <CuteGallery />
      
      <ValentineProposal />
      
      {/* Footer */}
      <footer className="bg-gradient-to-r from-red-100 via-pink-100 to-rose-100 py-12 text-center relative z-10">
        <div className="space-y-4">
          <p className="text-2xl text-red-600">
            💕 Happy Valentine's Week, Aaryu 💕
          </p>
          <p className="text-gray-600 text-lg">
            Distance means so little when someone means so much
          </p>
          <p className="text-gray-500">
            With all my love, forever and always, Pilu 💖
          </p>
          <p className="text-gray-400 text-sm mt-4">
            February 7-14, 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
