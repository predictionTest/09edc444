/**
 * Trading Background Component
 * Solid red background covering full viewport, fixed behind all content
 */
const TradingBackground = () => {
  return (
    <div className="fixed inset-0 bg-[#FF0000] pointer-events-none z-0" />
  );
};

export default TradingBackground;
