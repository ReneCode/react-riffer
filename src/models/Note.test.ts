
import { nextNote, withoutOctave, isBlackNote } from './Note';

describe('Note', () => {
  describe('nextNote', () => {
    it('C3 -> C#3', () => {
      const next = nextNote('C3');
      expect(next).toBe('C#3');
    });

    it('E4 -> F4', () => {
      const next = nextNote('E4');
      expect(next).toBe('F4');
    });

    it('G#4 -> A4', () => {
      const next = nextNote('G#4');
      expect(next).toBe('A4');
    });

    it('B3 -> C4', () => {
      const next = nextNote('B3');
      expect(next).toBe('C4');
    });
  });

  describe('withoutOctave', () => {
    it('F3 -> F', () => {
      expect(withoutOctave('F3')).toBe('F');
    });

    it('C#2 -> C#', () => {
      expect(withoutOctave('C#2')).toBe('C#');
    });
  });

  describe('isBlackNote', () => {
    it('C#3 -> true', () => {
      expect(isBlackNote('C#3')).toBe(true);
    });

    it('F3 -> false', () => {
      expect(isBlackNote('F3')).toBe(false);
    });
  });
});
