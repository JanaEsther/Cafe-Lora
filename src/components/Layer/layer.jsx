import './layer.css';

export const Layer = ({ label, color }) => {
  return (
    <div className="layer">
      <div className="layer__color" style={{ backgroundColor: color }} />
      <div className="layer__label">{label}</div>
    </div>
  );
};
