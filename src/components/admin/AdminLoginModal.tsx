import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Lock, ShieldAlert, Sparkles, X, ArrowRight } from 'lucide-react';
import { BriefStorageService } from '../../services/briefStorage';

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const AdminLoginModal: React.FC<AdminLoginModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (BriefStorageService.verifyAdminPasscode(passcode)) {
      setError(false);
      onSuccess();
    } else {
      setError(true);
    }
  };

  const handleDemoFill = () => {
    setPasscode('nova2026');
    setError(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-studio-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white max-w-md w-full border-2 border-studio-black p-8 relative shadow-2xl space-y-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-studio-black cursor-pointer transition-colors"
          aria-label="Yopish"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-warmOrange-600 font-bold">
            <Lock className="w-4 h-4" />
            <span>Studiya Kirishi</span>
          </div>
          <h3 className="font-display font-bold text-2xl text-studio-black">
            NOVA® Admin Panel
          </h3>
          <p className="text-xs text-studio-muted font-sans leading-relaxed">
            Kelib tushgan arizalar (brieflar), loyiha statuslari va studiya statistikasini boshqarish tizimi.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="block text-xs font-mono uppercase tracking-wider text-studio-charcoal font-semibold">
              Studiya Kirish Paroli
            </label>
            <input
              type="password"
              value={passcode}
              onChange={(e) => {
                setPasscode(e.target.value);
                if (error) setError(false);
              }}
              placeholder="Parolni kiriting..."
              autoFocus
              className={`w-full p-3.5 bg-slate-50 border text-sm font-mono text-studio-black transition-colors focus:outline-none ${
                error
                  ? 'border-red-500 focus:border-red-600 ring-1 ring-red-500'
                  : 'border-studio-border focus:border-cobalt-600'
              }`}
            />
            {error && (
              <p className="text-xs text-red-600 flex items-center gap-1.5 font-mono pt-1">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Noto‘g‘ri parol. Qayta urinib ko‘ring.</span>
              </p>
            )}
          </div>

          {/* Quick Demo Fill Pill for Contra recruiters/clients */}
          <div className="p-3 bg-warmOrange-50/80 border border-warmOrange-200 flex items-center justify-between gap-3 text-xs">
            <div className="text-warmOrange-900 font-sans">
              <span className="font-bold">Portfolio Ko‘rish:</span>{' '}
              <code className="font-mono bg-white px-1.5 py-0.5 border border-warmOrange-300 font-bold">nova2026</code>
            </div>
            <button
              type="button"
              onClick={handleDemoFill}
              className="text-xs font-mono font-bold text-warmOrange-700 hover:text-warmOrange-900 underline cursor-pointer"
            >
              Kiritish
            </button>
          </div>

          <Button
            type="submit"
            variant="warm"
            size="md"
            icon="arrow-right"
            className="w-full justify-center cursor-pointer"
          >
            Tizimga Kirish
          </Button>
        </form>
      </div>
    </div>
  );
};
