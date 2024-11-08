import party from 'party-js';

function Confetti(isConfettiOn : React.MutableRefObject<boolean>) {
    const shootConfetti = (event: MouseEvent) => {
        if (!isConfettiOn.current) {
          isConfettiOn.current = true;
  
          party.confetti(event, {
            count: party.variation.range(0, 5),
            spread: 100,
          });
  
          requestAnimationFrame(() => {
            isConfettiOn.current = false;
          });
        }
      };
  
      document.addEventListener('mousemove', shootConfetti);
      return () => {
        document.removeEventListener('mousemove', shootConfetti);
      };

}
export default Confetti;