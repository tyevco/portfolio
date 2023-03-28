 import resumeReducer, {
     ResumeState,
     loadAsync,
   } from './resumeSlice';
  

 describe('resume reducer', () => {
    const initialState: ResumeState = {
      status: 'idle',
    };
    it('should handle initial state', () => {
      expect(resumeReducer(undefined, { type: 'unknown' })).toEqual({
        status: 'idle',
      });
    });
  });
  