import { random_color } from '../src/javaScript/wheel';

describe('', () => {
    it('', () => {
      const firstRandomColor = random_color();
      const secondRandomColor = random_color();
      const hexRegex = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
  
      expect(firstRandomColor).toMatch(hexRegex);
      expect(secondRandomColor).toMatch(hexRegex);
      expect(firstRandomColor).not.toBe(secondRandomColor);
    })
  })